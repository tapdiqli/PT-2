import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description: "Termos e condições de utilização do site TopCassinoComparador.",
  alternates: { canonical: "/termos-condicoes" },
};

export default function TermsPage() {
  const site = getSiteInfo();

  return (
    <LegalDocument
      title="Termos e Condições"
      updatedAt="1 de Janeiro de 2026"
      intro={`Estes Termos e Condições regulam a utilização do site ${site.domain} ("Site"), operado por ${site.name}. Ao acedder e utilizar este Site, concorda com os termos aqui descritos. Se não concordar, deve deixar de utilizar o Site.`}
      sections={[
        {
          heading: "Natureza do Serviço",
          paragraphs: [
            `${site.name} é um site independente de comparação e informação sobre casinos online licenciados, destinado a maiores de 18 anos residentes em Portugal. Não somos um operador de jogo, não aceitamos apostas, não processamos pagamentos de jogo e não temos qualquer controlo sobre a operação dos casinos apresentados.`,
            "Todo o conteúdo publicado neste Site tem fins meramente informativos e não constitui aconselhamento financeiro, legal ou profissional de qualquer tipo.",
          ],
        },
        {
          heading: "Requisito de Idade",
          paragraphs: [
            "O acesso e utilização deste Site estão estritamente reservados a pessoas com 18 ou mais anos. Ao utilizar este Site, o utilizador declara e garante que tem, pelo menos, 18 anos de idade.",
          ],
        },
        {
          heading: "Conteúdo de Afiliação",
          paragraphs: [
            "Este Site contém links de afiliação para operadores de casino online terceiros. Podemos receber uma compensação financeira quando um utilizador se regista ou realiza um depósito através destes links, sem qualquer custo adicional para o utilizador.",
            "Esta compensação não influencia a nossa metodologia de avaliação, classificações ou a ordem de apresentação dos operadores no Site.",
          ],
        },
        {
          heading: "Precisão da Informação",
          paragraphs: [
            "Empregamos esforços razoáveis para manter a informação apresentada atualizada e precisa. No entanto, bónus, termos e condições dos operadores de terceiros podem alterar-se sem aviso prévio. Recomendamos que confirme sempre os termos atuais diretamente no site do operador antes de qualquer registo ou depósito.",
          ],
        },
        {
          heading: "Limitação de Responsabilidade",
          paragraphs: [
            `${site.name} não é responsável por quaisquer perdas, danos ou prejuízos, diretos ou indiretos, resultantes da utilização de serviços prestados por operadores de casino online listados neste Site. A relação contratual relativa ao jogo estabelece-se exclusivamente entre o utilizador e o operador escolhido.`,
          ],
        },
        {
          heading: "Propriedade Intelectual",
          paragraphs: [
            "Todo o conteúdo original deste Site, incluindo textos, gráficos, logótipos e design, é propriedade de " +
              site.name +
              " e está protegido por leis de direitos de autor. É proibida a reprodução sem autorização prévia por escrito.",
          ],
        },
        {
          heading: "Alterações aos Termos",
          paragraphs: [
            "Reservamo-nos o direito de atualizar estes Termos e Condições em qualquer momento. As alterações entram em vigor imediatamente após a publicação nesta página.",
          ],
        },
        {
          heading: "Lei Aplicável",
          paragraphs: [
            "Estes Termos e Condições são regidos pela lei portuguesa. Quaisquer litígios relacionados com a utilização deste Site serão submetidos aos tribunais competentes de Portugal.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [`Para qualquer questão relacionada com estes Termos e Condições, contacte-nos através de ${site.email}.`],
        },
      ]}
    />
  );
}
