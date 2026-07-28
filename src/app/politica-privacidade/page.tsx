import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacidade e Transparência",
  description: "Como este website recolhe, utiliza e protege os dados dos visitantes.",
  alternates: { canonical: "/politica-privacidade" },
};

export default function PrivacyPolicyPage() {
  const site = getSiteInfo();

  return (
    <LegalDocument
      title="Privacidade e Transparência"
      updatedAt="1 de Janeiro de 2026"
      intro={`Esta página explica como ${site.name} recolhe, utiliza e protege os dados dos visitantes do website ${site.domain}, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD). A consulta dos conteúdos não requer registo nem criação de conta.`}
      sections={[
        {
          heading: "Dados que Recolhemos",
          paragraphs: [
            "Podemos recolher dados fornecidos voluntariamente através do formulário de contacto, como nome, endereço de email e conteúdo da mensagem.",
            "Recolhemos também dados de navegação de forma automática, como o endereço IP, tipo de dispositivo, navegador e páginas consultadas, para fins estatísticos e de melhoria dos conteúdos.",
          ],
        },
        {
          heading: "Finalidade do Tratamento",
          paragraphs: [
            "Os dados recolhidos são utilizados para responder a pedidos de contacto, melhorar a experiência de consulta, analisar tendências de navegação de forma agregada e cumprir obrigações legais aplicáveis.",
          ],
        },
        {
          heading: "Partilha de Dados",
          paragraphs: [
            "Não vendemos nem partilhamos dados pessoais com terceiros para fins de marketing sem consentimento explícito. Podemos partilhar dados com prestadores de serviços (como ferramentas de análise e alojamento) exclusivamente para manter o website em funcionamento.",
          ],
        },
        {
          heading: "Cookies e Tecnologias",
          paragraphs: [
            "Utilizamos cookies essenciais e armazenamento local para guardar a confirmação de idade e a resposta dada ao aviso de cookies. A descrição detalhada consta da página Cookies e Tecnologias.",
          ],
        },
        {
          heading: "Direitos do Utilizador",
          paragraphs: [
            "Nos termos do RGPD, tem o direito de aceder, corrigir, eliminar ou solicitar a portabilidade dos seus dados pessoais, bem como opor-se ao respetivo tratamento. Para exercer estes direitos, contacte-nos através de " +
              site.email +
              ".",
          ],
        },
        {
          heading: "Segurança dos Dados",
          paragraphs: [
            "Implementamos medidas técnicas e organizativas razoáveis para proteger os dados pessoais contra acesso não autorizado, perda ou alteração.",
          ],
        },
        {
          heading: "Retenção de Dados",
          paragraphs: [
            "Os dados pessoais são conservados apenas durante o período necessário para cumprir as finalidades descritas nesta página, salvo obrigação legal de retenção mais longa.",
          ],
        },
        {
          heading: "Alterações a Esta Página",
          paragraphs: [
            "Podemos atualizar este documento periodicamente. Recomendamos a consulta regular desta página para se manter informado sobre eventuais alterações.",
          ],
        },
      ]}
    />
  );
}
