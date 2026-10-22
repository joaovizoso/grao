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
