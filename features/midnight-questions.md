# Modo Meia-Noite (perguntas que desbloqueiam à noite)

**Status:** approved by the founder 2026-10-24 — being built (available on both plans)
**Plan tier:** both plans (founder, 2026-10-24).
**Proposed date:** 2026-08-19

## Summary
Ideia inspirada no concorrente francês Mots d'Amour, que tem uma "boîte à
questions" normal MAIS uma versão "questions piquantes" 🌶️ que só desbloqueia às
23h, quando a festa aquece. Adaptação para a grao: um **segundo conjunto de
perguntas, mais atrevidas, ativado por hora** (ex.: meia-noite), sobre o formato
de perguntas rotativas que a grao já tem.

Nome de trabalho: **Modo Meia-Noite** (alternativas: "Perguntas Sem Filtro",
"Depois da Meia-Noite"). Copy de apresentação já escrita pelo [marketer] nesta
sessão (headline + descrição), pronta para quando a funcionalidade existir.

## Porquê
- Custo de implementação baixo, retorno alto em graça / partilha / word-of-mouth.
- Encaixa no registo boutique da grao (romântico com piscadela de olho), desde
  que o tom fique elegante e não caia no brega/despedida-de-solteiro.
- Diferenciador barato que um concorrente já validou no mercado.

## Bloqueio (porque está em "proposed", não pronto)
Requer trabalho de **[developer]** na app: um gatilho horário que, a partir de
uma hora configurável, troca/adiciona o conjunto de perguntas ativo. Hoje as
perguntas (`QUESTIONS`) são um array hardcoded, sem noção de hora nem de
múltiplos conjuntos. Liga-se naturalmente à priority #4 (config layer): o segundo
conjunto de perguntas e a hora de desbloqueio seriam config por evento, não
hardcoded.

**Não anunciar publicamente antes de o gatilho estar construído e testado** — não
vender uma funcionalidade que ainda não existe.

## Decisão pendente
Confirmar se avança (e quando) — provavelmente depois de fechadas as prioridades
#1–#4, já que depende do config layer. Registada agora para não se perder a ideia
nem a copy já escrita.

## Decision log
- **2026-08-19** — Proposta e registada (marca competitiva do Mots d'Amour). Copy
  pronta ([marketer]). Bloqueada em dev (gatilho horário + config layer). Sem
  decisão de construir ainda.
- **2026-10-24** — Founder approved building it, on **both plans**, plus a repo list of question/theme suggestions (`questions/sugestoes.md`). Built overnight as `EVENT.midnight` (`unlockAt`/`endAt`, default 00:00–06:00 local) + `QUESTIONS_NIGHT`. The "do not advertise before it is built and tested" rule stands until the on-device check.
- **2026-10-24 (built)** — `EVENT.midnight = {enabled, unlockAt:'00:00', endAt:'06:00'}` (iPad local time, handles windows that wrap past midnight); 8 night questions (`QUESTIONS_NIGHT`), separate rotation per set, Repetir keeps the same question; in the window the Welcome subtitle becomes the headline and the countdown label says "Modo Meia-Noite"; outside it every screen is pixel-identical to before. 24/24 Chromium tests incl. exact 00:00/06:00 boundaries (`?nowTime=`/`?nowHour=` hooks). `questions/sugestoes.md`: 41 day + 30 night questions with house rules; `dia.json`/`noite.json` mirror the embedded arrays. Open: keep the night headline on the Welcome screen? Not yet checked on the iPad.
- **2026-10-24** — Founder: keep the night headline on the Welcome screen while the mode is active.
