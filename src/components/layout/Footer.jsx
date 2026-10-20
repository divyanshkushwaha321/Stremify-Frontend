import Link from "next/link";
import { BRAND, FOOTER_LINKS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-lg">
      <div className="w-full px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
        <div>© {BRAND.year} {BRAND.name} Inc. All rights reserved.</div>
        <div className="flex items-center gap-space-lg">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              className="hover:text-on-surface transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
