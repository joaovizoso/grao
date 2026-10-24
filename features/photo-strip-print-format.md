# Formato da tira de fotos + escolha de impressora

**Status:** 🟢 Formato decidido; ajuste de código pendente (developer)
**Plan tier:** Premium (tira de fotos) + add-on impressão no local (+100€)
**Proposed/decided date:** 2026-08-19

## Decisão (founder, 2026-08-19)
A tira da grao adota o **standard photobooth: tira vertical de 2×6 polegadas
(≈5×15cm) com 3 fotos empilhadas na vertical**, produzida como **duas tiras
idênticas numa folha 4×6" (10×15cm), cortada a meio** — o layout de "tira dupla
com linha de corte" que o código já usa.

## Porque é que isto também decide a impressora
A folha-alvo é **4×6" (10×15cm)**, que é exatamente o formato máximo da **Canon
Selphy CP1500** (já especificada no CLAUDE.md). Logo:
- ✅ **Selphy CP1500 é a impressora certa** — barata (~€150–250), disponível em
  PT, formato 4×6 é o standard photobooth.
- ❌ Não é preciso DNP DS-RX1HS (~€960) nem HiTi P525L. Foram avaliadas quando se
  pensava (erradamente) que a tira precisava de formato maior — ver Contexto.
- **Economia:** KP-108IN ≈ €25–40 / 108 folhas → ~€0,30/folha; **cada folha = 2
  tiras** → **~€0,15/tira**. Margem saudável no add-on de +100€.
  Manter "impressão como add-on avulso" ou "incluídas até um teto" — nunca
  ilimitado (consumível físico tem custo real).

## Ajuste de código pendente (developer, index.html, downloadStrip)
O código atual renderiza **1200×2400px** (rácio 1:2 → cada tira ficaria 2×8",
não-standard e não cabe em 4×6). Correto para o standard 2×6:

| | Atual | Standard 2×6 |
|---|---|---|
| Folha (canvas) | 1200×2400 | **1200×1800** (4×6" @ 300 DPI) |
| Tira após corte | 600×2400 (2×8") | **600×1800 (2×6")** |

Mudança mínima: `CANVAS_H` 2400 → 1800, e reajustar o layout das 3 fotos +
monograma para caber nos 6" de altura (as fotos 3:4 atuais podem precisar de
recalibrar o tamanho/gap para não estourar os 1800px).

## Passo grátis antes de fechar
Fazer um **print test real** numa Selphy / loja de fotografia com a tira já
corrigida (1200×1800), para confirmar corte, margens e qualidade antes de tratar
a impressão como fechada (fecha também o Known Issue #1 do CLAUDE.md, que continua
"não confirmado em impressão real").

## Decision log
- **2026-08-19** — Formato decidido pelo founder: tira standard 2×6" (3 fotos),
  folha 4×6". Confirma a Selphy CP1500 como impressora certa; descarta DNP/HiTi
  (avaliadas sob a premissa errada de que a tira 1:2 não cabia). Código a ajustar
  de 2400→1800px de altura. Print test real ainda por fazer.
- **2026-10-24** — **Founder revised the format** (supersedes the two-up sheet): (1) **fit the Canon Selphy CP1500's own print format** — postcard, 100×148 mm, 300 dpi (≈1181×1748 px) with borderless-crop safety margins; verify against Canon's spec page, don't assume; (2) **no more divided/two-up strip** — one composition per sheet, no cut line (also ends hand-cutting; the trade-off is paper: one strip per sheet instead of two); (3) a **stepper on the strip screen for the number of copies, 1–3 max** (also caps paper cost, ~€0.30/sheet); (4) the **Imprimir button must send the job via AirPrint** but stays **disabled for now** (`EVENT.printEnabled = false`), with the plumbing prepared: print stylesheet `@page { size: 100mm 148mm; margin: 0 }`, N copies rendered as N pages, a print-only container, `window.print()` (iOS Safari shows the AirPrint sheet; a web page cannot skip it or pick the printer). Confirm on Canon's page that the CP1500 supports AirPrint before relying on it. (5) The strip screen gets a distinct **Guardar** button (saves the image to the outbox — what the old "Imprimir" actually did) next to the disabled **Imprimir**. Open UX point: a visibly disabled Imprimir on events without the print add-on invites "why can't I print?" — founder said disabled; revisit if it confuses guests.
- **2026-10-24 (built)** — Implemented and Chromium-tested (10/10): sheet 1181×1748 px; Canon spec pages give 300 dpi and postcard borderless 100.0×148.0 mm; a Canon support thread reports borderless prints trim ~4 mm per side, so 6 mm is kept clear. Canon's Japan page says AirPrint for Mac only and the English page does not mention it (retailers list it), so **iPadOS AirPrint is unverified**. Three layouts behind `PRINT_LAYOUT`: `grid` (default; 2×2 with the monogram as the fourth tile, ~50% photo area), `strip` (the look you liked, ~21% photo area, very wide margins), `hero` (one large + two small, ~43%, large photo upscaled ~1.2×). A 3-stacked full-width layout would need a wider capture crop and was not built. Guardar saves the sheet via `saveCapture`; Imprimir is disabled with a one-line reason and the stepper hidden while `printEnabled` is false. `page.pdf()` verified 1/2/3 pages of 100×148 mm. **Founder to pick the layout; real Selphy print test owed.**
- **2026-10-24 (founder decisions on the built version)** — Layout: **`grid`** (the default, already set). Keep the "Impressão não disponível neste evento" line under the disabled Imprimir. Keep the night headline on the Welcome screen (see midnight-questions.md).
- **2026-10-24 (can the AirPrint sheet be skipped?)** — **No, not from a web page.** `window.print()` in iPadOS Safari always opens the system print sheet; there is no web API to pick the printer, set paper or copies silently, or auto-confirm. Whether iPadOS remembers the last printer between prints is unverified. Paths that would skip it, if ever needed: (a) a **native iPad app** (`UIPrintInteractionController` can print to a saved printer without the sheet) — contradicts the single-HTML-file architecture; (b) a **small print bridge on the venue network** (a Raspberry Pi or laptop running CUPS; the Selphy is AirPrint/IPP so it should print driverless) that the booth reaches either by a direct call (blocked: an HTTPS page cannot call a plain `http://` device on the LAN) or, better, through the existing cloud path — the iPad uploads a print job to the Worker and the bridge **polls outbound** and prints. That revives CLAUDE.md's old CUPS plan and means carrying one more device. **Not recommended now:** print-on-site is a +100€ add-on, no second booking is confirmed, and the operator is always at the booth, so the sheet costs the operator two taps per print (not guests). Revisit if print-on-site sells repeatedly.

