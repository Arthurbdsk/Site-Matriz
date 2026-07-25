import type { PostReference } from "@/data/postTypes";

/**
 * Shared reference pool for the in-depth pillar articles.
 *
 * Only institutional sources and well-established clinical literature are
 * listed here, so the citations stay verifiable and stable. Before publishing,
 * the clinical team should confirm that each entry matches the edition they
 * want to endorse.
 */

export const REF_DSM: PostReference = {
  source: "American Psychiatric Association",
  title: "Manual Diagnóstico e Estatístico de Transtornos Mentais: DSM-5-TR",
  publication: "Artmed",
  year: "2023",
};

export const REF_CID: PostReference = {
  source: "Organização Mundial da Saúde",
  title: "CID-11: Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde, 11ª revisão",
  publication: "OMS",
  year: "2022",
};

export const REF_LANCET_TEA: PostReference = {
  source: "Lord C, Elsabbagh M, Baird G, Veenstra-Vanderweele J",
  title: "Autism spectrum disorder",
  publication: "The Lancet",
  year: "2018",
};

export const REF_AAP_TEA: PostReference = {
  source: "Hyman SL, Levy SE, Myers SM; American Academy of Pediatrics",
  title: "Identification, Evaluation, and Management of Children With Autism Spectrum Disorder",
  publication: "Pediatrics",
  year: "2020",
};

export const REF_MS_TEA: PostReference = {
  source: "Ministério da Saúde",
  title: "Linha de Cuidado para a Atenção às Pessoas com Transtornos do Espectro do Autismo e suas Famílias na Rede de Atenção Psicossocial do SUS",
  publication: "Secretaria de Atenção à Saúde, Brasília",
  year: "2015",
};

export const REF_SBP_TEA: PostReference = {
  source: "Sociedade Brasileira de Pediatria",
  title: "Manual de Orientação: Transtorno do Espectro do Autismo",
  publication: "Departamento Científico de Pediatria do Desenvolvimento e Comportamento, SBP",
  year: "2019",
};

export const REF_CDC: PostReference = {
  source: "Centers for Disease Control and Prevention",
  title: "Learn the Signs. Act Early.: Milestone Checklists",
  publication: "CDC, Estados Unidos",
  year: "2024",
};

export const REF_DENVER: PostReference = {
  source: "Dawson G, Rogers S, Munson J et al.",
  title: "Randomized, Controlled Trial of an Intervention for Toddlers With Autism: The Early Start Denver Model",
  publication: "Pediatrics",
  year: "2010",
};

export const REF_NICE_TDAH: PostReference = {
  source: "National Institute for Health and Care Excellence",
  title: "Attention deficit hyperactivity disorder: diagnosis and management (NG87)",
  publication: "NICE, Reino Unido",
  year: "2019",
};

export const REF_CONSENSO_TDAH: PostReference = {
  source: "Faraone SV, Banaschewski T, Coghill D et al.",
  title: "The World Federation of ADHD International Consensus Statement",
  publication: "Neuroscience & Biobehavioral Reviews",
  year: "2021",
};

export const REF_ABDA: PostReference = {
  source: "Associação Brasileira de Dislexia",
  title: "Dislexia: definição, sinais e conduta diagnóstica",
  publication: "ABD",
  year: "2023",
};

export const REF_AYRES: PostReference = {
  source: "Ayres AJ",
  title: "Sensory Integration and the Child: Understanding Hidden Sensory Challenges",
  publication: "Western Psychological Services",
  year: "2005",
};

export const REF_CFFA: PostReference = {
  source: "Conselho Federal de Fonoaudiologia",
  title: "Documentos oficiais sobre áreas de atuação e competências do fonoaudiólogo",
  publication: "CFFa",
  year: "2023",
};

export const REF_CFP: PostReference = {
  source: "Conselho Federal de Psicologia",
  title: "Resoluções sobre avaliação psicológica e elaboração de documentos escritos",
  publication: "CFP",
  year: "2022",
};

export const REF_AOTA: PostReference = {
  source: "American Occupational Therapy Association",
  title: "Occupational Therapy Practice Framework: Domain and Process",
  publication: "American Journal of Occupational Therapy",
  year: "2020",
};

export const REF_LBI: PostReference = {
  source: "Brasil",
  title: "Lei nº 13.146, Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)",
  publication: "Diário Oficial da União",
  year: "2015",
};

export const REF_LEI_BERENICE: PostReference = {
  source: "Brasil",
  title: "Lei nº 12.764, Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista",
  publication: "Diário Oficial da União",
  year: "2012",
};

export const REF_SBP_TELAS: PostReference = {
  source: "Sociedade Brasileira de Pediatria",
  title: "Manual de Orientação: Menos Telas, Mais Saúde",
  publication: "Grupo de Trabalho Saúde na Era Digital, SBP",
  year: "2019",
};

export const REF_OMS_TELAS: PostReference = {
  source: "World Health Organization",
  title:
    "Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age",
  publication: "OMS, Genebra",
  year: "2019",
};

export const REF_AAP_MIDIA: PostReference = {
  source: "American Academy of Pediatrics, Council on Communications and Media",
  title: "Media and Young Minds",
  publication: "Pediatrics",
  year: "2016",
};

export const REF_SBP_SONO: PostReference = {
  source: "Sociedade Brasileira de Pediatria",
  title: "Guia Prático de Atualização: Distúrbios do Sono na Infância",
  publication: "Departamento Científico de Pediatria do Desenvolvimento e Comportamento, SBP",
  year: "2017",
};

export const REF_MS_CADERNETA: PostReference = {
  source: "Ministério da Saúde",
  title: "Caderneta da Criança: marcos do desenvolvimento infantil",
  publication: "Secretaria de Atenção Primária à Saúde, Brasília",
  year: "2023",
};

export const REF_ANS: PostReference = {
  source: "Agência Nacional de Saúde Suplementar",
  title: "Rol de Procedimentos e Eventos em Saúde e normas de cobertura assistencial",
  publication: "ANS",
  year: "2024",
};

export const REF_MEC_INCLUSAO: PostReference = {
  source: "Ministério da Educação",
  title: "Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva",
  publication: "MEC, Brasília",
  year: "2008",
};

export const REF_SHAYWITZ: PostReference = {
  source: "Shaywitz SE, Shaywitz JE",
  title: "Overcoming Dyslexia",
  publication: "Alfred A. Knopf, Nova York",
  year: "2020",
};

export const REF_ABENEPI: PostReference = {
  source: "Associação Brasileira de Neurologia e Psiquiatria Infantil e Profissões Afins",
  title: "Documentos e diretrizes sobre transtornos do neurodesenvolvimento",
  publication: "ABENEPI",
  year: "2023",
};

export const REF_LEI_BULLYING: PostReference = {
  source: "Brasil",
  title:
    "Lei nº 13.185, institui o Programa de Combate à Intimidação Sistemática (Bullying)",
  publication: "Diário Oficial da União",
  year: "2015",
};

export const REF_COFFITO: PostReference = {
  source: "Conselho Federal de Fisioterapia e Terapia Ocupacional",
  title: "Resoluções sobre áreas de competência do terapeuta ocupacional",
  publication: "COFFITO",
  year: "2023",
};

export const REF_ASHA: PostReference = {
  source: "American Speech-Language-Hearing Association",
  title: "Practice Portal: Speech and Language Disorders in Children",
  publication: "ASHA",
  year: "2024",
};
