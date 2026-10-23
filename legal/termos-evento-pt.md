# Termos do evento — tratamento de conteúdo dos convidados

**Versão:** 0.1 — RASCUNHO. **Não foi revisto por advogado.** Não usar num evento real antes dessa revisão (ver "Perguntas para o advogado" no fim).
**Língua:** PT-PT. Os campos entre `[colchetes]` são preenchidos por evento ou pelo fundador.
**Como é usado:** este texto é mostrado aos noivos na app (opção escondida, atrás do gesto + PIN do operador). Os noivos leem e aceitam antes do evento. A aceitação fica registada no iPad. Com o upload ligado, a app só envia ficheiros depois de haver aceitação registada para esse código de evento. O mesmo texto serve de cláusula para o contrato.

---

## 1. Quem somos

**grao** — [NOME LEGAL, NIF, MORADA, EMAIL DE CONTACTO] ("grao"), que presta o serviço de video guestbook (booth) no evento dos noivos **[NOMES]**, a realizar em **[DATA]**, em **[LOCAL]** ("Noivos").

## 2. O que é gravado

Vídeos, fotografias e boomerangs que os convidados escolhem gravar na booth. Incluem a imagem e a voz de quem grava e, por vezes, de quem aparece no fundo. A participação é voluntária.

## 3. Para que serve

Apenas para entregar esse conteúdo aos Noivos. A grao não usa nem publica o conteúdo (nem em redes sociais, nem em portefólio, nem em publicidade) sem autorização separada, escrita e específica dos Noivos.

## 4. Onde fica guardado

- Durante o evento, no iPad da booth.
- Enviado para armazenamento na nuvem (Cloudflare R2, **jurisdição da União Europeia**) por ligação cifrada. Só depois de a grao confirmar que o ficheiro chegou intacto é que a cópia no iPad é apagada.
- Ninguém tem acesso público a esse armazenamento. O acesso é restrito à grao.

## 5. Quanto tempo

A grao apaga os ficheiros **90 dias** depois de serem enviados. Os Noivos devem descarregar o conteúdo nos primeiros **60 dias**. A grao não guarda arquivo depois disso.

## 6. Os convidados

Os convidados são informados antes de cada gravação (aviso no ecrã de instruções e cartão impresso junto da booth) e há sempre um operador presente. Um convidado pode pedir a remoção de um conteúdo seu ao operador ou por email para [EMAIL]. A grao apaga-o em [PRAZO, ex.: 5 dias úteis].

Os Noivos reconhecem que, num casamento, a imagem e a voz dos convidados são registadas por vários prestadores (fotógrafo, videógrafo e a booth da grao), e **[a confirmar com o advogado:]** que informaram ou informarão os convidados desse facto, e que a grao trata o conteúdo da booth só no âmbito deste serviço.

## 7. Menores

O operador orienta os convidados menores de idade. A gravação por menores faz-se acompanhada por um responsável presente. **[A confirmar com o advogado.]**

## 8. Entrega

O conteúdo é entregue aos Noivos por [LIGAÇÃO / MÉTODO A DEFINIR]. Depois de descarregado, a cópia dos Noivos é da responsabilidade dos Noivos.

## 9. Segurança e subcontratantes

Ligação cifrada (HTTPS). Acesso restrito. Subcontratante: Cloudflare, Inc., com os dados guardados na UE, ao abrigo do respetivo acordo de tratamento de dados.

## 10. Aceitação

Os Noivos declaram que leram estes termos e aceitam-nos para o evento acima. A app regista: o nome dos Noivos, a data e hora, a versão destes termos e o código do evento.

---

## Cartão de privacidade (para imprimir e deixar junto da booth)

> **Esta booth grava vídeo, foto e boomerang.**
> O que gravares é entregue ao [NOMES] e guardado na União Europeia durante 90 dias. Depois é apagado.
> Não é usado para mais nada. Gravar é voluntário.
> Queres que apaguemos algo teu? Fala com o operador ou escreve para [EMAIL].
> **grao** — [NOME LEGAL, NIF]

## Frase no ecrã de instruções (já prevista na implementação)

> Ao gravar, a tua mensagem fica guardada e é entregue ao João e à Constança. Mais informação no cartão ao lado.

---

## Perguntas para o advogado (portuguesas, com conhecimento da CNPD)

Do parecer do architect-strategy em `features/backend-infrastructure.md`. Têm de estar respondidas antes do primeiro evento com upload.

1. A grao é **responsável pelo tratamento** ou **subcontratante** face aos Noivos? (A utilização dos Noivos pode estar abrangida pela exceção doméstica, o que torna estranho o papel de subcontratante.)
2. A aceitação dos Noivos **cobre** os convidados? O raciocínio do fundador é que os convidados já são expostos ao fotógrafo e ao videógrafo. Mas a aceitação dos Noivos, por si só, **não é o consentimento de cada convidado**. Qual é a base legal certa para a grao: consentimento de cada convidado (o toque em "começar" depois do aviso), interesse legítimo, ou o contrato com os Noivos?
3. **Menores:** é preciso consentimento parental? Como se documenta num casamento?
4. O prazo de **90 dias** (e os 60 dias para descarregar) é adequado?
5. O texto da cláusula do contrato, o aviso do ecrã, o cartão e uma eventual **página de aviso de privacidade** (para onde um QR pode apontar).
6. É necessária uma **avaliação de impacto (DPIA)**? (Provavelmente não, a esta escala. Confirmar.)
7. Os fotógrafos e videógrafos são responsáveis independentes? A grao deve coordenar com eles, ou isso é matéria dos Noivos?

## Registo de versões

- **0.1 (2026-10-23)** — primeiro rascunho, escrito a partir do parecer do architect-strategy e da indicação do fundador de que os Noivos aceitam os termos.
