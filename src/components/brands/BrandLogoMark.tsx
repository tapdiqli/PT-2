import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoMarkProps {
  logo: string;
  name: string;
  accent: string;
  className?: string;
}

export function BrandLogoMark({ logo, name, accent, className }: BrandLogoMarkProps) {
  return (
    <div
      className={cn(
        "flex h-[88px] w-[9.25rem] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/[0.04]",
        className,
      )}
      style={{ boxShadow: `0 8px 24px -8px ${accent}44` }}
    >
      <Image src={logo} alt={`${name} logo`} width={148} height={88} className="h-full w-full object-contain" unoptimized />
    </div>
  );
}
