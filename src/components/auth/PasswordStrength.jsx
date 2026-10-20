"use client";

export default function PasswordStrength({ password = "" }) {
  // Compute basic UI strength
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (!password) {
    score = 4; // Default preview matching design template
  }

  const getLabel = () => {
    if (!password) return "Strong security";
    if (score <= 1) return "Weak";
    if (score === 2) return "Fair";
    if (score === 3) return "Good";
    return "Strong security";
  };

  const getLabelColor = () => {
    if (score <= 1) return "text-error";
    if (score <= 2) return "text-secondary";
    return "text-tertiary";
  };

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm text-on-surface-variant">Security Rating</span>
        <span className={`font-label-sm text-label-sm font-semibold ${getLabelColor()}`}>
          {getLabel()}
        </span>
      </div>
      {/* Segmented Strength Meter Indicator */}
      <div className="grid grid-cols-4 gap-1.5 mt-0.5">
        <div
          className={`h-1.5 rounded-full transition-all ${
            score >= 1 ? "bg-primary-container" : "bg-surface-container-highest"
          }`}
        />
        <div
          className={`h-1.5 rounded-full transition-all ${
            score >= 2 ? "bg-primary-container" : "bg-surface-container-highest"
          }`}
        />
        <div
          className={`h-1.5 rounded-full transition-all ${
            score >= 3 ? "bg-primary-container" : "bg-surface-container-highest"
          }`}
        />
        <div
          className={`h-1.5 rounded-full transition-all ${
            score >= 4 ? "bg-tertiary" : "bg-surface-container-highest"
          }`}
        />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
        Must contain at least 8 characters, one capital letter, and a symbol.
      </p>
    </div>
  );
}
