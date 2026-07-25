import type { RawPost } from "@/data/postTypes";
import { BLUE } from "@/data/postTypes";
import {
  REF_DSM,
  REF_CID,
  REF_LANCET_TEA,
  REF_AAP_TEA,
  REF_MS_TEA,
  REF_SBP_TEA,
  REF_DENVER,
  REF_CDC,
  REF_LEI_BERENICE,
  REF_LBI,
  REF_ANS,
} from "@/data/pilares/referencias";

export const pilaresAutismo3: RawPost[] = [
  {
    slug: "autismo-tem-cura",
    title: "Autismo tem cura?",
    metaTitle: "Autismo tem cura? O que a ciência mostra | Instituto Matriz",
    metaDescription:
      "Entenda por que o autismo não tem cura, o que a intervenção realmente muda, e como identificar promessas de tratamento sem respaldo científico.",
    excerpt:
      "A resposta é não, e entender o porquê é o que separa um plano de cuidado honesto de uma promessa que custa caro.",
    category: "Autismo",
    tint: BLUE,
    readingMinutes: 12,
    date: "2026-07-02",
    stats: [
      {
        value: "1998",
        label: "ano do estudo fraudulento que associou vacinas ao autismo, depois retirado da publicação",
        source: "The Lancet, retratação publicada em 2010",
      },
      {
        value: "toda a vida",
        label: "duração da condição, que é do neurodesenvolvimento e não uma doença aguda",
        source: "DSM-5-TR, 2023",
      },
    ],
    intro: [
      "Poucas perguntas aparecem com tanta frequência logo após o diagnóstico. Ela costuma vir carregada de esperança, e a resposta honesta parece dura em um primeiro momento.",
      "O autismo não tem cura. Ele não é uma doença que se instala e pode ser removida, e sim uma forma de funcionamento do sistema nervoso que acompanha a pessoa ao longo de toda a vida.",
      "O que essa frase não diz, e precisa ser dito com a mesma clareza, é que o desfecho muda enormemente com intervenção adequada. Este guia explica o que exatamente muda, o que não muda, e como reconhecer promessas que não se sustentam.",
    ],
    sections: [
      {
        heading: "Por que o autismo não tem cura?",
        paragraphs: [
          "Porque a premissa da pergunta não corresponde à natureza da condição. Cura é um conceito aplicável a doenças: estados patológicos que se instalam sobre um funcionamento prévio saudável e que podem, em tese, ser revertidos.",
          "O autismo não funciona assim. Ele decorre de diferenças na formação e no funcionamento do cérebro, presentes desde as fases iniciais do desenvolvimento. Não existe um estado anterior não autista ao qual retornar.",
          "Essa é a razão pela qual as classificações diagnósticas o descrevem como uma condição do neurodesenvolvimento, e não como uma doença. A distinção não é semântica: ela define o que o tratamento pode e não pode prometer.",
          "Há uma consequência prática importante. Um plano de cuidado que parte da busca por cura tende a medir sucesso pelo desaparecimento das características autistas, o que leva a intervenções focadas em fazer a pessoa parecer típica. Um plano que parte da compreensão correta mede sucesso por autonomia, comunicação e qualidade de vida, que é o que de fato muda a vida da pessoa.",
        ],
      },
      {
        heading: "O que a intervenção realmente muda?",
        paragraphs: [
          "Muda bastante, e vale detalhar em que dimensões, porque a expectativa mal calibrada é fonte frequente de frustração.",
          "A primeira dimensão é a comunicação. Crianças que iniciam intervenção cedo frequentemente desenvolvem linguagem funcional, seja oral, seja por recursos alternativos. Sair da ausência de comunicação para a comunicação funcional é, provavelmente, a mudança de maior impacto na vida de uma pessoa autista e de sua família.",
          "A segunda é a autonomia nas atividades diárias: alimentar-se, vestir-se, cuidar da própria higiene, deslocar-se, gerenciar a própria rotina. Esses ganhos determinam boa parte da independência na vida adulta.",
          "A terceira é a regulação emocional e comportamental. Comportamentos de crise frequentemente são a única forma disponível de comunicar sobrecarga ou necessidade. Quando a criança adquire outras formas de comunicar e estratégias de regulação, esses episódios tendem a diminuir de forma significativa.",
          "A quarta é a participação social: conseguir estudar em escola regular, ter vínculos, participar de atividades em comunidade. Essa dimensão depende tanto do desenvolvimento da pessoa quanto da redução de barreiras do ambiente.",
        ],
        bullets: [
          "Desenvolvimento de comunicação funcional, oral ou alternativa",
          "Autonomia nas atividades da vida diária",
          "Estratégias de regulação emocional e redução de crises",
          "Participação escolar e social com os apoios adequados",
          "Redução de barreiras no ambiente, e não apenas mudança na pessoa",
        ],
      },
      {
        heading: "Existem casos em que o diagnóstico deixa de se aplicar?",
        paragraphs: [
          "Existem relatos, na literatura, de pessoas que ao longo do desenvolvimento deixaram de preencher os critérios diagnósticos. Esse fenômeno é descrito e estudado, e merece uma leitura cuidadosa.",
          "A interpretação mais defensável é que o perfil de necessidade de suporte mudou de forma importante, com desenvolvimento de habilidades e estratégias compensatórias, e não que a condição de base desapareceu. Muitas dessas pessoas continuam relatando diferenças no processamento social e sensorial, ainda que sem prejuízo suficiente para configurar diagnóstico.",
          "Também é preciso considerar que parte desses casos pode envolver diagnóstico inicial feito muito cedo, em quadros limítrofes, onde a estabilidade diagnóstica é naturalmente menor.",
          "O que essa discussão não autoriza é a promessa de reversão. Nenhuma intervenção pode garantir esse desfecho, e usar esses casos como argumento de venda é uma distorção que gera expectativa injusta nas famílias.",
        ],
      },
      {
        heading: "Como reconhecer tratamentos sem respaldo?",
        paragraphs: [
          "O mercado de promessas em torno do autismo é grande, e algumas dessas ofertas são caras, ineficazes e, em certos casos, perigosas. Alguns sinais ajudam a identificá-las.",
          "O primeiro sinal é a promessa de cura ou de reversão. Nenhuma abordagem com respaldo científico se apresenta dessa forma, porque nenhuma pode sustentar essa afirmação.",
          "O segundo é a alegação de que funciona para todos os casos. Dada a heterogeneidade do espectro, qualquer proposta que se apresente como solução universal está ignorando o que é mais básico sobre a condição.",
          "O terceiro é a ausência de avaliação individualizada antes de iniciar, e a ausência de medição de resultados ao longo do processo. Intervenção séria começa por avaliar e continua medindo.",
          "O quarto é o apelo à conspiração: a alegação de que a medicina convencional esconde o tratamento, ou de que os profissionais têm interesse em manter as famílias dependentes.",
          "Entre as abordagens sem respaldo que circulam com frequência estão substâncias de uso oral apresentadas como desintoxicantes, quelação, câmaras hiperbáricas para essa finalidade, dietas restritivas severas sem indicação clínica e suplementações em altas doses. Algumas delas apresentam risco real à saúde.",
        ],
        bullets: [
          "Promessa de cura, reversão ou de tirar do espectro",
          "Alegação de funcionar para todos os casos",
          "Ausência de avaliação individual e de medição de resultados",
          "Discurso de conspiração contra a medicina convencional",
          "Custo alto com exigência de pagamento antecipado longo",
          "Recomendação de suspender tratamentos com evidência",
        ],
      },
      {
        heading: "O que tem respaldo científico?",
        paragraphs: [
          "As abordagens com melhor respaldo compartilham características comuns: são individualizadas, partem de avaliação, definem objetivos funcionais e medem resultados ao longo do processo.",
          "Intervenções baseadas em análise do comportamento estão entre as mais estudadas, com resultados descritos principalmente em linguagem, habilidades adaptativas e funcionamento cognitivo. O Modelo Denver de Intervenção Precoce, que combina princípios comportamentais com abordagem desenvolvimentista dentro da brincadeira, foi avaliado em ensaio clínico randomizado com crianças pequenas.",
          "A fonoaudiologia atua no desenvolvimento da comunicação, incluindo recursos alternativos. A terapia ocupacional trabalha autonomia e processamento sensorial. O acompanhamento psicológico apoia regulação emocional e habilidades sociais, além de quadros associados como ansiedade.",
          "A medicação, quando indicada por médico, trata sintomas associados específicos, como irritabilidade intensa, alterações graves do sono ou sintomas de TDAH coexistente. Ela não trata o autismo em si, e essa distinção deve ficar clara na conversa com o prescritor.",
          "Um elemento frequentemente subestimado é o suporte à família. A saúde mental dos cuidadores é um dos preditores mais consistentes da evolução da criança, o que faz do apoio familiar parte do tratamento, e não um acréscimo opcional.",
        ],
      },
      {
        heading: "Vacinas causam autismo?",
        paragraphs: [
          "Não. Essa é uma das afirmações mais bem estabelecidas na literatura sobre o tema, e merece ser dita sem qualquer hesitação.",
          "A ideia teve origem em um estudo publicado em 1998, com doze participantes, que posteriormente foi retirado da publicação por fraude. Investigações apuraram manipulação de dados e conflito de interesses não declarado, e o autor principal teve o registro médico cassado.",
          "Desde então, a hipótese foi investigada em estudos de larga escala, envolvendo milhões de crianças em diferentes países, com metodologias variadas. Nenhum deles encontrou associação entre vacinação e autismo.",
          "Esse episódio produziu consequências concretas: queda de cobertura vacinal e retorno de surtos de doenças evitáveis em vários países. Para as famílias, o custo adicional foi a culpa injustamente carregada por quem vacinou os filhos.",
        ],
      },
      {
        heading: "Que expectativa é realista?",
        paragraphs: [
          "A expectativa realista é de desenvolvimento contínuo, com ganhos que dependem do perfil da pessoa, da idade de início da intervenção, da consistência do acompanhamento e do suporte disponível no ambiente.",
          "Prognósticos individuais precisos não são possíveis, e desconfiar de quem os oferece é prudente. Existem, porém, indicadores associados a melhor evolução: início precoce da intervenção, desenvolvimento de comunicação funcional, ausência de deficiência intelectual associada e envolvimento consistente da família.",
          "Vale também situar o horizonte: pessoas autistas adultas estudam, trabalham, constituem vínculos e vivem com autonomia em graus variados, e o suporte adequado ao longo da vida é o que mais influencia esse desfecho.",
          "Por fim, uma mudança de enquadramento que costuma ajudar as famílias. A pergunta mais útil não é como tornar meu filho não autista, e sim como garantir que ele se comunique, tenha autonomia possível e seja feliz sendo quem é. É essa segunda pergunta que a intervenção sabe responder.",
        ],
      },
    ],
    faq: [
      {
        q: "Meu filho pode sair do espectro?",
        a: "Algumas pessoas deixam de preencher critérios diagnósticos ao longo do desenvolvimento, o que costuma refletir mudança no perfil de necessidade de suporte e não desaparecimento da condição. Nenhuma intervenção pode prometer esse desfecho.",
      },
      {
        q: "Dieta sem glúten e sem caseína funciona?",
        a: "Não há respaldo suficiente para indicar essas dietas como tratamento do autismo. Restrições alimentares sem indicação clínica podem causar prejuízo nutricional, especialmente em crianças que já têm repertório alimentar restrito, e devem ser discutidas com a equipe.",
      },
      {
        q: "Quanto mais horas de terapia, melhor o resultado?",
        a: "Não linearmente. Existe preocupação legítima com sobrecarga, já que o tempo livre é justamente quando a criança generaliza o aprendido. Sinais de sobrecarga, como aumento de crises e resistência às sessões, devem ser levados à equipe.",
      },
      {
        q: "Se não tem cura, vale a pena investir em terapia?",
        a: "Vale, e bastante. A intervenção não busca eliminar a condição, e sim desenvolver comunicação, autonomia e regulação, que são exatamente os fatores que determinam qualidade de vida e independência ao longo do tempo.",
      },
      {
        q: "Existe idade em que não adianta mais começar?",
        a: "Não. O início precoce traz vantagens, mas o cérebro mantém plasticidade ao longo da vida. Em crianças maiores, adolescentes e adultos, os objetivos mudam para autonomia, habilidades sociais e autoconhecimento, com ganhos reais.",
      },
    ],
    references: [REF_DSM, REF_LANCET_TEA, REF_AAP_TEA, REF_MS_TEA, REF_SBP_TEA, REF_DENVER],
  },
  {
    slug: "o-que-e-intervencao-precoce",
    title: "O que é intervenção precoce e por que ela importa tanto?",
    metaTitle: "Intervenção precoce no autismo: o que é e por que importa | Instituto Matriz",
    metaDescription:
      "Entenda o que é intervenção precoce, por que os primeiros anos são decisivos, quais abordagens são usadas e como começar mesmo sem diagnóstico fechado.",
    excerpt:
      "A janela dos primeiros anos não se repete. Entenda o que a intervenção precoce faz e por que esperar custa caro.",
    category: "Terapia",
    tint: BLUE,
    readingMinutes: 12,
    date: "2026-07-04",
    stats: [
      {
        value: "0 a 3 anos",
        label: "período de maior plasticidade cerebral e formação acelerada de conexões",
        source: "Literatura sobre desenvolvimento neurológico infantil",
      },
      {
        value: "18 a 24 meses",
        label: "idade a partir da qual o diagnóstico de TEA costuma ser confiável",
        source: "American Academy of Pediatrics, 2020",
      },
      {
        value: "12 a 48 meses",
        label: "faixa etária avaliada no ensaio clínico do Modelo Denver",
        source: "Dawson G et al., Pediatrics, 2010",
      },
    ],
    intro: [
      "Intervenção precoce é provavelmente o termo mais repetido nas orientações às famílias depois de um diagnóstico, e um dos menos explicados. O que exatamente ela é, o que faz e por que o tempo importa tanto?",
      "A resposta curta: é o conjunto de ações terapêuticas e educacionais iniciadas nos primeiros anos de vida, no período em que o cérebro está formando e refinando conexões em ritmo acelerado.",
      "Este guia explica o que fundamenta essa recomendação, quais abordagens são usadas, o papel da família e por que não é necessário esperar o diagnóstico fechado para começar.",
    ],
    sections: [
      {
        heading: "O que é intervenção precoce?",
        paragraphs: [
          "É o conjunto de intervenções terapêuticas e educacionais oferecidas nos primeiros anos de vida a crianças com atraso no desenvolvimento ou com risco identificado, com o objetivo de favorecer aquisições que não estão acontecendo espontaneamente no ritmo esperado.",
          "Ela não se restringe ao autismo. Aplica-se também a atrasos de linguagem, atrasos motores, prematuridade, síndromes genéticas e a qualquer situação em que o desenvolvimento esteja em risco.",
          "Uma característica distintiva é que a intervenção precoce trabalha dentro das rotinas naturais da criança, e não apenas em sessões isoladas de consultório. Brincadeira, alimentação, banho e troca são contextos de ensino, porque são onde a criança está e onde o aprendizado precisa se aplicar.",
          "Outra característica é a centralidade da família. Nessa faixa etária, a quantidade de horas que a criança passa com os cuidadores supera em muito a das sessões, e por isso capacitar a família é parte estruturante do modelo, e não um adicional.",
        ],
      },
      {
        heading: "Por que os primeiros anos são decisivos?",
        paragraphs: [
          "Porque nesse período o cérebro apresenta o maior nível de plasticidade de toda a vida. A formação de conexões entre neurônios ocorre em ritmo acelerado, e a experiência tem papel direto em quais conexões se fortalecem e quais são eliminadas.",
          "Esse processo de refinamento faz com que o que é praticado se consolide e o que não é praticado tenda a se perder. Uma criança que não experimenta interação social recíproca nesse período não está apenas deixando de praticar: ela está deixando de fortalecer os circuitos que sustentam essa habilidade.",
          "É por isso que a mesma quantidade de intervenção tende a produzir mais resultado aos dois anos do que aos oito. Não se trata de uma porta que se fecha, porque o cérebro mantém plasticidade ao longo da vida, mas de uma janela em que o retorno sobre o investimento é maior.",
          "Há ainda um efeito cumulativo importante. Cada habilidade adquirida abre caminho para as seguintes. Uma criança que desenvolve atenção compartilhada ganha acesso ao aprendizado de linguagem, que por sua vez abre acesso a interação social mais complexa. Intervir cedo não acelera apenas uma habilidade: destrava uma sequência.",
        ],
      },
      {
        heading: "Preciso esperar o diagnóstico para começar?",
        paragraphs: [
          "Não, e essa é uma das informações mais importantes deste texto. A intervenção não depende de diagnóstico fechado para começar quando há sinais de risco identificados.",
          "A justificativa é simples: as ações iniciais de estimulação de linguagem, de interação social e de regulação sensorial são benéficas para qualquer criança com atraso no desenvolvimento, independentemente da causa. Não há risco em estimular uma criança que, ao final, se verificará ter desenvolvimento típico.",
          "Como os processos diagnósticos podem levar semanas ou meses, e como filas de espera são realidade em muitos serviços, esse período pode representar uma fração significativa da janela mais eficiente de intervenção. Deixá-lo passar em espera passiva tem custo real.",
          "Na prática, isso significa que ao identificar sinais de alerta a família pode iniciar avaliação e estimulação em paralelo, ajustando o plano conforme as conclusões diagnósticas forem sendo definidas.",
        ],
      },
      {
        heading: "Quais abordagens são usadas?",
        paragraphs: [
          "As abordagens variam conforme o perfil e os objetivos, mas compartilham alguns princípios: acontecem em contexto natural, usam a brincadeira como meio, seguem o interesse da criança e envolvem os cuidadores de forma ativa.",
          "O Modelo Denver de Intervenção Precoce é uma das abordagens mais citadas nesse contexto. Ele combina princípios da análise do comportamento com abordagem desenvolvimentista, trabalhando objetivos dentro da brincadeira e da rotina, e foi avaliado em ensaio clínico randomizado com crianças pequenas.",
          "Intervenções fonoaudiológicas nessa faixa focam menos em produção de palavras e mais nos precursores da linguagem: atenção compartilhada, intenção comunicativa, imitação e uso de gestos. Esses precursores são o que sustenta a fala quando ela vem.",
          "A terapia ocupacional trabalha regulação sensorial, exploração do ambiente, brincadeira e as primeiras aquisições de autonomia. Fisioterapia entra quando há atraso motor associado.",
          "Um elemento transversal é a orientação parental estruturada, em que os cuidadores aprendem estratégias específicas para aplicar nas rotinas diárias, multiplicando as oportunidades de aprendizado ao longo da semana inteira.",
        ],
        bullets: [
          "Trabalho dentro de rotinas naturais, e não apenas em consultório",
          "Brincadeira como principal contexto de ensino",
          "Foco em precursores de linguagem antes da fala em si",
          "Regulação sensorial e exploração do ambiente",
          "Capacitação sistemática dos cuidadores",
          "Objetivos funcionais definidos após avaliação",
        ],
      },
      {
        heading: "Qual é o papel da família?",
        paragraphs: [
          "Central, e vale entender por quê em termos concretos. Uma criança de dois anos passa a maior parte do tempo acordada com seus cuidadores. Duas ou três sessões semanais de terapia representam uma fração pequena das horas disponíveis para aprendizado.",
          "Quando a família aplica estratégias no dia a dia, cada troca de fralda, cada refeição e cada banho vira oportunidade de trabalhar comunicação e interação. É essa multiplicação que produz a diferença observada nos estudos entre programas com e sem envolvimento parental.",
          "As estratégias mais comuns são simples de descrever e exigem prática para se tornarem automáticas: ficar na altura dos olhos da criança, seguir o interesse dela em vez de dirigir a atividade, criar pausas em brincadeiras previsíveis para dar oportunidade de comunicação, comentar em vez de perguntar, e responder a qualquer tentativa comunicativa, incluindo olhar e gesto.",
          "É importante dizer também o que o papel da família não é. Os pais não devem se tornar terapeutas do próprio filho nem transformar toda interação em sessão de treino. A relação afetiva precisa ser preservada, e o excesso de demanda sobre os cuidadores costuma produzir esgotamento, que por sua vez prejudica a criança.",
        ],
      },
      {
        heading: "Como começar na prática?",
        paragraphs: [
          "O primeiro passo é a avaliação, que define o ponto de partida e os objetivos. Ela pode ser conduzida por uma equipe interdisciplinar, e é a partir dela que se monta o plano.",
          "O segundo passo é definir prioridades. Nem tudo precisa começar ao mesmo tempo, e tentar avançar em todas as frentes simultaneamente costuma diluir o esforço e sobrecarregar a criança. Se a comunicação é a maior lacuna, ela vem primeiro.",
          "O terceiro é organizar uma agenda sustentável, considerando deslocamentos, rotina de sono e tempo livre. Uma criança pequena precisa de descanso e de brincadeira não estruturada, e esses períodos fazem parte do desenvolvimento, não competem com ele.",
          "O quarto é estabelecer comunicação entre os profissionais envolvidos. Quando fonoaudiologia, terapia ocupacional e psicologia trabalham objetivos alinhados em contextos diferentes, o efeito é maior que a soma das sessões isoladas.",
          "Sobre cobertura, a regulamentação do setor de saúde suplementar prevê sessões com psicólogo, fonoaudiólogo, terapeuta ocupacional e fisioterapeuta mediante indicação médica, sem limite numérico para transtornos globais do desenvolvimento. Reunir relatório com indicação, frequência e justificativa clínica é o que sustenta a solicitação.",
        ],
      },
      {
        heading: "Quando procurar ajuda?",
        paragraphs: [
          "Diante de qualquer sinal de alerta no desenvolvimento, sem aguardar. Os principais marcos que justificam avaliação estão bem estabelecidos e são de observação relativamente simples.",
          "Aos doze meses, chamam atenção a ausência de resposta ao nome, de balbucio variado e de gestos como apontar e acenar. Aos dezoito meses, a ausência de palavras com significado. Aos vinte e quatro meses, a ausência de combinação de duas palavras.",
          "Em qualquer idade, a perda de habilidades já adquiridas exige avaliação imediata, assim como atrasos motores importantes e ausência de interesse por interação social.",
          "Vale encerrar com o argumento que costuma ser mais convincente para famílias em dúvida: o custo de avaliar uma criança que se revelará típica é uma consulta e tranquilidade. O custo de esperar uma criança que precisava de intervenção é uma parte da janela mais eficiente do desenvolvimento. Os riscos não são simétricos.",
        ],
      },
    ],
    faq: [
      {
        q: "A partir de que idade posso iniciar intervenção?",
        a: "Não há idade mínima. Diante de sinais de risco identificados, a estimulação pode começar imediatamente, inclusive antes de um diagnóstico fechado, porque as ações iniciais beneficiam qualquer criança com atraso no desenvolvimento.",
      },
      {
        q: "Se meu filho não tem diagnóstico, o plano cobre?",
        a: "A cobertura costuma exigir indicação médica com justificativa clínica. Um relatório que descreva os sinais observados e a necessidade de estimulação pode sustentar a solicitação mesmo antes da conclusão diagnóstica, conforme as regras vigentes do setor.",
      },
      {
        q: "Quantas horas semanais são necessárias?",
        a: "Não existe número universal. A carga deve ser definida a partir dos objetivos e do perfil da criança, preservando tempo livre e descanso. Sinais de sobrecarga, como aumento de crises e piora do sono, indicam necessidade de rever a agenda.",
      },
      {
        q: "Perdi a janela se meu filho já tem 5 anos?",
        a: "Não. A janela dos primeiros anos oferece vantagem, mas não é um portão que se fecha. O cérebro mantém plasticidade ao longo da vida, e intervenções iniciadas depois produzem ganhos reais, com objetivos ajustados à idade.",
      },
    ],
    references: [REF_DENVER, REF_AAP_TEA, REF_MS_TEA, REF_CDC, REF_SBP_TEA, REF_ANS],
  },
  {
    slug: "autismo-e-genetico-causas",
    title: "O autismo é genético? O que se sabe sobre as causas",
    metaTitle: "Autismo é genético? Causas do TEA | Instituto Matriz",
    metaDescription:
      "Entenda o que a ciência sabe sobre as causas do autismo: papel da genética, fatores ambientais, o que não causa autismo e quando o teste genético é indicado.",
    excerpt:
      "A pergunta sobre causa vem quase sempre acompanhada de culpa. Entenda o que a evidência realmente mostra.",
    category: "Autismo",
    tint: BLUE,
    readingMinutes: 12,
    date: "2026-07-06",
    stats: [
      {
        value: "centenas",
        label: "de variantes genéticas já associadas ao TEA, cada uma com efeito pequeno",
        source: "The Lancet, seminário sobre TEA, 2018",
      },
      {
        value: "1998",
        label: "ano do estudo fraudulento sobre vacinas, retirado da publicação em 2010",
        source: "The Lancet, retratação",
      },
    ],
    intro: [
      "Depois do diagnóstico, a pergunta sobre a causa aparece quase sempre, e raramente é apenas técnica. Ela costuma vir acompanhada de uma busca por responsabilidade: foi algo que fizemos, algo que deixamos de fazer, algo da gestação.",
      "A resposta científica é ao mesmo tempo clara e incompleta. Clara quanto ao peso predominante de fatores genéticos e biológicos. Incompleta quanto à possibilidade de apontar, no caso individual, uma causa específica.",
      "Este guia percorre o que se sabe: o papel da genética, quais fatores ambientais têm associação documentada, o que comprovadamente não causa autismo, e em que situações o teste genético é indicado.",
    ],
    sections: [
      {
        heading: "Qual é o peso da genética?",
        paragraphs: [
          "A genética responde pela maior parte da variação observada. Essa conclusão vem principalmente de estudos com gêmeos e com famílias, que comparam a frequência da condição entre pessoas com diferentes graus de parentesco.",
          "Gêmeos idênticos, que compartilham praticamente todo o material genético, apresentam concordância bem maior do que gêmeos fraternos, que compartilham cerca de metade. Essa diferença é a base da estimativa de herdabilidade elevada.",
          "Da mesma forma, famílias que já têm um filho autista apresentam probabilidade maior de ter outro em comparação com a população geral, o que é consistente com contribuição genética significativa.",
          "É importante interpretar herdabilidade corretamente. Ela descreve o quanto da variação em uma população se explica por fatores genéticos, e não o quanto o autismo de uma pessoa específica foi causado por genes. São afirmações diferentes, e confundi-las gera conclusões equivocadas.",
        ],
      },
      {
        heading: "Existe um gene do autismo?",
        paragraphs: [
          "Não. Essa é uma das descobertas mais consistentes das últimas décadas de pesquisa, e ela explica por que o quadro é tão heterogêneo.",
          "Foram identificadas centenas de variantes genéticas associadas ao TEA. A maioria delas contribui com uma parcela pequena do risco, e é a combinação de muitas variantes, somada a fatores biológicos do desenvolvimento, que produz o quadro.",
          "Diferentes combinações resultam em apresentações diferentes, o que ajuda a explicar por que duas pessoas com o mesmo diagnóstico podem ter perfis quase opostos em linguagem, cognição e necessidade de suporte.",
          "Existe um grupo menor de casos em que o autismo aparece associado a alterações genéticas específicas e identificáveis, incluindo síndromes conhecidas. Nesses casos, um exame pode localizar a alteração, e essa informação tem implicações para o acompanhamento clínico e para o aconselhamento familiar.",
        ],
      },
      {
        heading: "Quais fatores ambientais têm associação documentada?",
        paragraphs: [
          "Alguns fatores foram associados a aumento de risco em estudos populacionais, sempre em interação com a predisposição genética e sempre com efeito de magnitude pequena.",
          "Entre eles estão a idade parental avançada, especialmente paterna, a prematuridade extrema e o baixo peso ao nascer, complicações graves no período perinatal, e a exposição a determinadas substâncias durante a gestação, incluindo alguns medicamentos cujo uso é avaliado caso a caso pelo médico.",
          "É essencial entender a natureza dessa informação. São associações estatísticas observadas em grandes populações, não causas identificáveis no caso individual. A imensa maioria das crianças expostas a esses fatores não desenvolve autismo, e muitas crianças autistas não tiveram nenhuma dessas exposições.",
          "Por isso, essa lista não deve ser lida como um roteiro de culpa retrospectiva. Ela orienta pesquisa e políticas de saúde, e não a reconstrução da história individual de uma família.",
        ],
      },
      {
        heading: "O que comprovadamente não causa autismo",
        paragraphs: [
          "Algumas atribuições de causa circulam há décadas, causam dano concreto e merecem ser desfeitas de forma direta.",
          "Vacinas não causam autismo. A ideia teve origem em um estudo de 1998 retirado da publicação por fraude, e desde então múltiplos estudos de larga escala, envolvendo milhões de crianças, não encontraram qualquer associação. A consequência dessa desinformação foi queda de cobertura vacinal e retorno de surtos de doenças evitáveis.",
          "A forma de criar os filhos não causa autismo. A chamada teoria da mãe geladeira, que atribuía a condição à frieza afetiva materna, foi abandonada pela ciência e causou sofrimento imenso a uma geração de famílias.",
          "Tempo de tela não causa autismo. Exposição excessiva pode afetar oportunidades de interação e linguagem, e por isso é objeto de recomendação pediátrica, mas não é causa da condição.",
          "Alimentação, glúten, açúcar e vínculo materno insuficiente também não figuram como causas. Vale acrescentar um ponto importante: a ausência de culpa não é apenas uma questão de conforto emocional. Famílias que carregam culpa injustificada tendem a se tornar mais vulneráveis a promessas de cura sem respaldo.",
        ],
        bullets: [
          "Vacinas, hipótese investigada e descartada em estudos de larga escala",
          "Estilo de criação ou frieza afetiva dos pais",
          "Tempo de tela, que afeta oportunidades mas não causa a condição",
          "Alimentação, glúten ou açúcar",
          "Falta de estímulo ou de afeto na primeira infância",
        ],
      },
      {
        heading: "Quando o teste genético é indicado?",
        paragraphs: [
          "A investigação genética não é rotina para todos os casos, e sua indicação é definida pelo médico a partir de características clínicas específicas.",
          "Ela costuma ser considerada quando há sinais que sugerem uma síndrome genética, como características físicas particulares, malformações associadas, deficiência intelectual significativa, epilepsia de difícil controle ou histórico familiar relevante.",
          "Os tipos de exame variam conforme a suspeita, indo de análises cromossômicas a sequenciamento mais amplo, e a escolha é técnica e individualizada.",
          "É importante calibrar expectativas quanto ao resultado. Na maior parte dos casos, o exame não identifica uma alteração causal, e esse resultado não descarta o diagnóstico de autismo, que continua sendo clínico. Quando uma alteração é identificada, a informação pode orientar acompanhamento clínico específico, esclarecer riscos de recorrência na família e, em algumas condições, indicar condutas particulares.",
        ],
      },
      {
        heading: "Por que a prevalência aumentou nas últimas décadas?",
        paragraphs: [
          "Os números de prevalência do autismo cresceram de forma expressiva ao longo das últimas décadas, e esse dado é frequentemente usado para sustentar a ideia de uma epidemia causada por algum fator ambiental recente. A explicação mais aceita é outra.",
          "O primeiro fator é a mudança nos critérios diagnósticos. Categorias que antes eram separadas foram reunidas sob o diagnóstico único de Transtorno do Espectro Autista, e os critérios passaram a contemplar apresentações que antes não seriam identificadas.",
          "O segundo é o aumento do reconhecimento. Profissionais de saúde e educação estão muito mais informados sobre sinais de alerta do que estavam há trinta anos, e o rastreio se tornou parte do acompanhamento pediátrico em vários lugares.",
          "O terceiro é a ampliação do acesso a serviços de avaliação, e o quarto é a redução do estigma, que faz com que mais famílias procurem investigação em vez de evitá-la.",
          "Isso não significa que fatores ambientais estejam descartados como objeto de pesquisa. Significa que a maior parte do aumento observado é explicada por como se diagnostica e por quem é diagnosticado, e não necessariamente por um aumento equivalente na ocorrência real da condição.",
        ],
        bullets: [
          "Ampliação e unificação dos critérios diagnósticos",
          "Maior conhecimento de profissionais de saúde e educação",
          "Rastreio incorporado ao acompanhamento pediátrico",
          "Ampliação do acesso a serviços de avaliação",
          "Redução do estigma associado ao diagnóstico",
        ],
      },
      {
        heading: "Por que a pergunta sobre a causa importa tanto?",
        paragraphs: [
          "Vale reconhecer que essa pergunta raramente é apenas científica. Ela costuma carregar a busca por uma explicação que devolva algum senso de controle diante de algo que parecia imprevisível.",
          "Entender que a causa é majoritariamente genética e que não houve falha da família costuma trazer alívio real, e esse alívio tem valor clínico: cuidadores menos sobrecarregados por culpa participam melhor do processo terapêutico.",
          "Também vale nomear um efeito prático. A busca prolongada por uma causa específica, quando ela não é identificável, pode consumir energia e recursos que seriam melhor aplicados na intervenção. Em muitos casos, o momento de maior avanço na família coincide com a mudança de foco da pergunta sobre a origem para a pergunta sobre o que fazer daqui em diante.",
          "Isso não significa desencorajar a investigação clínica quando ela é indicada. Significa distinguir a investigação médica orientada, que tem finalidade definida, da busca aberta por um culpado, que não tem resposta e não muda a conduta.",
        ],
      },
    ],
    faq: [
      {
        q: "Se eu tiver outro filho, ele será autista?",
        a: "A probabilidade é maior do que na população geral, mas está longe da certeza. O aconselhamento genético pode ser indicado para discutir o caso específico, principalmente quando há alteração genética identificada na família.",
      },
      {
        q: "Autismo pode ser causado por algo na gravidez?",
        a: "Alguns fatores gestacionais e perinatais foram associados a aumento discreto de risco em estudos populacionais, sempre em interação com a genética. Não é possível apontar, no caso individual, um evento específico como causa.",
      },
      {
        q: "Devo fazer teste genético no meu filho?",
        a: "A indicação é médica e depende de características clínicas específicas, como sinais sugestivos de síndrome, deficiência intelectual associada ou epilepsia. Não é exame de rotina para todos os casos de TEA.",
      },
      {
        q: "Se ninguém na família é autista, como meu filho pode ser?",
        a: "É bastante comum. Muitas variantes genéticas envolvidas surgem espontaneamente, e além disso familiares podem apresentar características do espectro sem nunca terem sido diagnosticados, especialmente em gerações anteriores.",
      },
      {
        q: "A culpa é minha de alguma forma?",
        a: "Não. O autismo não é causado por escolhas de criação, por vínculo insuficiente ou por qualquer falha dos cuidadores. Essa é uma das conclusões mais bem estabelecidas na literatura sobre o tema.",
      },
    ],
    references: [REF_LANCET_TEA, REF_DSM, REF_AAP_TEA, REF_SBP_TEA, REF_MS_TEA],
  },
];
