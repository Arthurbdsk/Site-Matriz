import type { RawPost } from "@/data/postTypes";
import { ORANGE, TEAL } from "@/data/postTypes";
import {
  REF_DSM,
  REF_CID,
  REF_NICE_TDAH,
  REF_CONSENSO_TDAH,
  REF_ABENEPI,
  REF_CFP,
  REF_MEC_INCLUSAO,
  REF_LBI,
  REF_SBP_SONO,
} from "@/data/pilares/referencias";

export const pilaresTdah2: RawPost[] = [
  {
    slug: "sintomas-de-tdah-por-idade",
    title: "Sintomas de TDAH em cada idade",
    metaTitle: "Sintomas de TDAH por idade: da pré-escola à vida adulta | Instituto Matriz",
    metaDescription:
      "Veja como os sintomas de TDAH se manifestam na pré-escola, no ensino fundamental, na adolescência e na vida adulta, e o que observar em cada fase.",
    excerpt:
      "O TDAH não muda, mas a forma como aparece muda bastante conforme a idade e a demanda do ambiente.",
    category: "TDAH",
    tint: ORANGE,
    readingMinutes: 12,
    date: "2026-07-08",
    stats: [
      {
        value: "12 anos",
        label: "idade limite até a qual alguns sintomas precisam ter aparecido",
        source: "DSM-5-TR, 2023",
      },
      {
        value: "6 sintomas",
        label: "número mínimo exigido em crianças até 16 anos, em cada domínio avaliado",
        source: "DSM-5-TR, 2023",
      },
      {
        value: "5 sintomas",
        label: "número mínimo exigido a partir dos 17 anos",
        source: "DSM-5-TR, 2023",
      },
    ],
    intro: [
      "Uma das confusões mais comuns sobre o TDAH é a expectativa de que ele se manifeste sempre da mesma forma. Na prática, a apresentação muda bastante conforme a idade, não porque a condição mude, mas porque a demanda do ambiente muda.",
      "Uma criança de quatro anos não precisa se organizar sozinha, planejar a semana ou entregar trabalhos com prazo. Um adolescente precisa de tudo isso. É por isso que muitos quadros só ficam evidentes quando a exigência de autonomia cresce.",
      "Este guia percorre a manifestação típica em cada fase, do período pré-escolar à vida adulta, e indica o que observar em cada uma delas.",
    ],
    sections: [
      {
        heading: "Pré-escola: dos 3 aos 5 anos",
        paragraphs: [
          "Nessa faixa, o diagnóstico é possível mas exige cautela redobrada, porque agitação, impulsividade e baixa tolerância à espera fazem parte do desenvolvimento típico. O critério que orienta é o desvio em relação a pares da mesma idade, e não o comportamento em si.",
          "O que costuma chamar atenção é a intensidade desproporcional: a criança que se movimenta muito mais que as outras da turma, que não consegue permanecer em nenhuma atividade nem pelo tempo curto esperado para a idade, e que apresenta acidentes frequentes por agir sem avaliar o risco.",
          "Também são relatadas dificuldades importantes com transições e com espera, crises intensas de frustração e, com frequência, sono difícil de estabelecer.",
          "Um cuidado necessário nessa idade: quadros de ansiedade, alterações de sono, situações de estresse familiar e até dificuldades de linguagem produzem apresentações semelhantes. Por isso, nessa faixa a orientação parental e a observação ao longo do tempo costumam preceder qualquer conclusão diagnóstica.",
        ],
        bullets: [
          "Agitação claramente acima dos pares da mesma turma",
          "Incapacidade de permanecer em atividades pelo tempo esperado para a idade",
          "Acidentes frequentes por agir sem avaliar risco",
          "Crises intensas de frustração e dificuldade com transições",
          "Dificuldade importante para iniciar e manter o sono",
        ],
      },
      {
        heading: "Ensino fundamental: dos 6 aos 11 anos",
        paragraphs: [
          "Essa é a faixa em que a maioria dos diagnósticos acontece, porque a escola introduz demandas estruturadas que expõem as dificuldades: permanecer sentado, sustentar atenção em tarefas pouco estimulantes, seguir instruções sequenciais e organizar material.",
          "A desatenção aparece como erros por descuido, trabalhos incompletos, dificuldade em seguir instruções de várias etapas, perda constante de materiais e esquecimento de tarefas e combinados.",
          "A hiperatividade aparece como inquietação na cadeira, levantar-se em momentos inadequados, mexer em tudo, falar em excesso. A impulsividade aparece como responder antes da pergunta terminar, interromper conversas e dificuldade em esperar a vez em jogos e filas.",
          "Um marcador clínico importante nessa fase é a distância entre o potencial demonstrado e o resultado entregue. A criança que participa bem oralmente, demonstra raciocínio e domínio do conteúdo, mas vai mal nas avaliações escritas e não entrega tarefas, apresenta um padrão que merece investigação.",
          "É também nessa fase que começa a se acumular o custo emocional. Anos de correções diárias e comparações costumam produzir uma autoimagem de incapacidade que persiste mesmo depois do tratamento iniciado.",
        ],
      },
      {
        heading: "Adolescência: dos 12 aos 17 anos",
        paragraphs: [
          "Na adolescência, a hiperatividade motora visível costuma diminuir e se transformar em inquietação interna, aquela sensação persistente de não conseguir relaxar. Isso leva muitas famílias a concluírem que o quadro melhorou, quando na verdade ele mudou de forma.",
          "Ao mesmo tempo, a demanda de organização explode. O adolescente passa a lidar com múltiplas disciplinas, vários professores, prazos longos, trabalhos em grupo e provas acumuladas, usando justamente as funções executivas que são o núcleo da dificuldade.",
          "A estrutura externa que sustentava a organização também desaparece: já não há um professor único acompanhando tudo, e a supervisão parental costuma diminuir. É por isso que muitos adolescentes com bom desempenho anterior entram em queda nessa fase.",
          "A impulsividade passa a ter consequências mais sérias que na infância, envolvendo comportamento de risco, uso de substâncias e conflitos interpessoais. Some-se a isso um risco aumentado de quadros de ansiedade e depressão, frequentemente associados ao acúmulo de fracassos.",
          "A recusa de tratamento é comum nessa fase, e costuma ter menos a ver com o tratamento em si e mais com a resistência legítima a ser tratado como problema. Trazer o adolescente para o centro das decisões é o que costuma destravar a adesão.",
        ],
        bullets: [
          "Inquietação interna substituindo a agitação motora visível",
          "Dificuldade de gestão de prazos e de trabalhos longos",
          "Queda de rendimento com o aumento da autonomia exigida",
          "Procrastinação intensa e dificuldade de iniciar tarefas",
          "Comportamento de risco por impulsividade",
          "Maior vulnerabilidade a ansiedade e sintomas depressivos",
        ],
      },
      {
        heading: "Vida adulta",
        paragraphs: [
          "O TDAH persiste na vida adulta em uma parcela significativa dos casos, e nessa fase os critérios exigem um número menor de sintomas, reconhecendo que a apresentação se torna mais sutil.",
          "As manifestações se deslocam para o trabalho e para a vida doméstica: dificuldade em cumprir prazos, procrastinação, desorganização de rotina e de finanças, dificuldade em concluir projetos iniciados, e a sensação recorrente de render abaixo da própria capacidade.",
          "A impulsividade adulta aparece em decisões precipitadas, trocas frequentes de emprego, compras por impulso e dificuldade em sustentar compromissos de longo prazo.",
          "Um padrão bastante descrito é o do adulto que recebe o diagnóstico depois que o filho é diagnosticado, ao reconhecer no relato clínico a própria história. Esse reconhecimento costuma vir acompanhado de uma releitura de anos de autocobrança.",
          "Adultos com TDAH bem adaptados tendem a ser usuários intensivos de estrutura externa: listas, alarmes, agendas, rotinas fixas e ambientes com menos distração. Isso não é limitação, e sim a solução adequada ao funcionamento, adotada de forma consciente.",
        ],
      },
      {
        heading: "Por que a apresentação muda tanto?",
        paragraphs: [
          "Porque o que produz prejuízo é a relação entre o funcionamento da pessoa e a demanda do ambiente, e essa demanda cresce de forma acentuada ao longo da vida.",
          "Uma criança pequena tem quase toda a sua organização feita por adultos. Um adulto precisa organizar sozinho trabalho, casa, finanças, saúde e relações. A mesma dificuldade executiva que passava despercebida aos cinco anos produz consequências concretas aos vinte e cinco.",
          "Há também um componente de maturação. As funções executivas continuam amadurecendo até o início da vida adulta, e em pessoas com TDAH esse amadurecimento costuma ocorrer em ritmo mais lento, o que reduz a diferença em relação aos pares ao longo do tempo, sem necessariamente eliminá-la.",
          "Por fim, o desenvolvimento de estratégias compensatórias faz com que muitas pessoas mascarem as dificuldades, sustentando o desempenho às custas de esforço bem maior que o da média. Esse esforço tem custo, e frequentemente aparece como exaustão e ansiedade.",
        ],
      },
      {
        heading: "O que muda no tratamento em cada fase?",
        paragraphs: [
          "Na pré-escola, a prioridade costuma ser orientação parental e organização de rotina, com estrutura previsível e apoio visual. Intervenções comportamentais precedem qualquer discussão sobre medicação nessa faixa.",
          "No ensino fundamental, entram com força as adaptações escolares formais, o treino de funções executivas e a psicoterapia. É também a fase em que o tratamento medicamentoso passa a ser considerado com mais frequência, sempre por decisão médica.",
          "Na adolescência, o foco se desloca para autonomia com apoio: ensinar o próprio adolescente a usar ferramentas de organização, em vez de a família fazer por ele. A participação dele nas decisões passa a ser condição de adesão.",
          "Na vida adulta, o trabalho envolve estruturação de rotina, adaptação do ambiente de trabalho, psicoterapia e, quando indicado, tratamento medicamentoso. O componente de autoconhecimento ganha peso: entender o próprio funcionamento permite escolhas de carreira e de rotina mais compatíveis.",
          "Em todas as fases, alguns cuidados de base influenciam bastante o resultado e são frequentemente negligenciados: sono regular e suficiente, atividade física e redução de sobrecarga de agenda.",
        ],
      },
      {
        heading: "Quando procurar avaliação?",
        paragraphs: [
          "A qualquer momento em que exista uma diferença persistente entre a capacidade demonstrada e o resultado alcançado, com prejuízo concreto em pelo menos dois ambientes da vida.",
          "Na infância, os gatilhos costumam ser queixas escolares recorrentes, conflitos diários em torno de tarefas e organização, e dificuldades de relacionamento por impulsividade.",
          "Na adolescência, a queda de rendimento com o aumento da autonomia, a procrastinação intensa e os sinais de sofrimento emocional são os principais motivadores.",
          "Na vida adulta, a busca costuma ser motivada por dificuldades no trabalho, desorganização crônica de rotina, ou pelo reconhecimento a partir do diagnóstico de um filho.",
          "Em qualquer idade, vale reforçar que o diagnóstico exige a presença de alguns sintomas antes dos doze anos. Por isso, a avaliação de adultos sempre inclui a reconstrução da história de infância, muitas vezes com apoio de familiares e de documentos escolares antigos.",
        ],
      },
    ],
    faq: [
      {
        q: "TDAH pode surgir na adolescência?",
        a: "O quadro não surge do nada nessa fase. Os critérios exigem que alguns sintomas estivessem presentes antes dos 12 anos. O que acontece com frequência é o quadro se tornar evidente na adolescência, quando a demanda de autonomia ultrapassa a capacidade de compensação.",
      },
      {
        q: "Meu filho melhorou muito, posso parar o tratamento?",
        a: "Essa decisão é médica e deve considerar se a melhora reflete desenvolvimento consolidado ou o efeito do tratamento em curso. Interrupções são avaliadas caso a caso, com monitoramento próximo do desempenho e do bem-estar.",
      },
      {
        q: "Adulto pode ser diagnosticado com TDAH?",
        a: "Sim, e é cada vez mais frequente. A avaliação inclui reconstrução da história de infância, já que os critérios exigem presença de sintomas antes dos 12 anos, e considera o prejuízo atual em trabalho, rotina e relações.",
      },
      {
        q: "Por que meu filho consegue focar em algumas coisas e não em outras?",
        a: "Porque o TDAH afeta a regulação da atenção, não a sua existência. Atividades com recompensa imediata e alto estímulo capturam o foco sem esforço voluntário. Sustentar atenção por decisão própria em tarefas pouco estimulantes é exatamente a função prejudicada.",
      },
    ],
    references: [REF_DSM, REF_CID, REF_CONSENSO_TDAH, REF_NICE_TDAH, REF_ABENEPI],
  },
  {
    slug: "tratamento-do-tdah",
    title: "Tratamento do TDAH: o que realmente funciona",
    metaTitle: "Tratamento do TDAH: o que funciona | Instituto Matriz",
    metaDescription:
      "Conheça as abordagens com evidência no tratamento do TDAH: intervenções comportamentais, adaptações escolares, medicação e o que não tem respaldo científico.",
    excerpt:
      "O tratamento é multimodal e individualizado. Entenda o que compõe cada frente e o que a evidência sustenta.",
    category: "TDAH",
    tint: ORANGE,
    readingMinutes: 12,
    date: "2026-07-10",
    stats: [
      {
        value: "multimodal",
        label: "abordagem recomendada, combinando intervenções em vez de depender de uma só",
        source: "NICE, diretriz NG87, 2019",
      },
      {
        value: "Lei 13.146",
        label: "garante adaptações e recursos de acessibilidade na educação",
        source: "Diário Oficial da União, 2015",
      },
    ],
    intro: [
      "Poucos temas geram tanta divergência de opinião quanto o tratamento do TDAH, e boa parte dessa divergência circula entre pessoas que não trabalham com o assunto.",
      "A literatura, por outro lado, é razoavelmente consistente quanto ao essencial: o tratamento é multimodal, individualizado, e combina intervenções comportamentais, adaptações de ambiente e, quando indicado, tratamento medicamentoso.",
      "Este guia percorre cada uma dessas frentes, explica o que a evidência sustenta e aponta o que não tem respaldo suficiente para ser recomendado.",
    ],
    sections: [
      {
        heading: "O que significa tratamento multimodal?",
        paragraphs: [
          "Significa combinar abordagens que atuam em frentes diferentes, em vez de depender de uma única intervenção. Essa é a recomendação predominante nas diretrizes clínicas atuais.",
          "A razão é que o TDAH produz prejuízo em várias dimensões ao mesmo tempo: desempenho acadêmico, organização da rotina, relações sociais e autoimagem. Uma intervenção isolada tende a endereçar apenas parte disso.",
          "A composição do plano varia conforme a idade, a intensidade dos sintomas, as condições associadas e o contexto da família. Em crianças pequenas e em quadros leves a moderados, as intervenções não medicamentosas costumam ser a primeira escolha.",
          "Um ponto importante: o tratamento não é apenas do sintoma. Trabalhar a autoimagem da criança, orientar a família e ajustar as expectativas do ambiente são partes do plano, e frequentemente as que produzem mudança mais rápida no clima de casa.",
        ],
      },
      {
        heading: "Intervenções comportamentais e psicoterapia",
        paragraphs: [
          "A orientação parental estruturada é uma das intervenções com melhor respaldo, especialmente em crianças menores. Ela ensina os cuidadores a dar instruções claras, estabelecer regras combinadas previamente, aplicar consequências com consistência e reconhecer ativamente o comportamento adequado.",
          "A psicoterapia com a criança, geralmente com abordagem cognitivo-comportamental adaptada à idade, trabalha regulação emocional, tolerância à frustração, habilidades sociais e estratégias de resolução de problemas.",
          "O treino de funções executivas é uma frente específica e bastante útil: ensinar de forma explícita como quebrar uma tarefa em passos, como estimar tempo, como usar listas e agendas, como organizar o material e como monitorar o próprio desempenho.",
          "Em adolescentes e adultos, o foco se desloca para a construção de sistemas externos de organização, com apoio para que a própria pessoa os mantenha, e para o trabalho de autoconhecimento sobre o próprio funcionamento.",
        ],
        bullets: [
          "Orientação parental estruturada, com estratégias consistentes",
          "Psicoterapia com foco em regulação e habilidades sociais",
          "Treino explícito de funções executivas e organização",
          "Sistemas externos de apoio: listas, alarmes e rotinas visíveis",
          "Trabalho de autoimagem e redução da autocobrança",
        ],
      },
      {
        heading: "Adaptações escolares",
        paragraphs: [
          "As adaptações escolares estão entre as intervenções de melhor relação entre custo e efeito, e são um direito previsto na legislação de inclusão mediante apresentação de relatório.",
          "As mais eficazes atuam sobre a demanda executiva da tarefa. Fracionar atividades longas em partes menores, fornecer instruções por escrito além de faladas, reduzir cópia da lousa fornecendo material impresso e conceder tempo adicional em avaliações reduzem diretamente o gargalo.",
          "Ajustes de ambiente também produzem efeito: posicionar a criança longe de janelas e portas, próxima ao professor, e permitir pausas breves de movimento durante períodos longos.",
          "Do lado da avaliação, permitir que a criança demonstre conhecimento de formas variadas, incluindo oralmente, evita que o desempenho fique refém da organização escrita.",
          "Na prática, o caminho é agendar reunião com a coordenação levando o relatório e propondo um plano por escrito, com adaptações específicas e prazo de revisão. Combinados verbais tendem a se perder na troca de professores.",
        ],
      },
      {
        heading: "Tratamento medicamentoso",
        paragraphs: [
          "Quando indicado, o tratamento medicamentoso é conduzido exclusivamente por médico, e os medicamentos utilizados no TDAH estão entre os mais estudados da psiquiatria, com efeito consistente sobre os sintomas nucleares descrito na literatura.",
          "A decisão de iniciar considera a intensidade dos sintomas, o grau de prejuízo funcional, a idade, a resposta às intervenções não medicamentosas e as condições associadas. Não é uma decisão automática após o diagnóstico.",
          "O efeito esperado de um tratamento bem ajustado é que a pessoa consiga acessar melhor o que já é dela: terminar o que começou, esperar antes de agir, sustentar atenção no que escolheu fazer. Apatia, perda de expressividade ou apagamento da personalidade indicam necessidade de ajuste e devem ser relatados.",
          "O monitoramento é parte do tratamento, incluindo acompanhamento de efeitos, do apetite, do sono e do crescimento em crianças, com reavaliações periódicas.",
          "Sobre a preocupação mais comum das famílias: nas doses e formas de uso indicadas para o TDAH, o risco de dependência é considerado baixo na literatura médica, e adolescentes com TDAH tratado apresentam risco menor de uso problemático de substâncias do que os não tratados.",
        ],
      },
      {
        heading: "Cuidados de base frequentemente esquecidos",
        paragraphs: [
          "Alguns fatores influenciam bastante os sintomas e costumam ser negligenciados em favor de intervenções mais elaboradas.",
          "O sono é o primeiro deles. A privação de sono produz sintomas praticamente indistinguíveis dos de TDAH e agrava um quadro existente. Estabelecer horário regular, reduzir telas antes de dormir e tratar eventuais distúrbios do sono é parte do tratamento, e não um detalhe.",
          "A atividade física regular tem efeito descrito sobre atenção e regulação, além de contribuir para o sono. Não substitui outras intervenções, mas compõe bem o plano.",
          "A previsibilidade de rotina reduz a demanda executiva do dia a dia. Quando a sequência é conhecida e visível, sobra mais recurso cognitivo para as tarefas que exigem esforço.",
          "Por fim, a redução de sobrecarga de agenda. Crianças com agenda excessivamente cheia perdem o tempo livre necessário para descanso e para consolidação do que foi aprendido, e frequentemente pioram em vez de melhorar.",
        ],
        bullets: [
          "Sono regular e em quantidade adequada para a idade",
          "Atividade física frequente",
          "Rotina previsível, com apoio visual quando útil",
          "Agenda sem sobrecarga, com tempo livre preservado",
          "Ambiente de estudo com menos distração disponível",
        ],
      },
      {
        heading: "O que não tem respaldo suficiente",
        paragraphs: [
          "Circulam diversas propostas de tratamento sem evidência adequada, e distingui-las importa porque elas consomem tempo e recursos que seriam melhor aplicados.",
          "Dietas restritivas sem indicação clínica não têm respaldo como tratamento do TDAH. A crença de que o açúcar causa hiperatividade, em particular, não se sustenta em estudos controlados.",
          "Suplementações em altas doses não são recomendadas como tratamento, e algumas apresentam risco. Eventuais deficiências nutricionais devem ser investigadas e corrigidas por indicação médica, o que é diferente de suplementar como terapia.",
          "Programas comerciais de treinamento cerebral genérico, treinos oculares e abordagens que prometem eliminar o TDAH não apresentam evidência suficiente para serem recomendados como tratamento.",
          "O critério prático para avaliar qualquer proposta: existe avaliação individualizada antes de iniciar? Os objetivos são definidos e mensuráveis? Os resultados são acompanhados? A proposta promete cura? Respostas ruins a essas perguntas são sinal de alerta.",
        ],
      },
      {
        heading: "Como saber se o tratamento está funcionando?",
        paragraphs: [
          "Definindo, desde o início, o que se pretende mudar e como isso será medido. Sem esse combinado, a avaliação de resultado vira impressão subjetiva e varia conforme o dia.",
          "Bons indicadores são concretos: quantidade de tarefas concluídas, tempo necessário para iniciar a lição, número de conflitos diários em torno da rotina, relatos da escola, qualidade do sono e, principalmente, como a criança se sente a respeito de si mesma.",
          "Vale acompanhar também os indicadores de sobrecarga, que às vezes acompanham a melhora dos sintomas: aumento de irritabilidade, resistência crescente às atividades e piora do sono precisam ser levados à equipe.",
          "Revisões periódicas do plano são parte do tratamento. O que funcionava aos oito anos pode não funcionar aos doze, e a composição das intervenções precisa acompanhar a mudança da demanda.",
        ],
      },
    ],
    faq: [
      {
        q: "Dá para tratar TDAH sem medicação?",
        a: "Sim, e em crianças menores e quadros leves a moderados essa costuma ser a primeira escolha. Intervenções comportamentais, treino de funções executivas, orientação parental e adaptações escolares produzem resultado consistente.",
      },
      {
        q: "A medicação vai mudar a personalidade do meu filho?",
        a: "Não é isso que se espera de um tratamento bem ajustado. Apatia ou perda de expressividade indicam dose inadequada e devem ser relatadas ao médico, que avaliará o ajuste necessário.",
      },
      {
        q: "Preciso dar remédio nos fins de semana e férias?",
        a: "O esquema varia conforme o tipo de medicação, a idade e as demandas da criança. Algumas famílias, com orientação médica, suspendem em períodos de férias, e outras mantêm uso contínuo porque as dificuldades não se restringem à escola.",
      },
      {
        q: "Quanto tempo até ver resultado?",
        a: "Depende da intervenção. Adaptações escolares e mudanças de rotina podem mostrar efeito em semanas. Treino de funções executivas é progressivo e se mede em meses. O tratamento medicamentoso, quando indicado, costuma ter efeito mais rápido sobre os sintomas nucleares.",
      },
      {
        q: "O plano de saúde cobre as terapias?",
        a: "A cobertura de sessões com psicólogo é prevista conforme as regras vigentes do setor, mediante indicação médica. Vale reunir relatório com justificativa clínica e frequência recomendada, e solicitar eventual negativa por escrito.",
      },
    ],
    references: [REF_NICE_TDAH, REF_CONSENSO_TDAH, REF_DSM, REF_ABENEPI, REF_MEC_INCLUSAO, REF_LBI],
  },
  {
    slug: "o-que-e-ansiedade-infantil",
    title: "Ansiedade infantil: o que é, sintomas e tratamento",
    metaTitle: "Ansiedade infantil: sintomas, causas e tratamento | Instituto Matriz",
    metaDescription:
      "Entenda o que é ansiedade infantil, como diferenciá-la do medo normal da idade, quais são os sintomas, as causas e como é feito o tratamento.",
    excerpt:
      "Ansiedade em criança raramente se parece com preocupação. Costuma aparecer como dor de barriga, irritação ou recusa.",
    category: "Família",
    tint: TEAL,
    readingMinutes: 12,
    date: "2026-07-12",
    stats: [
      {
        value: "6 meses",
        label: "duração típica exigida para caracterizar vários transtornos de ansiedade",
        source: "DSM-5-TR, 2023",
      },
      {
        value: "prejuízo",
        label: "critério central que separa medo esperado de transtorno de ansiedade",
        source: "DSM-5-TR, 2023",
      },
    ],
    intro: [
      "Medo faz parte do desenvolvimento. Medo de estranhos, de separação, do escuro, de monstros e de animais aparecem em fases previsíveis e cumprem função protetora.",
      "Existe, porém, um ponto em que o medo deixa de proteger e passa a limitar. Quando isso acontece, e quando se torna persistente e produz prejuízo, o quadro passa a ser um transtorno de ansiedade, que é a categoria diagnóstica mais frequente na infância.",
      "Este guia explica o que caracteriza a ansiedade clínica, como ela se manifesta em crianças, o que a causa, como é tratada, e por que a estratégia mais intuitiva das famílias costuma piorar o quadro.",
    ],
    sections: [
      {
        heading: "O que é ansiedade infantil?",
        paragraphs: [
          "Ansiedade é uma resposta antecipatória a uma ameaça percebida. Ela é normal, adaptativa e necessária: prepara o organismo para reagir e ajuda a evitar situações de risco real.",
          "O que caracteriza um transtorno é a desproporção e o prejuízo. A resposta ansiosa aparece diante de situações que não representam ameaça real, com intensidade desproporcional, persistência ao longo do tempo, e impede a criança de fazer coisas que ela gostaria ou precisaria fazer.",
          "Existem diferentes apresentações. A ansiedade de separação envolve angústia intensa ao se afastar dos cuidadores. A ansiedade social envolve medo de avaliação em situações sociais. A ansiedade generalizada envolve preocupação excessiva com múltiplos temas. Há ainda fobias específicas e o mutismo seletivo, em que a criança fala em alguns contextos e não em outros.",
          "Vale registrar que ansiedade e medo esperado para a idade não são categorias opostas, e sim pontos de um contínuo. A avaliação define onde aquela criança está nesse contínuo e se há necessidade de intervenção.",
        ],
      },
      {
        heading: "Como a ansiedade se manifesta em crianças?",
        paragraphs: [
          "Raramente pela verbalização de preocupação. Crianças, especialmente as menores, não dizem que estão ansiosas: elas manifestam pelo corpo e pelo comportamento.",
          "As queixas físicas recorrentes são a apresentação mais comum. Dor de barriga e dor de cabeça sem causa clínica identificada, especialmente quando concentradas em dias de aula ou antes de situações específicas, são um sinal frequente.",
          "No comportamento, aparecem a irritabilidade, as explosões desproporcionais diante de mudanças, a recusa de situações novas, a necessidade de garantias repetidas sobre o mesmo assunto e o apego excessivo aos cuidadores.",
          "O sono costuma ser afetado, com dificuldade para adormecer, pesadelos frequentes e resistência a dormir sozinha. Em algumas crianças aparecem regressões, como voltar a fazer xixi na cama.",
          "Um ponto que costuma surpreender as famílias: ansiedade em criança frequentemente parece raiva. A explosão diante de uma demanda pode ser a expressão de uma sobrecarga ansiosa, e não oposição.",
        ],
        bullets: [
          "Queixas físicas recorrentes sem causa clínica",
          "Perguntas repetidas buscando garantia sobre o mesmo tema",
          "Dificuldade para adormecer e pesadelos frequentes",
          "Recusa de situações novas ou de separação",
          "Irritabilidade e explosões diante de mudanças pequenas",
          "Perfeccionismo intenso e medo desproporcional de errar",
          "Evitação progressiva de lugares e atividades",
        ],
      },
      {
        heading: "Quais são as causas?",
        paragraphs: [
          "A origem é multifatorial, combinando predisposição biológica, temperamento, experiências vividas e o modo como o ambiente responde à ansiedade da criança.",
          "Existe componente familiar consistente: filhos de pais com transtornos de ansiedade apresentam risco aumentado, tanto por herança quanto por aprendizagem, já que crianças aprendem a interpretar situações observando a reação dos adultos.",
          "O temperamento tem peso importante. Crianças com inibição comportamental, isto é, tendência a reagir com retraimento e cautela diante do novo, apresentam risco maior de desenvolver quadros ansiosos.",
          "Experiências específicas contribuem: eventos assustadores, mudanças significativas como separação dos pais ou mudança de cidade, luto, e situações de bullying ou de exposição repetida a fracasso.",
          "Um fator frequentemente presente e pouco reconhecido é a coexistência com outras condições. Crianças autistas e crianças com TDAH apresentam taxas elevadas de ansiedade, e nesses casos tratar apenas a ansiedade sem endereçar a condição de base costuma render pouco.",
        ],
      },
      {
        heading: "Por que evitar o que assusta piora o quadro?",
        paragraphs: [
          "Essa é a informação mais importante para as famílias, e a mais contraintuitiva. A estratégia natural de um cuidador é proteger a criança do que a faz sofrer, e é justamente essa proteção que alimenta o ciclo.",
          "O mecanismo é simples. Quando a criança evita a situação temida, a ansiedade cai imediatamente. Esse alívio funciona como reforço: ensina que evitar funciona e que a situação era, de fato, perigosa. Na próxima vez, a necessidade de evitar será maior.",
          "Com a repetição, a lista de situações evitadas cresce. É comum que famílias reorganizem a rotina inteira em torno dos gatilhos da criança, e essa reorganização, embora reduza os episódios visíveis, consolida o quadro.",
          "O mesmo vale para a busca de garantia. Responder repetidamente à mesma pergunta ansiosa alivia por instantes e alimenta o ciclo, porque ensina que a tranquilidade depende da confirmação externa.",
          "O tratamento caminha na direção oposta: exposição gradual e apoiada às situações temidas, em doses que a criança consiga sustentar, para que ela descubra por experiência própria que consegue lidar.",
        ],
      },
      {
        heading: "Como é o tratamento?",
        paragraphs: [
          "A abordagem com melhor respaldo é a terapia cognitivo-comportamental adaptada à idade, com exposição gradual como componente central.",
          "O trabalho envolve ajudar a criança a reconhecer os sinais corporais da ansiedade, a identificar os pensamentos que acompanham a resposta ansiosa, a testar esses pensamentos contra a realidade e a enfrentar de forma progressiva as situações evitadas.",
          "A exposição é planejada em etapas, do mais fácil ao mais difícil, sempre com a criança participando da construção da sequência. Ela não é confronto abrupto, e sim aproximação sucessiva com apoio, e cada etapa é repetida até deixar de gerar ansiedade significativa.",
          "A orientação aos cuidadores é parte estruturante do tratamento. Os pais aprendem a validar a emoção sem validar a interpretação de perigo, a reduzir progressivamente as garantias repetidas, e a apoiar a exposição em vez de facilitar a evitação.",
          "Em quadros intensos, e sempre por decisão médica, o tratamento medicamentoso pode compor o plano, geralmente combinado à psicoterapia.",
          "Cuidados de base também contribuem: sono adequado, atividade física, rotina previsível e redução de sobrecarga de agenda.",
        ],
        bullets: [
          "Terapia cognitivo-comportamental adaptada à idade",
          "Exposição gradual e planejada às situações evitadas",
          "Orientação aos cuidadores sobre validar sem alimentar a evitação",
          "Redução progressiva das garantias repetidas",
          "Sono, atividade física e rotina previsível como base",
          "Tratamento medicamentoso em quadros intensos, por indicação médica",
        ],
      },
      {
        heading: "Quando procurar ajuda profissional?",
        paragraphs: [
          "Quando o medo impede a criança de fazer coisas que ela gostaria ou precisaria fazer, quando os sintomas persistem por meses, ou quando a família já reorganizou a rotina para evitar os gatilhos.",
          "Também merece avaliação a presença de queixas físicas recorrentes sem causa clínica identificada, principalmente quando concentradas em dias e situações específicas.",
          "Situações que pedem avaliação sem demora incluem recusa escolar persistente, isolamento social crescente, alterações importantes de sono ou apetite, e qualquer fala de desvalorização ou de desesperança.",
          "Uma orientação prática para os cuidadores: o objetivo não é uma criança sem medo. É uma criança que consegue sentir medo e ainda assim fazer o que precisa e o que deseja. Essa é a meta que o tratamento persegue.",
        ],
      },
    ],
    faq: [
      {
        q: "Como diferenciar ansiedade de birra?",
        a: "A birra costuma ter objetivo claro e cessa quando o objetivo é alcançado ou definitivamente descartado. A resposta ansiosa é disparada por antecipação de ameaça, aparece em situações específicas e vem frequentemente acompanhada de sintomas físicos.",
      },
      {
        q: "Devo tirar meu filho da escola se ele sofre muito para ir?",
        a: "Afastamentos prolongados costumam agravar o quadro, porque cada falta alivia no curto prazo e fortalece a evitação. A conduta indicada é buscar o retorno mais rápido possível, com apoio, ajustes e investigação da causa.",
      },
      {
        q: "Ansiedade infantil precisa de remédio?",
        a: "Na maioria dos casos, a psicoterapia com abordagem cognitivo-comportamental é suficiente. Em quadros intensos ou com prejuízo importante, o tratamento medicamentoso pode ser indicado por médico, geralmente combinado à terapia.",
      },
      {
        q: "Meu filho autista tem muita ansiedade. É normal?",
        a: "É bastante frequente. Crianças autistas apresentam taxas elevadas de ansiedade, frequentemente ligadas a imprevisibilidade e a sobrecarga sensorial. Nesses casos, o trabalho combina o tratamento da ansiedade com ajustes de previsibilidade e de ambiente.",
      },
      {
        q: "Responder às perguntas repetidas dele não é acolher?",
        a: "Acolher é reconhecer a emoção e transmitir confiança de que a criança dá conta. Responder repetidamente à mesma pergunta alivia por instantes e alimenta o ciclo, ensinando que a tranquilidade depende de confirmação externa constante.",
      },
    ],
    references: [REF_DSM, REF_CID, REF_CFP, REF_ABENEPI, REF_SBP_SONO],
  },
];
