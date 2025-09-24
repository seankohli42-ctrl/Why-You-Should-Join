"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems: { href: string; label: string }[] = [];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full border-b border-black">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Why You Should Join" width={28} height={28} />
          <span className="text-lg tracking-tight font-semibold">Why You Should Join</span>
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-wide hover:opacity-70 transition-opacity ${
                pathname === item.href ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


