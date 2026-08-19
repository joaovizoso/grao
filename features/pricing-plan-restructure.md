# Reestruturação de planos vs. concorrente (Mots d'Amour)

**Status:** deferred
**Plan tier:** N/A (afeta a estrutura Basic/Premium e add-ons)
**Proposed date:** 2026-08-19

## Summary
Análise do concorrente francês Mots d'Amour (Nîmes) expôs uma alegada lacuna
valor/preço: eles dão vídeo+foto+impressões+galeria-com-upload no tier base a
450€, enquanto a grao Basic (~429€) é só-vídeo e foto exige Premium (~737€) +
add-on impressão. Pergunta: a grao deve descer a tira de fotos para Basic, criar
um tier intermédio, ou repackagear a foto como add-on?

## Devil's-advocate take
Comparação apples-to-oranges. Mots d'Amour é **self-service sem operador** e a
sua "value" assenta em consumível físico (150-400 impressões incluídas). A grao
tem **operador presente em ambos os planos** — custo de trabalho real por evento
que estruturalmente impede igualar o preço-base deles sem destruir margem. Competir
no rácio valor/preço deles seria copiar o eixo em que eles são fortes (volume,
consumível, sem custo de mão de obra) e abandonar o eixo em que a grao se
diferencia (boutique + operador + preço como sinal de qualidade). Além disso: são
**franceses, não competem em Portugal hoje**; a grao tem **1 casamento validado,
0 segunda reserva**. Reestruturar pricing agora é otimização prematura contra um
concorrente que nenhum cliente português está a comparar.

## Feasibility
Trivial em termos de execução — os planos não estão codificados no HTML (não há
config layer, priority #4 aberta). Mudar pricing hoje é editar copy da página de
vendas, não código. Custo de reversão ~zero. Logo, **não há razão de engenharia
para decidir já**: a decisão pode esperar por evidência sem criar dívida técnica.

## Trigger-to-revisit
Revisitar se **qualquer** um destes acontecer:
1. Um lead/casal português comparar explicitamente a grao com uma oferta
   foto+vídeo+impressões mais barata e perder-se a venda por causa disso.
2. ≥2 leads pedirem "foto + vídeo" mas recusarem o salto para Premium.
3. Entrar em PT um concorrente self-service com packaging semelhante.
Nessa altura, a **jogada mínima e reversível** é oferecer a tira de fotos como
**add-on à-la-carte no Basic** (ex.: +80-120€), NÃO descê-la para o tier base nem
criar um tier novo — preserva a diferenciação Premium e testa a procura com risco
zero de canibalização estrutural.

## Decision log
- **2026-08-19** — Deferido. Não reagir agora. Registada a lacuna e o gatilho de
  revisão. Manter posicionamento boutique/operador; o preço mais alto é a
  mensagem, não um bug a corrigir. Ver recomendação completa na resposta ao
  founder desta sessão.
