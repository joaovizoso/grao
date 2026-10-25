# Sugestões de perguntas para a booth

Lista de ideias para escolher as perguntas de cada evento. PT-PT, tratamento por "tu" (como no resto da app).

## Como mudar as perguntas hoje

1. Abre `index.html` e procura `const QUESTIONS = [` (perguntas do dia) e `const QUESTIONS_NIGHT = [` (Modo Meia-Noite).
2. Troca, acrescenta ou tira frases. Cada pergunta fica entre aspas e separada por vírgula. Não há limite de perguntas; cada convidado recebe a seguinte da lista e, no fim, volta à primeira. "Repetir" mantém a mesma pergunta.
3. Copia as mesmas listas para `questions/dia.json` e `questions/noite.json`, que são um espelho das perguntas embutidas (a app não os lê; servem de registo e para o futuro menu).
4. O horário do Modo Meia-Noite está em `EVENT.midnight` (`unlockAt` / `endAt`, hora local do iPad; por defeito 00:00–06:00). Para desligar: `enabled: false`.
5. Testa antes do evento: abre a app com `?nowTime=00:30` no fim do endereço para ver as perguntas da noite, e confirma no painel do operador ("Modo Meia-Noite").

Está planeado um menu de definições no painel do operador para escolher as perguntas sem editar o ficheiro (`features/config-menu.md`).

## Regras de ouro

- **A pergunta é um convite, não um exame.** Abre a porta a uma história; não exige uma resposta certa. Por baixo da pergunta a app já diz "É só uma sugestão, fala do que te apetecer".
- **Curta o suficiente para ler em 5 segundos**, de pé, com pouca luz, talvez sem óculos. Uma ideia por pergunta. Idealmente menos de 110 caracteres.
- **Ninguém fica mal na fotografia.** Nada sobre ex-namorados, pesos, idades, dinheiro, bebedeiras, gafes de alguém concreto ou "segredos" que exponham uma pessoa.
- **Nada que obrigue alguém a revelar a sua vida íntima** (orientação sexual, relações, gravidezes, saúde, religião, política). Também nada que pressuponha que o convidado tem par.
- **Avós e crianças estão na sala (perguntas do dia).** A piscadela de olho é bem-vinda; o duplo sentido não. Se a pergunta faria corar a avó dos noivos, fica de fora. **O Modo Meia-Noite é a exceção, de propósito:** é para adultos (ver essa secção).
- **Nada de "Qual foi o maior erro..." ou "O que mudarias no noivo/a...".** O vídeo é um presente para os noivos, para ver daqui a 20 anos.
- **Inclusivo.** Prefere "os noivos", "o casal", "eles" a fórmulas que pressupõem noivo e noiva.
- **Testa em voz alta.** Se soa a formulário, reescreve.

Marcação de tom: **[terno]** emotivo · **[leve]** humor suave · **[piscadela]** atrevido q.b. · **[picante]** adulto (NSFW, só para o Modo Meia-Noite).

---

## Perguntas do dia (~40)

**Embutidas na app por defeito (`QUESTIONS`)** — marcadas com ★:

### Conselhos ao casal
1. ★ Que conselho darias ao casal para daqui a 20 anos? [terno]
2. Qual é o segredo de um casamento feliz, na tua experiência? [terno]
3. O que é que os noivos nunca devem deixar de fazer um pelo outro? [terno]
4. Que regra da casa propões para este casal? [leve]
5. Como se resolve uma discussão sem ninguém perder? [leve]
6. Que conselho gostavas de ter recebido no dia do teu casamento — ou que ainda vais querer receber? [terno]

### Memórias
7. ★ Conta uma memória tua com um dos noivos que nunca vais esquecer. [terno]
8. Como conheceste a noiva ou o noivo? Conta a história como se fosse um filme. [leve]
9. Qual foi a primeira vez que percebeste que estes dois eram para durar? [terno]
10. Que momento de hoje vais guardar para sempre? [terno]
11. Conta uma aventura que viveste com um dos noivos (a versão para todas as idades). [leve]
12. Qual é a tua fotografia mental favorita do casal? [terno]

### Brindes
13. ★ Faz um brinde — improvisa o discurso que nunca darias ao microfone. [leve]
14. Ergue o copo: a que é que brindas hoje? [terno]
15. Faz um brinde em 10 segundos. Vai! [leve]
16. Brinda a uma qualidade de cada um dos noivos. [terno]

### Votos para o futuro
17. O que desejas ao casal para o primeiro ano de casados? [terno]
18. Onde imaginas os noivos daqui a 10 anos? [leve]
19. Que viagem devem os noivos fazer juntos antes dos 50? [leve]
20. Deixa um desejo para abrirem no décimo aniversário de casamento. [terno]
21. Que tradição gostavas que esta família começasse? [terno]
22. Diz uma palavra para o futuro deles — e explica porquê. [terno]

### Humor leve
23. Quem manda lá em casa? Responde com diplomacia. [leve]
24. Quem vai ser o primeiro a pedir desculpa? E o primeiro a esquecer-se do aniversário? [leve]
25. Se o casal fosse um prato português, qual seria? [leve]
26. Que música devia tocar sempre que eles entram numa sala? [leve]
27. Imita um dos noivos em 5 segundos (com carinho!). [leve]
28. Dá uma nota de 0 a 10 a esta festa — e justifica. [leve]

### Para os mais novos
29. Desenha no ar um coração para os noivos e diz-lhes uma coisa bonita. [terno]
30. O que é que achas que os noivos vão fazer amanhã? [leve]
31. Se pudesses dar um superpoder aos noivos, qual era? [leve]
32. Qual foi a parte mais divertida da festa até agora? [leve]
33. Conta aos noivos uma piada de que gostes. [leve]

### Para os mais velhos
34. Como era um casamento no teu tempo? O que é que mudou e o que continua igual? [terno]
35. Que conselho te deram no teu casamento e que ainda hoje funciona? [terno]
36. Conta como conheceste o grande amor da tua vida. [terno]
37. O que é que aprendeste sobre o amor ao fim de tantos anos? [terno]

### Para amigos e família
38. O que é que os noivos têm um do outro que tu admiras? [terno]
39. Que promessa fazes hoje a este casal? (Ser padrinho de alguma coisa conta.) [leve]
40. Diz aos noivos o que nunca lhes disseste — a versão bonita. [terno]
41. Agradece aos noivos por alguma coisa que fizeram por ti. [terno]

---

## Modo Meia-Noite (~30) — adultos

**Tom (decisão do fundador, 2026-10-24): mais NSFW.** Atrevido, com duplo sentido e humor de adultos, à hora em que a festa já aqueceu. Pensa "despedida de solteiro sem ninguém humilhado", não "conversa com a avó". Mantém-se uma linha: **sugestivo, nunca explícito**, e ninguém é exposto.

**Antes de ligar o modo:**
- É para adultos. As crianças (e muitas vezes os avós) já foram embora à meia-noite, mas **o ecrã mostra a pergunta a quem passar**. Se ainda houver crianças na sala, atrasa `unlockAt` em `EVENT.midnight` (por exemplo `'01:00'`) ou desliga com `enabled: false`.
- Avisa os noivos e confirma que é este o tom que querem.
- O convidado só fala de **si próprio** ou de coisas inventadas. Nada que exponha uma pessoa concreta (ex-parceiros, o que o noivo "fez com quem"), nada que obrigue a revelar a vida íntima de alguém, nada que humilhe.
- O vídeo é um presente para os noivos. Atrevido sim, de mau gosto não.

**Embutidas na app por defeito (`QUESTIONS_NIGHT`)** — marcadas com ★.

### Noite de núpcias
1. ★ Dá aos noivos um conselho para a noite de núpcias que não dirias à frente da avó. [picante]
2. ★ Verdade ou consequência: dá aos noivos uma consequência para a noite de núpcias. [picante]
3. ★ Que música devia tocar na noite de núpcias? Sê específico e sem pudores. [picante]
4. ★ Quantos dias de lua de mel até o casal ver a luz do dia? Justifica a tua aposta. [picante]
5. Que objeto devia constar da mala de lua de mel e nunca aparecer nas fotografias? [picante]
6. Dá uma nota de 0 a 10 ao quarto de hotel dos noivos. Só vale a pena responder se for 10. [piscadela]
7. Qual é o aviso que devia estar pendurado na porta do quarto esta noite? [piscadela]

### Beijos e engates
8. ★ Descreve o beijo perfeito em dez segundos. Demonstração só com o ar, por favor. [picante]
9. ★ Qual é a frase de engate mais desastrosa que já ouviste? Faz a reconstituição. [picante]
10. Dá a tua melhor frase de engate para usar nesta festa, agora. [picante]
11. Onde é o sítio mais inesperado onde um beijo é uma boa ideia? [picante]
12. Faz o teu olhar de "vamos embora já" durante cinco segundos. [piscadela]
13. Como se diz "estás com bom ar" sem dizer nada? Mostra. [piscadela]

### Confissões
14. ★ Confessa: qual foi o primeiro pensamento impuro que tiveste hoje? [picante]
15. ★ Qual é a coisa mais atrevida que já sussurraste a alguém ao ouvido? [picante]
16. Qual foi a coisa mais corajosa que já fizeste por alguém de quem gostavas? [piscadela]
17. Que desculpa darias amanhã para explicar a cara com que vais acordar? [piscadela]
18. Qual foi a mensagem mais comprometedora que já enviaste ao destinatário errado? [picante]
19. Completa: "Se estas paredes falassem, diriam que eu…" [picante]

### Desafios
20. Faz a tua melhor imitação de um sussurro sedutor. Material: a frase "traz-me mais gelo". [picante]
21. Conta uma piada de adultos em 15 segundos. Sem nomes. [picante]
22. Dá aos noivos três palavras que só se dizem de madrugada. [picante]
23. Mostra o teu passo de dança mais sedutor, ou o mais ridículo (ambos servem). [piscadela]
24. Diz "saúde" de um modo que deixe toda a gente a corar. [picante]

### Brindes sem pudor
25. Faz um brinde aos noivos que não pudesse ser feito antes das duas da manhã. [picante]
26. Brinda a tudo o que fica na pista e não vai para a fotografia oficial. [piscadela]
27. Ergue o copo às primeiras vezes: o primeiro olhar, o primeiro beijo, a primeira discussão. [piscadela]

### Para quem prefere mais suave (podem ir para qualquer hora)
28. Declara-te: diz aos noivos, olhos nos olhos da câmara, porque é que gostas tanto deles. [terno]
29. Que elogio guardaste o dia todo para dizer agora? [terno]
30. Qual é o segredo para continuar a namorar depois de casar? [terno]

### Fora da lista (exemplos do que evitar, mesmo à meia-noite)
- "Qual é o maior segredo do noivo que a noiva não sabe?" — expõe alguém.
- "Com quem é que já te beijaste nesta festa?" — pode envergonhar ou "outar" alguém.
- "Conta a pior bebedeira dos noivos." — humilhante e fica gravado para sempre.
- Qualquer pergunta que descreva atos sexuais de forma explícita, ou sobre uma pessoa concreta na sala.
- Perguntas que pressupõem que o convidado tem ou quis ter um par.
