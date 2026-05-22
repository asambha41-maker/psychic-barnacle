export default function CosmicOceanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block w-fit px-4 py-1 rounded-full bg-cyan-400/20 text-cyan-200 text-sm mb-4">
              Explore Nature 🌊
            </span>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              The Mystery of the Deep Ocean
            </h1>

            <p className="text-slate-200 leading-8 text-lg mb-6">
              The deep ocean is one of the least explored places on Earth. Hidden beneath kilometers of water are glowing creatures, underwater volcanoes, and ecosystems that survive without sunlight. Scientists continue to discover fascinating species and mysterious landscapes that challenge our understanding of life itself.
            </p>

            <p className="text-slate-300 leading-7 mb-8">
              From giant squids to bioluminescent fish, the ocean depths feel like another planet. Advanced submarines and underwater robots now allow researchers to study these dark regions and uncover secrets that remained hidden for centuries.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:scale-105">
                Learn More
              </button>

              <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-2xl transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>

          <div className="relative min-h-[400px] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 flex items-center justify-center overflow-hidden">
            <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center p-8">
              <div className="text-8xl mb-6 animate-bounce">🐋</div>
              <h2 className="text-3xl font-bold mb-4">Ocean Wonders</h2>
              <p className="text-white/90 leading-7 max-w-sm mx-auto">
                Dive into the unknown world beneath the waves and experience the beauty of Earth’s hidden underwater universe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
