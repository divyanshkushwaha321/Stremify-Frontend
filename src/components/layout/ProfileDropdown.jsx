"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ProfileDropdown({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsOpen(false);
    // Notify parent without calling any external API
    if (onLogout) {
      onLogout();
    }
  };

  const displayName = user?.fullname || "User";
  const displayUsername = user?.username ? `@${user.username}` : user?.email || "";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-full hover:bg-surface-container-high transition-all duration-200 cursor-pointer border border-transparent hover:border-outline-variant/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={displayName}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-outline-variant/30 shadow-sm"
          />
        ) : (
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm border border-primary/30">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}

        <span className="hidden md:inline-block text-on-surface font-medium text-body-md max-w-[120px] truncate">
          {displayName}
        </span>

        <span
          className={`material-symbols-outlined text-on-surface-variant text-[20px] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : "rotate-0"
          }`}
        >
          expand_more
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-surface-container/95 backdrop-blur-xl border border-outline-variant/30 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150 ease-out"
        >
          {/* User Preview Header */}
          <div className="px-4 py-2.5 flex items-center gap-3">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={displayName}
                className="w-10 h-10 rounded-full object-cover border border-outline-variant/30 shrink-0"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-base border border-primary/30 shrink-0">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex flex-col min-w-0">
              <span className="text-on-surface font-semibold text-body-md truncate">
                {displayName}
              </span>
              {displayUsername && (
                <span className="text-on-surface-variant text-body-sm truncate text-xs opacity-80">
                  {displayUsername}
                </span>
              )}
            </div>
          </div>

          <div className="my-1.5 border-t border-outline-variant/20" />

          {/* Menu Options */}
          <div className="p-1 space-y-0.5">
            {/* User Profile Option */}
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-on-surface hover:text-on-surface hover:bg-surface-container-high transition-colors group"
            >
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">
                person
              </span>
              <span>User Profile</span>
            </Link>

            {/* Logout Button Option */}
            <button
              type="button"
              onClick={handleLogout}
              role="menuitem"
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-error hover:bg-error/15 transition-colors group cursor-pointer text-left"
            >
              <span className="material-symbols-outlined text-[20px] text-error group-hover:scale-105 transition-transform">
                logout
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
