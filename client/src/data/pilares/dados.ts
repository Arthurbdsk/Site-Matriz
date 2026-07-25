import type { PostReference, PostStat } from "@/data/postTypes";
import {
  REF_DSM,
  REF_CID,
  REF_LANCET_TEA,
  REF_AAP_TEA,
  REF_MS_TEA,
  REF_SBP_TEA,
  REF_CDC,
  REF_DENVER,
  REF_NICE_TDAH,
  REF_CONSENSO_TDAH,
  REF_ABDA,
  REF_AYRES,
  REF_CFFA,
  REF_CFP,
  REF_AOTA,
  REF_LBI,
  REF_LEI_BERENICE,
  REF_SBP_TELAS,
  REF_OMS_TELAS,
  REF_AAP_MIDIA,
  REF_SBP_SONO,
  REF_MS_CADERNETA,
  REF_ANS,
  REF_MEC_INCLUSAO,
  REF_SHAYWITZ,
  REF_ABENEPI,
  REF_LEI_BULLYING,
  REF_COFFITO,
  REF_ASHA,
} from "@/data/pilares/referencias";

/**
 * References attached to the shorter articles at merge time, so each one
 * carries sourcing without duplicating the reference objects in every file.
 */
export const referenciasPorSlug: Record<string, PostReference[]> = {
  // Autismo
  "como-reconhecer-sinais-de-autismo": [REF_CDC, REF_DSM, REF_SBP_TEA, REF_AAP_TEA],
  "10-sinais-de-autismo-que-passam-despercebidos": [REF_DSM, REF_LANCET_TEA, REF_SBP_TEA],
  "mitos-sobre-autismo": [REF_LANCET_TEA, REF_AAP_TEA, REF_DSM, REF_MS_TEA],
  "autismo-niveis-de-suporte": [REF_DSM, REF_CID, REF_LANCET_TEA],
  "autismo-em-meninas": [REF_LANCET_TEA, REF_DSM, REF_AAP_TEA],
  "estereotipias-devo-impedir": [REF_DSM, REF_AYRES, REF_AOTA],
  "interesse-restrito-a-favor": [REF_DSM, REF_LANCET_TEA, REF_SBP_TEA],
  "autismo-e-amizades-na-escola": [REF_LANCET_TEA, REF_MEC_INCLUSAO, REF_LBI],
  "diagnostico-tardio-de-autismo": [REF_DSM, REF_LANCET_TEA, REF_AAP_TEA, REF_LEI_BERENICE],
  "comunicacao-alternativa-caa": [REF_CFFA, REF_ASHA, REF_AAP_TEA],
  "ecolalia-infantil": [REF_CFFA, REF_ASHA, REF_DSM],

  // TDAH
  "meu-filho-e-distraido-ou-tem-tdah": [REF_DSM, REF_NICE_TDAH, REF_CONSENSO_TDAH],
  "tdah-em-meninas": [REF_CONSENSO_TDAH, REF_DSM, REF_NICE_TDAH],
  "medicacao-para-tdah": [REF_NICE_TDAH, REF_CONSENSO_TDAH, REF_DSM, REF_ABENEPI],
  "tdah-e-autoestima": [REF_CONSENSO_TDAH, REF_NICE_TDAH, REF_DSM],
  "funcoes-executivas-o-que-sao": [REF_CONSENSO_TDAH, REF_DSM, REF_NICE_TDAH],
  "crianca-com-tdah-esquece-tudo": [REF_CONSENSO_TDAH, REF_DSM, REF_NICE_TDAH],
  "tdah-na-adolescencia": [REF_CONSENSO_TDAH, REF_NICE_TDAH, REF_DSM],
  "licao-de-casa-com-tdah": [REF_NICE_TDAH, REF_CONSENSO_TDAH, REF_MEC_INCLUSAO],

  // Comportamento
  "regulacao-emocional-em-criancas": [REF_DSM, REF_CFP, REF_ABENEPI],
  "birra-ou-crise-sensorial": [REF_AYRES, REF_AOTA, REF_DSM],
  "tod-ou-falta-de-limite": [REF_DSM, REF_CID, REF_NICE_TDAH],
  "como-dar-limites-sem-gritar": [REF_CFP, REF_DSM, REF_ABENEPI],
  "agressividade-infantil": [REF_DSM, REF_CFP, REF_ABENEPI],
  "economia-de-fichas-funciona": [REF_NICE_TDAH, REF_CFP, REF_DSM],
  "mentira-infantil": [REF_CFP, REF_DSM, REF_ABENEPI],
  "crianca-nao-aceita-perder": [REF_CFP, REF_DSM, REF_CONSENSO_TDAH],
  "ansiedade-infantil-sinais": [REF_DSM, REF_CID, REF_CFP, REF_ABENEPI],

  // Linguagem
  "atraso-de-fala-quando-se-preocupar": [REF_MS_CADERNETA, REF_CFFA, REF_ASHA, REF_CDC],
  "brincadeiras-que-estimulam-a-linguagem": [REF_CFFA, REF_ASHA, REF_MS_CADERNETA],
  "gagueira-infantil": [REF_CFFA, REF_ASHA, REF_DSM],
  "crianca-bilingue-atrasa-a-fala": [REF_ASHA, REF_CFFA, REF_MS_CADERNETA],
  "chupeta-mamadeira-e-fala": [REF_CFFA, REF_ASHA, REF_MS_CADERNETA],
  "troca-de-letras-ate-que-idade": [REF_CFFA, REF_ASHA, REF_MS_CADERNETA],

  // Escola e aprendizagem
  "sinais-de-dislexia": [REF_ABDA, REF_SHAYWITZ, REF_DSM, REF_MEC_INCLUSAO],
  "discalculia-dificuldade-com-matematica": [REF_DSM, REF_CID, REF_MEC_INCLUSAO],
  "letra-feia-ou-disgrafia": [REF_DSM, REF_AOTA, REF_COFFITO, REF_MEC_INCLUSAO],
  "recusa-escolar": [REF_DSM, REF_CFP, REF_MEC_INCLUSAO],
  "escolher-escola-para-crianca-atipica": [REF_LBI, REF_MEC_INCLUSAO, REF_LEI_BERENICE],
  "quando-o-reforco-escolar-e-necessario": [REF_MEC_INCLUSAO, REF_DSM, REF_CFP],
  "direitos-do-seu-filho-na-escola": [REF_LBI, REF_LEI_BERENICE, REF_MEC_INCLUSAO],
  "bullying-crianca-atipica": [REF_LEI_BULLYING, REF_LBI, REF_MEC_INCLUSAO],

  // Sensorial e terapia ocupacional
  "adaptar-a-casa-para-sensibilidade-sensorial": [REF_AYRES, REF_AOTA, REF_COFFITO],
  "seletividade-alimentar-infantil": [REF_AOTA, REF_COFFITO, REF_CFFA, REF_SBP_TEA],
  "crianca-anda-na-ponta-do-pe": [REF_AOTA, REF_COFFITO, REF_SBP_TEA],
  "coordenacao-motora-fina-atividades": [REF_AOTA, REF_COFFITO],
  "cortar-cabelo-e-unha-sem-crise": [REF_AYRES, REF_AOTA, REF_COFFITO],
  "desfralde-atipico": [REF_AOTA, REF_COFFITO, REF_MS_CADERNETA],

  // Rotina, sono e telas
  "como-montar-rotina-visual-em-casa": [REF_SBP_TEA, REF_AAP_TEA, REF_MS_TEA],
  "tempo-de-tela-para-criancas": [REF_SBP_TELAS, REF_OMS_TELAS, REF_AAP_MIDIA],
  "sono-infantil-e-neurodesenvolvimento": [REF_SBP_SONO, REF_OMS_TELAS, REF_DSM],

  // Família e percurso terapêutico
  "como-contar-o-diagnostico-para-a-crianca": [REF_CFP, REF_SBP_TEA, REF_ABENEPI],
  "preparar-a-crianca-para-a-primeira-terapia": [REF_CFP, REF_AOTA, REF_CFFA],
  "irmaos-de-criancas-atipicas": [REF_CFP, REF_SBP_TEA, REF_ABENEPI],
  "esgotamento-parental": [REF_CFP, REF_SBP_TEA, REF_ABENEPI],
  "explicar-mudancas-e-perdas": [REF_CFP, REF_DSM, REF_ABENEPI],
  "organizar-agenda-de-terapias": [REF_AAP_TEA, REF_MS_TEA, REF_ANS],
  "familiares-que-nao-aceitam-o-diagnostico": [REF_CFP, REF_SBP_TEA, REF_LEI_BERENICE],
  "plano-de-saude-e-terapias": [REF_ANS, REF_LBI, REF_LEI_BERENICE],
  "quando-fazer-avaliacao-neuropsicologica": [REF_CFP, REF_DSM, REF_ABENEPI, REF_LBI],
};

/**
 * Headline figures per article. Only well-established numbers from the sources
 * named inline are used; anything that could not be attributed was left out on
 * purpose.
 */
export const dadosPorSlug: Record<string, PostStat[]> = {
  "como-reconhecer-sinais-de-autismo": [
    {
      value: "1 em 36",
      label: "crianças de 8 anos identificadas com TEA na rede de vigilância norte-americana",
      source: "CDC, ADDM Network, 2023",
    },
    {
      value: "18 a 24 meses",
      label: "idade a partir da qual o diagnóstico costuma ser confiável",
      source: "American Academy of Pediatrics, 2020",
    },
  ],
  "10-sinais-de-autismo-que-passam-despercebidos": [
    {
      value: "4 vezes",
      label: "mais diagnósticos de TEA em meninos do que em meninas nos dados de vigilância",
      source: "CDC, ADDM Network, 2023",
    },
  ],
  "meu-filho-e-distraido-ou-tem-tdah": [
    {
      value: "cerca de 5%",
      label: "das crianças e adolescentes no mundo preenchem critérios para TDAH",
      source: "World Federation of ADHD, Consenso Internacional, 2021",
    },
    {
      value: "6 meses",
      label: "tempo mínimo de persistência dos sintomas exigido pelos critérios diagnósticos",
      source: "DSM-5-TR, 2023",
    },
  ],
  "tdah-em-meninas": [
    {
      value: "cerca de 5%",
      label: "prevalência estimada de TDAH em crianças e adolescentes",
      source: "World Federation of ADHD, Consenso Internacional, 2021",
    },
  ],
  "sinais-de-dislexia": [
    {
      value: "5% a 10%",
      label: "estimativa de prevalência da dislexia na população, com variação entre estudos",
      source: "Associação Brasileira de Dislexia",
    },
  ],
  "gagueira-infantil": [
    {
      value: "cerca de 5%",
      label: "das crianças passam por um período de gagueira no desenvolvimento",
      source: "American Speech-Language-Hearing Association",
    },
    {
      value: "cerca de 1%",
      label: "da população adulta apresenta gagueira persistente",
      source: "American Speech-Language-Hearing Association",
    },
  ],
  "atraso-de-fala-quando-se-preocupar": [
    {
      value: "12 meses",
      label: "idade esperada para as primeiras palavras com significado",
      source: "Caderneta da Criança, Ministério da Saúde",
    },
    {
      value: "24 meses",
      label: "idade esperada para combinar duas palavras espontaneamente",
      source: "Caderneta da Criança, Ministério da Saúde",
    },
  ],
  "tempo-de-tela-para-criancas": [
    {
      value: "0",
      label: "tempo de tela recomendado antes dos 2 anos, exceto videochamada com familiares",
      source: "Sociedade Brasileira de Pediatria, 2019",
    },
    {
      value: "1 hora",
      label: "limite diário recomendado entre 2 e 5 anos, sempre com mediação de adulto",
      source: "OMS, 2019",
    },
  ],
  "sono-infantil-e-neurodesenvolvimento": [
    {
      value: "10 a 13 horas",
      label: "sono diário recomendado entre 3 e 5 anos, incluindo cochilos",
      source: "OMS, 2019",
    },
    {
      value: "9 a 12 horas",
      label: "sono diário recomendado em idade escolar",
      source: "Sociedade Brasileira de Pediatria",
    },
  ],
  "direitos-do-seu-filho-na-escola": [
    {
      value: "Lei 13.146",
      label: "Lei Brasileira de Inclusão, que garante matrícula e apoios na escola regular",
      source: "Diário Oficial da União, 2015",
    },
    {
      value: "Lei 12.764",
      label: "reconhece a pessoa com TEA como pessoa com deficiência para todos os efeitos legais",
      source: "Diário Oficial da União, 2012",
    },
  ],
  "plano-de-saude-e-terapias": [
    {
      value: "sem limite",
      label:
        "de sessões com psicólogo, fonoaudiólogo, terapeuta ocupacional e fisioterapeuta para transtornos globais do desenvolvimento, mediante indicação médica",
      source: "Agência Nacional de Saúde Suplementar",
    },
  ],
  "bullying-crianca-atipica": [
    {
      value: "Lei 13.185",
      label: "obriga escolas a manter programa de combate à intimidação sistemática",
      source: "Diário Oficial da União, 2015",
    },
  ],
  "troca-de-letras-ate-que-idade": [
    {
      value: "4 anos",
      label: "idade em que a fala já deve ser compreendida por estranhos na maior parte do tempo",
      source: "American Speech-Language-Hearing Association",
    },
  ],
  "diagnostico-tardio-de-autismo": [
    {
      value: "Lei 12.764",
      label: "garante à pessoa com TEA os direitos de pessoa com deficiência em qualquer idade",
      source: "Diário Oficial da União, 2012",
    },
  ],
};
