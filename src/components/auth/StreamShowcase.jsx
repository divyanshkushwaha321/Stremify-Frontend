export default function StreamShowcase() {
  return (
    <section className="hidden lg:flex lg:col-span-7 flex-col justify-between h-full py-space-md pr-space-lg select-none">
      {/* Top Feature Cluster */}
      <div className="flex flex-col gap-space-lg">
        <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface shadow-md">
          <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Stream Engine v4.2 Live
          </span>
        </div>

        <div className="flex flex-col gap-space-sm">
          <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight leading-none">
            Stream Without <br />
            <span className="bg-gradient-to-r from-on-surface via-primary to-primary-container bg-clip-text text-transparent">
              Boundaries.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            The premier ecosystem for next-generation video creators, low-latency live interactive broadcasting, and ultra-fidelity 4K 60FPS playback.
          </p>
        </div>

        {/* Platform Metric Badges Bento */}
        <div className="grid grid-cols-3 gap-space-md pt-space-xs">
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Latency
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              &lt; 380ms
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Real-time sync
            </span>
          </div>

          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Creators
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              500K+
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Active channels
            </span>
          </div>

          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-[20px]">hd</span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Fidelity
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              4K 60FPS
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              HDR Native codec
            </span>
          </div>
        </div>
      </div>

      {/* Center Showcase Card with Layered Media & Player Badge */}
      <div className="relative my-space-lg">
        <div className="relative rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl">
          {/* Background Image */}
          <div className="relative h-64 w-full bg-surface-container-high overflow-hidden">
            <img
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              alt="Cinematic production studio with neon crimson and deep obsidian ambient backlighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLk8T0Ojk-jxVkTmjwZ0mWImflD-QELMCk64VRNQqi64o6NZZLx4F3I8joUjTaLGf7bnoYDitPerfafWve1yYCbm6sjKwKfqXazxhRaPhQpl7SJlgV7rPU5eMEFUorkU8jO3LhXuwwo34FnvQumxc7VnKec3L4vVGK1yeXklW2QLIBGxBIwAINezk7y0k_0786xwqLiatXXUhefTUFAMd_6h9-nSAfhC49UqO0dWEB5XutXdWtmU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />

            {/* Live Floating Pill */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-label-sm text-label-sm tracking-wider font-bold">
                LIVE NOW
              </span>
            </div>

            {/* Stream Quality Pill */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">equalizer</span>
              <span>4K ULTRA HD</span>
            </div>
          </div>

          {/* Card Bottom Bar Info */}
          <div className="p-space-lg flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shadow-md shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Hyperion Studios Avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQKLvG-U2YOTpdrDkNfqSh73IbPDoQtZZm70Ps0f5x5AasBB38iM17_Eg05tLRPHQJyfhQDwp1QsYJC2aIgiaQl2C0JFkIoamUw4JP04cF2OK5cwyxU-QtIeT-FGuZStetvLQLLuEf178VSNPWXc2utIjl6Vd31ktBzIwr9XL_DLvHsg4bCM5_osCpgveLS8g7EOXY57JFk3Aj9vbdX1NhkoLQ3qlC4nwh3AVClI37nKwqknS63c"
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary-container rounded-full shadow" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Hyperion Studios
                  </span>
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Global Grand Finals 2025 · 142.8K Watching
                </span>
              </div>
            </div>

            {/* Inline Audio Wave Visualizer SVG */}
            <div className="hidden xl:flex items-center gap-1 px-space-md py-space-xs rounded-lg bg-surface-container-high">
              <svg className="w-16 h-5 text-primary" fill="currentColor" viewBox="0 0 64 20">
                <rect className="animate-pulse" height="4" rx="1.5" width="3" x="0" y="8" />
                <rect height="14" rx="1.5" width="3" x="6" y="3" />
                <rect height="18" rx="1.5" width="3" x="12" y="1" />
                <rect height="8" rx="1.5" width="3" x="18" y="6" />
                <rect height="16" rx="1.5" width="3" x="24" y="2" />
                <rect height="10" rx="1.5" width="3" x="30" y="5" />
                <rect height="20" rx="1.5" width="3" x="36" y="0" />
                <rect height="12" rx="1.5" width="3" x="42" y="4" />
                <rect height="6" rx="1.5" width="3" x="48" y="7" />
                <rect height="16" rx="1.5" width="3" x="54" y="2" />
                <rect height="4" rx="1.5" width="3" x="60" y="8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Avatar Social Proof Stack */}
      <div className="flex items-center justify-between pt-space-xs">
        <div className="flex items-center gap-space-md">
          <div className="flex -space-x-3 overflow-hidden p-1">
            <div className="inline-block h-9 w-9 rounded-full ring-2 ring-surface bg-surface-container-high overflow-hidden shadow">
              <img
                className="h-full w-full object-cover"
                alt="Creator avatar 1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUJ3NuIaGHshZNxp4Tksog2mq7_wsL7yNKJVTZ74PTC6k1eruUq6cyYBF-cEgRMxVN-4qGIHsisbkuPsDvbxHuh1A3WqPVx2MneTTKhflWUJwTl78OwNW8JfIwHGn4jG7YuihvQBKIkcMARNUa6VvkOLUHNmO7OSWudZVKQU9Q6R5lsxdRNqRPNH402TMrpFtb9hz6EqirX3or6qB9_6RKnwhUJ8QTquYqUY-uDyrZDPxvSbAFtQs"
              />
            </div>
            <div className="inline-block h-9 w-9 rounded-full ring-2 ring-surface bg-surface-container-high overflow-hidden shadow">
              <img
                className="h-full w-full object-cover"
                alt="Creator avatar 2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5kFYFFMxVzFHMgB1hvAYXJ3FV-aI9NArb0vJ4X3rTq7OQSKem4EFn5QRbtw1SdTx-BeRjg6EPhcor9lGreqN3XoJHfpXu2UVu9jqddUi9X8gWy4IyyAn5KvfMFM0DSslF4mKufEZG5PbeW_r6x99YKBkXMqeBMgz7dCW8QFUTG6W-K3BZgltCO3PyYkwK5wtov_Qt40sGNslJyRcI6rBjD8rox1buiygT9Wi7EPV81lPRKeLiGhI"
              />
            </div>
            <div className="inline-block h-9 w-9 rounded-full ring-2 ring-surface bg-surface-container-high overflow-hidden shadow">
              <img
                className="h-full w-full object-cover"
                alt="Creator avatar 3"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQbkAGejZvHXqeMQsbo-IEAz0sEjk3S-SvKqdLA35AlEZZh6nbTid7FhyMoCXiMKN_9w4Dr3RemftA_-4TA6V8lw79pkbYbOXrSZg8ryccCyRlXL1Cx5h-1P9oSChnoZn2fYACAjIk9IUrhFhRkF52z4OMFSYcyhxoxKfeFc76i1guvOSry-tLYib1OgN6J6tPFYqh4VVRRTJAQQPhlLRW3Al56diivxGexntkbypDiX6IFQooA54"
              />
            </div>
            <div className="inline-flex h-9 w-9 rounded-full ring-2 ring-surface bg-surface-container-highest items-center justify-center text-on-surface font-label-sm text-label-sm font-bold shadow">
              +10M
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface">
              Trusted by world-class broadcasters
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Over 2.4 Billion watch hours logged monthly
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
          <span
            className="material-symbols-outlined text-[18px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span>4.9 / 5 App Store & Web</span>
        </div>
      </div>
    </section>
  );
}
