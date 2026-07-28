import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookies e Tecnologias",
  description:
    "Que cookies e tecnologias de armazenamento local são utilizados neste website, para que servem e como pode alterar a sua escolha.",
  alternates: { canonical: "/cookies-tecnologias" },
};

export default function CookiesPage() {
  const site = getSiteInfo();

  return (
    <LegalDocument
      title="Cookies e Tecnologias"
      updatedAt="1 de Janeiro de 2026"
      intro={`Esta página descreve os cookies e as tecnologias de armazenamento local utilizados em ${site.domain}, a finalidade de cada um e as opções disponíveis para gerir o seu consentimento.`}
      sections={[
        {
          heading: "O Que São Cookies",
          paragraphs: [
            "Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um website. Tecnologias equivalentes, como o armazenamento local do navegador (localStorage), permitem guardar informação de forma semelhante.",
            "Utilizamos ambas as tecnologias de forma limitada e apenas para as finalidades descritas nesta página.",
          ],
        },
        {
          heading: "Cookies Essenciais",
          paragraphs: [
            "Estes registos são necessários para o funcionamento básico do website e não podem ser desativados. Guardam a confirmação de idade, para que a validação não seja pedida em cada página, e a resposta dada ao aviso de cookies, para que este não seja apresentado repetidamente.",
            "Nenhum destes registos contém dados que permitam identificá-lo pessoalmente.",
          ],
        },
        {
          heading: "Cookies de Medição",
          paragraphs: [
            "Quando autoriza, podemos registar parâmetros de origem da visita — por exemplo o identificador de campanha presente no endereço de entrada — para compreender de que forma os visitantes chegam ao website.",
            "Esta informação é utilizada de forma agregada, com finalidade estatística, e não é utilizada para criar perfis individuais.",
          ],
        },
        {
          heading: "Tecnologias de Terceiros",
          paragraphs: [
            "Ao seguir um link para uma plataforma externa, sai do âmbito deste website. A partir desse momento aplicam-se as políticas de cookies e de privacidade da entidade que gere esse destino, sobre as quais não temos controlo.",
            "Recomendamos a consulta dessas políticas antes de continuar a navegação nesses serviços.",
          ],
        },
        {
          heading: "Gerir o Seu Consentimento",
          paragraphs: [
            "Pode alterar a sua escolha em qualquer momento apagando os dados de navegação e o armazenamento local deste website nas definições do seu navegador. O aviso de cookies e a validação de idade voltarão a ser apresentados na visita seguinte.",
            "A maioria dos navegadores permite igualmente bloquear cookies de forma global. Note que, nesse caso, algumas funcionalidades poderão não funcionar como esperado.",
          ],
        },
        {
          heading: "Questões",
          paragraphs: [
            `Para qualquer esclarecimento sobre o uso de cookies e tecnologias neste website, contacte-nos através de ${site.email}.`,
          ],
        },
      ]}
    />
  );
}
