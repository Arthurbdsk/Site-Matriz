import {
  Brain,
  Ear,
  ClipboardList,
  MessageSquareText,
  Hand,
  HeartHandshake,
  Waves,
  Puzzle,
  Activity,
} from "lucide-react";
import type { ConditionPageProps } from "@/components/ConditionPage";

type ConditionData = Omit<ConditionPageProps, "related"> & {
  slug: string;
  navLabel: string;
  related: ConditionPageProps["related"];
};

export const conditions: ConditionData[] = [
  {
    slug: "autismo",
    navLabel: "Autismo (TEA)",
    icon: Puzzle,
    tint: "#1d4ed8",
    eyebrow: "Transtorno do Espectro Autista",
    title: "Autismo (TEA)",
    metaTitle: "Autismo (TEA): sinais, diagnóstico e tratamento | Instituto Matriz",
    metaDescription:
      "Entenda o que é o Transtorno do Espectro Autista, como é feito o diagnóstico e quais intervenções ajudam a criança a se desenvolver. Atendimento em Barueri, SP.",
    path: "/condicoes/autismo",
    intro: [
      "O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta a comunicação social e o comportamento, com características que variam muito de uma criança para outra.",
      "Quanto mais cedo o diagnóstico e a intervenção começam, maiores as chances de a criança desenvolver habilidades de comunicação, autonomia e convívio social.",
    ],
    signs: {
      title: "Sinais que podem chamar atenção",
      items: [
        "Pouco contato visual ou dificuldade em responder pelo nome",
        "Atraso na fala ou uso incomum da linguagem",
        "Interesses restritos e intensos por temas específicos",
        "Dificuldade em compreender ou participar de brincadeiras compartilhadas",
        "Movimentos repetitivos (balançar as mãos, girar objetos, andar na ponta dos pés)",
        "Forte necessidade de rotina e reação intensa a mudanças",
        "Sensibilidade incomum a sons, texturas, luzes ou cheiros",
      ],
    },
    qas: [
      {
        question: "Como saber se meu filho pode ter autismo?",
        answer: [
          "Não existe um único sinal que confirme o autismo: o que existe é um conjunto de comportamentos relacionados à comunicação social e a padrões de comportamento que, quando observados juntos e de forma persistente, indicam a necessidade de uma avaliação especializada.",
          "Pais e cuidadores costumam notar diferenças no contato visual, na forma como a criança brinca, na linguagem e na reação a mudanças de rotina, geralmente antes dos três anos de idade. Esses sinais isolados não fecham diagnóstico algum: eles são o motivo para procurar uma equipe multidisciplinar e investigar com calma.",
        ],
      },
      {
        question: "Qual é a idade certa para procurar avaliação?",
        answer: [
          "Assim que surgirem dúvidas, mesmo que a criança tenha menos de dois anos.",
          "Ao contrário do que muitos pensam, o diagnóstico de TEA pode ser investigado bem cedo, e a literatura científica mostra que a intervenção precoce, iniciada na primeira infância, produz os melhores resultados em desenvolvimento de linguagem, habilidades sociais e autonomia. Esperar a criança crescer para ver se os sinais desaparecem sozinhos não é a recomendação de nenhuma diretriz clínica atual.",
        ],
      },
      {
        question: "Como é feito o diagnóstico de autismo?",
        answer: [
          "O diagnóstico é clínico e interdisciplinar, feito por meio da observação do comportamento da criança, entrevistas com a família e, geralmente, instrumentos padronizados de avaliação aplicados por neuropsicólogos, psiquiatras ou neurologistas infantis.",
          "Não existe exame de sangue ou de imagem que confirme o TEA. O processo costuma reunir profissionais de diferentes áreas, como psicologia, fonoaudiologia e terapia ocupacional, justamente porque o autismo afeta diferentes aspectos do desenvolvimento ao mesmo tempo.",
        ],
      },
      {
        question: "Quais tratamentos ajudam uma criança com autismo?",
        answer: [
          "Não existe cura para o autismo, e o objetivo do acompanhamento é ampliar a comunicação, a autonomia e a qualidade de vida da criança e da família.",
          "As abordagens com maior respaldo científico incluem a Análise do Comportamento Aplicada (ABA), o Modelo Denver de Intervenção Precoce (ESDM) para crianças pequenas, fonoaudiologia para desenvolvimento da linguagem, terapia ocupacional com foco em integração sensorial, e acompanhamento psicológico. O plano terapêutico é sempre individualizado, de acordo com as necessidades específicas de cada criança.",
        ],
      },
      {
        question: "Autismo tem cura?",
        answer: [
          "Não. O autismo é uma condição do neurodesenvolvimento, não uma doença a ser curada.",
          "O que a intervenção adequada proporciona é o desenvolvimento de habilidades de comunicação, regulação emocional e autonomia, permitindo que a criança e, mais tarde, o adulto autista tenham qualidade de vida e participação social plena. O acompanhamento contínuo, ajustado à fase de vida da pessoa, costuma trazer os melhores resultados a longo prazo.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "tdah",
    navLabel: "TDAH",
    icon: Brain,
    tint: "#f97316",
    eyebrow: "Transtorno de Déficit de Atenção e Hiperatividade",
    title: "TDAH",
    metaTitle: "TDAH: sintomas, diagnóstico e tratamento infantil | Instituto Matriz",
    metaDescription:
      "Saiba como identificar o Transtorno de Déficit de Atenção e Hiperatividade em crianças, como funciona o diagnóstico e quais tratamentos existem. Barueri, SP.",
    path: "/condicoes/tdah",
    intro: [
      "O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma condição neurobiológica que afeta a capacidade de manter atenção, controlar impulsos e regular o nível de atividade.",
      "É uma das condições do neurodesenvolvimento mais comuns na infância, e o diagnóstico correto é o que permite diferenciar TDAH de outras causas de desatenção ou agitação, como ansiedade ou dificuldades de aprendizagem.",
    ],
    signs: {
      title: "Sinais que podem chamar atenção",
      items: [
        "Dificuldade em manter atenção em tarefas ou brincadeiras por muito tempo",
        "Perde objetos com frequência ou esquece compromissos e combinados",
        "Age antes de pensar, interrompe conversas ou tem dificuldade de esperar a vez",
        "Agitação motora, dificuldade em ficar parado quando é esperado",
        "Dificuldade em seguir instruções de várias etapas",
        "Queda de rendimento escolar apesar de a criança demonstrar capacidade",
      ],
    },
    qas: [
      {
        question: "Como diferenciar TDAH de uma criança apenas mais agitada?",
        answer: [
          "A diferença está na frequência, intensidade e no impacto desses comportamentos na vida da criança: no TDAH, a desatenção ou a agitação aparecem em mais de um ambiente (escola, casa, atividades sociais), de forma persistente por pelo menos seis meses, e prejudicam de fato o desempenho escolar ou o convívio social.",
          "Toda criança tem momentos de agitação ou distração, especialmente em atividades pouco estimulantes. O que indica TDAH é um padrão que se repete em contextos diferentes e que já trouxe consequências concretas, como notas baixas, conflitos frequentes ou dificuldade de fazer amizades.",
        ],
      },
      {
        question: "Qual a diferença entre TDAH e TOD?",
        answer: [
          "O TDAH é um transtorno de atenção, impulsividade e regulação da atividade motora, enquanto o Transtorno Opositor Desafiador (TOD) é um padrão de comportamento desafiador, argumentativo e de desobediência às regras.",
          "As duas condições podem, inclusive, ocorrer juntas na mesma criança, o que torna a avaliação profissional ainda mais importante: uma criança com TDAH não tratado pode desenvolver comportamentos opositores como consequência da frustração acumulada, mas isso é diferente de ter TOD como condição primária. Um bom diagnóstico diferencial evita tratar apenas o sintoma mais visível e ignorar a causa real.",
        ],
      },
      {
        question: "Como é feito o diagnóstico de TDAH?",
        answer: [
          "O diagnóstico é clínico, feito por neuropsicólogo, neurologista infantil ou psiquiatra, com base em critérios estabelecidos (como os do DSM-5), entrevistas com pais e escola, questionários padronizados e, frequentemente, uma avaliação neuropsicológica completa.",
          "Não existe um exame único que comprove o TDAH: o diagnóstico depende da análise cuidadosa do histórico da criança, incluindo relatos da escola, já que os sintomas precisam aparecer em mais de um ambiente da vida da criança.",
        ],
      },
      {
        question: "TDAH tem tratamento sem remédio?",
        answer: [
          "Sim. O acompanhamento psicoterapêutico, com técnicas de terapia cognitivo-comportamental, treino de funções executivas, psicopedagogia e orientação familiar e escolar, traz resultados importantes, com ou sem uso de medicação.",
          "A decisão sobre uso de medicação é sempre médica e individual, considerando a intensidade dos sintomas e o impacto na vida da criança. Em muitos casos, a combinação entre terapia comportamental e acompanhamento escolar reduz significativamente a necessidade de intervenção medicamentosa ou potencializa seus resultados.",
        ],
      },
      {
        question: "TDAH prejudica o aprendizado escolar?",
        answer: [
          "Pode prejudicar, principalmente por dificuldades de organização, de manter foco em tarefas longas e de terminar atividades, mas isso não reflete falta de capacidade intelectual.",
          "Com o acompanhamento adequado (psicopedagogia, treino de funções executivas e, quando necessário, ajustes pedagógicos na escola), crianças com TDAH têm desempenho acadêmico plenamente compatível com seu potencial cognitivo.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "tod",
    navLabel: "TOD",
    icon: HeartHandshake,
    tint: "#f97316",
    eyebrow: "Transtorno Opositor Desafiador",
    title: "TOD",
    metaTitle: "TOD (Transtorno Opositor Desafiador): sinais e tratamento | Instituto Matriz",
    metaDescription:
      "Entenda o Transtorno Opositor Desafiador, como diferenciá-lo de birras comuns da infância e quais intervenções ajudam a criança e a família. Barueri, SP.",
    path: "/condicoes/tod",
    intro: [
      "O Transtorno Opositor Desafiador (TOD) é caracterizado por um padrão persistente de humor irritável, comportamento argumentativo e desafiador, e atitude vingativa, que vai além das birras esperadas para a idade da criança.",
      "É importante diferenciar o TOD de fases normais do desenvolvimento infantil, já que todas as crianças testam limites em algum momento.",
    ],
    signs: {
      title: "Sinais que podem chamar atenção",
      items: [
        "Perde a paciência com frequência e se irrita facilmente",
        "Discute com adultos com frequência muito maior do que outras crianças da mesma idade",
        "Recusa-se ativamente a seguir regras ou pedidos de adultos",
        "Culpa os outros por seus próprios erros ou comportamentos",
        "Fica ressentido ou raivoso com frequência",
        "Age de forma vingativa ou rancorosa em pelo menos duas ocasiões nos últimos meses",
      ],
    },
    qas: [
      {
        question: "Toda criança teimosa tem TOD?",
        answer: [
          "Não. Testar limites, discutir com os pais e ter birras faz parte do desenvolvimento normal, especialmente entre os dois e os quatro anos e novamente na adolescência.",
          "O que diferencia o TOD é a persistência (pelo menos seis meses), a frequência muito acima do esperado para a idade, e o impacto real desses comportamentos na vida familiar, escolar e social da criança. Um diagnóstico só deve ser considerado quando esse padrão é constante e traz prejuízo significativo, não a partir de episódios isolados de birra.",
        ],
      },
      {
        question: "O que causa o Transtorno Opositor Desafiador?",
        answer: [
          "O TOD tem origem multifatorial, combinando fatores temperamentais, dinâmica familiar, e, em muitos casos, ocorre junto com outras condições do neurodesenvolvimento, como o TDAH.",
          "Não existe uma causa única, e apontar 'culpados' (pais, escola, temperamento) não ajuda no tratamento. O caminho mais eficaz é uma avaliação que entenda o contexto da criança como um todo, incluindo se há uma condição de base, como o TDAH, contribuindo para o comportamento opositor.",
        ],
      },
      {
        question: "Como é feito o diagnóstico do TOD?",
        answer: [
          "O diagnóstico é clínico, realizado por psicólogo, neuropsicólogo ou psiquiatra infantil, com base em entrevistas com a família, observação do comportamento da criança em diferentes contextos e critérios diagnósticos estabelecidos.",
          "Como o TOD frequentemente ocorre junto com TDAH ou dificuldades emocionais, a avaliação costuma investigar também essas possibilidades, para que o tratamento seja direcionado à causa e não apenas ao comportamento mais visível.",
        ],
      },
      {
        question: "Como tratar uma criança com TOD?",
        answer: [
          "O tratamento combina, geralmente, psicoterapia infantil, orientação de pais (treino de práticas parentais) e, quando há uma condição associada como o TDAH, tratamento específico para ela.",
          "A orientação e o envolvimento da família são essenciais: estratégias consistentes de manejo comportamental em casa, alinhadas com o que é trabalhado em terapia, costumam trazer os melhores resultados. A escola também pode ser incluída no plano, para que as estratégias sejam aplicadas de forma consistente nos diferentes ambientes da criança.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "atraso-de-fala",
    navLabel: "Atraso de Fala",
    icon: MessageSquareText,
    tint: "#0ea5a4",
    eyebrow: "Desenvolvimento da linguagem",
    title: "Atraso de Fala",
    metaTitle: "Atraso de fala infantil: quando se preocupar | Instituto Matriz",
    metaDescription:
      "Entenda os marcos esperados da fala infantil, sinais de atraso de linguagem e como a fonoaudiologia pode ajudar. Atendimento em Barueri, SP.",
    path: "/condicoes/atraso-de-fala",
    intro: [
      "O desenvolvimento da fala e da linguagem segue marcos esperados por idade, mas o ritmo varia entre crianças. O atraso de fala se refere a quando a criança não atinge esses marcos dentro do período típico.",
      "Identificar e tratar precocemente um atraso de fala evita impactos na alfabetização, na socialização e na autoestima da criança.",
    ],
    signs: {
      title: "Sinais que podem chamar atenção",
      items: [
        "Aos 12 meses, não balbucia nem usa gestos como acenar ou apontar",
        "Aos 18 meses, não fala nenhuma palavra com sentido",
        "Aos 24 meses, tem vocabulário menor que 50 palavras ou não junta duas palavras",
        "Aos 3 anos, estranhos têm dificuldade de entender o que a criança fala",
        "Dificuldade em compreender instruções simples adequadas à idade",
        "Perda de habilidades de linguagem já adquiridas",
      ],
    },
    qas: [
      {
        question: "Até que idade é normal a criança não falar direito?",
        answer: [
          "Cada criança tem seu próprio ritmo, mas existem marcos de referência: por volta de 1 ano, espera-se o início das primeiras palavras; aos 2 anos, frases de duas palavras; aos 3 anos, frases mais completas que estranhos já conseguem entender na maior parte do tempo.",
          "Atrasos pontuais em relação a esses marcos nem sempre indicam um problema, principalmente se a criança compreende bem o que ouve e se comunica por gestos. Porém, quando o atraso é significativo ou vem acompanhado de dificuldade de compreensão, a avaliação fonoaudiológica é a forma correta de esclarecer a situação, em vez de esperar a criança 'engatar' sozinha.",
        ],
      },
      {
        question: "Atraso de fala pode ser sinal de autismo?",
        answer: [
          "Pode ser, mas na maioria dos casos o atraso de fala ocorre isoladamente, sem relação com o espectro autista.",
          "O que diferencia é o conjunto de sinais: quando o atraso de linguagem vem acompanhado de dificuldades de contato visual, de interação social e de comportamentos repetitivos, a avaliação deve investigar também a hipótese de TEA. Já quando a criança interage normalmente, brinca de forma compartilhada e compreende bem a linguagem, o quadro costuma ser um atraso de fala isolado, com bom prognóstico de recuperação com fonoterapia.",
        ],
      },
      {
        question: "O que a fonoaudiologia faz pelo atraso de fala?",
        answer: [
          "A fonoterapia trabalha diretamente o desenvolvimento da linguagem receptiva (compreensão) e expressiva (fala), usando brincadeiras e atividades estruturadas para estimular vocabulário, articulação dos sons e construção de frases.",
          "O processo é individualizado, considerando a idade e as dificuldades específicas de cada criança, e costuma envolver também orientações para a família aplicar no dia a dia, o que acelera os resultados obtidos nas sessões.",
        ],
      },
      {
        question: "Preciso esperar a criança completar 3 anos para procurar ajuda?",
        answer: [
          "Não, e essa é uma das ideias equivocadas mais comuns sobre desenvolvimento infantil.",
          "Quanto mais cedo a intervenção fonoaudiológica começa, mais rápida e eficaz costuma ser a evolução, justamente porque o cérebro da criança pequena tem maior plasticidade para aprendizado de linguagem. Se há dúvida sobre o desenvolvimento da fala antes dos 3 anos, a avaliação já pode e deve ser feita.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "terapia-ocupacional",
    navLabel: "Terapia Ocupacional",
    icon: Hand,
    tint: "#16267a",
    eyebrow: "Terapia Ocupacional",
    title: "Terapia Ocupacional",
    metaTitle: "Terapia Ocupacional infantil: para que serve | Instituto Matriz",
    metaDescription:
      "Entenda o que faz a terapia ocupacional infantil, quando ela é indicada e como ajuda no desenvolvimento motor, sensorial e da autonomia da criança.",
    path: "/condicoes/terapia-ocupacional",
    intro: [
      "A terapia ocupacional infantil trabalha o desenvolvimento das habilidades necessárias para que a criança realize com autonomia as atividades do seu dia a dia, como brincar, comer, se vestir, escrever e interagir com outras crianças.",
      "É uma das áreas mais indicadas para crianças com TEA, TDAH, atrasos motores ou dificuldades de processamento sensorial.",
    ],
    signs: {
      title: "Quando a terapia ocupacional costuma ser indicada",
      items: [
        "Dificuldade em atividades motoras finas, como segurar o lápis ou usar talheres",
        "Desajeitamento motor amplo, dificuldade de equilíbrio ou coordenação",
        "Reações intensas a texturas, sons, luzes ou toques (sensibilidade sensorial)",
        "Dificuldade de organização para tarefas simples do cotidiano",
        "Recusa alimentar seletiva relacionada a textura ou consistência dos alimentos",
        "Dificuldade de concentração associada a inquietação motora",
      ],
    },
    qas: [
      {
        question: "O que exatamente faz um terapeuta ocupacional com uma criança?",
        answer: [
          "O terapeuta ocupacional avalia como a criança processa estímulos sensoriais, se movimenta e organiza suas ações, e usa atividades lúdicas estruturadas para desenvolver as habilidades que estão defasadas, sejam elas motoras, sensoriais ou de organização.",
          "As sessões costumam parecer brincadeiras, mas são cuidadosamente planejadas para trabalhar objetivos terapêuticos específicos, como melhorar a coordenação motora fina para a escrita, reduzir reações de defesa sensorial, ou aumentar a tolerância a novas texturas de alimentos.",
        ],
      },
      {
        question: "O que é integração sensorial e por que ela importa?",
        answer: [
          "Integração sensorial é a capacidade do cérebro de organizar e interpretar as informações captadas pelos sentidos (tato, movimento, som, visão) e transformá-las em respostas adequadas de comportamento.",
          "Quando esse processamento não funciona bem, a criança pode reagir de forma exagerada ou de forma diminuída a estímulos do dia a dia, o que impacta diretamente a atenção, o comportamento e a interação social. A terapia ocupacional com abordagem de integração sensorial trabalha exatamente para reorganizar essas respostas.",
        ],
      },
      {
        question: "Terapia ocupacional é só para crianças com autismo?",
        answer: [
          "Não. Embora seja muito indicada para crianças com TEA, a terapia ocupacional também atende crianças com TDAH, atrasos motores, dificuldades de coordenação para escrita, seletividade alimentar e outras dificuldades de desenvolvimento, com ou sem diagnóstico associado.",
          "A indicação depende da avaliação individual da criança, e não de um diagnóstico específico: o que define a necessidade de terapia ocupacional são as dificuldades funcionais observadas no dia a dia.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "psicologia",
    navLabel: "Psicologia Infantil",
    icon: Brain,
    tint: "#1a56db",
    eyebrow: "Psicologia Infantil",
    title: "Psicologia Infantil",
    metaTitle: "Psicologia infantil: quando levar a criança ao psicólogo | Instituto Matriz",
    metaDescription:
      "Entenda quando procurar acompanhamento psicológico para crianças, quais abordagens são usadas e como a psicoterapia infantil ajuda no desenvolvimento emocional.",
    path: "/condicoes/psicologia",
    intro: [
      "A psicologia infantil acompanha o desenvolvimento emocional, comportamental e social da criança, ajudando-a a lidar com dificuldades como ansiedade, mudanças familiares, dificuldades escolares e questões associadas a condições do neurodesenvolvimento.",
      "Diferente do que muitos pensam, procurar um psicólogo para a criança não significa que 'algo está muito errado': é um cuidado preventivo e de desenvolvimento, assim como um pediatra acompanha a saúde física.",
    ],
    qas: [
      {
        question: "Quando devo levar meu filho ao psicólogo?",
        answer: [
          "Quando há mudanças de comportamento persistentes, dificuldade em lidar com emoções, sinais de ansiedade, tristeza frequente, dificuldades escolares recorrentes, ou quando a família está passando por uma mudança significativa, como separação dos pais, luto ou mudança de cidade.",
          "Também é recomendado quando a criança já tem um diagnóstico do neurodesenvolvimento (como TEA, TDAH ou TOD), já que o acompanhamento psicológico é parte importante do plano terapêutico nesses casos, ajudando no desenvolvimento emocional e social.",
        ],
      },
      {
        question: "Como funciona uma sessão de psicoterapia infantil?",
        answer: [
          "As sessões costumam usar o brincar, o desenho e outras atividades lúdicas como ferramenta principal, já que crianças pequenas nem sempre têm capacidade de verbalizar emoções complexas da mesma forma que adultos.",
          "Por meio dessas atividades, o psicólogo consegue entender o que a criança está vivenciando e trabalhar, de forma adequada à idade, estratégias de regulação emocional, resolução de conflitos e desenvolvimento de autoestima.",
        ],
      },
      {
        question: "Os pais participam do acompanhamento psicológico da criança?",
        answer: [
          "Sim, o envolvimento da família é parte essencial do processo. Orientações parentais regulares ajudam os pais a entender o que está sendo trabalhado e a aplicar estratégias consistentes em casa.",
          "Em muitos casos, mudanças pequenas na forma como a família lida com determinadas situações fazem grande diferença nos resultados da terapia, e por isso o acompanhamento não se limita à criança isoladamente.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "fonoaudiologia",
    navLabel: "Fonoaudiologia",
    icon: Ear,
    tint: "#059669",
    eyebrow: "Fonoaudiologia",
    title: "Fonoaudiologia",
    metaTitle: "Fonoaudiologia infantil: linguagem, fala e comunicação | Instituto Matriz",
    metaDescription:
      "Entenda o que trata a fonoaudiologia infantil, quando procurar um fonoaudiólogo e como a terapia da fala ajuda no desenvolvimento da comunicação.",
    path: "/condicoes/fonoaudiologia",
    intro: [
      "A fonoaudiologia cuida do desenvolvimento da comunicação, da linguagem, da fala e, em alguns casos, também da alimentação (deglutição) da criança.",
      "É uma área central no acompanhamento de crianças com atraso de fala, TEA, dificuldades de leitura e escrita, e alterações na articulação dos sons da fala.",
    ],
    qas: [
      {
        question: "Quais dificuldades a fonoaudiologia trata em crianças?",
        answer: [
          "A fonoaudiologia infantil trata atraso de linguagem, dificuldades de articulação de sons (troca de letras na fala), gagueira, dificuldades de leitura e escrita relacionadas à consciência fonológica, e questões de comunicação em crianças com TEA.",
          "Também atua em casos de seletividade alimentar e dificuldades de mastigação e deglutição, quando relacionadas ao desenvolvimento motor-oral da criança.",
        ],
      },
      {
        question: "Meu filho troca letras ao falar, isso é normal?",
        answer: [
          "Trocar alguns sons é esperado até determinada idade, já que o desenvolvimento da articulação da fala segue uma ordem própria de amadurecimento.",
          "O que indica necessidade de avaliação é a persistência dessas trocas além da idade em que já deveriam ter sido superadas, ou quando dificultam a compreensão da fala da criança por pessoas fora do círculo familiar. A avaliação fonoaudiológica determina se o padrão observado é esperado para a idade ou se já indica necessidade de intervenção.",
        ],
      },
      {
        question: "Fonoaudiologia ajuda na alfabetização?",
        answer: [
          "Sim. Muitas dificuldades de leitura e escrita têm origem em questões de consciência fonológica (a capacidade de perceber e manipular os sons da língua), que é justamente uma das áreas de atuação da fonoaudiologia.",
          "Crianças com dificuldade persistente para associar letras a sons, para rimar palavras ou para segmentar sílabas costumam se beneficiar de acompanhamento fonoaudiológico específico, muitas vezes em conjunto com apoio psicopedagógico.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "integracao-sensorial",
    navLabel: "Integração Sensorial",
    icon: Waves,
    tint: "#0ea5a4",
    eyebrow: "Processamento Sensorial",
    title: "Integração Sensorial",
    metaTitle: "Integração sensorial infantil: o que é e como identificar | Instituto Matriz",
    metaDescription:
      "Entenda o que é o processamento sensorial, sinais de disfunção de integração sensorial em crianças e como a terapia ocupacional pode ajudar.",
    path: "/condicoes/integracao-sensorial",
    intro: [
      "Integração sensorial é o processo pelo qual o cérebro recebe, organiza e interpreta informações vindas dos sentidos (tato, movimento, equilíbrio, visão, audição) para produzir respostas adequadas de comportamento.",
      "Quando esse processamento não ocorre de forma típica, a criança pode ter reações exageradas ou diminuídas a estímulos comuns do dia a dia, o que afeta comportamento, atenção e convívio social.",
    ],
    signs: {
      title: "Sinais de possível dificuldade de processamento sensorial",
      items: [
        "Reação de desconforto ou choro intenso diante de certas texturas, sons ou luzes",
        "Busca constante por movimento, giros ou impactos fortes (correr, pular, bater)",
        "Pouca percepção de dor ou de temperatura em comparação a outras crianças",
        "Dificuldade de equilíbrio ou coordenação motora",
        "Seletividade alimentar relacionada à textura dos alimentos",
        "Desconforto extremo com etiquetas de roupas, costuras ou determinados tecidos",
      ],
    },
    qas: [
      {
        question: "O que é disfunção de integração sensorial?",
        answer: [
          "É uma dificuldade do cérebro em processar de forma equilibrada as informações sensoriais recebidas, levando a respostas de hipersensibilidade (reação exagerada a estímulos) ou hipossensibilidade (pouca percepção de estímulos) em um ou mais sentidos.",
          "Essa dificuldade não é um diagnóstico isolado no sentido médico tradicional, mas um padrão frequentemente observado em crianças com TEA, TDAH e outras condições do neurodesenvolvimento, e que pode ser avaliado e trabalhado especificamente pela terapia ocupacional.",
        ],
      },
      {
        question: "Como a integração sensorial é avaliada?",
        answer: [
          "A avaliação é feita por terapeuta ocupacional especializado, por meio de observação clínica estruturada, questionários com os pais e, em alguns casos, protocolos padronizados que mapeiam as respostas da criança a diferentes tipos de estímulo sensorial.",
          "O objetivo é identificar em quais sentidos a criança apresenta hiper ou hipossensibilidade, para direcionar um plano terapêutico individualizado.",
        ],
      },
      {
        question: "Como é o tratamento das dificuldades sensoriais?",
        answer: [
          "O tratamento é feito por meio de terapia ocupacional com abordagem de integração sensorial, usando atividades estruturadas e lúdicas (balanços, texturas variadas, atividades de equilíbrio) que ajudam o cérebro a organizar melhor as respostas a estímulos sensoriais.",
          "Os ganhos costumam refletir em melhora da atenção, redução de comportamentos de fuga ou de busca sensorial excessiva, e maior conforto da criança em ambientes do dia a dia, como a escola.",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "avaliacao-neuropsicologica",
    navLabel: "Avaliação Neuropsicológica",
    icon: ClipboardList,
    tint: "#16267a",
    eyebrow: "Avaliação Neuropsicológica",
    title: "Avaliação Neuropsicológica",
    metaTitle: "Avaliação neuropsicológica infantil: para que serve | Instituto Matriz",
    metaDescription:
      "Entenda o que é a avaliação neuropsicológica infantil, quando ela é indicada e como o resultado orienta o tratamento de TEA, TDAH e dificuldades de aprendizagem.",
    path: "/condicoes/avaliacao-neuropsicologica",
    intro: [
      "A avaliação neuropsicológica é um processo estruturado que investiga como o cérebro da criança processa atenção, memória, linguagem, funções executivas e outras habilidades cognitivas.",
      "É frequentemente o ponto de partida para o diagnóstico de condições como TEA, TDAH, dificuldades de aprendizagem e outras questões do neurodesenvolvimento.",
    ],
    qas: [
      {
        question: "Quando a avaliação neuropsicológica é indicada?",
        answer: [
          "Ela é indicada quando há suspeita de TEA, TDAH, dificuldades de aprendizagem, atraso no desenvolvimento cognitivo, ou quando a família e a escola notam um desempenho muito abaixo do esperado para a idade e a capacidade da criança.",
          "Também é útil para entender melhor o perfil cognitivo de uma criança que já tem um diagnóstico, ajudando a direcionar de forma mais precisa as intervenções terapêuticas e pedagógicas.",
        ],
      },
      {
        question: "Como funciona o processo de avaliação neuropsicológica?",
        answer: [
          "O processo envolve entrevistas com os pais, aplicação de testes padronizados (que avaliam atenção, memória, linguagem, raciocínio e funções executivas), observação clínica da criança e, frequentemente, coleta de informações com a escola.",
          "Ao final, o neuropsicólogo elabora um relatório detalhado com os resultados encontrados e recomendações específicas de intervenção, que orientam tanto a família quanto os demais profissionais envolvidos no cuidado da criança.",
        ],
      },
      {
        question: "O resultado da avaliação substitui o diagnóstico médico?",
        answer: [
          "A avaliação neuropsicológica é uma peça central do processo diagnóstico, mas o diagnóstico formal de determinadas condições, como TEA, costuma ser fechado em conjunto com outros profissionais, como neurologista ou psiquiatra infantil, que integram os achados da avaliação ao quadro clínico completo da criança.",
          "Por isso, o processo diagnóstico é interdisciplinar: a avaliação neuropsicológica fornece dados objetivos e detalhados que, somados à avaliação médica e de outras especialidades, resultam em um diagnóstico mais preciso.",
        ],
      },
    ],
    related: [],
  },
];

const relatedMap: Record<string, string[]> = {
  autismo: ["fonoaudiologia", "terapia-ocupacional", "integracao-sensorial", "avaliacao-neuropsicologica"],
  tdah: ["tod", "avaliacao-neuropsicologica", "psicologia"],
  tod: ["tdah", "psicologia"],
  "atraso-de-fala": ["fonoaudiologia", "autismo", "avaliacao-neuropsicologica"],
  "terapia-ocupacional": ["integracao-sensorial", "autismo", "atraso-de-fala"],
  psicologia: ["tdah", "tod", "avaliacao-neuropsicologica"],
  fonoaudiologia: ["atraso-de-fala", "autismo"],
  "integracao-sensorial": ["terapia-ocupacional", "autismo"],
  "avaliacao-neuropsicologica": ["tdah", "autismo", "psicologia"],
};

for (const item of conditions) {
  item.related = (relatedMap[item.slug] ?? [])
    .map((slug) => conditions.find((c) => c.slug === slug))
    .filter((c): c is ConditionData => Boolean(c))
    .map((c) => ({ label: c.navLabel, path: c.path }));
}

export function getConditionBySlug(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
