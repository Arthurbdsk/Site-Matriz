import type { BlogPost, RawPost } from "@/data/postTypes";
import { BLUE, TEAL, ORANGE, NAVY } from "@/data/postTypes";
import { extraPosts1 } from "@/data/posts-extra1";
import { extraPosts2 } from "@/data/posts-extra2";
import { extraPosts3 } from "@/data/posts-extra3";
import { extraPosts4 } from "@/data/posts-extra4";
import { extraRelated } from "@/data/posts-extra-related";

export type { PostSection, PostLink, BlogPost, RawPost } from "@/data/postTypes";
export { BLUE, TEAL, ORANGE, NAVY } from "@/data/postTypes";

const rawPosts: RawPost[] = [
  {
    slug: "como-reconhecer-sinais-de-autismo",
    title: "Como reconhecer sinais de autismo no seu filho",
    metaTitle: "Como reconhecer sinais de autismo no seu filho | Instituto Matriz",
    metaDescription:
      "Aprenda quais comportamentos podem indicar Transtorno do Espectro Autista, em que idade observar e quando procurar uma avaliação especializada.",
    excerpt:
      "Nem todo sinal isolado significa autismo. Entenda quais comportamentos, observados em conjunto, justificam uma avaliação.",
    category: "Autismo",
    tint: BLUE,
    readingMinutes: 7,
    date: "2026-01-15",
    intro: [
      "Muitos pais chegam ao consultório dizendo a mesma frase: “eu sentia que alguma coisa era diferente, mas todo mundo dizia que era só uma fase”. Essa intuição costuma estar certa com mais frequência do que se imagina.",
      "Reconhecer sinais de autismo não é diagnosticar. É saber o que observar, com que consistência, e em que momento buscar ajuda profissional.",
    ],
    sections: [
      {
        heading: "Quais são os primeiros sinais de autismo em bebês?",
        paragraphs: [
          "Os primeiros sinais aparecem principalmente na comunicação social: pouco contato visual, não responder ao próprio nome por volta dos 12 meses, e não apontar para mostrar interesse por algo.",
          "Nessa fase, o mais revelador não é o que a criança faz, mas o que ela deixa de fazer. Bebês típicos usam o olhar e o gesto para compartilhar atenção com o adulto muito antes de falar. Quando esse compartilhamento não aparece, vale investigar.",
        ],
        bullets: [
          "Não responde ao nome aos 12 meses",
          "Não aponta para objetos de interesse aos 14 meses",
          "Não faz brincadeiras de faz de conta aos 18 meses",
          "Evita contato visual de forma consistente",
          "Não imita expressões faciais ou gestos simples",
        ],
      },
      {
        heading: "Sinais isolados já são motivo de preocupação?",
        paragraphs: [
          "Não. Um comportamento isolado, aparecendo de vez em quando, raramente significa alguma coisa por si só.",
          "O que importa é o padrão: vários sinais presentes ao mesmo tempo, de forma persistente por semanas ou meses, e em ambientes diferentes (em casa, na creche, com outras pessoas). Uma criança que às vezes não responde ao nome porque está concentrada é muito diferente de uma criança que raramente responde, em qualquer situação.",
        ],
      },
      {
        heading: "Meu filho fala, então não pode ser autismo?",
        paragraphs: [
          "Pode, sim. Falar não descarta autismo. O espectro é amplo, e existem crianças com vocabulário rico e fala fluente que ainda assim têm dificuldades importantes de comunicação social.",
          "Nesses casos, o que chama atenção é a qualidade da comunicação, não a quantidade: uso repetitivo de frases decoradas, dificuldade em manter uma conversa de ida e volta, monólogos sobre um interesse específico, ou dificuldade em entender ironia e linguagem figurada.",
        ],
      },
      {
        heading: "O que fazer se eu identificar vários desses sinais?",
        paragraphs: [
          "Procure uma avaliação especializada, sem esperar a criança “melhorar sozinha”. O caminho mais comum é começar por uma avaliação interdisciplinar ou neuropsicológica, que reúne observação clínica, entrevista com a família e instrumentos padronizados.",
          "Vale reforçar: buscar avaliação não é rotular a criança. É entender como ela funciona, para oferecer o suporte certo no momento em que ele faz mais diferença.",
        ],
      },
    ],
  },
  {
    slug: "10-sinais-de-autismo-que-passam-despercebidos",
    title: "10 sinais de autismo que passam despercebidos",
    metaTitle: "10 sinais de autismo que passam despercebidos | Instituto Matriz",
    metaDescription:
      "Conheça sinais sutis de autismo que costumam ser confundidos com timidez, teimosia ou personalidade, e que atrasam o diagnóstico.",
    excerpt:
      "Alguns sinais são atribuídos a “jeito de ser” e passam anos sem investigação. Estes são os que mais atrasam o diagnóstico.",
    category: "Autismo",
    tint: BLUE,
    readingMinutes: 8,
    date: "2026-01-22",
    intro: [
      "Os sinais clássicos de autismo são bem divulgados. Já os sutis costumam ser explicados como personalidade (“ele é tímido”, “ela é do contra”, “é só teimosia”), e é justamente por isso que atrasam tanto o diagnóstico.",
      "A lista abaixo reúne comportamentos que ouvimos com frequência de famílias que só receberam o diagnóstico anos depois do primeiro sinal.",
    ],
    sections: [
      {
        heading: "Quais sinais de autismo são mais confundidos com personalidade?",
        paragraphs: [
          "São os que envolvem rigidez, sensibilidade sensorial e dificuldades sociais discretas, porque todos eles têm uma explicação socialmente aceitável à mão.",
          "Veja os dez que mais aparecem tarde:",
        ],
        bullets: [
          "Reação desproporcional a mudanças pequenas de rotina ou de trajeto",
          "Incômodo intenso com etiquetas de roupa, costuras ou determinados tecidos",
          "Dificuldade em brincar de faz de conta ou em entrar em brincadeiras de grupo",
          "Fala com vocabulário adulto demais para a idade, quase “decorado”",
          "Interesse muito intenso e detalhista por um único assunto",
          "Dificuldade em entender piadas, ironia ou expressões figuradas",
          "Repetir falas de desenhos ou vídeos fora de contexto (ecolalia)",
          "Andar na ponta dos pés depois da idade esperada",
          "Cobrir os ouvidos em ambientes barulhentos como shopping ou festas",
          "Preferir brincar sozinho de forma consistente, e não apenas às vezes",
        ],
      },
      {
        heading: "Por que meninas costumam ser diagnosticadas mais tarde?",
        paragraphs: [
          "Porque muitas meninas autistas desenvolvem estratégias de imitação social, o chamado “mascaramento”, que escondem as dificuldades em ambientes estruturados como a escola.",
          "Elas observam as colegas, copiam comportamentos e conseguem se adaptar durante o dia, mas frequentemente entram em colapso emocional ao chegar em casa, quando a demanda de mascarar cessa. Esse contraste entre “na escola vai bem” e “em casa desmonta” é um dos sinais mais importantes e mais ignorados.",
        ],
      },
      {
        heading: "Esses sinais aparecem só na infância?",
        paragraphs: [
          "Não. Muitos adultos recebem diagnóstico tardio justamente por terem passado a vida inteira com esses sinais interpretados como traços de personalidade.",
          "Se você reconhece vários desses comportamentos na sua própria história enquanto lê sobre o seu filho, isso não é coincidência: o autismo tem forte componente hereditário, e não é raro que a investigação da criança leve a família a entender também a história dos pais.",
        ],
      },
    ],
  },
  {
    slug: "regulacao-emocional-em-criancas",
    title: "Como ajudar seu filho com a regulação emocional",
    metaTitle: "Regulação emocional infantil: como ajudar seu filho | Instituto Matriz",
    metaDescription:
      "Entenda o que é regulação emocional, por que algumas crianças têm mais dificuldade e quais estratégias práticas funcionam em casa.",
    excerpt:
      "Regulação emocional não é obedecer nem se acalmar sozinho. É uma habilidade que se aprende e que pode ser ensinada.",
    category: "Comportamento",
    tint: TEAL,
    readingMinutes: 9,
    date: "2026-02-03",
    intro: [
      "“Ele explode por qualquer coisa.” “Ela não consegue se acalmar de jeito nenhum.” A dificuldade de regulação emocional é uma das queixas mais comuns entre famílias, com ou sem diagnóstico envolvido.",
      "A boa notícia é que regulação emocional é uma habilidade, não um traço fixo de temperamento. E toda habilidade pode ser desenvolvida com a estratégia certa.",
    ],
    sections: [
      {
        heading: "O que é regulação emocional, na prática?",
        paragraphs: [
          "É a capacidade de perceber o que se está sentindo, tolerar essa emoção sem ser dominado por ela, e escolher uma resposta em vez de reagir automaticamente.",
          "Repare que são três etapas distintas, e uma criança pode falhar em qualquer uma delas. Algumas nem percebem que a raiva está subindo até já estarem gritando. Outras percebem, mas não têm repertório de estratégias para lidar. Ensinar “se acalme” não resolve nenhuma das duas situações.",
        ],
      },
      {
        heading: "Por que meu filho perde o controle por coisas pequenas?",
        paragraphs: [
          "Na maioria das vezes, porque o gatilho visível não é a causa real: é apenas a gota d'água de uma sobrecarga que vinha se acumulando.",
          "Uma criança que passou o dia inteiro se esforçando para lidar com barulho, demandas escolares e frustrações pequenas chega em casa com pouquíssima reserva. O copo que derrama não é o problema, é só o que estava por último. Por isso, olhar para o dia inteiro costuma explicar mais do que analisar o episódio isolado.",
        ],
      },
      {
        heading: "Quais estratégias realmente funcionam durante uma crise?",
        paragraphs: [
          "Durante o pico da crise, o cérebro da criança está em modo de sobrevivência e não processa argumentos. Falar menos e regular junto funciona melhor do que explicar.",
          "O momento de ensinar é depois, quando a criança já voltou ao estado de calma. Tentar dar lição durante a crise costuma prolongá-la.",
        ],
        bullets: [
          "Reduza estímulos: menos barulho, menos gente, menos luz",
          "Fale pouco e devagar, em frases curtas",
          "Valide a emoção sem validar o comportamento: “vejo que você está com muita raiva”",
          "Ofereça presença física se a criança aceitar, distância segura se não aceitar",
          "Espere a volta da calma para conversar sobre o que aconteceu",
        ],
      },
      {
        heading: "Como ensinar regulação emocional fora das crises?",
        paragraphs: [
          "O trabalho real acontece nos momentos tranquilos, não durante a explosão. É aí que se constrói vocabulário emocional, se pratica identificar sinais corporais de raiva ou ansiedade, e se ensaia estratégias de saída.",
          "Ferramentas simples ajudam muito: um cantinho da calma com objetos sensoriais, um cartaz com “termômetro” de emoções, e combinados feitos por antecipação (“quando você sentir que vai explodir, você pode ir para o quarto e eu não vou atrás até você chamar”). Crianças com TDAH ou autismo geralmente precisam desse suporte de forma mais explícita e por mais tempo.",
        ],
      },
    ],
  },
  {
    slug: "birra-ou-crise-sensorial",
    title: "Birra ou crise sensorial? Como diferenciar",
    metaTitle: "Birra ou crise sensorial: como diferenciar | Instituto Matriz",
    metaDescription:
      "Aprenda a distinguir uma birra comum de uma crise de sobrecarga sensorial, e por que a resposta do adulto precisa ser diferente em cada caso.",
    excerpt:
      "As duas parecem iguais de fora, mas têm causas opostas. Responder do jeito errado piora a situação.",
    category: "Comportamento",
    tint: ORANGE,
    readingMinutes: 6,
    date: "2026-02-10",
    intro: [
      "Do lado de fora, birra e crise sensorial podem parecer idênticas: choro alto, corpo no chão, criança inconsolável. Por dentro, são fenômenos completamente diferentes.",
      "Saber diferenciar muda tudo, porque a estratégia que funciona para uma agrava a outra.",
    ],
    sections: [
      {
        heading: "Qual a diferença entre birra e crise sensorial?",
        paragraphs: [
          "A birra tem um objetivo: a criança quer algo e está usando o comportamento para conseguir. A crise sensorial não tem objetivo: é uma resposta involuntária do sistema nervoso a uma sobrecarga de estímulos.",
          "Por isso a birra normalmente cessa quando o objetivo é alcançado ou definitivamente descartado, enquanto a crise sensorial precisa percorrer seu curso até o sistema nervoso se reorganizar, mesmo que você atenda a todos os pedidos da criança.",
        ],
      },
      {
        heading: "Como identificar qual dos dois está acontecendo?",
        paragraphs: [
          "Alguns indicadores ajudam a ler a situação no momento:",
        ],
        bullets: [
          "Birra: a criança verifica se você está olhando; crise: ela não registra sua presença",
          "Birra: costuma acontecer diante de uma negativa; crise: costuma acontecer em ambientes intensos (mercado, festa, shopping)",
          "Birra: para quando o objetivo se resolve; crise: continua mesmo depois",
          "Birra: a criança mantém alguma consciência de segurança; crise: pode haver risco de se machucar sem perceber",
          "Crise: com frequência vem acompanhada de cobrir ouvidos, fechar olhos, ou movimentos repetitivos",
        ],
      },
      {
        heading: "Como responder a cada uma delas?",
        paragraphs: [
          "Na birra, a resposta é manter o limite com calma e sem negociar sob pressão. Ceder no meio do episódio ensina que a intensidade funciona.",
          "Na crise sensorial, a resposta é reduzir estímulos imediatamente: sair do ambiente, diminuir barulho e luz, falar pouco, oferecer pressão profunda se a criança aceitar. Aplicar “disciplina” a uma crise sensorial é como punir alguém por espirrar: a criança não escolheu aquilo e não tem controle voluntário sobre o que está acontecendo.",
        ],
      },
    ],
  },
  {
    slug: "meu-filho-e-distraido-ou-tem-tdah",
    title: "Meu filho é distraído ou tem TDAH?",
    metaTitle: "Distração comum ou TDAH? Como diferenciar | Instituto Matriz",
    metaDescription:
      "Entenda o que separa a desatenção típica da infância do Transtorno de Déficit de Atenção e Hiperatividade, e quando buscar avaliação.",
    excerpt:
      "Toda criança se distrai. O que define o TDAH não é a distração em si, mas onde, quanto e com que consequências.",
    category: "TDAH",
    tint: ORANGE,
    readingMinutes: 7,
    date: "2026-02-18",
    intro: [
      "Praticamente toda criança se distrai, esquece o material, sonha acordada na aula. Isso não é TDAH, é infância.",
      "A diferença está em três dimensões: intensidade, consistência entre ambientes, e prejuízo real na vida da criança.",
    ],
    sections: [
      {
        heading: "Como saber se a desatenção do meu filho é normal?",
        paragraphs: [
          "A desatenção típica é situacional: aparece em tarefas chatas, quando a criança está cansada, ou em momentos específicos, mas não impede o funcionamento geral.",
          "No TDAH, a desatenção aparece em vários contextos (casa, escola, atividades de lazer), persiste por pelo menos seis meses e já produziu consequências concretas: notas abaixo do potencial, materiais perdidos com frequência, conflitos recorrentes, tarefas que nunca são concluídas.",
        ],
      },
      {
        heading: "Se ele consegue focar em videogame, pode ser TDAH?",
        paragraphs: [
          "Sim, e essa é provavelmente a maior confusão sobre o transtorno. TDAH não é falta de atenção, é dificuldade de regular para onde a atenção vai.",
          "Atividades com recompensa imediata, feedback constante e estímulo alto (jogos, vídeos curtos) capturam a atenção sem esforço voluntário. Já ler um capítulo de história ou fazer uma lista de exercícios exige que a criança sustente o foco por vontade própria, e é exatamente essa a função prejudicada no TDAH. A hiperconcentração em algo interessante é um sinal do transtorno, não um argumento contra ele.",
        ],
      },
      {
        heading: "TDAH sempre vem com hiperatividade?",
        paragraphs: [
          "Não. Existe a apresentação predominantemente desatenta, muito comum e muito subdiagnosticada, especialmente em meninas.",
          "Essas crianças não incomodam: são quietas, parecem distraídas ou “no mundo da lua”, entregam trabalhos incompletos e passam anos sendo descritas como preguiçosas ou desinteressadas. Como não geram problema de comportamento em sala, raramente são encaminhadas para avaliação.",
        ],
      },
      {
        heading: "Como é feita a avaliação de TDAH?",
        paragraphs: [
          "O diagnóstico é clínico e depende de informações de mais de uma fonte: entrevista com a família, questionários padronizados respondidos por pais e escola, e frequentemente uma avaliação neuropsicológica que mapeia atenção, memória de trabalho e funções executivas.",
          "Não existe exame de imagem ou de sangue que feche o diagnóstico. E é justamente por isso que a qualidade da avaliação importa tanto: ela precisa descartar outras causas de desatenção, como ansiedade, dificuldades de aprendizagem ou problemas de sono.",
        ],
      },
    ],
  },
  {
    slug: "como-montar-rotina-visual-em-casa",
    title: "Como montar uma rotina visual em casa",
    metaTitle: "Rotina visual infantil: como montar em casa | Instituto Matriz",
    metaDescription:
      "Passo a passo para criar uma rotina visual que reduz conflitos e aumenta a autonomia de crianças com autismo, TDAH ou dificuldade de organização.",
    excerpt:
      "Um quadro de rotina bem feito reduz brigas diárias mais do que qualquer sermão. Veja como montar o seu.",
    category: "Rotina",
    tint: TEAL,
    readingMinutes: 6,
    date: "2026-02-25",
    intro: [
      "Boa parte dos conflitos diários com crianças não vem de desobediência, e sim de previsibilidade insuficiente. A criança não sabe o que vem depois, e cada transição vira uma negociação.",
      "A rotina visual resolve isso transferindo a informação da fala (que exige memória e atenção) para o ambiente (que está sempre ali).",
    ],
    sections: [
      {
        heading: "Por que uma rotina visual funciona melhor do que falar?",
        paragraphs: [
          "Porque instruções faladas somem no instante em que são ditas e exigem que a criança processe linguagem, retenha na memória de trabalho e execute, três funções frequentemente prejudicadas em crianças com TDAH ou autismo.",
          "Uma imagem fixa na parede não some, não precisa ser lembrada e não depende de a criança estar prestando atenção no momento exato em que você falou. Ela consulta quando precisar.",
        ],
      },
      {
        heading: "Como montar uma rotina visual passo a passo?",
        paragraphs: [
          "Comece pequeno. O erro mais comum é tentar mapear o dia inteiro de uma vez e abandonar o sistema na primeira semana.",
        ],
        bullets: [
          "Escolha apenas UM momento problemático para começar (ex.: a rotina da manhã)",
          "Liste de 4 a 6 passos, não mais que isso",
          "Use fotos reais da própria criança fazendo cada passo, se possível",
          "Coloque na altura dos olhos dela, no local onde a rotina acontece",
          "Deixe a criança marcar cada passo concluído (velcro, ímã ou risco)",
          "Só acrescente um novo momento do dia depois que o primeiro estiver funcionando",
        ],
      },
      {
        heading: "Meu filho já sabe ler, ainda precisa de imagens?",
        paragraphs: [
          "Pode se beneficiar igualmente, mas o formato muda: listas escritas, checklists ou quadros com horários funcionam bem para crianças alfabetizadas.",
          "O princípio permanece o mesmo, independentemente do formato: a informação precisa estar fora da cabeça da criança e visível no ambiente. Adolescentes com TDAH costumam se dar muito bem com quadros brancos e aplicativos de checklist pelo mesmo motivo.",
        ],
      },
    ],
  },
  {
    slug: "seletividade-alimentar-infantil",
    title: "Seletividade alimentar: quando não é frescura",
    metaTitle: "Seletividade alimentar infantil: o que fazer | Instituto Matriz",
    metaDescription:
      "Entenda a diferença entre ser exigente com comida e seletividade alimentar clínica, suas causas sensoriais e como abordar sem brigas.",
    excerpt:
      "Recusar brócolis é normal. Comer apenas cinco alimentos específicos, sempre da mesma marca, não é.",
    category: "Alimentação",
    tint: ORANGE,
    readingMinutes: 7,
    date: "2026-03-04",
    intro: [
      "Quase toda criança passa por uma fase de recusar comida nova. Isso tem até nome, neofobia alimentar, e costuma se resolver com o tempo e exposição repetida.",
      "Mas existe um grupo de crianças cuja recusa não é fase, não melhora com insistência e não tem nada a ver com birra: é seletividade alimentar de base sensorial.",
    ],
    sections: [
      {
        heading: "Como saber se meu filho tem seletividade alimentar clínica?",
        paragraphs: [
          "O indicador mais claro é o repertório: crianças com seletividade clínica costumam aceitar menos de 15 a 20 alimentos no total, e esse número tende a diminuir com o tempo em vez de aumentar.",
          "Outros sinais importantes incluem recusa por textura (não por sabor), reação de náusea ou choro diante de determinados alimentos, exigência de marcas ou preparos específicos, e recusa de alimentos que se tocaram no prato.",
        ],
        bullets: [
          "Aceita menos de 20 alimentos no total",
          "O repertório está encolhendo, não crescendo",
          "Recusa é por textura, cor ou cheiro, não por sabor",
          "Náusea, engasgo ou choro diante do alimento novo",
          "Não aceita alimentos que encostaram uns nos outros",
          "Exige marca, embalagem ou preparo idêntico sempre",
        ],
      },
      {
        heading: "Por que forçar a criança a comer não funciona?",
        paragraphs: [
          "Porque a recusa não é escolha voluntária, e a pressão transforma a refeição em um evento de ansiedade, o que reduz ainda mais o repertório alimentar a médio prazo.",
          "Estratégias como “só sai da mesa quando terminar”, esconder o alimento em outro prato ou negociar sobremesa costumam gerar ganho pontual e perda estrutural: a criança passa a associar a mesa a conflito e fica ainda mais resistente a experimentar.",
        ],
      },
      {
        heading: "Qual profissional trata seletividade alimentar?",
        paragraphs: [
          "Normalmente é um trabalho conjunto entre terapeuta ocupacional (para as questões sensoriais), fonoaudiólogo (quando há dificuldade motora-oral de mastigação) e nutricionista (para garantir adequação nutricional durante o processo).",
          "A abordagem terapêutica trabalha por aproximação gradual: primeiro tolerar o alimento na mesa, depois no prato, depois tocar, cheirar, encostar nos lábios, e só muito depois provar. Cada etapa pode levar semanas, e é justamente essa lentidão planejada que produz resultado duradouro.",
        ],
      },
    ],
  },
  {
    slug: "atraso-de-fala-quando-se-preocupar",
    title: "Atraso de fala: quando se preocupar de verdade",
    metaTitle: "Atraso de fala infantil: quando se preocupar | Instituto Matriz",
    metaDescription:
      "Marcos da fala por idade, sinais de alerta reais e por que a recomendação de “esperar para ver” está desatualizada.",
    excerpt:
      "“Cada um no seu tempo” é verdade até certo ponto. Depois desse ponto, esperar custa caro.",
    category: "Linguagem",
    tint: TEAL,
    readingMinutes: 6,
    date: "2026-03-11",
    intro: [
      "“O tio dele também falou tarde e hoje é advogado.” Essa frase já atrasou muita intervenção que faria diferença.",
      "É verdade que crianças têm ritmos diferentes. Também é verdade que existem marcos com base populacional sólida, e que ficar muito abaixo deles merece investigação, não espera.",
    ],
    sections: [
      {
        heading: "Quais são os marcos da fala por idade?",
        paragraphs: [
          "Os marcos abaixo são referências amplamente usadas na prática clínica. Ficar levemente atrás de um deles não é emergência; ficar consistentemente atrás de vários é sinal para avaliar.",
        ],
        bullets: [
          "12 meses: balbucia, usa gestos como apontar e dar tchau, primeiras palavras",
          "18 meses: fala pelo menos 10 a 20 palavras com significado",
          "24 meses: vocabulário acima de 50 palavras e combina duas palavras (“quer água”)",
          "36 meses: frases de três ou mais palavras, compreensível para estranhos na maior parte do tempo",
          "48 meses: conta pequenas histórias, fala fluente e bem compreendida por qualquer pessoa",
        ],
      },
      {
        heading: "Quais sinais indicam que não é só um atraso simples?",
        paragraphs: [
          "O sinal mais importante é a compreensão. Uma criança que fala pouco mas entende bem tudo o que se pede tem prognóstico muito melhor do que uma que também não compreende.",
          "Dois outros sinais exigem avaliação imediata, sem espera: perda de habilidades de linguagem que a criança já tinha (regressão), e ausência de gestos comunicativos como apontar e mostrar objetos. Ambos podem indicar quadros que se beneficiam enormemente de intervenção precoce.",
        ],
      },
      {
        heading: "Vale a pena esperar até os 3 anos para procurar ajuda?",
        paragraphs: [
          "Não. Essa recomendação é antiga e já não corresponde ao que a evidência mostra sobre plasticidade cerebral nos primeiros anos.",
          "Quanto mais cedo a fonoterapia começa, menos tempo de intervenção costuma ser necessário para alcançar o mesmo resultado. E se a avaliação concluir que era apenas variação normal do desenvolvimento, você terá gasto uma consulta e ganho tranquilidade, um custo baixo diante do risco de perder a janela mais eficiente de intervenção.",
        ],
      },
    ],
  },
  {
    slug: "tempo-de-tela-para-criancas",
    title: "Tempo de tela: o que realmente importa",
    metaTitle: "Tempo de tela infantil: limites e impactos | Instituto Matriz",
    metaDescription:
      "Recomendações por faixa etária, impactos reais das telas no desenvolvimento infantil e como reduzir sem guerra diária.",
    excerpt:
      "A quantidade importa menos do que o tipo de conteúdo e o que a tela está substituindo na rotina.",
    category: "Rotina",
    tint: BLUE,
    readingMinutes: 8,
    date: "2026-03-18",
    intro: [
      "Poucos temas geram tanta culpa parental quanto o tempo de tela. E poucos são discutidos com tanta simplificação.",
      "A conversa útil não é “tela é ruim”, e sim: que tipo de tela, em que idade, substituindo o quê.",
    ],
    sections: [
      {
        heading: "Quanto tempo de tela é recomendado por idade?",
        paragraphs: [
          "As recomendações mais aceitas atualmente por entidades pediátricas seguem esta linha geral:",
        ],
        bullets: [
          "Até 2 anos: idealmente nenhuma tela, exceto videochamadas com familiares",
          "2 a 5 anos: até 1 hora por dia, sempre com conteúdo de qualidade e acompanhado",
          "6 a 10 anos: até 1 a 2 horas por dia, com regras claras de horário e local",
          "Adolescentes: limite negociado, com prioridade para sono, estudo e atividade física",
          "Em qualquer idade: sem telas na hora da refeição e pelo menos 1 hora antes de dormir",
        ],
      },
      {
        heading: "Por que telas afetam mais crianças com TDAH ou autismo?",
        paragraphs: [
          "Porque o formato de estímulo rápido e recompensa imediata é exatamente o oposto do que essas crianças precisam treinar, e é também o mais difícil de largar para elas.",
          "Crianças com TDAH têm um sistema de recompensa que responde intensamente a estímulos imediatos, o que torna a transição de sair da tela muito mais difícil do que para outras crianças. Crianças autistas frequentemente usam a tela como regulação sensorial, o que faz a retirada abrupta gerar crise real, não birra.",
        ],
      },
      {
        heading: "O que a tela está substituindo é mais importante que o tempo?",
        paragraphs: [
          "Sim, e essa é provavelmente a pergunta mais útil que um pai pode fazer. Uma hora de tela que substitui tempo ocioso é muito diferente de uma hora que substitui brincadeira livre, interação com adultos ou sono.",
          "Nos primeiros anos, o desenvolvimento de linguagem depende fortemente de interação de ida e volta com uma pessoa real. Vídeos, mesmo educativos, não fornecem essa troca. Por isso o impacto da tela é desproporcionalmente maior quanto menor a criança.",
        ],
      },
      {
        heading: "Como reduzir a tela sem uma guerra diária?",
        paragraphs: [
          "Avise com antecedência e use marcadores concretos em vez de tempo abstrato: “mais dois episódios” funciona melhor que “mais vinte minutos” para quem ainda não tem noção madura de tempo.",
          "Combine as regras fora do momento de conflito, deixe-as visíveis e, o ponto mais difícil, aplique-as também aos adultos da casa nos momentos combinados. Regra que só vale para a criança perde legitimidade rápido.",
        ],
      },
    ],
  },
  {
    slug: "sono-infantil-e-neurodesenvolvimento",
    title: "Dificuldade para dormir e neurodesenvolvimento",
    metaTitle: "Sono infantil e neurodesenvolvimento | Instituto Matriz",
    metaDescription:
      "Por que crianças com TEA e TDAH dormem pior, como o sono ruim piora os sintomas e o que fazer para melhorar a rotina noturna.",
    excerpt:
      "Sono ruim não é só consequência do transtorno, ele amplifica todos os sintomas no dia seguinte.",
    category: "Rotina",
    tint: NAVY,
    readingMinutes: 7,
    date: "2026-03-25",
    intro: [
      "Famílias de crianças com TEA ou TDAH relatam problemas de sono com frequência muito acima da média. E raramente esse tema recebe a atenção que merece nas consultas.",
      "Isso é um problema, porque o sono é uma das variáveis que mais afeta atenção, humor e regulação emocional no dia seguinte.",
    ],
    sections: [
      {
        heading: "Por que crianças com autismo ou TDAH dormem pior?",
        paragraphs: [
          "Por razões biológicas, não apenas comportamentais: há evidência de alterações na produção e no ritmo da melatonina em parte dessas crianças, além de maior dificuldade de “desligar” o estado de alerta.",
          "Somam-se a isso fatores sensoriais (incômodo com tecido, temperatura, ruídos que outras pessoas ignoram) e cognitivos (pensamentos acelerados, dificuldade em interromper um interesse intenso). Não é falta de disciplina na rotina.",
        ],
      },
      {
        heading: "Como o sono ruim piora os sintomas durante o dia?",
        paragraphs: [
          "A privação de sono afeta diretamente as mesmas funções já comprometidas nesses quadros: atenção sustentada, controle de impulsos, memória de trabalho e regulação emocional.",
          "Na prática, isso cria um ciclo: a criança dorme mal, no dia seguinte se desregula mais, tem mais conflitos e mais estresse, o que dificulta ainda mais o sono na noite seguinte. Quebrar esse ciclo costuma produzir melhora perceptível em vários sintomas ao mesmo tempo.",
        ],
      },
      {
        heading: "O que ajuda a melhorar a rotina de sono?",
        paragraphs: [
          "As medidas mais eficazes são ambientais e de previsibilidade, aplicadas com consistência por várias semanas antes de se avaliar o resultado.",
        ],
        bullets: [
          "Mesmo horário de dormir e acordar, inclusive nos fins de semana",
          "Rotina noturna curta, previsível e sempre na mesma ordem",
          "Sem telas pelo menos 1 hora antes de deitar",
          "Quarto escuro, silencioso e fresco; considerar cortina blackout",
          "Atividade física durante o dia, mas não perto da hora de dormir",
          "Avaliar tecidos de pijama e roupa de cama se houver sensibilidade sensorial",
        ],
      },
      {
        heading: "Quando procurar ajuda profissional para o sono?",
        paragraphs: [
          "Quando as medidas comportamentais aplicadas de forma consistente por 4 a 6 semanas não produziram mudança, ou quando há sinais de apneia do sono, como ronco alto, pausas na respiração e sono muito agitado.",
          "Suplementação de melatonina é bastante estudada nesse contexto, mas a indicação, a dose e o horário devem ser definidos por médico. O horário, inclusive, importa tanto quanto a dose.",
        ],
      },
    ],
  },
  {
    slug: "como-contar-o-diagnostico-para-a-crianca",
    title: "Como contar o diagnóstico para o seu filho",
    metaTitle: "Como contar o diagnóstico de autismo ou TDAH ao filho | Instituto Matriz",
    metaDescription:
      "Quando e como conversar com a criança sobre o próprio diagnóstico, com linguagem adequada à idade e sem transformar em rótulo negativo.",
    excerpt:
      "Crianças percebem que são diferentes muito antes de alguém explicar por quê. O silêncio costuma doer mais que a conversa.",
    category: "Família",
    tint: TEAL,
    readingMinutes: 7,
    date: "2026-04-01",
    intro: [
      "Muitas famílias adiam essa conversa por medo de rotular a criança. A intenção é protetiva, mas o efeito costuma ser o contrário.",
      "Crianças percebem que funcionam diferente dos colegas bem antes de qualquer adulto explicar. Sem uma explicação, elas criam a própria, e quase sempre é pior que a realidade.",
    ],
    sections: [
      {
        heading: "Qual a idade certa para contar o diagnóstico?",
        paragraphs: [
          "Não existe uma idade única, mas a maioria dos especialistas recomenda começar cedo e em camadas, adaptando a profundidade da explicação à maturidade da criança.",
          "Uma criança de 6 anos não precisa do nome técnico do transtorno; precisa entender que o cérebro dela funciona de um jeito específico, com pontos fortes e pontos difíceis. Aos 10 ou 12, ela já pode receber o termo diagnóstico e conversar sobre o que ele significa. A conversa não é um evento único, é um processo que se retoma ao longo dos anos.",
        ],
      },
      {
        heading: "Como explicar sem transformar em algo negativo?",
        paragraphs: [
          "Apresente como uma diferença de funcionamento, não como um defeito a ser corrigido. E sempre inclua os pontos fortes na mesma conversa, não como consolo depois.",
          "Uma formulação que funciona bem: “todo cérebro é diferente. O seu é muito bom em [algo real e específico da criança] e tem mais dificuldade em [algo concreto]. Isso tem um nome, chama-se TDAH, e é por isso que a gente vai na terapia, para te ajudar a lidar melhor com a parte difícil.”",
        ],
      },
      {
        heading: "E se a criança reagir mal à conversa?",
        paragraphs: [
          "É uma reação possível e legítima, especialmente em pré-adolescentes, que estão em plena fase de querer ser iguais aos pares. Tristeza, raiva ou negação inicial não significam que contar foi um erro.",
          "O importante é não encerrar a conversa ali. Valide o sentimento, deixe claro que o assunto pode ser retomado quando ela quiser, e observe ao longo das semanas. Muitas crianças relatam depois um alívio importante: finalmente existe uma explicação para algo que elas sentiam havia anos.",
        ],
      },
      {
        heading: "Devo contar para a escola e para a família?",
        paragraphs: [
          "Para a escola, quase sempre sim: sem informação, os professores tendem a interpretar as dificuldades como má vontade, o que produz punições e desgaste desnecessários.",
          "Para a família estendida, a decisão é sua e depende de quanto aquele círculo tende a apoiar ou a julgar. Quando decidir contar, vale combinar previamente com a criança quem saberá. Adolescentes especialmente precisam sentir que têm algum controle sobre a própria informação.",
        ],
      },
    ],
  },
  {
    slug: "direitos-do-seu-filho-na-escola",
    title: "Direitos do seu filho na escola: o que a lei garante",
    metaTitle: "Direitos escolares de crianças com TEA e TDAH no Brasil | Instituto Matriz",
    metaDescription:
      "Conheça os direitos legais de crianças com laudo no Brasil: adaptações, acompanhante especializado, avaliação diferenciada e como solicitar.",
    excerpt:
      "Muitas adaptações que as escolas apresentam como favor são, na verdade, obrigação legal.",
    category: "Escola",
    tint: NAVY,
    readingMinutes: 8,
    date: "2026-04-08",
    intro: [
      "Uma parte significativa dos conflitos entre família e escola vem de desconhecimento mútuo sobre o que a legislação brasileira garante.",
      "Saber o que é direito muda a natureza da conversa: você deixa de pedir um favor e passa a solicitar o cumprimento de algo previsto em lei.",
    ],
    sections: [
      {
        heading: "Quais leis protegem crianças com laudo no Brasil?",
        paragraphs: [
          "As principais são a Lei Brasileira de Inclusão (Lei 13.146/2015), a Lei Berenice Piana (Lei 12.764/2012), específica para o Transtorno do Espectro Autista, e a Lei de Diretrizes e Bases da Educação.",
          "Juntas, elas estabelecem que a pessoa com deficiência ou transtorno do neurodesenvolvimento tem direito à educação em escola regular, com os apoios necessários, e que negar matrícula ou cobrar valores adicionais por causa da condição é ilegal.",
        ],
      },
      {
        heading: "Que adaptações a escola é obrigada a oferecer?",
        paragraphs: [
          "As adaptações devem ser individualizadas conforme a necessidade documentada da criança. As mais comuns e mais frequentemente negadas indevidamente são:",
        ],
        bullets: [
          "Tempo adicional para realização de provas",
          "Avaliação em formato adaptado (oral, com apoio visual, dividida em partes)",
          "Redução ou fracionamento de tarefas sem redução de conteúdo",
          "Acompanhante especializado quando a necessidade estiver documentada",
          "Posicionamento estratégico na sala e permissão para pausas reguladoras",
          "Plano Educacional Individualizado (PEI) construído com a família",
        ],
      },
      {
        heading: "Como solicitar essas adaptações na prática?",
        paragraphs: [
          "Sempre por escrito e com protocolo. Uma conversa de corredor com a coordenação não gera registro e não sustenta nenhuma providência posterior.",
          "O caminho eficaz costuma ser: solicitar reunião formal, levar o laudo e o relatório da equipe terapêutica com recomendações específicas, entregar um pedido escrito das adaptações, e pedir cópia protocolada. Relatórios da equipe que acompanha a criança têm peso importante nessa conversa, porque descrevem necessidades concretas em vez de apenas nomear o diagnóstico.",
        ],
      },
      {
        heading: "E se a escola se recusar a cumprir?",
        paragraphs: [
          "Existe um caminho institucional antes de qualquer medida judicial: registro formal na própria escola, depois na Secretaria de Educação (municipal ou estadual) e, se necessário, no Ministério Público, que tem promotorias específicas de educação e de pessoa com deficiência.",
          "Na prática, a grande maioria dos casos se resolve nas primeiras etapas, especialmente quando a família apresenta documentação organizada e pedidos específicos em vez de queixas genéricas.",
        ],
      },
    ],
  },
  {
    slug: "preparar-a-crianca-para-a-primeira-terapia",
    title: "Como preparar seu filho para a primeira terapia",
    metaTitle: "Primeira sessão de terapia infantil: como preparar | Instituto Matriz",
    metaDescription:
      "O que falar (e o que evitar) antes da primeira consulta terapêutica do seu filho, para reduzir ansiedade e aumentar a adesão.",
    excerpt:
      "O que você diz nos dias anteriores define boa parte de como a primeira sessão vai correr.",
    category: "Terapia",
    tint: TEAL,
    readingMinutes: 5,
    date: "2026-04-15",
    intro: [
      "A primeira sessão costuma gerar mais ansiedade nos pais do que na criança. Mas é a criança que sente essa ansiedade e reage a ela.",
      "Algumas escolhas simples de linguagem, feitas nos dias anteriores, mudam bastante a receptividade da criança ao processo.",
    ],
    sections: [
      {
        heading: "O que falar para a criança antes da primeira sessão?",
        paragraphs: [
          "Seja honesto, concreto e breve. Diga o que vai acontecer, quem estará lá e por quanto tempo, sem transformar em evento solene nem em surpresa.",
          "Uma formulação simples funciona bem: “amanhã a gente vai conhecer a Ana. Ela ajuda crianças a lidarem com coisas que estão difíceis. Vocês vão brincar e conversar, e eu fico esperando ali fora.” Isso já cobre o essencial: previsibilidade, propósito e segurança.",
        ],
      },
      {
        heading: "O que evitar dizer?",
        paragraphs: [
          "Evite qualquer formulação que associe a terapia a punição, defeito ou correção. Frases como “é porque você não se comporta” ou “ela vai te ensinar a parar com isso” colocam a criança em posição defensiva antes mesmo de entrar na sala.",
          "Também evite prometer o que você não controla, como “vai ser rapidinho” ou “você não vai precisar falar nada”. Se a promessa não se confirmar, a confiança na próxima sessão fica comprometida.",
        ],
        bullets: [
          "Não use a terapia como ameaça (“se continuar assim, vou te levar na psicóloga”)",
          "Não peça para a criança “se comportar bem” na sessão",
          "Não prometa recompensa condicionada ao desempenho na consulta",
          "Não interrogue detalhadamente sobre o que aconteceu na sala depois",
        ],
      },
      {
        heading: "Devo ficar na sala durante a sessão?",
        paragraphs: [
          "Depende da idade e da abordagem, e essa definição é do profissional. Com crianças pequenas, a presença do cuidador em parte da sessão é comum e muitas vezes desejável.",
          "Com crianças maiores e adolescentes, o espaço privado costuma ser essencial para que se estabeleça confiança. Nesse caso, o vínculo com a família se mantém por meio de devolutivas e orientações periódicas, e não por relatos sessão a sessão.",
        ],
      },
    ],
  },
  {
    slug: "adaptar-a-casa-para-sensibilidade-sensorial",
    title: "Como adaptar a casa para sensibilidade sensorial",
    metaTitle: "Adaptações sensoriais em casa para crianças | Instituto Matriz",
    metaDescription:
      "Mudanças práticas e baratas no ambiente doméstico que reduzem sobrecarga sensorial e crises em crianças com TEA ou disfunção sensorial.",
    excerpt:
      "Pequenas mudanças de ambiente costumam reduzir mais crises do que qualquer estratégia de manejo comportamental.",
    category: "Sensorial",
    tint: BLUE,
    readingMinutes: 6,
    date: "2026-04-22",
    intro: [
      "Quando uma criança tem sensibilidade sensorial, muita energia do dia é gasta apenas tolerando o ambiente. Sobra pouco para aprender, brincar e se relacionar.",
      "Adaptar a casa não é mimar: é remover barreiras invisíveis, do mesmo modo que uma rampa remove uma barreira física.",
    ],
    sections: [
      {
        heading: "Quais adaptações fazem mais diferença no dia a dia?",
        paragraphs: [
          "As de maior impacto costumam ser simples e de custo baixo. Comece pelo ambiente onde a criança passa mais tempo desregulada.",
        ],
        bullets: [
          "Trocar lâmpadas frias e fluorescentes por luz quente e regulável",
          "Retirar etiquetas de roupas e preferir tecidos sem costura interna",
          "Criar um “cantinho da calma” com almofadas, cobertor pesado e pouca luz",
          "Usar tapetes e cortinas para reduzir eco e ruído ambiente",
          "Ter fones abafadores disponíveis para momentos de barulho intenso",
          "Reduzir poluição visual: menos objetos expostos, mais armazenamento fechado",
        ],
      },
      {
        heading: "Adaptar o ambiente não deixa a criança mais frágil?",
        paragraphs: [
          "Não. Essa é uma preocupação comum e compreensível, mas parte de uma premissa equivocada sobre como funciona o processamento sensorial.",
          "Exposição forçada a estímulos aversivos não dessensibiliza, ela aumenta o estado de alerta e a reatividade. O trabalho de ampliar a tolerância existe, mas é feito de forma gradual e planejada em terapia ocupacional, não pela convivência diária com sobrecarga. Uma criança regulada aprende; uma criança em sobrecarga apenas sobrevive ao dia.",
        ],
      },
      {
        heading: "Como saber quais estímulos incomodam meu filho?",
        paragraphs: [
          "Observe os padrões: em que ambientes as crises acontecem com mais frequência, o que a criança evita ativamente e o que ela busca de forma repetida.",
          "Crianças que tapam ouvidos, evitam certos tecidos ou recusam alimentos por textura estão dando informação clara sobre hipersensibilidade. Já as que buscam movimento intenso, pulam, batem e apertam objetos costumam estar em busca de estímulo, e a resposta terapêutica para cada perfil é diferente.",
        ],
      },
    ],
  },
  {
    slug: "brincadeiras-que-estimulam-a-linguagem",
    title: "Brincadeiras que estimulam a linguagem",
    metaTitle: "Brincadeiras para estimular a fala infantil em casa | Instituto Matriz",
    metaDescription:
      "Atividades simples do dia a dia que desenvolvem vocabulário e comunicação, com orientação de como aplicar corretamente.",
    excerpt:
      "Não é preciso material especial. É preciso saber como conversar durante a brincadeira que já existe.",
    category: "Linguagem",
    tint: TEAL,
    readingMinutes: 6,
    date: "2026-04-29",
    intro: [
      "Boa parte da estimulação de linguagem mais eficaz não depende de brinquedo caro nem de aplicativo: depende de como o adulto se posiciona na interação.",
      "As estratégias abaixo são usadas em fonoterapia e podem ser incorporadas às brincadeiras que já acontecem em casa.",
    ],
    sections: [
      {
        heading: "Como transformar qualquer brincadeira em estímulo de linguagem?",
        paragraphs: [
          "A regra mais importante é criar espaço para a criança se comunicar, em vez de antecipar tudo o que ela precisa.",
          "Se você entrega o brinquedo antes que ela peça, resolve o problema imediato e elimina a oportunidade de comunicação. Pausas intencionais, escolhas oferecidas e “erros propositais” criam motivos reais para a criança falar.",
        ],
        bullets: [
          "Ofereça escolhas: “quer o carro ou a bola?” em vez de entregar direto",
          "Faça pausas expectantes e espere alguns segundos antes de ajudar",
          "Erre de propósito: coloque o sapato na mão e espere a correção",
          "Nomeie o que a criança está olhando, não o que você quer que ela olhe",
          "Repita e amplie: se ela diz “au au”, você responde “sim, cachorro grande!”",
          "Coloque brinquedos preferidos à vista, mas fora do alcance",
        ],
      },
      {
        heading: "Devo corrigir a criança quando ela fala errado?",
        paragraphs: [
          "Não da forma direta. Pedir para repetir corretamente costuma reduzir a vontade de falar, especialmente em crianças que já têm dificuldade.",
          "A técnica mais eficaz é a recast: repetir a frase corretamente sem apontar o erro. A criança diz “eu fazi”, você responde naturalmente “ah, você fez! e o que mais você fez?”. Ela recebe o modelo correto sem experimentar a interação como correção.",
        ],
      },
      {
        heading: "Quanto tempo por dia de estimulação é necessário?",
        paragraphs: [
          "Menos do que a maioria imagina, desde que seja consistente. Dois blocos de 10 a 15 minutos de interação de qualidade, sem tela e sem interrupção, valem mais do que uma hora dispersa.",
          "O ganho principal não vem do tempo total, e sim da frequência de trocas comunicativas dentro daquele tempo. Uma sessão de 10 minutos com trinta trocas de ida e volta é mais produtiva que meia hora de adulto narrando sozinho.",
        ],
      },
    ],
  },
  {
    slug: "irmaos-de-criancas-atipicas",
    title: "Os irmãos também precisam de espaço",
    metaTitle: "Irmãos de crianças atípicas: como apoiar | Instituto Matriz",
    metaDescription:
      "Como cuidar dos irmãos neurotípicos de uma criança com autismo ou TDAH, sem culpa e sem sobrecarregá-los com responsabilidade adulta.",
    excerpt:
      "O irmão que “não dá trabalho” muitas vezes é o que está mais silenciosamente sobrecarregado.",
    category: "Família",
    tint: ORANGE,
    readingMinutes: 6,
    date: "2026-05-06",
    intro: [
      "Quando uma criança demanda muito, a atenção da família naturalmente se concentra nela. É compreensível e, em boa medida, inevitável.",
      "Mas os irmãos percebem essa assimetria mais cedo e com mais profundidade do que os adultos costumam supor.",
    ],
    sections: [
      {
        heading: "O que os irmãos costumam sentir e não falar?",
        paragraphs: [
          "Culpa é o sentimento mais comum e o menos verbalizado: culpa por sentir raiva do irmão, por ter vergonha em público, por querer atenção, por estar bem enquanto o outro sofre.",
          "Muitos assumem o papel de “filho que não dá trabalho” como uma tentativa de compensar a sobrecarga dos pais. Esse papel funciona por um tempo e costuma cobrar preço na adolescência ou na vida adulta, na forma de perfeccionismo, dificuldade de pedir ajuda ou ansiedade.",
        ],
      },
      {
        heading: "Como dar atenção sem tirar do outro filho?",
        paragraphs: [
          "A chave é previsibilidade, não quantidade. Um tempo exclusivo curto, mas garantido e não cancelável, vale mais do que promessas de compensações maiores que raramente acontecem.",
          "Quinze minutos por dia, ou uma hora fixa por semana em que aquele filho tem você inteiramente disponível, com atividade escolhida por ele, produz efeito desproporcional ao tempo investido, precisamente porque é previsível e não compete com a demanda do irmão.",
        ],
        bullets: [
          "Estabeleça um tempo exclusivo fixo e proteja-o de cancelamentos",
          "Permita que ele expresse raiva ou frustração sem correção moral imediata",
          "Não atribua a ele responsabilidades de cuidado que são dos adultos",
          "Explique o diagnóstico do irmão em linguagem adequada à idade dele",
          "Evite comparações, inclusive positivas (“você é o fácil”)",
        ],
      },
      {
        heading: "Devo pedir que ele ajude a cuidar do irmão?",
        paragraphs: [
          "Colaboração pontual e adequada à idade é saudável. Responsabilidade estruturante pelo cuidado não é.",
          "A diferença está em quem é responsável quando algo dá errado. Pedir que fique de olho por cinco minutos é colaboração. Contar com ele para gerenciar crises, acompanhar rotinas terapêuticas ou substituir o adulto de forma recorrente transfere um peso que não é dele, e frequentemente cria ressentimento de longo prazo em relação ao irmão, que é o oposto do que a família deseja.",
        ],
      },
    ],
  },
  {
    slug: "licao-de-casa-com-tdah",
    title: "Como ajudar uma criança com TDAH na lição de casa",
    metaTitle: "Lição de casa e TDAH: estratégias que funcionam | Instituto Matriz",
    metaDescription:
      "Estratégias práticas para reduzir o conflito diário da lição de casa em crianças com TDAH, baseadas em funções executivas.",
    excerpt:
      "A lição de casa é o principal campo de batalha diário de famílias com TDAH. Dá para reduzir muito esse desgaste.",
    category: "TDAH",
    tint: ORANGE,
    readingMinutes: 7,
    date: "2026-05-13",
    intro: [
      "Poucas situações desgastam tanto a relação entre pais e filhos com TDAH quanto a lição de casa diária.",
      "O problema raramente é capacidade intelectual. É iniciação de tarefa, sustentação de atenção e organização, três funções executivas afetadas pelo transtorno.",
    ],
    sections: [
      {
        heading: "Por que meu filho trava antes mesmo de começar?",
        paragraphs: [
          "Porque a dificuldade de iniciação de tarefa é um sintoma central do TDAH, e não uma escolha de adiar por preguiça.",
          "Para o cérebro com TDAH, uma tarefa aberta e sem estrutura (“faça a lição”) gera uma paralisia real. Quebrar em passos concretos e visíveis (“abra o caderno na página 12, leia só a primeira questão”) reduz drasticamente essa barreira inicial.",
        ],
      },
      {
        heading: "Quais estratégias reduzem o conflito da lição?",
        paragraphs: [
          "As mais eficazes atuam sobre o ambiente e a estrutura da tarefa, não sobre motivação ou cobrança.",
        ],
        bullets: [
          "Blocos curtos com pausa programada (ex.: 15 minutos de tarefa, 5 de pausa)",
          "Timer visível, para tornar o tempo concreto em vez de abstrato",
          "Uma questão por vez à vista; cubra o restante da folha",
          "Local fixo, sem tela e com o mínimo de estímulo visual ao redor",
          "Comece pela matéria mais difícil, enquanto a energia está maior",
          "Divida por número de questões, não por tempo total de estudo",
        ],
      },
      {
        heading: "Devo ficar junto o tempo todo?",
        paragraphs: [
          "No começo, sim, mas com um papel específico: presença de apoio, não de vigilância nem de resolução.",
          "Estar por perto sustenta a atenção e ajuda na retomada quando a criança dispersa. O objetivo, porém, é reduzir progressivamente esse apoio: comece ao lado, depois na mesma sala, depois disponível no cômodo ao lado. Retirar tudo de uma vez costuma resultar em regressão.",
        ],
      },
      {
        heading: "E quando a lição vira briga todo dia?",
        paragraphs: [
          "Quando o conflito se tornou diário, o custo relacional já superou o benefício acadêmico, e vale renegociar a estrutura com a escola.",
          "Muitas escolas aceitam reduzir o volume de tarefas mantendo o conteúdo, o que está previsto entre as adaptações razoáveis. Também é legítimo estabelecer um teto de tempo: o que não foi concluído em 40 minutos de trabalho honesto para de ser feito, com um bilhete ao professor explicando. Preservar a relação familiar é prioridade sobre completar todas as questões.",
        ],
      },
    ],
  },
  {
    slug: "mitos-sobre-autismo",
    title: "7 mitos sobre autismo que ainda circulam",
    metaTitle: "Mitos sobre autismo desmentidos | Instituto Matriz",
    metaDescription:
      "Desmistificamos as crenças mais comuns e prejudiciais sobre o Transtorno do Espectro Autista, com base em evidência científica.",
    excerpt:
      "Vacina, falta de afeto, cura por dieta: informações falsas sobre autismo continuam atrasando diagnósticos e tratamentos.",
    category: "Autismo",
    tint: BLUE,
    readingMinutes: 7,
    date: "2026-05-20",
    intro: [
      "A desinformação sobre autismo não é inofensiva: ela atrasa diagnósticos, gera culpa em famílias e sustenta um mercado de tratamentos sem evidência.",
      "Estes são os sete mitos que mais aparecem nas primeiras consultas.",
    ],
    sections: [
      {
        heading: "Vacinas causam autismo?",
        paragraphs: [
          "Não. Essa é a afirmação mais estudada e mais desmentida da história recente da pesquisa em saúde pública.",
          "O estudo original que sugeriu essa relação, publicado em 1998, foi retratado por fraude e seu autor teve o registro médico cassado. Desde então, estudos com milhões de crianças em diversos países não encontraram qualquer associação. A coincidência de tempo entre o calendário vacinal e a idade em que os sinais de autismo se tornam perceptíveis explica a confusão.",
        ],
      },
      {
        heading: "Autismo é causado por falta de afeto dos pais?",
        paragraphs: [
          "Não. Essa ideia, conhecida como a teoria da “mãe geladeira”, foi abandonada pela ciência há décadas e causou sofrimento imenso a uma geração de famílias.",
          "O autismo tem base neurobiológica com forte componente genético. Nenhum estilo de criação causa ou previne autismo.",
        ],
      },
      {
        heading: "Existe cura ou tratamento milagroso para autismo?",
        paragraphs: [
          "Não. Autismo não é doença e não tem cura. Qualquer produto ou protocolo vendido como cura deve ser tratado com desconfiança imediata.",
          "Dietas restritivas sem indicação clínica, suplementos de alto custo e protocolos “biomédicos” não têm respaldo científico e, em alguns casos, oferecem risco real à saúde. O que existe e funciona é intervenção terapêutica baseada em evidência, aplicada de forma consistente ao longo do tempo.",
        ],
      },
      {
        heading: "Outros mitos comuns que continuam circulando",
        paragraphs: [
          "Estes quatro aparecem com frequência e merecem correção direta:",
        ],
        bullets: [
          "“Toda pessoa autista tem uma habilidade genial”. Falso: savantismo é raro no espectro",
          "“Autista não sente afeto”. Falso: a diferença está em como o afeto é expresso, não em senti-lo",
          "“Se olha nos olhos, não é autista”. Falso: muitos autistas mantêm contato visual, às vezes com esforço",
          "“É coisa de criança, passa com a idade”. Falso: autismo acompanha a pessoa por toda a vida",
        ],
      },
    ],
  },
  {
    slug: "quando-fazer-avaliacao-neuropsicologica",
    title: "Quando vale a pena fazer avaliação neuropsicológica",
    metaTitle: "Quando fazer avaliação neuropsicológica infantil | Instituto Matriz",
    metaDescription:
      "Entenda o que a avaliação neuropsicológica investiga, quando ela é indicada, como funciona o processo e o que esperar do relatório final.",
    excerpt:
      "Não é só para fechar diagnóstico. É para entender como aquele cérebro específico funciona.",
    category: "Avaliação",
    tint: NAVY,
    readingMinutes: 7,
    date: "2026-05-27",
    intro: [
      "Muitas famílias chegam à avaliação neuropsicológica esperando apenas um nome: tem ou não tem TDAH, é ou não é autismo.",
      "O nome é uma parte pequena do que ela entrega. O valor real está no mapa detalhado de como aquela criança processa informação.",
    ],
    sections: [
      {
        heading: "O que exatamente a avaliação neuropsicológica investiga?",
        paragraphs: [
          "Ela mapeia funções cognitivas específicas por meio de testes padronizados: atenção, memória, linguagem, funções executivas, raciocínio, velocidade de processamento e habilidades visuoespaciais.",
          "O resultado não é uma nota geral, mas um perfil com picos e vales. Duas crianças com o mesmo diagnóstico podem ter perfis completamente diferentes, e é esse perfil, não o rótulo, que define quais intervenções fazem sentido.",
        ],
      },
      {
        heading: "Em quais situações ela é indicada?",
        paragraphs: [
          "As indicações mais frequentes envolvem discrepância entre potencial e desempenho, ou dúvida diagnóstica entre condições com sintomas parecidos.",
        ],
        bullets: [
          "Suspeita de TDAH, TEA ou transtornos de aprendizagem",
          "Desempenho escolar muito abaixo do que a criança demonstra ser capaz",
          "Dúvida entre diagnósticos com sintomas semelhantes",
          "Necessidade de documentação para adaptações escolares",
          "Acompanhamento da evolução após período de intervenção",
        ],
      },
      {
        heading: "Como funciona o processo e quanto tempo leva?",
        paragraphs: [
          "Costuma envolver de 6 a 10 sessões, distribuídas em algumas semanas: entrevista inicial com os pais, sessões de aplicação de testes com a criança, coleta de informações da escola e uma sessão final de devolutiva.",
          "As sessões com a criança são conduzidas em formato de atividades, e a maioria não percebe o processo como algo aversivo. É importante que estejam distribuídas ao longo de semanas, porque testar cognição em criança cansada produz resultado que não representa a capacidade real dela.",
        ],
      },
      {
        heading: "O que o relatório final deve conter?",
        paragraphs: [
          "Um relatório útil vai muito além da conclusão diagnóstica: ele descreve o perfil cognitivo encontrado e traduz isso em recomendações concretas para casa, escola e terapias.",
          "Se o documento que você recebeu diz apenas o diagnóstico e uma recomendação genérica de “acompanhamento psicológico”, ele está aquém do que a avaliação deveria entregar. Peça esclarecimentos. O relatório é o principal produto de todo o processo, e será usado por escola e equipe terapêutica por anos.",
        ],
      },
    ],
  },
  {
    slug: "esgotamento-parental",
    title: "Esgotamento parental: cuidar de você também é cuidar dele",
    metaTitle: "Esgotamento parental: sinais e o que fazer | Instituto Matriz",
    metaDescription:
      "Reconheça os sinais de burnout parental em famílias de crianças atípicas e entenda por que buscar apoio não é egoísmo.",
    excerpt:
      "Pais de crianças com demandas intensas têm taxas de esgotamento muito acima da média. Isso tem nome e tem tratamento.",
    category: "Família",
    tint: TEAL,
    readingMinutes: 6,
    date: "2026-06-03",
    intro: [
      "Cuidar de uma criança com demandas intensas envolve terapias, escola, relatórios, crises, planos de saúde e uma vigilância que não desliga.",
      "O esgotamento parental é uma consequência previsível desse cenário, e não um sinal de fraqueza ou de falta de amor.",
    ],
    sections: [
      {
        heading: "Quais são os sinais de esgotamento parental?",
        paragraphs: [
          "O sinal mais característico é o distanciamento emocional: você continua fazendo tudo o que precisa, mas no piloto automático, sem conexão afetiva com o que está fazendo.",
        ],
        bullets: [
          "Exaustão que não melhora com descanso",
          "Sensação de estar apenas cumprindo tarefas, sem prazer na relação",
          "Irritabilidade desproporcional a situações pequenas",
          "Culpa constante, independentemente do que se faça",
          "Isolamento social progressivo",
          "Vontade de fugir seguida de culpa intensa por ter sentido isso",
        ],
      },
      {
        heading: "Por que isso é mais comum em famílias atípicas?",
        paragraphs: [
          "Porque a demanda é maior, mais longa e menos compartilhada do que na média, e frequentemente acompanhada de julgamento externo.",
          "Some-se a isso a carga administrativa invisível (agendar, transportar, documentar, brigar por direitos), o luto pelas expectativas iniciais, o impacto financeiro dos tratamentos e a falta de rede de apoio que compreenda o contexto. Não é fragilidade individual: é sobrecarga estrutural.",
        ],
      },
      {
        heading: "O que fazer quando não dá para simplesmente descansar?",
        paragraphs: [
          "Comece pelo que é possível: apoio psicológico próprio, divisão explícita de tarefas entre os cuidadores e rede, mesmo que pequena, de pessoas que possam assumir algumas horas.",
          "Grupos de pais na mesma situação costumam ter efeito importante, porque reduzem o isolamento e a sensação de estar falhando sozinho. E vale lembrar de um dado consistente na literatura: a saúde mental do cuidador é um dos preditores mais fortes da evolução da criança. Cuidar de você não compete com o cuidado dele, e sim o sustenta.",
        ],
      },
    ],
  },
];

/**
 * Cross-links: each post points to condition pages and sibling posts.
 * Keyed by post slug; values are paths (both /condicoes/* and /blog/*).
 */
const relatedMap: Record<string, string[]> = {
  "como-reconhecer-sinais-de-autismo": [
    "/condicoes/autismo",
    "/blog/10-sinais-de-autismo-que-passam-despercebidos",
    "/blog/mitos-sobre-autismo",
    "/condicoes/avaliacao-neuropsicologica",
  ],
  "10-sinais-de-autismo-que-passam-despercebidos": [
    "/condicoes/autismo",
    "/blog/como-reconhecer-sinais-de-autismo",
    "/blog/mitos-sobre-autismo",
    "/condicoes/integracao-sensorial",
  ],
  "regulacao-emocional-em-criancas": [
    "/condicoes/psicologia",
    "/blog/birra-ou-crise-sensorial",
    "/condicoes/tod",
    "/blog/esgotamento-parental",
  ],
  "birra-ou-crise-sensorial": [
    "/condicoes/integracao-sensorial",
    "/blog/regulacao-emocional-em-criancas",
    "/blog/adaptar-a-casa-para-sensibilidade-sensorial",
    "/condicoes/terapia-ocupacional",
  ],
  "meu-filho-e-distraido-ou-tem-tdah": [
    "/condicoes/tdah",
    "/blog/licao-de-casa-com-tdah",
    "/condicoes/avaliacao-neuropsicologica",
    "/blog/quando-fazer-avaliacao-neuropsicologica",
  ],
  "como-montar-rotina-visual-em-casa": [
    "/condicoes/autismo",
    "/condicoes/tdah",
    "/blog/sono-infantil-e-neurodesenvolvimento",
    "/blog/regulacao-emocional-em-criancas",
  ],
  "seletividade-alimentar-infantil": [
    "/condicoes/terapia-ocupacional",
    "/condicoes/integracao-sensorial",
    "/condicoes/fonoaudiologia",
    "/blog/adaptar-a-casa-para-sensibilidade-sensorial",
  ],
  "atraso-de-fala-quando-se-preocupar": [
    "/condicoes/atraso-de-fala",
    "/condicoes/fonoaudiologia",
    "/blog/brincadeiras-que-estimulam-a-linguagem",
    "/blog/como-reconhecer-sinais-de-autismo",
  ],
  "tempo-de-tela-para-criancas": [
    "/condicoes/tdah",
    "/blog/sono-infantil-e-neurodesenvolvimento",
    "/blog/como-montar-rotina-visual-em-casa",
    "/condicoes/autismo",
  ],
  "sono-infantil-e-neurodesenvolvimento": [
    "/condicoes/autismo",
    "/condicoes/tdah",
    "/blog/tempo-de-tela-para-criancas",
    "/blog/adaptar-a-casa-para-sensibilidade-sensorial",
  ],
  "como-contar-o-diagnostico-para-a-crianca": [
    "/condicoes/psicologia",
    "/condicoes/autismo",
    "/blog/direitos-do-seu-filho-na-escola",
    "/blog/irmaos-de-criancas-atipicas",
  ],
  "direitos-do-seu-filho-na-escola": [
    "/condicoes/avaliacao-neuropsicologica",
    "/blog/licao-de-casa-com-tdah",
    "/blog/como-contar-o-diagnostico-para-a-crianca",
    "/condicoes/tdah",
  ],
  "preparar-a-crianca-para-a-primeira-terapia": [
    "/condicoes/psicologia",
    "/condicoes/terapia-ocupacional",
    "/blog/como-contar-o-diagnostico-para-a-crianca",
    "/condicoes/fonoaudiologia",
  ],
  "adaptar-a-casa-para-sensibilidade-sensorial": [
    "/condicoes/integracao-sensorial",
    "/condicoes/terapia-ocupacional",
    "/blog/birra-ou-crise-sensorial",
    "/blog/seletividade-alimentar-infantil",
  ],
  "brincadeiras-que-estimulam-a-linguagem": [
    "/condicoes/fonoaudiologia",
    "/condicoes/atraso-de-fala",
    "/blog/atraso-de-fala-quando-se-preocupar",
    "/blog/tempo-de-tela-para-criancas",
  ],
  "irmaos-de-criancas-atipicas": [
    "/condicoes/psicologia",
    "/blog/esgotamento-parental",
    "/blog/como-contar-o-diagnostico-para-a-crianca",
    "/condicoes/autismo",
  ],
  "licao-de-casa-com-tdah": [
    "/condicoes/tdah",
    "/blog/meu-filho-e-distraido-ou-tem-tdah",
    "/blog/direitos-do-seu-filho-na-escola",
    "/blog/como-montar-rotina-visual-em-casa",
  ],
  "mitos-sobre-autismo": [
    "/condicoes/autismo",
    "/blog/como-reconhecer-sinais-de-autismo",
    "/blog/10-sinais-de-autismo-que-passam-despercebidos",
    "/condicoes/avaliacao-neuropsicologica",
  ],
  "quando-fazer-avaliacao-neuropsicologica": [
    "/condicoes/avaliacao-neuropsicologica",
    "/condicoes/tdah",
    "/blog/meu-filho-e-distraido-ou-tem-tdah",
    "/blog/direitos-do-seu-filho-na-escola",
  ],
  "esgotamento-parental": [
    "/condicoes/psicologia",
    "/blog/irmaos-de-criancas-atipicas",
    "/blog/regulacao-emocional-em-criancas",
    "/condicoes/autismo",
  ],
};

const conditionLabels: Record<string, string> = {
  "/condicoes/autismo": "Autismo (TEA)",
  "/condicoes/tdah": "TDAH",
  "/condicoes/tod": "TOD",
  "/condicoes/atraso-de-fala": "Atraso de Fala",
  "/condicoes/terapia-ocupacional": "Terapia Ocupacional",
  "/condicoes/psicologia": "Psicologia Infantil",
  "/condicoes/fonoaudiologia": "Fonoaudiologia",
  "/condicoes/integracao-sensorial": "Integração Sensorial",
  "/condicoes/avaliacao-neuropsicologica": "Avaliação Neuropsicológica",
};

const allRawPosts: RawPost[] = [
  ...rawPosts,
  ...extraPosts1,
  ...extraPosts2,
  ...extraPosts3,
  ...extraPosts4,
];

const allRelated: Record<string, string[]> = { ...relatedMap, ...extraRelated };

export const posts: BlogPost[] = allRawPosts.map((post) => ({
  ...post,
  related: (allRelated[post.slug] ?? []).map((path) => {
    if (conditionLabels[path]) return { label: conditionLabels[path], path };
    const sibling = allRawPosts.find((p) => `/blog/${p.slug}` === path);
    return { label: sibling ? sibling.title : path, path };
  }),
}));

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));
