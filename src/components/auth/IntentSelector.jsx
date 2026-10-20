"use client";

import { useState } from "react";

export default function IntentSelector({ onChange }) {
  const [selected, setSelected] = useState("watch"); // "watch" | "broadcast"

  const handleSelect = (intent) => {
    setSelected(intent);
    if (onChange) onChange(intent);
  };

  return (
    <div className="flex flex-col gap-space-xs">
      <label className="font-label-md text-label-md text-on-surface">Primary Intent</label>
      <div className="grid grid-cols-2 p-1 rounded-xl bg-surface-container gap-1">
        <button
          type="button"
          onClick={() => handleSelect("watch")}
          className={`rounded-lg py-2 px-space-sm font-label-md text-label-md font-semibold text-center transition-all cursor-pointer ${
            selected === "watch"
              ? "bg-surface-container-highest text-on-surface shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[16px] align-middle mr-1">
            live_tv
          </span>{" "}
          Watch & Discover
        </button>
        <button
          type="button"
          onClick={() => handleSelect("broadcast")}
          className={`rounded-lg py-2 px-space-sm font-label-md text-label-md font-semibold text-center transition-all cursor-pointer ${
            selected === "broadcast"
              ? "bg-surface-container-highest text-on-surface shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[16px] align-middle mr-1">
            sensors
          </span>{" "}
          Broadcast & Upload
        </button>
      </div>
    </div>
  );
}
