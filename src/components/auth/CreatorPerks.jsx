export default function CreatorPerks() {
  return (
    <section className="lg:col-span-5 flex flex-col gap-space-xl">
      {/* Header Info */}
      <div className="space-y-space-sm">
        <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-md py-1.5 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary-container animate-ping" />
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
            Creator-First Network
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Broadcast, scale, and earn without friction.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Join over 2.4 million streamers and digital storytellers on the world&apos;s most performant low-latency video network.
        </p>
      </div>

      {/* Live Stream Mock Mini-Dashboard */}
      <div className="relative rounded-xl bg-surface-container-low p-space-lg shadow-xl overflow-hidden">
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary-container/15 blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between pb-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container" />
            </span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              LIVE TRANSMISSION
            </span>
            <span className="rounded bg-surface-container-highest px-1.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
              4K 60FPS
            </span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-primary-container">
              visibility
            </span>
            <span className="font-semibold text-on-surface">18,492</span>
            <span>watching</span>
          </div>
        </div>

        {/* Video Snapshot & Realtime Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-space-md items-center">
          <div className="sm:col-span-3 relative rounded-lg overflow-hidden aspect-video bg-surface-container-highest group">
            <img
              className="w-full h-full object-cover"
              alt="Live stream preview"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7sxUzk9uh7z5ZruA_L-H7sn_Ih-H9haYC6ah-8jxzm20QYVz_bijpsjvXYyfLsrQC0SNY_aJ2GWh4pMR1SCLqhcQ5a06B1Eg88CZftwKuyyKlwn30G1CbN2po3sZx8KK54C3WNvK4tC9Z_slvs9Aw0BkZutQ0SY2LqSKHgGco9dBIpalHwvAU5PTuJCW7CFBj05Z5j-lUD-9SsFTA397MJiPaKH5fEg_M0-SCORXQ71NiXaI-6qs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex items-end p-space-sm">
              <span className="inline-flex items-center gap-1 rounded bg-primary-container px-1.5 py-0.5 text-on-primary-container font-label-sm text-label-sm font-bold">
                LIVE
              </span>
              <span className="ml-2 font-label-sm text-label-sm text-on-surface truncate">
                NeoCyber Championship 2025
              </span>
            </div>
          </div>

          {/* Mini Sparkline Viewer Metric */}
          <div className="sm:col-span-2 flex flex-col justify-between h-full bg-surface-container rounded-lg p-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Viewer Growth
              </span>
              <div className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                +42.8%
              </div>
            </div>
            <svg
              className="w-full h-10 mt-1 text-primary-container"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 100 35"
            >
              <path
                d="M0 30 Q 20 28, 35 15 T 70 18 T 100 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M0 30 Q 20 28, 35 15 T 70 18 T 100 4 L 100 35 L 0 35 Z"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
        </div>

        {/* Real-time chat reaction pill snippet */}
        <div className="mt-space-md flex items-center justify-between bg-surface-container-high/60 rounded-lg px-space-md py-space-xs">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="h-6 w-6 rounded-full bg-tertiary-container flex items-center justify-center font-label-sm text-on-tertiary-container font-bold shrink-0">
              K
            </div>
            <p className="font-body-sm text-body-sm text-on-surface truncate">
              <span className="text-tertiary font-semibold">kai_zenith:</span> that instant clip
              rendering is insane 🔥
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-semibold shrink-0">
            +$25.00 SuperChat
          </span>
        </div>
      </div>

      {/* Tier Highlights */}
      <div className="flex flex-col gap-space-md">
        <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
          <div className="h-10 w-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary-container text-[22px]">
              cloud_upload
            </span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Unlimited 4K Cloud Uploads
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
              Never worry about raw bitrates or compression degradation. Stream and store archival master files permanently.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
          <div className="h-10 w-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary-container text-[22px]">
              monetization_on
            </span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Day-1 Monetization & Super Chats
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
              No 1,000-subscriber waiting gate. Activate member passes, tipping rails, and custom brand merch right from broadcast one.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
          <div className="h-10 w-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary-container text-[22px]">
              speed
            </span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Sub-Second Ultra-Low Latency
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
              Proprietary edge-routed WebRTC architecture gives you genuine instantaneous interaction with your viewers.
            </p>
          </div>
        </div>
      </div>

      {/* Verified Creator Endorsement Card */}
      <div className="rounded-xl bg-surface-container p-space-lg shadow-md flex items-center gap-space-md">
        <div className="relative shrink-0">
          <img
            className="h-14 w-14 rounded-full object-cover"
            alt="Sora Vance Portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBarG6wuuaXybrS6CXpwAAQ0UzfHB0zS2PYrqT9OVlGiuQhXOAx7a4mFPxQXcERpJ1CYf1HqNqpJQhqQ_msn32ckTmYGe-YMx091mxT9Dp_p90omjBvqKi-Gsl0X04KWOBUhtGNGCWg2vL7bYaIxqc4IEIZfFmU9KobTsE38aezPJdpaQziUDfxoGSnnoyzna1njTCsbHxe8RkqaskuuEhma8cvaMoJi33UR8VpnhmSKnqlCO4391w"
          />
          <span
            className="material-symbols-outlined absolute -bottom-1 -right-1 text-primary-container text-[18px] bg-surface-container rounded-full"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
        </div>
        <div>
          <p className="font-body-md text-body-md text-on-surface italic">
            &quot;Streamify transformed how we broadcast to our 250k community. Audience retention increased 34% within the first month.&quot;
          </p>
          <div className="mt-space-xs font-label-md text-label-md text-on-surface font-semibold">
            Sora Vance <span className="text-on-surface-variant font-normal">(@sorastream) • Lead Creator Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
