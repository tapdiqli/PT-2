import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Condições de Utilização",
  description: "Condições aplicáveis à consulta e utilização deste espaço editorial.",
  alternates: { canonical: "/termos-condicoes" },
};

export default function TermsPage() {
  const site = getSiteInfo();

  return (
    <LegalDocument
      title="Condições de Utilização"
      updatedAt="1 de Janeiro de 2026"
      intro={`Estas Condições regulam a consulta do website ${site.domain} ("Website"), mantido por ${site.name}. Ao acceder e utilizar este Website, concorda com as condições aqui descritas. Se não concordar, deve deixar de o utilizar.`}
      sections={[
        {
          heading: "Natureza do Website",
          paragraphs: [
            `${site.name} é um espaço independente de carácter informativo e editorial, destinado a utilizadores maiores de 18 anos. Não operamos serviços próprios, não gerimos contas de utilizador, não intermediamos transações e não temos qualquer controlo sobre o funcionamento das plataformas apresentadas.`,
            "Todo o conteúdo publicado tem uma finalidade exclusivamente informativa e não constitui aconselhamento financeiro, legal ou profissional de qualquer natureza.",
          ],
        },
        {
          heading: "Requisito de Idade",
          paragraphs: [
            "O acesso e a consulta deste Website estão reservados a pessoas com 18 ou mais anos. Ao utilizá-lo, o visitante declara e garante que cumpre este requisito. A validação da idade é pedida antes de continuar.",
          ],
        },
        {
          heading: "Nota sobre Parcerias",
          paragraphs: [
            "Alguns links presentes neste Website direcionam para serviços externos. Em certos casos, podemos receber uma compensação se a navegação for continuada após a saída deste site, sem qualquer custo adicional para o visitante.",
            "Este modelo não influencia a forma como os conteúdos são elaborados nem a ordem pela qual as plataformas são apresentadas. Nenhuma plataforma recebe destaque por motivo de parceria.",
          ],
        },
        {
          heading: "Precisão da Informação",
          paragraphs: [
            "Empregamos esforços razoáveis para manter a informação apresentada atualizada e correta. As condições comunicadas por entidades terceiras podem, no entanto, alterar-se sem aviso prévio. Recomendamos que confirme sempre os termos atuais diretamente na origem antes de qualquer decisão.",
          ],
        },
        {
          heading: "Limitação de Responsabilidade",
          paragraphs: [
            `${site.name} não é responsável por quaisquer perdas ou prejuízos, diretos ou indiretos, resultantes da utilização de serviços prestados por entidades terceiras referidas neste Website. Qualquer relação contratual estabelece-se exclusivamente entre o visitante e a entidade que escolher.`,
          ],
        },
        {
          heading: "Propriedade Intelectual",
          paragraphs: [
            `Todo o conteúdo original deste Website, incluindo textos, gráficos, logótipos e desenho, é propriedade de ${site.name} e está protegido por legislação de direitos de autor. É proibida a reprodução sem autorização prévia por escrito.`,
          ],
        },
        {
          heading: "Alterações às Condições",
          paragraphs: [
            "Reservamo-nos o direito de atualizar estas Condições em qualquer momento. As alterações entram em vigor imediatamente após a respetiva publicação nesta página.",
          ],
        },
        {
          heading: "Lei Aplicável",
          paragraphs: [
            "Estas Condições são regidas pela lei portuguesa. Quaisquer litígios relacionados com a utilização deste Website serão submetidos aos tribunais competentes de Portugal.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [`Para qualquer questão relacionada com estas Condições, contacte-nos através de ${site.email}.`],
        },
      ]}
    />
  );
}
