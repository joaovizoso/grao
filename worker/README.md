# grao upload Worker: setup guide

This guide gets the booth's captures from the iPad into a private, EU-only Cloudflare R2 bucket. You don't need to be a developer. Everything happens in the Cloudflare dashboard in your browser. There's nothing to install.

**How it works.** Every capture (video, photo strip, boomerang) is first saved inside the booth app on the iPad, with no download prompt. When there's internet, the booth sends one capture at a time to a small Cloudflare program, the "Worker". The Worker checks the upload and stores it in the bucket. The iPad deletes its own copy **only after** the Worker confirms the file arrived complete: same size and same SHA-256 fingerprint. If anything fails, the capture simply stays on the iPad and is retried later.

Set aside about 30 minutes. Do it at least a few days before the event, then run the test at the end.

---

## Before you start: GDPR (don't skip)

Uploading guest videos to the cloud is a new kind of personal-data processing. Before the **first event with upload switched on**, you need:

- the lawyer check on controller/processor role, lawful basis, minors and retention (see `features/backend-infrastructure.md`, "GDPR minimum viable answer");
- the printed privacy card at the booth (the booth's instruction screens already say *"Mais informação no cartão ao lado"*);
- the clause in the couple's contract;
- Cloudflare's Data Processing Addendum accepted on your account;
- the bucket created in the **EU jurisdiction** with the **90-day deletion rule** (steps 1 and 2 below).

If any of these is missing on the day, **leave upload off** (`uploadEnabled: false`). The booth still works: captures stay on the iPad and you export them from the operator panel at the end of the night.

---

## Step 1: Create the bucket (EU jurisdiction)

> **Warning: the jurisdiction can't be changed after the bucket is created.** If you create it without choosing "EU", you have to delete it and start again. Do this step slowly.

1. Log in at <https://dash.cloudflare.com>.
2. In the left menu, open **R2 object storage**. If it's your first time, Cloudflare asks you to enable R2 and add a payment method. The free tier covers this use, but a card is required.
3. Click **Create bucket**.
4. **Bucket name:** `grao-booth` (lowercase, no spaces).
5. **Location:** choose **Specify jurisdiction**, then pick **European Union (EU)**.
   - Don't pick "Automatic" or a "location hint" such as "Western Europe". Those are only performance hints, not a legal guarantee. Only **jurisdiction = EU** guarantees the data stays in the EU.
6. Leave the storage class as **Standard**. Click **Create bucket**.
7. On the bucket's page, confirm it shows the jurisdiction as **EU**. If it doesn't, delete the bucket now and repeat this step.

## Step 2: Add the 90-day deletion rule

This rule makes Cloudflare delete every capture 90 days after upload. Tell the couple to download everything within 60 days.

1. Open the `grao-booth` bucket, then **Settings**.
2. Under **Object lifecycle rules**, click **Add rule**.
3. Name it `delete-after-90-days`. Apply it to **all objects** (no prefix).
4. Set the rule to delete (expire) objects **90 days** after upload. The exact wording of the field may differ slightly.
5. **Save**. You'll also see a default rule that cleans up incomplete uploads after 7 days. Leave that one in place.

Cloudflare usually removes expired files within a day of the 90-day mark.

## Step 3: Create the Worker

1. In the left menu, open **Workers & Pages**, then **Create**, then **Create Worker** (use the "Hello World" starter).
2. Name it `grao-upload` and click **Deploy**. This deploys the placeholder; you replace it next.
3. Click **Edit code**. Delete everything in the editor.
4. Open `worker/upload.js` from this repository, copy **all** of it, and paste it into the editor.
5. Click **Deploy**.
6. Note the Worker's address, shown at the top of its page. It looks like `https://grao-upload.<your-account>.workers.dev`. This is your **upload endpoint**.

## Step 4: Connect the bucket to the Worker (binding)

1. On the `grao-upload` Worker page, open **Settings**, then **Bindings**, then **Add**, then **R2 bucket**.
2. **Variable name:** `BOOTH_BUCKET`. It must be exactly that, in capitals.
3. **R2 bucket:** select `grao-booth`. It should be marked as an EU-jurisdiction bucket.
   - **If `grao-booth` doesn't appear in the list:** stop. Don't create a non-EU bucket as a workaround. Ask your developer to bind it with `jurisdiction = "eu"`. That's a one-line Wrangler config, a one-off.
4. Save and deploy.

## Step 5: Set the variables and the secret

On the Worker page, open **Settings**, then **Variables and Secrets**, then **Add**. Add these four:

| Name | Type | Value (example) | What it is |
|---|---|---|---|
| `ALLOWED_ORIGIN` | Text | `https://joaovizoso.github.io` | The web address the booth is opened from: **only** `https://` plus the domain, no path, no trailing `/`. If you ever host it elsewhere, add it after a comma. |
| `ALLOWED_EVENTS` | Text | `joao-constanca-20261114=2026-11-14` | Which events may upload, and on what date. Format: `eventCode=YYYY-MM-DD`. For several events, separate them with commas. |
| `WINDOW_DAYS` | Text | `2` | How many days before and after the event date uploads are accepted. 2 means "event day ±2". If you need longer to drain a queue at home, raise it temporarily. |
| `UPLOAD_TOKEN` | **Secret** (click "Encrypt") | a long random string | The upload password. Generate a new one for every event (see below). |

To generate a token, open any browser's developer console and run `crypto.randomUUID() + crypto.randomUUID()`, or use a password manager. Aim for 40+ random characters.

Click **Deploy** after adding them.

> The token ends up inside the booth's HTML file, which is public on GitHub Pages. That's acceptable **only** because the Worker can do nothing but accept uploads for one allow-listed event, within a few days, at up to 100 MB each, as video or JPEG. It can't list, read or delete anything. The worst case is junk uploads, not anyone seeing guests' videos. **Rotate the token after every event**: change the secret, and remove the old event from `ALLOWED_EVENTS`.

## Step 6: Point the booth at the Worker

In `index.html` (or the event's copy of it), find the `const EVENT = { … }` block near the top of the first `<script>` and fill it in:

```js
const EVENT = {
  code: 'joao-constanca-20261114',          // must match ALLOWED_EVENTS exactly
  uploadEnabled: true,                      // only once the GDPR items above are done
  uploadEndpoint: 'https://grao-upload.<your-account>.workers.dev',
  uploadToken: '<the same token as the UPLOAD_TOKEN secret>',
  operatorPin: '<your own 4 digits>',       // never leave it at 0000
};
```

`code` rules: lowercase letters, numbers and hyphens only. Strip accents (ã becomes a, ç becomes c). Use the couple's names followed by the date, `YYYYMMDD`.

Commit and publish (GitHub Pages). On the iPad, open the booth **from the home-screen icon** and confirm it loaded the new version.

## Step 7: Test before the event (required)

1. On the iPad, from the home-screen icon, take **one** photo strip.
2. On the welcome screen, long-press the **J&C monogram for 3 seconds** and enter the PIN. The operator panel opens.
3. Within a minute, **Por enviar** should drop to **0** and **Último erro** should say *nenhum*.
4. In the Cloudflare dashboard, open the `grao-booth` bucket. You should see a folder named after your event code, containing a file like `20261114-183012-photo-<id>.jpg`. Open it and check it's the strip.
5. If **Último erro** shows something, the most common causes are:
   - `HTTP 401 bad token`: the token in `EVENT` and the secret don't match.
   - `HTTP 403 origin not allowed`: `ALLOWED_ORIGIN` doesn't exactly match the address the booth is opened from.
   - `HTTP 403 event not allowed`: `EVENT.code` isn't in `ALLOWED_EVENTS`, or there's a typo.
   - `HTTP 403 event upload window closed`: today is outside the event date ±`WINDOW_DAYS`. Testing a week early? Temporarily add a test event with today's date.
   - `HTTP 500 … BOOTH_BUCKET binding missing`: step 4 wasn't saved.
   - `rede: …` / `tempo esgotado`: no internet, or very slow internet. It retries by itself.

Delete the test object from the bucket afterwards if you like.

## Operator rules on the day (short version)

- Open the booth **only from the home-screen icon**. A Safari tab on the same address has a **separate, empty** queue.
- Before guests arrive, check the panel: **Armazenamento persistente = sim**, free space above 10 GB, hotspot on, one test capture reaches 0 pending. Also: Guided Access on, auto-lock Never, charger connected.
- The small number in the top-right corner of the welcome screen is the pending count. A warning triangle with **Atenção** means something needs you: open the panel.
- **End of night: pending must be 0 before you pack.** If it isn't, **don't** delete the app, clear Safari data or reset the iPad. Take it home, open the app from the icon on home Wi-Fi, and let it drain to 0. Raise `WINDOW_DAYS` if needed.
- Escape hatch if the cloud is down: the panel's **Exportar pendentes** button sends up to 5 files at a time to the share sheet (Files / AirDrop / Print). Exporting **doesn't** delete anything.
- **Apagar último pendente** deletes only the most recent capture that hasn't been uploaded yet (for a guest who asks). There is deliberately no "delete all".

## Deletion requests (GDPR)

Captures are stored as `eventCode/YYYYMMDD-HHMMSS-mode-id.ext`, using **the iPad's local time** when the capture was taken. Find the file by event and approximate time in the bucket and delete it in the dashboard.
