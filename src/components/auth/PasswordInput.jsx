"use client";

import { useState } from "react";

export default function PasswordInput({
  id = "password",
  name = "password",
  value,
  onChange,
  placeholder = "••••••••••••",
  required = true,
  leftIcon = true,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex items-center">
      {leftIcon && (
        <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
          lock
        </span>
      )}
      <input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full h-11 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all ${
          leftIcon ? "pl-11 pr-11" : "pl-space-md pr-12 tracking-wider"
        }`}
      />
      <button
        aria-label="Toggle password visibility"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 text-on-surface-variant hover:text-on-surface transition-colors p-1 flex items-center justify-center rounded cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </button>
    </div>
  );
}
