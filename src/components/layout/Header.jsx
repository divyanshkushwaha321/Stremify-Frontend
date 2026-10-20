"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV_LINKS } from "@/constants/navigation";

export default function Header() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/";
  const isRegisterPage = pathname === "/register";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-gutter flex items-center justify-between gap-space-md">
        {/* Brand & Left Navigation */}
        <div className="flex items-center gap-space-lg">
          <Link
            className="flex items-center gap-space-sm"
            href={pathname === "/homepage" ? "/homepage" : "/"}
          >
            <img
              alt={`${BRAND.name} Brand Logo`}
              className="h-8 w-auto object-contain"
              src={BRAND.logoUrl}
            />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline">
              {BRAND.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-space-xs">
            {NAV_LINKS.map((link) => {
              const isRoute = link.href !== "#";
              const isActive = isRoute && pathname === link.href;

              if (!isRoute) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    className="px-space-md py-space-sm font-label-lg text-label-lg rounded-lg transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-space-md py-space-sm font-label-lg text-label-lg rounded-lg transition-all ${isActive
                      ? "bg-surface-container-high text-on-surface font-semibold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center Search Bar (for larger screens) */}
        <div className="flex-1 max-w-md hidden lg:flex items-center">
          <div className="w-full relative">
            <input
              aria-label="Search videos"
              className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 text-body-md px-space-md py-space-sm pl-10 rounded-lg border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="Search videos, creators..."
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
          </div>
        </div>

        {/* Right Actions & Auth Links */}
        <div className="flex items-center gap-space-md">
          <a
            className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg px-space-sm py-space-xs rounded-lg transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
            <span className="hidden sm:inline">Help</span>
          </a>

          <button
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
          </button>

          <nav className="flex items-center gap-space-xs">
            <Link
              href="/login"
              className={`px-space-md py-space-sm font-label-lg text-label-lg rounded-lg transition-colors ${isLoginPage && pathname !== "/homepage"
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={`px-space-md py-space-sm font-label-lg text-label-lg rounded-lg transition-colors ${isRegisterPage
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`}
            >
              Register
            </Link>
          </nav>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
