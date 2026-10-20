"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialAuth from "@/components/auth/SocialAuth";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordStrength from "@/components/auth/PasswordStrength";
import IntentSelector from "@/components/auth/IntentSelector";
import CreatorPerks from "@/components/auth/CreatorPerks";

export default function RegisterPage() {

  // Form Fields State
  const [fullName, setFullName] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updatesConsent, setUpdatesConsent] = useState(true);
  const [termsConsent, setTermsConsent] = useState(false);

  // Image Upload State (Avatar is Required by Backend, Cover Image is Optional)
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);

  // Status & Feedback State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showAvatarError, setShowAvatarError] = useState(false);

  // File Input References
  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  // Clean up object URLs when previews change or component unmounts
  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
      if (coverImagePreview) URL.revokeObjectURL(coverImagePreview);
    };
  }, [avatarPreview, coverImagePreview]);

  // Handle Avatar Selection
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please select a valid image file (PNG, JPG, WEBP) for your avatar.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Avatar file size must be less than 5MB.");
        return;
      }
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
      setShowAvatarError(false);
      setErrorMessage(null);
    }
  };

  // Handle Cover Image Selection
  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please select a valid image file (PNG, JPG, WEBP) for your cover banner.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("Cover banner size must be less than 10MB.");
        return;
      }
      if (coverImagePreview) URL.revokeObjectURL(coverImagePreview);
      setCoverImage(file);
      setCoverImagePreview(URL.createObjectURL(file));
      setErrorMessage(null);
    }
  };

  // Remove Avatar
  const handleRemoveAvatar = (e) => {
    e.stopPropagation();
    if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    setAvatar(null);
    setAvatarPreview(null);
    if (avatarInputRef.current) avatarInputRef.current.value = "";
  };

  // Remove Cover Image
  const handleRemoveCover = (e) => {
    e.stopPropagation();
    if (coverImagePreview) URL.revokeObjectURL(coverImagePreview);
    setCoverImage(null);
    setCoverImagePreview(null);
    if (coverInputRef.current) coverInputRef.current.value = "";
  };

  // Registration Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validate avatar (Required)
    if (!avatar) {
      setShowAvatarError(true);
      setErrorMessage("Avatar image is required to set up your creator profile.");
      if (avatarInputRef.current) {
        avatarInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (!termsConsent) {
      setErrorMessage("Please agree to the Terms of Service and Privacy Policy to continue.");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("Account created successfully! Welcome to Streamify.");

    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof window !== "undefined") {
        window.location.href = "/homepage";
      }
    }, 600);
  };

  return (
    <>
      <Header />

      <main className="w-full pt-16 flex-1 flex flex-col bg-surface">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden px-gutter py-space-xl">
            {/* Ambient Neon Diffusion Orbs */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-container/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-[420px] w-[420px] rounded-full bg-secondary-container/10 blur-[140px]" />

            <div className="relative mx-auto w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
              {/* LEFT COLUMN: Platform Perks & Live Stream Preview (5 cols) */}
              <CreatorPerks />

              {/* RIGHT COLUMN: Registration Card (7 cols) */}
              <section className="lg:col-span-7 w-full">
                <div className="w-full rounded-2xl bg-surface-container-low p-space-xl sm:p-space-2xl shadow-2xl relative">
                  {/* Card Header */}
                  <div className="mb-space-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                        Quick Onboarding
                      </span>
                      <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          lock
                        </span>
                        256-bit Encrypted
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                      Create your Streamify account
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Start watching and sharing in seconds. Free forever.
                    </p>
                  </div>

                  {/* Feedback Alerts */}
                  {errorMessage && (
                    <div className="mb-space-md p-space-md rounded-xl bg-error-container/30 border border-error/30 text-on-surface flex items-center gap-space-sm animate-fadeIn">
                      <span className="material-symbols-outlined text-error text-[20px] shrink-0">
                        error
                      </span>
                      <span className="font-body-sm text-body-sm flex-1">{errorMessage}</span>
                    </div>
                  )}

                  {successMessage && (
                    <div className="mb-space-md p-space-md rounded-xl bg-primary-container/20 border border-primary/30 text-on-surface flex items-center gap-space-sm animate-fadeIn">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm flex-1 font-medium">{successMessage}</span>
                    </div>
                  )}

                  {/* Social Single Sign-On Grid */}
                  <SocialAuth columns={3} showGithub={true} />

                  {/* Divider */}
                  <div className="relative flex items-center justify-center my-space-lg">
                    <div className="w-full h-px bg-surface-container-highest" />
                    <span className="absolute bg-surface-container-low px-space-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      or register with email
                    </span>
                  </div>

                  {/* Registration Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
                    {/* Account Purpose Toggle Pill */}
                    <IntentSelector />

                    {/* CHANNEL BRANDING / IMAGES UPLOAD (Avatar & Cover Image) */}
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-2">
                          <span>Channel Visuals</span>
                          <span className="text-[12px] text-on-surface-variant font-normal">
                            (Avatar & Banner)
                          </span>
                        </label>
                        <span className={`font-label-sm text-label-sm ${avatar ? "text-primary" : "text-on-surface-variant"}`}>
                          {avatar ? "✓ Avatar uploaded" : "* Avatar required"}
                        </span>
                      </div>

                      <div className="relative rounded-2xl bg-surface-container border border-outline-variant/30 overflow-hidden shadow-inner">
                        {/* 1. Cover Image Banner Area */}
                        <div
                          onClick={() => coverInputRef.current?.click()}
                          className="relative w-full h-32 sm:h-44 bg-surface-container-high flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all hover:brightness-105 group"
                          title="Click to upload Cover Banner"
                        >
                          {coverImagePreview ? (
                            <>
                              <img
                                src={coverImagePreview}
                                alt="Cover Banner Preview"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-white text-[20px]">
                                  photo_camera
                                </span>
                                <span className="text-white text-body-sm font-medium">
                                  Change Cover Banner
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={handleRemoveCover}
                                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-surface-container-lowest/80 hover:bg-error hover:text-white text-on-surface flex items-center justify-center transition-colors shadow-md z-10 cursor-pointer"
                                title="Remove cover banner"
                              >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center justify-center p-4 text-center select-none">
                              <div className="w-10 h-10 rounded-full bg-surface-container-highest/80 flex items-center justify-center text-on-surface-variant mb-1.5 group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[22px]">
                                  add_photo_alternate
                                </span>
                              </div>
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Upload Channel Banner
                              </span>
                              <span className="font-body-sm text-[12px] text-on-surface-variant">
                                Recommended 1200×400 (Optional Cover Photo)
                              </span>
                            </div>
                          )}
                          <input
                            ref={coverInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleCoverChange}
                          />
                        </div>

                        {/* 2. Avatar Area Overlapping Cover */}
                        <div className="px-space-md pb-space-md pt-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-sm -mt-10 sm:-mt-12 relative z-10">
                          <div className="flex items-end gap-space-md">
                            {/* Circular Avatar Frame */}
                            <div
                              onClick={() => avatarInputRef.current?.click()}
                              className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-surface-container shadow-2xl overflow-hidden cursor-pointer bg-surface-container-highest flex items-center justify-center group/avatar transition-transform active:scale-95 shrink-0 ${
                                !avatar && showAvatarError
                                  ? "ring-2 ring-error animate-pulse"
                                  : "hover:ring-2 hover:ring-primary/60"
                              }`}
                              title="Click to upload Profile Avatar"
                            >
                              {avatarPreview ? (
                                <>
                                  <img
                                    src={avatarPreview}
                                    alt="Avatar Preview"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[22px]">
                                      photo_camera
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <div className="flex flex-col items-center justify-center text-on-surface-variant w-full h-full">
                                  <span className="material-symbols-outlined text-[36px] text-on-surface-variant/70">
                                    person
                                  </span>
                                  <span className="absolute bottom-1 w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow">
                                    <span className="material-symbols-outlined text-[15px]">add</span>
                                  </span>
                                </div>
                              )}
                              <input
                                ref={avatarInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                              />
                            </div>

                            {/* Avatar Info & Controls */}
                            <div className="flex flex-col pb-1">
                              <div className="flex items-center gap-2">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Profile Avatar
                                </span>
                                <span className="font-label-sm text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-primary-container/20 text-primary">
                                  Required
                                </span>
                              </div>
                              <span className="font-body-sm text-[12px] text-on-surface-variant max-w-[220px] sm:max-w-none truncate">
                                {avatar ? avatar.name : "Square PNG, JPG, or WEBP (Max 5MB)"}
                              </span>
                              {avatar && (
                                <button
                                  type="button"
                                  onClick={handleRemoveAvatar}
                                  className="text-left font-label-sm text-[11px] text-error hover:underline mt-0.5 cursor-pointer"
                                >
                                  Remove avatar
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Quick Action Button */}
                          <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                              type="button"
                              onClick={() => avatarInputRef.current?.click()}
                              className="px-3.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
                            >
                              <span className="material-symbols-outlined text-[18px] text-primary">
                                {avatar ? "cached" : "add_a_photo"}
                              </span>
                              <span>{avatar ? "Change Avatar" : "Upload Avatar"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Name and Username Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-md text-label-md text-on-surface"
                          htmlFor="reg-fullname"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            className="w-full h-12 rounded-lg bg-surface-container px-space-md text-on-surface font-body-md text-body-md placeholder-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-all"
                            id="reg-fullname"
                            placeholder="Alex Mercer"
                            required
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-md text-label-md text-on-surface"
                          htmlFor="reg-handle"
                        >
                          Creator Handle
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-space-md font-label-md text-label-md text-primary font-bold">
                            @
                          </span>
                          <input
                            className="w-full h-12 rounded-lg bg-surface-container pl-8 pr-10 text-on-surface font-body-md text-body-md placeholder-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-all"
                            id="reg-handle"
                            placeholder="alexmercer"
                            required
                            type="text"
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                          />
                          <span className="material-symbols-outlined absolute right-space-md text-[18px] text-tertiary">
                            check_circle
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Email Address with Availability Indicator */}
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="reg-email"
                      >
                        Work or Personal Email
                      </label>
                      <div className="relative flex items-center">
                        <input
                          className="w-full h-12 rounded-lg bg-surface-container pl-space-md pr-28 text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-high transition-all"
                          id="reg-email"
                          required
                          type="email"
                          placeholder="creator@streamify.tv"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="absolute right-3 flex items-center gap-1 rounded bg-surface-container-highest px-2 py-1">
                          <span className="material-symbols-outlined text-[14px] text-tertiary">
                            check
                          </span>
                          <span className="font-label-sm text-label-sm text-tertiary font-medium">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Password with Interactive Strength Meter */}
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="reg-password"
                      >
                        Password
                      </label>
                      <PasswordInput
                        id="reg-password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        leftIcon={false}
                      />
                      <PasswordStrength password={password} />
                    </div>

                    {/* Checkboxes (Creator Updates & Legal Consent) */}
                    <div className="flex flex-col gap-space-sm pt-space-xs">
                      <label className="flex items-start gap-space-sm cursor-pointer group">
                        <input
                          checked={updatesConsent}
                          onChange={(e) => setUpdatesConsent(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded bg-surface-container text-primary-container focus:ring-0 accent-primary-container cursor-pointer"
                          type="checkbox"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface group-hover:text-on-surface transition-colors">
                          Send me product release notes, creator growth playbooks, and algorithmic optimization tips.
                        </span>
                      </label>

                      <label className="flex items-start gap-space-sm cursor-pointer group">
                        <input
                          checked={termsConsent}
                          onChange={(e) => setTermsConsent(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded bg-surface-container text-primary-container focus:ring-0 accent-primary-container cursor-pointer"
                          required
                          type="checkbox"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                          I agree to Streamify&apos;s{" "}
                          <a className="text-primary hover:underline" href="#">
                            Terms of Service
                          </a>
                          ,{" "}
                          <a className="text-primary hover:underline" href="#">
                            Privacy Policy
                          </a>
                          , and Content Community Guidelines.
                        </span>
                      </label>
                    </div>

                    {/* Primary Action CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-13 py-3.5 px-space-lg rounded-xl bg-primary-container hover:bg-secondary-container text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm transition-all shadow-lg shadow-primary-container/20 active:scale-[0.99] group cursor-pointer text-center disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Creating Your Channel..." : "Get Started Free"}</span>
                      <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                        {isSubmitting ? "sync" : "arrow_forward"}
                      </span>
                    </button>
                  </form>

                  {/* Card Footer & Trust Badges */}
                  <div className="mt-space-xl pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="font-body-md text-body-md text-on-surface-variant">
                      Already have an account?
                      <Link
                        className="text-primary hover:text-on-surface font-semibold underline underline-offset-4 ml-1"
                        href="/login"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          shield
                        </span>{" "}
                        ISO 27001
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          verified_user
                        </span>{" "}
                        GDPR Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
