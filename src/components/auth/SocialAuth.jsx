export default function SocialAuth({ columns = 2, showGithub = false }) {
  const gridCols = columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-space-sm mb-space-lg`}>
      {/* Google Button */}
      <button
        className="flex items-center justify-center gap-space-sm h-11 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all font-label-lg text-label-lg text-on-surface shadow-sm active:scale-[0.98] cursor-pointer"
        type="button"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.4 8.8 5 12 5z"
            fill="#EA4335"
          />
          <path
            d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
            fill="#4285F4"
          />
          <path
            d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 12s.6 3.6 1.6 5.6l3.7-2.9z"
            fill="#FBBC05"
          />
          <path
            d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.4-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"
            fill="#34A853"
          />
        </svg>
        <span>Google</span>
      </button>

      {/* Apple Button */}
      <button
        className="flex items-center justify-center gap-space-sm h-11 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all font-label-lg text-label-lg text-on-surface shadow-sm active:scale-[0.98] cursor-pointer"
        type="button"
      >
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.05-.03.07-.42 1.44-1.38 2.82M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.62 1.35-.57.65-.98 1.72-.85 2.74 1.01.08 2.02-.49 2.55-1.24z" />
        </svg>
        <span>Apple</span>
      </button>

      {/* GitHub Button (for Register) */}
      {showGithub && (
        <button
          className="flex items-center justify-center gap-space-sm h-11 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all font-label-lg text-label-lg text-on-surface shadow-sm active:scale-[0.98] cursor-pointer"
          type="button"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </button>
      )}
    </div>
  );
}
