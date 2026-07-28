import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1240px] items-center justify-center py-4 sm:py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Top Cassino Comparador"
            width={260}
            height={40}
            className="h-7 w-auto sm:h-10"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
