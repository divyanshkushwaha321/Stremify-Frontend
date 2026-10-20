"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialAuth from "@/components/auth/SocialAuth";
import PasswordInput from "@/components/auth/PasswordInput";
import StreamShowcase from "@/components/auth/StreamShowcase";
import { BRAND } from "@/constants/navigation";

export default function LoginPage() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <>
      <Header />

      <main className="w-full pt-16 flex-1 flex flex-col bg-surface">
        <div className="flex flex-col w-full">
          <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-stretch overflow-hidden bg-surface">
            {/* Ambient Neon Diffusion Orbs */}
            <div className="pointer-events-none absolute -top-40 -left-20 w-[550px] h-[550px] bg-primary-container/15 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-secondary-container/10 rounded-full blur-[130px]" />
            <div className="pointer-events-none absolute top-1/2 -right-40 w-[480px] h-[480px] bg-primary-container/10 rounded-full blur-[160px]" />

            <div className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* LEFT COLUMN: Cinematic Showcase (lg: 7 cols) */}
              <StreamShowcase />

              {/* RIGHT COLUMN: Login Card Container (lg: 5 cols) */}
              <section className="lg:col-span-5 w-full flex justify-center py-space-sm">
                <div className="w-full max-w-md flex flex-col bg-surface-container-low rounded-2xl shadow-2xl p-space-xl backdrop-blur-xl relative">
                  {/* Card Header & Brand */}
                  <div className="flex flex-col items-start gap-space-sm mb-space-lg">
                    <div className="h-10 flex items-center">
                      <img
                        alt="Streamify Brand Mark"
                        className="h-9 w-auto object-contain"
                        src={BRAND.logoUrl}
                      />
                    </div>

                    <div className="flex flex-col mt-space-xs">
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        Sign in to Streamify
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Manage your channel, subscriptions, and stream library.
                      </p>
                    </div>
                  </div>

                  {/* FORM VIEW: Credentials & Social SSO */}
                  <div className="flex flex-col">
                    {/* One-Click Social SSO Grid */}
                    <SocialAuth columns={2} showGithub={false} />

                    {/* Visual Divider */}
                    <div className="relative flex items-center justify-center my-space-md">
                      <div className="w-full h-px bg-surface-variant" />
                      <span className="absolute px-space-md bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Or continue with email
                      </span>
                    </div>

                    {/* Login Form */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col gap-space-md mt-space-sm"
                    >
                      {/* Input: Username / Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                          htmlFor="login-identity"
                        >
                          <span>Email or Channel Handle</span>
                          <span className="text-on-surface-variant text-[11px] font-normal">
                            e.g. @prostreamer
                          </span>
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                            alternate_email
                          </span>
                          <input
                            className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                            id="login-identity"
                            name="identity"
                            value={identity}
                            onChange={(e) => setIdentity(e.target.value)}
                            placeholder="name@streamify.tv"
                            required
                            type="text"
                          />
                        </div>
                      </div>

                      {/* Input: Password */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <label
                            className="font-label-md text-label-md text-on-surface"
                            htmlFor="login-password"
                          >
                            Password
                          </label>
                          <a
                            className="font-label-md text-label-md text-primary hover:text-on-surface transition-colors"
                            href="#"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <PasswordInput
                          id="login-password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          required
                          leftIcon={true}
                        />
                      </div>

                      {/* Keep Me Logged In Checkbox */}
                      <div className="flex items-center justify-between pt-space-xs">
                        <label className="flex items-center gap-2.5 cursor-pointer select-none">
                          <input
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 rounded bg-surface-container accent-primary-container text-primary-container cursor-pointer focus:ring-0"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Keep me signed in for 30 days
                          </span>
                        </label>
                        <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">
                          ⌘ + ↵ to submit
                        </span>
                      </div>

                      {/* Submit Action Link to /homepage */}
                      <Link
                        href="/homepage"
                        className="mt-space-sm w-full h-12 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-semibold tracking-wide hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-container/20 cursor-pointer text-center"
                      >
                        <span>Sign In to Dashboard</span>
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_forward
                        </span>
                      </Link>
                    </form>
                  </div>

                  {/* Card Footer & Registration Prompt */}
                  <div className="mt-space-lg pt-space-md border-t-0 flex flex-col items-center gap-space-sm text-center">
                    <div className="font-body-md text-body-md text-on-surface-variant">
                      New to Streamify?
                      <Link
                        className="text-primary hover:text-on-surface font-semibold underline underline-offset-4 decoration-primary/40 transition-colors ml-1"
                        href="/register"
                      >
                        Create an account
                      </Link>
                    </div>

                    {/* Language and Utility Links */}
                    <div className="flex items-center justify-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
                      <button
                        className="flex items-center gap-1 hover:text-on-surface transition-colors cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">language</span>
                        <span>English (US)</span>
                      </button>
                      <span>·</span>
                      <a className="hover:text-on-surface transition-colors" href="#">
                        Terms of Service
                      </a>
                      <span>·</span>
                      <a className="hover:text-on-surface transition-colors" href="#">
                        Privacy
                      </a>
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
