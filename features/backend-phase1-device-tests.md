# Guia de testes no iPad — Fila local e envio (Phase 1)

**Para quem:** o fundador, sem conhecimentos técnicos.
**Dispositivo:** o iPad Air M3 13" que vai ser usado no evento.
**Porquê:** o código foi testado em Chromium (29 testes automáticos, todos passam), mas **nunca no Safari nem no iPad**. É onde as coisas costumam falhar, e é onde uma falha significa perder a mensagem de um convidado. Os testes marcados **CRÍTICO** são os que não podem falhar.

## Como usar este guia

- Faz os testes **por ordem**. Anota o resultado de cada um na tabela do fim.
- Se um teste falhar, **para e diz-me** o que viste (o texto do alerta, o que o painel mostrava). Não tentes contornar.
- Não precisas de saber o que está por baixo. Só tens de fazer o que está escrito e dizer se o resultado foi o esperado.

## O que precisas antes de começar

1. A app a funcionar **a partir de um endereço web** (o teu GitHub Pages), não como ficheiro no iPad.
2. O iPad **carregado** e ligado ao WiFi.
3. Num computador, a pasta **Transferências** do Mac ou a app Ficheiros do iPad, para ver se aparecem descargas indesejadas.
4. Para a Fase B (mais abaixo): o Worker do Cloudflare montado (`worker/README.md`) e o envio ligado.

## Como abrir o painel do operador

1. No **ecrã inicial**, carrega **3 segundos sem largar** no monograma (o círculo "J&C").
2. Escreve o PIN (por defeito **0000**, muda-o antes do evento).
3. Vês: capturas pendentes, tamanho, estado do envio, se o armazenamento está "garantido", espaço livre e o último erro.
4. Botões: **Tentar enviar agora**, **exportar**, **Apagar último pendente**, **Fechar**. Não há "apagar tudo", de propósito.

---

# FASE A — não precisa de cloud (podes fazer já)

## T0 — A app abre como app, sem a barra do Safari
**Porquê:** a regra do projeto é só abrir a app pelo ícone do ecrã principal, para o armazenamento ser protegido.
1. No Safari do iPad, abre o endereço da app.
2. Toque em **Partilhar** → **Adicionar ao ecrã principal**.
3. Abre a app pelo ícone novo.

✅ **Esperado:** abre em ecrã inteiro, sem barra de endereço.
⚠️ **Se abrir com a barra do Safari:** já sabemos que pode acontecer. A app ainda não tem a configuração para correr como app (manifest). Diz-me e é a próxima tarefa.

## T1 — Nenhuma janela de "guardar" (CRÍTICO)
1. Abre pelo **ícone**.
2. Faz **10 vídeos curtos**, **10 tiras de fotos** e **10 boomerangs**.
3. Em cada captura, vê se aparece alguma janela do Safari a pedir para guardar ou abrir.

✅ **Esperado:** **nenhuma**. Passas de cada captura direto para o "Obrigado".
❌ **Se aparecer alguma janela:** anota em que modo foi.

## T2 — Armazenamento "garantido"
1. Abre o painel do operador.
2. Lê a linha do armazenamento.

✅ **Esperado:** "concedido". ⚠️ Se disser "não concedido", anota-o e diz-me: o Safari pode apagar a fila ao fim de 7 dias sem uso, e preciso de saber se isto acontece contigo.

## T3a — A fila sobrevive a tudo (CRÍTICO)
**É o teste mais importante.**
1. Põe o iPad em **modo avião** (assim nada pode ser enviado, mesmo com o envio ligado).
2. Faz **30 capturas variadas**, incluindo **pelo menos 5 vídeos de 60 segundos completos**.
3. No painel, confirma que mostra **30 pendentes**.
4. **Fecha a app à força** (desliza para cima e tira-a das apps abertas).
5. **Reinicia o iPad.**
6. Abre a app pelo ícone. Abre o painel.

✅ **Esperado:** continuam **30 pendentes**, com o mesmo tamanho total.
❌ **Se faltar alguma:** é a falha mais grave possível. Diz-me já. Há um interruptor no código (`STORE_AS_ARRAYBUFFER`) para tentar outra forma de guardar.

## T6 — Se a gravação local falhar, o convidado não perde nada
**Porquê:** o caso de emergência tem de funcionar.
1. No Safari (num **separador normal**, não no ícone), abre o endereço da app com `?outboxFail=1` no fim.
2. Faz uma captura.

✅ **Esperado:** aparece um alerta a dizer que não foi possível guardar, e o ficheiro é descarregado à antiga. O convidado vê o "Obrigado". O painel regista a falha.
*(Este separador usa um armazenamento à parte. Não afeta a fila do ícone.)*

## T7 — Exportar muitas capturas
1. Com **20 ou mais** pendentes (pelo menos ~500MB), carrega em **exportar** no painel.
2. Envia para **Ficheiros** ou por **AirDrop**.

✅ **Esperado:** sai em grupos de 5, nada é apagado, os ficheiros abrem no Mac.
📝 **Anota:** se houve problemas com grupos grandes.

## T9 — Separador do Safari ≠ app do ícone
1. Abre a **mesma** app num **separador normal do Safari** (não pelo ícone).
2. Abre o painel.

✅ **Esperado:** mostra **0 pendentes**, mesmo que o ícone tenha capturas. É normal: têm armazenamentos separados.
📝 **Regra para o operador:** abrir **sempre** pelo ícone.

## T10 — Câmara e microfone depois de reabrir
1. Fecha a app e abre-a pelo ícone de novo, três vezes.
2. Em cada uma, faz um vídeo.

✅ **Esperado:** a câmara e o microfone funcionam sem pedir permissão cada vez.

## T12 — Abrir a app sem rede
**Porquê:** o plano de recuperação é "leva o iPad para casa e abre a app com WiFi". Isso exige que a app abra.
1. Põe o iPad em **modo avião**.
2. Abre a app pelo ícone.

✅ **Esperado:** abre normalmente.
⚠️ **Se não abrir (ecrã de erro):** já sabemos que pode acontecer: falta uma "cópia offline" da app (service worker). É a próxima tarefa, e **tem de estar feita antes do primeiro evento**.

## Teste do boomerang (Known Issue #2)
1. Faz um boomerang e guarda-o.
2. Exporta-o (T7) e abre-o **no Mac**.

✅ **Esperado:** o ficheiro **abre e reproduz** no Mac. É o teste pendente desde o início.

---

# FASE B — precisa do Worker montado e do envio ligado

Só depois de seguires o `worker/README.md` e de preencheres a secção `EVENT` do código (código do evento com a data, endereço, token, o teu PIN, `uploadEnabled: true`).

## T3b — Esvaziar a fila (CRÍTICO)
1. Com as 30 capturas da T3a pendentes, **tira o modo avião** (e liga a rede).
2. Observa o painel.

✅ **Esperado:** os pendentes descem até **0**. Na consola do Cloudflare (bucket), vês **30 ficheiros** com o mesmo tamanho total. Descarrega 3 ou 4 e confirma que **abrem e reproduzem no Mac**.

## T4 — A rede cai a meio de um envio
1. Faz uma captura e, enquanto o painel diz que está a enviar, **desliga o WiFi**.
2. Volta a ligar.

✅ **Esperado:** acaba por enviar sozinha. **Um** ficheiro no bucket (sem duplicados) e nunca fica a faltar.

## T5 — Gravar um vídeo enquanto há um envio em curso
1. Cria uma fila grande e começa a esvaziá-la.
2. Grava um vídeo de 60 segundos.

✅ **Esperado:** a gravação corre sem falhas, e nenhum envio começa durante ela.

## T8 — Fila deixada de um dia para o outro
1. Deixa 10 pendentes (modo avião), fecha a app.
2. No dia seguinte, abre-a **noutro WiFi**.

✅ **Esperado:** esvazia até 0.

## T11 — Ensaio de 3 horas (o mais parecido com um evento)
1. Liga o iPad ao **hotspot 4G**.
2. Durante 3 horas, faz cerca de **100 capturas**.
3. No fim, anota: o **tamanho real** de um vídeo de 60s, e a **idade máxima** que a captura mais antiga chegou a ter no painel.

✅ **Esperado:** a fila vai a 0 no fim, nunca com uma captura pendente há mais de ~10 minutos com rede boa.

---

# Antes de cada evento (checklist do operador)

- [ ] Abrir **só pelo ícone** do ecrã principal
- [ ] Painel: armazenamento **concedido**, mais de **10 GB** livres
- [ ] **Hotspot** ligado
- [ ] Fazer 1 captura de teste e ver o painel chegar a **0 pendentes**
- [ ] PIN **mudado** (não pode ser 0000)
- [ ] Código do evento com a **data** correta
- [ ] Guided Access ligado, bloqueio automático em "Nunca", iPad na tomada
- [ ] Cartão de privacidade impresso junto da booth

**No fim da noite:** só arrumas quando o painel diz **0 pendentes**. Se não estiver a 0: **não** apagues a app, **não** limpes dados do Safari, **não** restaures o iPad. Leva-o para casa, abre a app com WiFi e deixa esvaziar.

---

# Registo de resultados

| Teste | Data | Passou? | Notas |
|---|---|---|---|
| T0 App em ecrã inteiro | | | |
| T1 Sem janelas de guardar | | | |
| T2 Armazenamento garantido | | | |
| T3a Fila sobrevive (CRÍTICO) | | | |
| T6 Falha local → descarga | | | |
| T7 Exportar | | | |
| T9 Separador ≠ ícone | | | |
| T10 Câmara/microfone | | | |
| T12 Abrir sem rede | | | |
| Boomerang abre no Mac | | | |
| T3b Esvaziar a fila (CRÍTICO) | | | |
| T4 Rede cai a meio | | | |
| T5 Gravar durante envio | | | |
| T8 Dia seguinte | | | |
| T11 Ensaio de 3 horas | | | |
