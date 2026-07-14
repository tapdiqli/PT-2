import Image from "next/image";

interface BrandLogoMarkProps {
  logo: string;
  name: string;
  accent: string;
}

export function BrandLogoMark({ logo, name, accent }: BrandLogoMarkProps) {
  return (
    <div
      className="flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/[0.04] px-2"
      style={{ boxShadow: `0 8px 24px -8px ${accent}44` }}
    >
      <Image src={logo} alt={`${name} logo`} width={160} height={80} className="h-full w-full object-contain" unoptimized />
    </div>
  );
}
