import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-16 pt-24 pb-12 px-gutter md:px-margin">
      {/* Background Media with Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdD846hVRxRnvZlbr8Lw_3SXGg6QDYOPXoEYNqVLH8IX87DCs1fX7cTtB7lT3VgEdOa6ic756o7Avyu5MnxqGKtJRMXQpONS7uPQvkYAT6rFADZMOm1LhxSBA6-YIlXNknBC3Lww10qUmtFXTJz9FTQb_MPqkjpS8kIvPMhMjpiPuWgOPv43mBaA2rDHkvhlxVyJ0RKw7YogMl-L3EEXAwRowEQHTljI1rQ9bAcS7wYbi06spI5FQ')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-end md:items-center justify-between gap-space-2xl min-h-[480px]">
        {/* Left Headline & Main Info */}
        <div className="flex flex-col items-start max-w-2xl gap-space-md">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center gap-1.5 shadow-[0_0_16px_rgba(229,9,20,0.4)] animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LIVE NOW
            </span>
            <span className="px-space-sm py-1 bg-surface-container-high/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm rounded-full border border-white/10">
              4K 60FPS ULTRA
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">visibility</span>
              248.5K viewers
            </span>
          </div>

          <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight leading-none drop-shadow-lg">
            Cyberpunk 2077 World Series Grand Finals
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant line-clamp-2 max-w-xl">
            Witness the ultimate showdown as elite esports athletes battle through the neon-drenched
            streets of Night City for the $2,000,000 championship trophy.
          </p>

          <div className="flex items-center gap-space-md pt-space-xs">
            <div className="flex items-center gap-space-sm bg-surface-container-high/80 backdrop-blur-md p-2 pr-space-md rounded-full border border-white/10">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center border border-primary/40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDun2Cjzu_JV4M7BoaccpPzzCcw4foNbwWCwmry5EE6eYIOaI3nntjgqpFV1RechDA-kIR0aQuNNBjWm9Mjm8lLe01HLGoQMSUE5t7k-lXf72Shl-YfH7kg4zCZoEMFll4mN3Ai6ml-yKzXGUYNdpGZ9vjg_J9vUHEHk3rI0iIe6zUaWvs0oxDrim2p5WIRjk8gz6Kv4sFy4CsZ8ARSmPimTmPirF34xX9Z_KCLIX9RmwVfA35I3VY')",
                }}
              />
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface">Nexus Esports TV</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  1.4M subscribers
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-md pt-space-md">
            <Link
              className="px-space-xl py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center gap-space-sm shadow-[0_0_24px_rgba(229,9,20,0.5)] hover:bg-[#ff334b] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              Watch Now
            </Link>
            <button
              className="px-space-xl py-3 bg-surface-container-high/80 backdrop-blur-md text-on-surface font-label-lg text-label-lg rounded-lg border border-white/10 hover:bg-surface-container-highest transition-all flex items-center gap-space-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
              Subscribe
            </button>
          </div>
        </div>

        {/* Hero Visual Counterweight / Mini Stream Queue */}
        <div className="hidden xl:flex flex-col gap-space-md w-80 shrink-0">
          <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider flex items-center justify-between">
            <span>Up Next in Stream</span>
            <span className="text-primary">Auto-playing</span>
          </div>

          <div className="flex flex-col gap-space-sm">
            {/* Queue Item 1 */}
            <div className="group relative bg-surface-container-high/60 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:border-primary/40 transition-all cursor-pointer">
              <div className="flex items-center gap-space-md">
                <div
                  className="w-24 h-14 rounded-lg bg-cover bg-center shrink-0 relative"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAJ3I0yFji5A-7Obt_iGMuzqBJh1JpYAUb4t9Odhalfd5Xatxub_qyD20UC_jSrGLHynRvAOPpXCUoaXvKz-8HBVRAkxyU-AUSY0L9G9NRrpLuaLZO9g5S14DUw0PAntw3MSZTevkD50OGQ5NPokvN_nnaCZgEqGeTK57oIgWqAvLwhlChGS4425gImKhzsPgGZV01i0mmKb-zg2C6ITg9Sj54MNgE4n5CeTnsDYLhXQWbvmEtkbk')",
                  }}
                >
                  <span className="absolute bottom-1 right-1 px-1 bg-black/80 text-[10px] text-white rounded font-bold">
                    LIVE
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">
                    Synthwave Live Session #42
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    NeonPulse Audio
                  </span>
                  <span className="text-[11px] text-primary flex items-center gap-1 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                    18.2K watching
                  </span>
                </div>
              </div>
            </div>

            {/* Queue Item 2 */}
            <div className="group relative bg-surface-container-high/60 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:border-primary/40 transition-all cursor-pointer">
              <div className="flex items-center gap-space-md">
                <div
                  className="w-24 h-14 rounded-lg bg-cover bg-center shrink-0 relative"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9epa1Lp_pk1CE5YH6FwijVhFvN36-2e9Z2ZWHXg4EteIjGmNqoQebe56NzZtAFpVcbvfqNYtqE4-SelpvDTb0JKX1zQG377eu6Ow2OenjaXOiuMAxpvyAM3bd9-Kqai_2vZKKM1_Wq8VbaZM1el8rEwinSIGWL5yaI8ac6UF-ruFwT4F5IXh2fzCnd4JF2QioUNIBNgqViNV1WoNP0qw-hmw3ZkqE-osLMxu-5ewVG1DlaBNNKM8')",
                  }}
                >
                  <span className="absolute bottom-1 right-1 px-1 bg-black/80 text-[10px] text-white rounded font-bold">
                    LIVE
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">
                    Building an AI Engine from Scratch
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    DevCraft Live
                  </span>
                  <span className="text-[11px] text-primary flex items-center gap-1 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                    9.4K watching
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
