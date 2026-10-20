import Link from "next/link";

const LIVE_CHANNELS = [
  {
    id: 1,
    title: "Radiant Ranked Grind to Global Elite",
    channel: "ValkyrieStream",
    viewers: "42.8K",
    tags: ["Tactical FPS", "Ranked"],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsuHEfllP2Ie0oPr-QVZk1_kbVqrRkoUrHHkQpX_uuphYuTbOWePk_kCU9AqGVwzSFXCaws64KGJBgKmQ-xL2LYk9PfNfUabIUdWmYwSnOaqyyoB3evX_TJ5Zt8pGN8yiMEqizDP_b6Kc4_-mWxLa2-ZgE1gYesP_gyGjFxuhIxejWIM73ciYKYoJKgjhM5FZUEEBIIJu40Pcz7RDOJYUxM8_UEAv4zZL-hmA5k2zv_lo0nPhhL68",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN35ZjNW_iMVS1ikirprt2yQiYACXIvtd13dAtukjyjrWN9oydTRn83XoOJq8q54tDQqWlOpNxgMAv25u7C8F4cl7_Zc3Wkc-ajsxdqY65CEICxaduYJq5T3G0MywUsn1_8YtBDBudb94O6EcjBNiteOH6_SoVboz4HcwT87rnkHKa2hCyfoUpMcvXh0BFo6yf-lrJ1-OSCajFZsAn27pzPdMmciqln0K1IaP-9mVxMVFqw35tHXQ",
  },
  {
    id: 2,
    title: "Exploring Uncharted Alien Biomes",
    channel: "NomadExplorer",
    viewers: "19.3K",
    tags: ["Survival", "Exploration"],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABsBvJz3s7pwg3XbAoCmv742RckcYSeUwFhjm3OJndfw5wgxVvby7ZESLKsaiqeOaU_cHby2NSMQOTwXR-ew79mL6SSURsffQ0BR-5QydTLn-1pjivCgjlurv3KjbsgWDnaip26W7UqVMiwrUgltkNQNi253MZrDQ-CZ1MEvIXdActgYXckD9WFLLB9onFPYAwjXyrpWMSYUnDjLsFH3TcDmu1YzieJWE_jC6-ngqbpxkUSuG0t_A",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm77RJUcf_2f670UbriVR6AnFWmu_uQQzy_oMeOPDq6ujCVl9b6_T5i7ftTqytzHb-ZSpibMnNGx9zKnsXDVMewSorK3dwcrCjpCB8Pl1Qyyt2HFotWgmmg87GJsucqZOBVKnM6Pd7t4RqhFDkrM06LOdGXSIaB0J4e7PmZbBGMX80IBDYWIVIEVeXscXVBFhN6vdbn63A__yluaOztF9fHpRCes4h2aktKzWJ1YMmWX-Z6AOrV2c",
  },
  {
    id: 3,
    title: "Producing Lo-Fi Beats from Scratch",
    channel: "BeatMasterX",
    viewers: "12.5K",
    tags: ["Music", "Production"],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UszcUgezSiJc3JgR5K5oWXErJ6u-nF3IFNFRBQdhtKwiBvbkjKF6aQkUQNhLMuApHgNtPnSosQypSdin0Vh6ktOxV8J-_HY15ne48VkhHQ6CWmdBXF88mqp8Exzrag037SX5PaB5j87YGqAg9f80s6PNnFzZBJj5t3i4690eGt_7852WvTF0CPib5vX3dyzziO5yEjsN5W_3bEcNuIVZJmAt2Y965cgOC-7GhGgbi2djsxeeT_Y",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxIgonZz3HZOZNI6n8vM_3G5n6fWloRqGEHaNVrkwNza6QRNOpm5AcRYJdBdf7VVRJNfwCKu3JN4v8btzbmZPcnZi2beosBOyEujpm0yrQb2XDmz_wvP9X3XaM2KVGQiqEJ0huz-SgD40ZQ5aCYe1_2cD_zZ7APpg8eWbgi1JHmb8y7xFO6aE5gJP98MhkT0BnoCx4Vewi8vqSNPEeTLRuPk3Iagj7BSK0dThVW0ba-e8xgHerYz8",
  },
  {
    id: 4,
    title: "Building Real-time LLM Apps in Rust",
    channel: "CodeArchitect",
    viewers: "8.9K",
    tags: ["Tech", "Coding"],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYoObbHfxME7NRkDk0zBmvxGwMPlxrGBA_jpUan-Tzz0Qqg5gVjYP_rMjsOhUj5SZiT0CU433C5jKn8o2fm3QW18lraj6Lhnpgd7CmXiTu18GcaewPutmzsnX02caGHLrIbAoPmDl7Lm7NgFopRN5r6Z_ej9JNk7WsnADXjaQ1emiUmGzzrYlU0YROLwoH7rfXACjTesfGV2P3Z8sVldvfSqlUkoVMlmU7ArgfXS0k6uI2RE6nxJ4",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdvafORGOaQjYLC4S7w3bIiYme6m-hIgXKxpCMjPg_vJZlUn2wTUIXYTRO74_VSHg0H41nbLeb3Yl4ea0w3qEvVOUTC-PcQxH1L-rtLZCcqg3OmPUveuGay-OdhU8D6R_eRua77dtsGRHxNDpekPZ8W2Uj8i_MduTAnJ0VxLsr9G458aDOQ0Huot-l3Pd0dR2jHN7Jdmohw9TBVnlWp-GxPLhPROmfvCtORG8JkE53iFk2pIWmnf0",
  },
];

export default function LiveChannels() {
  return (
    <section className="flex flex-col gap-space-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-3 h-6 bg-primary rounded-full" />
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Live Channels &amp; Broadcasts
          </h2>
        </div>
        <Link
          className="text-primary font-label-lg text-label-lg hover:underline flex items-center gap-1"
          href="#"
        >
          View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {LIVE_CHANNELS.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            {/* Thumbnail */}
            <div
              className="relative aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url('${item.thumbnail}')` }}
            >
              <div className="absolute top-3 left-3 bg-primary text-on-primary px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                {item.viewers}
              </div>
            </div>

            {/* Info */}
            <div className="p-space-md flex gap-space-md">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border border-primary/30"
                style={{ backgroundImage: `url('${item.avatar}')` }}
              />
              <div className="flex flex-col min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">
                  {item.channel}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[11px] rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
