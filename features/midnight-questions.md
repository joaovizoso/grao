# Modo Meia-Noite (perguntas que desbloqueiam à noite)

**Status:** approved by the founder 2026-10-24 — being built (available on both plans)
**Plan tier:** Premium (extensão do formato de perguntas, que já é Premium quando personalizado)
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
