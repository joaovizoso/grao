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
- **Avós e crianças estão na sala.** A piscadela de olho é bem-vinda; o duplo sentido explícito não. Se a pergunta faria corar a avó dos noivos, fica de fora.
- **Nada de "Qual foi o maior erro..." ou "O que mudarias no noivo/a...".** O vídeo é um presente para os noivos, para ver daqui a 20 anos.
- **Inclusivo.** Prefere "os noivos", "o casal", "eles" a fórmulas que pressupõem noivo e noiva.
- **Testa em voz alta.** Se soa a formulário, reescreve.

Marcação de tom: **[terno]** emotivo · **[leve]** humor suave · **[piscadela]** atrevido q.b., só para o Modo Meia-Noite.

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

## Modo Meia-Noite (~30)

Tom: romântico com piscadela de olho. Atrevido q.b., elegante, nunca brejeiro. Pensa "conversa à mesa às duas da manhã com a avó ainda a dançar", não "despedida de solteiro".

**Embutidas na app por defeito (`QUESTIONS_NIGHT`)** — marcadas com ★.

### A festa
1. ★ Quem é o rei ou a rainha da pista esta noite? Prova-o com o teu melhor passo de dança. [leve]
2. ★ Que música vai ficar para sempre colada a esta noite — e porquê? [leve]
3. Descreve esta festa em três palavras — a terceira tem de ser inventada. [leve]
4. Quem é que vai ter a melhor história amanhã ao pequeno-almoço? (Não digas nomes, só pistas.) [piscadela]
5. Mostra-nos o passo de dança que os noivos vão tentar esquecer. [piscadela]
6. Qual foi o momento em que percebeste que esta festa ia ficar para a história? [leve]

### Brindes da meia-noite
7. ★ Faz o brinde da meia-noite: a que é que os noivos vão brindar daqui a 10 anos? [terno]
8. Brinda às coisas que só acontecem depois da meia-noite. [piscadela]
9. Faz um brinde ao "para sempre" — com a voz mais solene que conseguires. [leve]
10. Ergue o copo ao primeiro beijo dos noivos. Sabes onde foi? [piscadela]

### Declarações
11. ★ Declara-te: diz aos noivos, olhos nos olhos da câmara, porque é que gostas tanto deles. [terno]
12. ★ Confessa: qual foi o momento mais bonito do dia que ninguém viu? [terno]
13. Diz aos noivos uma coisa que só tens coragem de dizer a esta hora. [piscadela]
14. Faz uma serenata de 10 segundos ao casal. Afinação opcional. [leve]
15. Que elogio guardaste o dia todo para dizer agora? [terno]

### Histórias com piscadela
16. ★ Que história dos noivos só se conta depois da meia-noite? (A versão para todas as idades.) [piscadela]
17. Quem deu o primeiro passo: ele, ela, ou o destino? Conta o que sabes. [piscadela]
18. Qual foi o encontro mais desastrado dos noivos que conheces? [leve]
19. Revela uma mania adorável de um dos noivos. [leve]
20. Que alcunha secreta achas que eles têm um para o outro? [piscadela]

### Promessas e conselhos à meia-luz
21. ★ Que promessa farias aos noivos às três da manhã que manterias às três da tarde? [piscadela]
22. ★ Dá aos noivos um conselho para as próximas mil noites — o mais elegante que conseguires. [piscadela]
23. Qual é o segredo para continuar a namorar depois de casar? [terno]
24. Que surpresa devia um fazer ao outro no primeiro aniversário? [terno]
25. Como se mantém a chama acesa? Responde como um poeta. [piscadela]
26. Qual deve ser a música da primeira dança daqui a 25 anos? [terno]

### Desafios rápidos
27. Faz o teu melhor olhar apaixonado para a câmara durante 5 segundos. [leve]
28. Manda um beijo aos noivos — no estilo de cinema. [piscadela]
29. Diz "amo-vos" em todas as línguas que souberes. [leve]
30. Termina a frase: "O amor depois da meia-noite é…" [piscadela]

### Fora da lista (exemplos do que evitar)
- "Qual é o maior segredo do noivo que a noiva não sabe?" — expõe alguém.
- "Com quem é que já te beijaste nesta festa?" — íntimo, pode envergonhar ou "outar" alguém.
- "Conta a pior bebedeira dos noivos." — humilhante e fica gravado para sempre.
- Qualquer pergunta sobre a noite de núpcias — os avós e as crianças estão na sala.
