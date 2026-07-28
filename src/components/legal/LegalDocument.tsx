import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalDocumentProps {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({ title, updatedAt, intro, sections }: LegalDocumentProps) {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-3xl">
        <h1 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">Última atualização: {updatedAt}</p>
        <p className="mt-6 leading-relaxed text-gray-300">{intro}</p>

        <div className="mt-10 space-y-8 border-t border-primary/20 pt-8">
          {sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg font-bold text-white">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-2 space-y-3">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-sm leading-relaxed text-gray-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
