import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500 selection:text-white font-sans">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative max-w-6xl mx-auto px-6 py-24 z-10">
        {/* Hero Section */}
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400">
              BlayBlay
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            จุดนัดพบของความอร่อย ความสนุก และเทคโนโลยี
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: BrewLean */}
          <Link
            href="/brewlean"
            className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-8 h-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 3.75H9m3 14.25v-10.5m0 0H9m3 0h3M3 12h18m-9 9a9 9 0 01-9-9v-3h18v3a9 9 0 01-9 9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">BrewLean</h3>
            <p className="text-neutral-400 leading-relaxed">
              ร้านกาแฟสายคลีน "Lean & Brew" ดื่มด่ำกับรสชาติกาแฟคัดพิเศษ
              ในบรรยากาศที่ใช่
            </p>
          </Link>

          {/* Card 2: BlayBlay Boardgame */}
          {/* Note: ปรับ URL href เป็นพาร์ทที่คุณต้องการทำ reverse proxy ต่อไปได้เลย */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 hover:border-rose-500/50 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-rose-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-8 h-8 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">BlayBlay</h3>
            <p className="text-neutral-400 leading-relaxed">
              Board Game Club พื้นที่สำหรับคนรักบอร์ดเกม ปาร์ตี้ สนุกสนาน
              พร้อมตี้เสมอ
            </p>
          </Link>

          {/* Card 3: PlayLab */}
          <Link
            href="/playlab"
            className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 hover:border-cyan-500/50 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm md:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-cyan-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-8 h-8 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">PlayLab</h3>
            <p className="text-neutral-400 leading-relaxed">
              ศูนย์เรียนรู้สาย Maker: อบรม Home Server (Raspberry Pi), IoT, AI
              และ Robot
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
