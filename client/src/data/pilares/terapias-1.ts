import type { RawPost } from "@/data/postTypes";
import { NAVY, TEAL, BLUE } from "@/data/postTypes";
import {
  REF_DSM,
  REF_AOTA,
  REF_COFFITO,
  REF_AYRES,
  REF_CFP,
  REF_CFFA,
  REF_ANS,
  REF_SBP_TEA,
  REF_AAP_TEA,
  REF_ABENEPI,
  REF_LBI,
  REF_MEC_INCLUSAO,
} from "@/data/pilares/referencias";

export const pilaresTerapias1: RawPost[] = [
  {
    slug: "o-que-faz-um-terapeuta-ocupacional",
    title: "O que faz um terapeuta ocupacional infantil?",
    metaTitle: "O que faz um terapeuta ocupacional infantil | Instituto Matriz",
    metaDescription:
      "Entenda o que faz a terapia ocupacional na infância, quando é indicada, como é uma sessão e quais resultados esperar do acompanhamento.",
    excerpt:
      "A terapia ocupacional trabalha a autonomia da criança nas atividades do dia a dia. Entenda como, e quando ela é indicada.",
    category: "Terapia",
    tint: NAVY,
    readingMinutes: 12,
    date: "2026-06-20",
    stats: [
      {
        value: "sem limite",
        label:
          "de sessões cobertas para transtornos globais do desenvolvimento, mediante indicação médica",
        source: "Agência Nacional de Saúde Suplementar",
      },
      {
        value: "COFFITO",
        label: "conselho federal que regulamenta a profissão no Brasil",
        source: "Conselho Federal de Fisioterapia e Terapia Ocupacional",
      },
    ],
    intro: [
      "A terapia ocupacional é provavelmente a área menos compreendida entre as que compõem o acompanhamento do neurodesenvolvimento. O nome sugere trabalho, o que confunde bastante quando se trata de uma criança de três anos.",
      "A palavra ocupação, nesse contexto, não significa emprego. Ela se refere ao conjunto de atividades que ocupam o tempo e dão sentido à vida de uma pessoa. Para uma criança, essas ocupações são brincar, comer, se vestir, tomar banho, escrever, participar da escola e conviver com outras crianças.",
      "Este guia explica o que o terapeuta ocupacional faz, em que situações a indicação aparece, como é uma sessão na prática e o que esperar do acompanhamento.",
    ],
    sections: [
      {
        heading: "O que é terapia ocupacional infantil?",
        paragraphs: [
          "A terapia ocupacional infantil é a área que trabalha para que a criança consiga realizar, com o máximo de autonomia possível, as atividades significativas do seu cotidiano.",
          "Isso significa que o objetivo do trabalho nunca é a habilidade isolada, e sim a função que ela viabiliza. O terapeuta não treina pinça digital por treinar: ele trabalha a pinça porque ela é necessária para segurar o lápis, abotoar a camisa e usar o garfo.",
          "A atuação combina três frentes. A primeira é o desenvolvimento de habilidades da própria criança, sejam motoras, sensoriais ou de organização. A segunda é a adaptação do ambiente e das atividades, para reduzir barreiras. A terceira é a orientação da família e da escola, para que as estratégias funcionem fora do consultório.",
          "No Brasil, a profissão é regulamentada e o profissional precisa ter formação superior em Terapia Ocupacional e registro no conselho da categoria.",
        ],
      },
      {
        heading: "Quando a terapia ocupacional é indicada?",
        paragraphs: [
          "A indicação surge sempre que existe uma dificuldade funcional no dia a dia da criança, com ou sem diagnóstico associado. Esse é um ponto importante: a terapia ocupacional não é exclusiva do autismo, ainda que seja bastante indicada nesse contexto.",
          "As indicações mais frequentes envolvem dificuldades motoras finas, que aparecem na escrita, no uso de talheres, no recorte e no abotoar. Também são comuns as queixas de desajeitamento motor amplo, com dificuldade de equilíbrio, de coordenação e de planejamento de movimento.",
          "Outro grande grupo de indicações vem das dificuldades de processamento sensorial: crianças que reagem de forma intensa a sons, texturas, luzes ou toques, e crianças que buscam estímulo de forma constante, com necessidade de movimento, pressão e impacto.",
          "A seletividade alimentar de origem sensorial é uma indicação clássica, assim como as dificuldades em rotinas de higiene, como corte de cabelo, corte de unha e escovação de dentes. Também entram nesse escopo o desfralde difícil e a baixa autonomia nas atividades de vida diária.",
        ],
        bullets: [
          "Dificuldade em segurar o lápis, escrever, recortar ou abotoar",
          "Desajeitamento motor, quedas frequentes e dificuldade de equilíbrio",
          "Reações intensas a texturas, sons, luzes ou toque",
          "Busca constante por movimento, pressão ou impacto",
          "Seletividade alimentar ligada a textura e consistência",
          "Crises em rotinas de higiene, como corte de cabelo e unha",
          "Baixa autonomia para vestir-se, alimentar-se ou tomar banho",
          "Dificuldade de organização para tarefas simples do cotidiano",
        ],
      },
      {
        heading: "O que é integração sensorial e qual a relação com a TO?",
        paragraphs: [
          "Integração sensorial é o processo pelo qual o sistema nervoso recebe, organiza e interpreta as informações captadas pelos sentidos, transformando-as em respostas adequadas de comportamento.",
          "Além dos cinco sentidos tradicionais, dois sistemas menos conhecidos têm papel central nesse processo. O sistema vestibular, localizado no ouvido interno, informa sobre posição da cabeça, movimento e equilíbrio. O sistema proprioceptivo, presente em músculos e articulações, informa sobre a posição do corpo no espaço e sobre a força aplicada em cada movimento.",
          "Quando esse processamento não ocorre de forma equilibrada, a criança pode apresentar hipersensibilidade, reagindo de forma exagerada a estímulos comuns, ou hipossensibilidade, percebendo pouco e buscando estímulo intenso. As duas coisas podem coexistir em sentidos diferentes na mesma criança.",
          "A abordagem de integração sensorial dentro da terapia ocupacional usa atividades estruturadas e lúdicas, com balanços, texturas variadas, atividades de equilíbrio e trabalho de pressão profunda, para ajudar o sistema nervoso a organizar melhor essas respostas. Os ganhos costumam refletir em atenção, comportamento e conforto no dia a dia.",
        ],
      },
      {
        heading: "Como é uma sessão de terapia ocupacional?",
        paragraphs: [
          "Para quem observa de fora, uma sessão de terapia ocupacional parece brincadeira. E é justamente essa a intenção: brincar é a ocupação principal da infância, e é dentro dela que o trabalho acontece.",
          "A diferença está no planejamento. Cada atividade é escolhida para trabalhar objetivos específicos definidos após avaliação. Um circuito com balanço, escorregador e almofadas não é entretenimento: ele trabalha sistema vestibular, proprioceptivo, planejamento motor e tolerância a estímulos, em uma ordem pensada.",
          "As sessões costumam acontecer em ambiente equipado com recursos específicos, como balanços suspensos, piscina de bolinhas, materiais de texturas variadas, tecidos elásticos e equipamentos de escalada, além de materiais de mesa para trabalho motor fino.",
          "O terapeuta observa continuamente as respostas da criança e ajusta a atividade em tempo real, buscando o ponto em que há desafio suficiente para gerar aprendizado, sem ultrapassar para a sobrecarga. Esse ajuste fino é parte central da técnica.",
          "A frequência mais comum é de uma a duas sessões semanais, definida após avaliação e revisada periodicamente conforme a evolução.",
        ],
      },
      {
        heading: "Como é feita a avaliação em terapia ocupacional?",
        paragraphs: [
          "A avaliação combina entrevista com a família, observação clínica estruturada e, quando indicado, aplicação de protocolos padronizados que mapeiam o perfil sensorial e as habilidades motoras.",
          "A entrevista investiga o funcionamento em situações reais: como é a hora da refeição, do banho, do vestir, como a criança se comporta em ambientes barulhentos, quais atividades ela evita ativamente e quais busca com insistência.",
          "A observação clínica examina postura, tônus, coordenação, planejamento motor, preensão, e as respostas a diferentes tipos de estímulo sensorial oferecidos de forma controlada.",
          "O resultado dessa avaliação é um plano com objetivos funcionais e observáveis. Um objetivo bem formulado não é melhorar a coordenação, e sim algo como conseguir se vestir sozinho pela manhã em até dez minutos, porque isso pode ser medido e acompanhado.",
        ],
      },
      {
        heading: "Quais resultados esperar e em quanto tempo?",
        paragraphs: [
          "O tempo de resposta varia bastante conforme o objetivo. Ganhos em tolerância sensorial e em regulação costumam aparecer em algumas semanas a poucos meses. Ganhos em habilidades motoras finas, especialmente as ligadas à escrita, tendem a levar mais tempo, porque dependem de maturação e de repetição.",
          "Um fator que influencia muito o resultado é o que acontece fora da sessão. Uma hora semanal, por melhor que seja, tem alcance limitado se as estratégias não forem aplicadas em casa e na escola. Por isso a orientação aos cuidadores é parte do trabalho, e não um adicional.",
          "A alta acontece quando os objetivos definidos foram alcançados e a criança sustenta as habilidades no cotidiano sem necessidade de apoio terapêutico. Um plano bem construído inclui critérios de alta desde o início, e não apenas um acompanhamento indefinido.",
          "É legítimo pedir revisões periódicas do plano e relatórios de evolução. Isso ajuda a família a acompanhar o progresso de forma objetiva e a discutir ajustes quando o avanço estaciona.",
        ],
      },
      {
        heading: "Quando procurar um terapeuta ocupacional?",
        paragraphs: [
          "Vale procurar quando a dificuldade motora ou sensorial afeta a autonomia da criança no dia a dia, quando ela evita ativamente certos tipos de atividade, ou quando há dor e cansaço desproporcionais em tarefas como escrever.",
          "Também é indicado quando rotinas simples se tornaram fonte recorrente de crise em casa, como refeições, banho, corte de cabelo e vestir. Esses episódios costumam ter explicação sensorial concreta e respondem bem a intervenção específica.",
          "Não é necessário ter diagnóstico fechado para iniciar. A avaliação em terapia ocupacional é, ela própria, uma fonte de informação valiosa e frequentemente compõe o processo diagnóstico interdisciplinar.",
          "Sobre cobertura, a regulamentação do setor de saúde suplementar prevê sessões de terapia ocupacional mediante indicação médica, sem limite numérico para transtornos globais do desenvolvimento. Vale reunir relatório com indicação, frequência e justificativa clínica antes de solicitar.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a diferença entre terapia ocupacional e fisioterapia?",
        a: "A fisioterapia foca em função motora, força, amplitude e reabilitação física. A terapia ocupacional foca na realização das atividades cotidianas com autonomia, o que inclui componentes motores, sensoriais, cognitivos e de organização.",
      },
      {
        q: "Terapia ocupacional serve só para autismo?",
        a: "Não. Atende também crianças com TDAH, atrasos motores, dificuldades de escrita, seletividade alimentar e dificuldades de processamento sensorial, com ou sem diagnóstico associado. A indicação vem da dificuldade funcional observada.",
      },
      {
        q: "Meu filho só brinca na sessão. Isso é terapia?",
        a: "Sim. A brincadeira é o meio, não o fim. Cada atividade é planejada para trabalhar objetivos definidos após avaliação, e o formato lúdico é o que garante engajamento e repetição suficientes para o aprendizado se consolidar.",
      },
      {
        q: "Quantas sessões por semana são necessárias?",
        a: "O mais comum é uma a duas sessões semanais, definidas após avaliação conforme os objetivos e o perfil da criança. A frequência é revisada periodicamente e ajustada conforme a evolução.",
      },
      {
        q: "Preciso de encaminhamento médico?",
        a: "Para iniciar o acompanhamento não é obrigatório em atendimento particular, mas para solicitar cobertura ao plano de saúde a indicação médica com justificativa clínica é o que sustenta o pedido.",
      },
    ],
    references: [REF_AOTA, REF_COFFITO, REF_AYRES, REF_ANS, REF_SBP_TEA],
  },
  {
    slug: "o-que-e-integracao-sensorial",
    title: "O que é integração sensorial?",
    metaTitle: "Integração sensorial: o que é e como identificar | Instituto Matriz",
    metaDescription:
      "Entenda o que é integração sensorial, quais são os oito sentidos, sinais de dificuldade de processamento sensorial e como é feito o tratamento.",
    excerpt:
      "Antes de reagir ao mundo, o cérebro precisa organizar o que os sentidos captam. Quando esse processo falha, o efeito aparece no comportamento.",
    category: "Sensorial",
    tint: NAVY,
    readingMinutes: 12,
    date: "2026-06-22",
    stats: [
      {
        value: "8 sentidos",
        label:
          "considerados no processamento sensorial, incluindo vestibular, proprioceptivo e interoceptivo",
        source: "Ayres AJ, Sensory Integration and the Child",
      },
      {
        value: "1972",
        label: "ano da formulação original da teoria da integração sensorial",
        source: "Ayres AJ, terapeuta ocupacional e neurocientista",
      },
    ],
    intro: [
      "Toda vez que uma criança entra em uma sala, seu sistema nervoso recebe uma quantidade enorme de informação simultânea: o barulho do ventilador, a luz da janela, a etiqueta da camiseta, a temperatura do ambiente, a posição do próprio corpo na cadeira.",
      "Para funcionar, o cérebro precisa organizar tudo isso, decidir o que é relevante, o que pode ser ignorado, e produzir uma resposta adequada. Esse processo tem nome: integração sensorial.",
      "Quando ele não acontece de forma equilibrada, o resultado aparece no comportamento, e frequentemente é interpretado como birra, teimosia ou falta de limite. Este guia explica o que é o processamento sensorial, como identificar dificuldades e o que fazer a respeito.",
    ],
    sections: [
      {
        heading: "O que é integração sensorial?",
        paragraphs: [
          "Integração sensorial é o processo neurológico que organiza as sensações vindas do próprio corpo e do ambiente, permitindo que a pessoa use o corpo de forma eficaz e responda de maneira adequada às situações.",
          "O conceito foi formulado na década de 1970 pela terapeuta ocupacional e neurocientista Jean Ayres, e desde então vem sendo desenvolvido e refinado dentro da terapia ocupacional.",
          "Uma analogia útil: o sistema sensorial funciona como um sistema de trânsito. Quando funciona bem, as informações chegam ao destino na ordem certa e na intensidade certa. Quando há congestionamento ou falha de sinalização, a informação chega demais, de menos, ou fora de ordem, e a resposta produzida não corresponde à situação real.",
          "É importante situar o conceito com honestidade: a integração sensorial é amplamente utilizada na prática da terapia ocupacional e há debate científico sobre o desenho dos estudos que avaliam suas intervenções. O reconhecimento das diferenças de processamento sensorial, por sua vez, é consolidado, tanto que a reatividade sensorial alterada é critério diagnóstico do autismo.",
        ],
      },
      {
        heading: "Quais são os oito sentidos?",
        paragraphs: [
          "Além dos cinco sentidos tradicionais, o processamento sensorial considera três sistemas menos conhecidos, e são justamente eles que costumam explicar comportamentos que parecem sem sentido.",
          "O sistema vestibular fica no ouvido interno e informa sobre movimento, posição da cabeça e equilíbrio. Crianças com esse sistema pouco responsivo buscam movimento intenso: giram, pulam, correm sem parar. Crianças com esse sistema muito responsivo evitam movimento, têm medo de altura, enjoam com facilidade e resistem a balanços e escorregadores.",
          "O sistema proprioceptivo está nos músculos e articulações e informa sobre a posição do corpo e sobre a força aplicada. Dificuldades nesse sistema aparecem como criança que aperta demais o lápis, que esbarra nas coisas, que abraça com força excessiva ou que parece não saber onde o próprio corpo termina.",
          "O sistema interoceptivo informa sobre os sinais internos do corpo: fome, sede, vontade de ir ao banheiro, batimento cardíaco, temperatura. Alterações nesse sistema explicam por que algumas crianças não percebem que precisam ir ao banheiro até o último instante, ou não reconhecem fome até ficarem irritadas.",
        ],
        bullets: [
          "Visão, audição, tato, paladar e olfato",
          "Vestibular: movimento, equilíbrio e posição da cabeça",
          "Proprioceptivo: posição do corpo e força aplicada",
          "Interoceptivo: sinais internos como fome, sede e vontade de ir ao banheiro",
        ],
      },
      {
        heading: "Quais são os sinais de dificuldade de processamento sensorial?",
        paragraphs: [
          "Os sinais se organizam em dois grandes padrões, que podem coexistir na mesma criança em sentidos diferentes.",
          "No padrão de hipersensibilidade, a criança percebe estímulos com intensidade maior do que o esperado e reage com desconforto ou fuga. Aparece como recusa de certas texturas de roupa, incômodo com etiquetas e costuras, reação intensa a barulhos, desconforto em ambientes cheios, recusa alimentar por textura e crises em situações como corte de cabelo e unha.",
          "No padrão de hipossensibilidade, a criança percebe menos e busca estímulo para compensar. Aparece como necessidade constante de movimento, busca por impacto e pressão, tendência a apertar e morder objetos, pouca percepção de dor e de temperatura, e aparente indiferença a chamados.",
          "Há também dificuldades de discriminação, em que a criança percebe o estímulo mas tem dificuldade em interpretá-lo com precisão, e dificuldades de planejamento motor, em que ela sabe o que quer fazer mas não consegue organizar a sequência de movimentos necessária.",
          "Um alerta importante: todos esses comportamentos aparecem, isoladamente, em crianças com desenvolvimento típico. O que caracteriza uma dificuldade é a intensidade, a frequência e, principalmente, o prejuízo que produz na participação da criança nas atividades do dia a dia.",
        ],
      },
      {
        heading: "Isso é um diagnóstico?",
        paragraphs: [
          "Essa é uma questão que merece resposta clara. As dificuldades de processamento sensorial não constituem um diagnóstico independente nas principais classificações diagnósticas atuais.",
          "O que existe é o reconhecimento formal da reatividade sensorial alterada como uma característica do autismo, onde ela figura entre os critérios diagnósticos. Fora desse contexto, as dificuldades sensoriais são descritas e tratadas como um perfil funcional, avaliado e trabalhado pela terapia ocupacional.",
          "Na prática, isso significa que uma criança pode receber avaliação e intervenção para dificuldades sensoriais sem que exista um código diagnóstico específico para isso, e essa intervenção pode ser bastante eficaz.",
          "É comum a associação com outros quadros. Dificuldades sensoriais aparecem com frequência no autismo, no TDAH, em crianças prematuras e em transtornos do desenvolvimento da coordenação.",
        ],
      },
      {
        heading: "Como é feita a avaliação?",
        paragraphs: [
          "A avaliação é conduzida por terapeuta ocupacional, preferencialmente com formação específica na abordagem, e combina três fontes de informação.",
          "A primeira é a entrevista detalhada com a família sobre situações concretas do cotidiano: como é a hora do banho, da refeição, do sono, o que acontece em ambientes barulhentos, quais roupas a criança recusa, quais atividades ela busca com insistência.",
          "A segunda é a observação clínica estruturada, em que o profissional oferece estímulos controlados e observa as respostas, além de avaliar postura, tônus, equilíbrio, coordenação e planejamento motor.",
          "A terceira é a aplicação de protocolos padronizados e questionários preenchidos por pais e professores, que permitem comparar o perfil da criança com referências para a idade.",
          "O produto final é um mapa do perfil sensorial: em quais sistemas a criança é hiper-responsiva, em quais é hipo-responsiva, e como isso se traduz nas dificuldades relatadas. Esse mapa orienta tanto a terapia quanto as adaptações de ambiente.",
        ],
      },
      {
        heading: "Como é o tratamento?",
        paragraphs: [
          "O tratamento é conduzido em terapia ocupacional, com atividades estruturadas e lúdicas planejadas a partir do perfil identificado na avaliação.",
          "O princípio central é oferecer, de forma graduada e controlada, os estímulos que a criança precisa processar melhor, sempre no ponto em que há desafio suficiente para gerar adaptação sem ultrapassar para a sobrecarga. Esse ajuste depende da leitura constante das respostas da criança durante a sessão.",
          "Um componente frequentemente subestimado é a chamada dieta sensorial: um conjunto de atividades distribuídas ao longo do dia, em casa e na escola, planejadas para manter a criança regulada. Pode incluir atividades de pressão profunda antes de situações exigentes, pausas de movimento durante o período escolar e ajustes no ambiente.",
          "As adaptações ambientais produzem efeito rápido e custam pouco. Abafadores de ruído em ambientes barulhentos, retirada de etiquetas de roupas, redução de iluminação intensa e criação de um espaço calmo para retomada são exemplos com impacto imediato.",
          "Uma observação importante sobre o que não funciona: exposição forçada a estímulos aversivos não dessensibiliza. Ela aumenta o estado de alerta e a reatividade. O trabalho de ampliar tolerância existe, mas é gradual, planejado e conduzido com a participação da criança.",
        ],
        bullets: [
          "Terapia ocupacional com atividades graduadas e planejadas",
          "Dieta sensorial distribuída ao longo do dia",
          "Adaptações no ambiente doméstico e escolar",
          "Orientação da família e da escola",
          "Uso de recursos como abafadores e materiais de pressão profunda",
        ],
      },
      {
        heading: "Quando procurar ajuda?",
        paragraphs: [
          "Vale procurar avaliação quando as reações sensoriais impedem a criança de participar de atividades comuns da idade, quando produzem crises frequentes, ou quando limitam a alimentação, o sono ou a rotina de higiene.",
          "Também é indicado quando a família já reorganizou a vida em torno de evitar determinados estímulos, o que é um sinal de que o prejuízo passou a ser significativo, mesmo que a criança pareça bem enquanto os gatilhos são evitados.",
          "Um cenário frequente que merece atenção é a criança que se comporta bem na escola e entra em crise ao chegar em casa. Isso costuma indicar que ela passou o dia inteiro sustentando a regulação com esforço, e transbordou no primeiro ambiente seguro.",
          "Quanto antes as dificuldades são identificadas, mais fácil é evitar que se consolidem padrões de evitação que limitam a vida da criança e da família.",
        ],
      },
    ],
    faq: [
      {
        q: "Transtorno do processamento sensorial é um diagnóstico oficial?",
        a: "Não constitui diagnóstico independente nas principais classificações atuais. A reatividade sensorial alterada é reconhecida como critério diagnóstico do autismo, e fora desse contexto as dificuldades são avaliadas e tratadas como perfil funcional pela terapia ocupacional.",
      },
      {
        q: "Meu filho tem dificuldades sensoriais. Ele é autista?",
        a: "Não necessariamente. Dificuldades sensoriais aparecem também no TDAH, em crianças prematuras, em transtornos da coordenação e isoladamente. O autismo exige, além disso, sinais consistentes nos domínios de comunicação social e comportamentos repetitivos.",
      },
      {
        q: "Forçar a criança a enfrentar o que incomoda ajuda?",
        a: "Não. Exposição forçada tende a aumentar o estado de alerta e a reatividade. A ampliação da tolerância é feita de forma gradual e planejada em terapia, com participação da criança e respeito aos limites que ela sinaliza.",
      },
      {
        q: "Quanto tempo leva para ver resultado?",
        a: "Ganhos em regulação e tolerância costumam aparecer em algumas semanas a poucos meses. O resultado depende bastante da consistência das estratégias aplicadas em casa e na escola, e não apenas da sessão semanal.",
      },
    ],
    references: [REF_AYRES, REF_AOTA, REF_COFFITO, REF_DSM, REF_SBP_TEA],
  },
  {
    slug: "como-e-feita-avaliacao-neuropsicologica",
    title: "Como é feita uma avaliação neuropsicológica?",
    metaTitle: "Como é feita uma avaliação neuropsicológica | Instituto Matriz",
    metaDescription:
      "Entenda passo a passo a avaliação neuropsicológica infantil: para que serve, quantas sessões leva, o que é avaliado e o que o relatório deve conter.",
    excerpt:
      "Um mapa detalhado de como o cérebro da criança processa atenção, memória e raciocínio. Entenda cada etapa do processo.",
    category: "Avaliação",
    tint: BLUE,
    readingMinutes: 13,
    date: "2026-06-24",
    stats: [
      {
        value: "4 a 10",
        label: "sessões, em média, distribuídas ao longo de semanas",
        source: "Prática clínica descrita em diretrizes de avaliação psicológica",
      },
      {
        value: "CFP",
        label: "conselho que regulamenta a avaliação psicológica e os documentos escritos no Brasil",
        source: "Conselho Federal de Psicologia",
      },
    ],
    intro: [
      "A avaliação neuropsicológica é frequentemente indicada e raramente explicada. Muitas famílias chegam sem saber o que vai acontecer, quanto tempo leva, o que exatamente será medido e para que serve o resultado.",
      "Em resumo, trata-se de um processo estruturado que investiga como o cérebro da criança processa informação: atenção, memória, linguagem, raciocínio, funções executivas e habilidades acadêmicas.",
      "Este guia percorre cada etapa do processo, explica o que é avaliado, quanto tempo leva, o que o relatório deve conter e como esse documento é usado na prática pela escola e pela equipe terapêutica.",
    ],
    sections: [
      {
        heading: "O que é a avaliação neuropsicológica?",
        paragraphs: [
          "É um processo de avaliação que investiga a relação entre o funcionamento cerebral e o comportamento, usando instrumentos padronizados aplicados por psicólogo com formação específica na área.",
          "A palavra padronizado é central. Os testes utilizados passaram por processo de validação e possuem normas de referência, o que permite comparar o desempenho da criança com o de crianças da mesma idade e escolaridade. É isso que transforma uma observação em dado.",
          "O produto da avaliação não é uma nota geral de inteligência, e sim um perfil com picos e vales. Duas crianças com o mesmo diagnóstico podem ter perfis completamente diferentes, e é esse perfil, não o rótulo, que define quais intervenções fazem sentido.",
          "No Brasil, a avaliação psicológica e a elaboração dos documentos resultantes são regulamentadas pelo conselho da categoria, que estabelece critérios sobre uso de instrumentos e sobre a estrutura dos documentos emitidos.",
        ],
      },
      {
        heading: "Quando a avaliação neuropsicológica é indicada?",
        paragraphs: [
          "A indicação mais frequente é a suspeita de condições do neurodesenvolvimento, como TDAH, autismo e transtornos específicos de aprendizagem, em que a avaliação contribui de forma decisiva para o processo diagnóstico.",
          "Outra indicação comum é a investigação de queixas escolares persistentes. Quando existe uma distância consistente entre o potencial que a criança demonstra e o resultado que ela entrega, a avaliação ajuda a identificar onde está o gargalo: atenção, memória, linguagem, velocidade de processamento ou algo específico da leitura ou do cálculo.",
          "A avaliação também é útil quando já existe diagnóstico. Nesse caso, o objetivo não é confirmar o rótulo, e sim mapear o perfil funcional para direcionar as intervenções de forma mais precisa e orientar as adaptações escolares.",
          "Há ainda indicações ligadas a condições clínicas, como acompanhamento após traumatismo craniano, epilepsia, prematuridade extrema e outras situações que podem afetar o desenvolvimento cognitivo.",
        ],
        bullets: [
          "Suspeita de TDAH, autismo ou transtorno de aprendizagem",
          "Queixa escolar persistente sem causa identificada",
          "Rendimento muito abaixo do potencial demonstrado",
          "Necessidade de mapear perfil funcional em diagnóstico já existente",
          "Acompanhamento de condições clínicas que afetam o desenvolvimento",
          "Fundamentação de adaptações escolares formais",
        ],
      },
      {
        heading: "Quais são as etapas do processo?",
        paragraphs: [
          "O processo começa com a entrevista de anamnese, feita com os cuidadores. Ela reconstrói a história do desenvolvimento, o histórico escolar, a saúde, o contexto familiar e detalha a queixa que motivou a avaliação.",
          "A segunda etapa é a aplicação dos testes com a criança, distribuída em várias sessões. Essa distribuição não é acaso: aplicar testes cognitivos em criança cansada produz resultado que não representa a capacidade real dela, e comprometeria toda a interpretação.",
          "A terceira etapa é a coleta de informações complementares, principalmente com a escola, por meio de questionários e, às vezes, contato direto com os professores. Essa informação é indispensável quando a hipótese envolve TDAH ou autismo, cujos critérios exigem manifestação em mais de um contexto.",
          "A quarta etapa é a correção, a análise integrada dos resultados e a redação do relatório. É um trabalho técnico que leva tempo e acontece fora das sessões.",
          "A última etapa é a devolutiva: o encontro em que a equipe apresenta os achados à família em linguagem acessível, responde às dúvidas e discute o plano de intervenção. Quando adequado à idade, é recomendável uma devolutiva também para a própria criança.",
        ],
      },
      {
        heading: "O que exatamente é avaliado?",
        paragraphs: [
          "A bateria de testes é montada conforme a queixa e a idade, mas costuma cobrir um conjunto de domínios que se articulam entre si.",
          "O funcionamento intelectual global é avaliado por instrumentos que examinam raciocínio verbal, raciocínio perceptivo, memória de trabalho e velocidade de processamento. A atenção é avaliada em suas diferentes modalidades: sustentada, seletiva, alternada e dividida.",
          "As funções executivas recebem atenção especial, porque explicam boa parte das queixas escolares: planejamento, organização, controle inibitório, flexibilidade cognitiva e monitoramento do próprio desempenho.",
          "A memória é avaliada em diferentes formatos, verbal e visual, de curto e de longo prazo. A linguagem é examinada em vocabulário, compreensão e fluência. As habilidades visuoespaciais e motoras finas também entram, e quando há queixa acadêmica específica, são aplicados instrumentos de leitura, escrita e matemática.",
          "Além da testagem, são aplicadas escalas de comportamento respondidas por pais e professores, que capturam aspectos emocionais e comportamentais que os testes não alcançam.",
        ],
        bullets: [
          "Funcionamento intelectual e perfil cognitivo",
          "Atenção sustentada, seletiva, alternada e dividida",
          "Funções executivas e organização",
          "Memória verbal e visual",
          "Linguagem, vocabulário e compreensão",
          "Habilidades visuoespaciais e motoras",
          "Leitura, escrita e matemática quando há queixa acadêmica",
          "Aspectos emocionais e comportamentais por escalas",
        ],
      },
      {
        heading: "Quanto tempo leva e como a criança reage?",
        paragraphs: [
          "O processo completo costuma levar de quatro a dez sessões com a criança, distribuídas ao longo de algumas semanas, mais as sessões de anamnese e de devolutiva com a família.",
          "A maioria das crianças não vivencia o processo como algo aversivo. Os testes são apresentados em formato de atividades e jogos, e muitas relatam ter gostado. Um avaliador experiente sabe dosar o ritmo, propor pausas e interromper quando percebe cansaço.",
          "Vale orientar a criança antes, de forma honesta e sem dramatizar. Dizer que ela vai fazer atividades e jogos com uma pessoa que quer entender como ela pensa e aprender no que pode ajudar costuma bastar. Prometer que não haverá nada difícil não é boa ideia, porque parte dos testes é desafiadora por construção.",
          "Um cuidado prático: agendar em horários em que a criança esteja descansada, evitar dias de prova ou de eventos e garantir que ela tenha se alimentado. Esses fatores influenciam o desempenho e, portanto, a validade dos resultados.",
        ],
      },
      {
        heading: "O que o relatório deve conter?",
        paragraphs: [
          "O relatório é o principal produto de todo o processo, e será usado por anos pela escola e pela equipe terapêutica. Sua qualidade importa tanto quanto a qualidade da testagem.",
          "Um bom relatório descreve a queixa e os objetivos da avaliação, os procedimentos e instrumentos utilizados, os resultados por domínio com interpretação, a síntese integrada dos achados, a conclusão diagnóstica quando aplicável, e recomendações específicas.",
          "As recomendações são a parte de maior valor prático. Elas devem ser concretas o suficiente para serem executadas: quais intervenções terapêuticas, com que frequência, e quais adaptações escolares específicas, como tempo adicional em avaliações, redução de cópia da lousa, avaliação oral ou posicionamento na sala.",
          "Se o documento recebido contém apenas um diagnóstico e uma recomendação genérica de acompanhamento, ele está aquém do esperado. É legítimo e recomendável solicitar esclarecimentos e complementação.",
          "Vale saber também que existe distinção formal entre os tipos de documento emitidos por psicólogos, com finalidades e estruturas diferentes, definidas pela regulamentação da categoria.",
        ],
      },
      {
        heading: "Como usar o resultado na prática?",
        paragraphs: [
          "O primeiro uso é o direcionamento terapêutico. O perfil identificado indica quais áreas priorizar e permite que a equipe defina objetivos concretos em vez de trabalhar de forma genérica.",
          "O segundo uso é escolar. O relatório fundamenta a solicitação de adaptações previstas na legislação de inclusão, e é o documento que a escola precisa para implementá-las formalmente. Vale agendar uma reunião com a coordenação para apresentar os achados e combinar o plano de apoio.",
          "O terceiro uso, menos lembrado e bastante valioso, é o de comunicação familiar. O relatório frequentemente muda a forma como a família interpreta o comportamento da criança, substituindo leituras de preguiça e má vontade por compreensão de como ela funciona.",
          "Sobre validade, não existe prazo fixo estabelecido. Na prática, reavaliações costumam ser indicadas a cada dois ou três anos em crianças em desenvolvimento, ou quando há mudança importante no quadro, transição de etapa escolar ou necessidade de atualizar as adaptações.",
        ],
      },
    ],
    faq: [
      {
        q: "Avaliação neuropsicológica dói ou é invasiva?",
        a: "Não. Não envolve nenhum procedimento físico. São entrevistas e atividades em formato de jogos e tarefas aplicadas por psicólogo, e a maioria das crianças participa sem desconforto.",
      },
      {
        q: "O resultado substitui o diagnóstico médico?",
        a: "É uma peça central do processo diagnóstico, mas o diagnóstico formal de algumas condições costuma ser fechado em conjunto com médico, que integra os achados ao quadro clínico. Para fins legais, o laudo médico com código diagnóstico geralmente é exigido.",
      },
      {
        q: "Posso fazer só um teste de QI em vez da avaliação completa?",
        a: "Um teste isolado de inteligência responde a uma pergunta muito estreita e não permite identificar TDAH, transtornos de aprendizagem ou o perfil funcional necessário para orientar intervenções. A avaliação completa existe justamente porque essas questões exigem múltiplos domínios.",
      },
      {
        q: "Plano de saúde cobre avaliação neuropsicológica?",
        a: "A cobertura existe em determinadas condições e mediante indicação médica, sujeita às regras vigentes do setor. Vale solicitar com relatório médico justificando a necessidade e pedir eventual negativa sempre por escrito.",
      },
      {
        q: "De quanto em quanto tempo devo repetir?",
        a: "Não há prazo fixo. Na prática, reavaliações costumam ser indicadas a cada dois ou três anos em crianças em desenvolvimento, ou quando há mudança relevante no quadro ou necessidade de atualizar adaptações escolares.",
      },
    ],
    references: [REF_CFP, REF_DSM, REF_ABENEPI, REF_LBI, REF_MEC_INCLUSAO],
  },
];
