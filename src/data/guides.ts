export interface GuideSection {
  heading: string;
  body: string;
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: "como-escolher-casino-online-seguro",
    title: "Como Escolher um Casino Online Seguro em Portugal",
    category: "Segurança",
    excerpt:
      "Licença SRIJ, encriptação e políticas de pagamento: os sinais que distinguem um casino online seguro de um risco a evitar.",
    readTime: "6 min",
    publishedAt: "2026-01-12",
    sections: [
      {
        heading: "Verifique sempre a licença SRIJ",
        body: "Antes de criar uma conta em qualquer casino online, confirme que o operador possui uma licença ativa emitida pelo Serviço de Regulação e Inspeção de Jogos (SRIJ). Esta informação deve estar visível no rodapé do site do operador e pode ser confirmada diretamente no portal do SRIJ.",
      },
      {
        heading: "Avalie a segurança e encriptação",
        body: "Casinos online seguros utilizam encriptação SSL/TLS para proteger dados pessoais e financeiros. Procure o ícone de cadeado no navegador e evite qualquer site que não utilize HTTPS.",
      },
      {
        heading: "Leia avaliações independentes",
        body: "Consulte comparadores independentes como este para conhecer a experiência de outros jogadores, tempos de levantamento reais e a transparência dos termos de bónus antes de se registar.",
      },
      {
        heading: "Confirme os métodos de pagamento",
        body: "Um casino seguro para o mercado português deve oferecer MB WAY e Multibanco, com processos de levantamento claros e prazos definidos.",
      },
    ],
  },
  {
    slug: "mbway-casinos-online-guia",
    title: "MB WAY nos Casinos Online: Guia Completo",
    category: "Pagamentos",
    excerpt: "Descubra como depositar e levantar fundos usando MB WAY nos principais casinos licenciados em Portugal.",
    readTime: "5 min",
    publishedAt: "2026-02-03",
    sections: [
      {
        heading: "O que é o MB WAY?",
        body: "O MB WAY é um serviço de pagamento móvel muito popular em Portugal, que permite transferências e pagamentos instantâneos associando o número de telemóvel a uma conta bancária.",
      },
      {
        heading: "Como depositar com MB WAY",
        body: "Basta selecionar MB WAY na secção de depósitos do casino, introduzir o número associado e confirmar a transação na app do seu banco. O saldo fica disponível de forma instantânea.",
      },
      {
        heading: "Levantamentos via MB WAY",
        body: "Cada vez mais operadores licenciados pelo SRIJ processam levantamentos diretamente via MB WAY, reduzindo os tempos de espera de dias para poucas horas.",
      },
    ],
  },
  {
    slug: "requisito-de-aposta-explicado",
    title: "O Que é o Requisito de Aposta (Wagering)?",
    category: "Bónus",
    excerpt: "Entenda de forma simples como funciona o requisito de aposta antes de aceitar qualquer bónus de casino.",
    readTime: "4 min",
    publishedAt: "2026-02-18",
    sections: [
      {
        heading: "Definição de requisito de aposta",
        body: "O requisito de aposta (ou wagering) é o número de vezes que precisa de apostar o valor de um bónus antes de poder converter os ganhos associados em saldo levantável.",
      },
      {
        heading: "Exemplo prático",
        body: "Um bónus de 100€ com requisito de 30x significa que é necessário apostar um total de 3.000€ (100€ × 30) antes de poder levantar quaisquer ganhos provenientes desse bónus.",
      },
      {
        heading: "Fatores adicionais a considerar",
        body: "Além do requisito de aposta, verifique o prazo de validade do bónus, os jogos elegíveis (normalmente slots contam 100%, jogos de mesa menos) e o limite de aposta máxima permitido por rodada enquanto o bónus está ativo.",
      },
    ],
  },
  {
    slug: "slots-vs-jogos-de-mesa",
    title: "Slots vs. Jogos de Mesa: Qual Escolher?",
    category: "Jogos",
    excerpt: "Comparamos as principais diferenças entre slots online e jogos de mesa clássicos como blackjack e roleta.",
    readTime: "5 min",
    publishedAt: "2026-03-05",
    sections: [
      {
        heading: "Slots: variedade e temas",
        body: "As slots online oferecem uma enorme variedade de temas, mecânicas de bónus e jackpots progressivos. São ideais para quem procura entretenimento casual e rondas rápidas.",
      },
      {
        heading: "Jogos de mesa: estratégia e controlo",
        body: "Jogos como blackjack, roleta e bacará envolvem mais elementos de decisão e, em alguns casos, estratégia. Costumam ter uma retenção teórica (RTP) mais favorável ao jogador em variantes específicas.",
      },
      {
        heading: "Qual escolher?",
        body: "A escolha depende do seu perfil: quem procura simplicidade e temas visuais deve explorar slots, enquanto quem valoriza decisões estratégicas pode preferir jogos de mesa ou casino em direto.",
      },
    ],
  },
  {
    slug: "jogo-responsavel-sinais-de-alerta",
    title: "Jogo Responsável: Sinais de Alerta e Como Agir",
    category: "Jogo Responsável",
    excerpt: "Aprenda a identificar sinais de comportamento de jogo problemático e onde procurar apoio em Portugal.",
    readTime: "6 min",
    publishedAt: "2026-03-20",
    sections: [
      {
        heading: "Sinais de alerta comuns",
        body: "Jogar mais tempo ou dinheiro do que planeado, tentar recuperar perdas com apostas maiores, ou sentir ansiedade quando não pode jogar são sinais de que o jogo pode estar a tornar-se problemático.",
      },
      {
        heading: "Ferramentas de autocontrolo",
        body: "A maioria dos operadores licenciados pelo SRIJ oferece limites de depósito, limites de tempo de sessão e opções de autoexclusão temporária ou permanente diretamente na conta do jogador.",
      },
      {
        heading: "Onde pedir ajuda",
        body: "Em Portugal, pode contactar gratuitamente a Linha 1414 do ICAD para aconselhamento anónimo e confidencial. Consulte também a nossa página de Jogo Responsável para mais recursos.",
      },
    ],
  },
  {
    slug: "licenciamento-srij-explicado",
    title: "Licenciamento SRIJ: O Que Significa para o Jogador",
    category: "Regulação",
    excerpt: "Entenda o papel do SRIJ na regulação do jogo online em Portugal e porque é essencial escolher operadores licenciados.",
    readTime: "5 min",
    publishedAt: "2026-04-02",
    sections: [
      {
        heading: "O que é o SRIJ",
        body: "O Serviço de Regulação e Inspeção de Jogos (SRIJ), sob a tutela do Turismo de Portugal, é a entidade responsável por licenciar e fiscalizar operadores de jogo online no país.",
      },
      {
        heading: "Benefícios de jogar em operadores licenciados",
        body: "Operadores licenciados pelo SRIJ estão sujeitos a auditorias regulares, regras estritas de proteção do jogador e obrigações de promoção do jogo responsável, incluindo ferramentas de autoexclusão.",
      },
      {
        heading: "Como confirmar uma licença",
        body: "Pode confirmar a validade da licença de um operador diretamente no portal do SRIJ, que mantém uma lista atualizada de todos os operadores autorizados em Portugal.",
      },
    ],
  },
];

export function getGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
