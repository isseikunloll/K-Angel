import Image from "next/image"
import Link from "next/link"
import { Sparkles, Heart, Music, Gamepad2, Star, MessageCircle, Smile, Cloud, Zap, Cpu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay patterns */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 hearts-bg opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 stars-bg opacity-20 pointer-events-none"></div>

      {/* CRT effect */}
      <div className="crt-effect"></div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 glitch-overlay pointer-events-none z-10"></div>

      {/* Pixel art decorations */}
      <div className="absolute top-20 left-10 w-12 h-12 floating hidden md:block">
        <div className="w-full h-full pixel-image">
          <div className="w-12 h-12 bg-[#ff6ad5] rounded-full opacity-70"></div>
        </div>
      </div>

      <div className="absolute bottom-40 right-10 w-16 h-16 floating hidden md:block">
        <div className="w-full h-full pixel-image">
          <div className="w-16 h-16 bg-[#64d2ff] rounded-full opacity-70"></div>
        </div>
      </div>

      <main className="relative z-20 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 glitch-text">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-[#ff6ad5] rounded-full animate-pulse opacity-70"></div>
            <div className="absolute inset-2 bg-[#ffc8e6] rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-[#ff6ad5]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#ff6ad5] mb-2 tracking-wider drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
            K-ANGEL
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-[#6a4a8c] text-lg md:text-xl glitch-anim bg-white/50 px-4 py-1 rounded-sm inline-block">
              personal_space.exe <span className="blink">_</span>
            </p>
          </div>

          {/* Pixel art navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <div className="retro-window-dot bg-[#ff6ad5]"></div>
            <div className="retro-window-dot bg-[#64d2ff]"></div>
            <div className="retro-window-dot bg-[#c774e8]"></div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <Link
                  href="/mental-breakdown"
                  className="retro-window-dot bg-red-500 hover:bg-red-600 transition-colors secret-button"
                >
                  <span className="sr-only">Secret Page</span>
                </Link>
                <span className="text-white text-xs ml-2">about.exe</span>
              </div>
              <div className="p-4 space-y-4">
                <h2 className="text-xl text-[#ff6ad5] mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-[#ff6ad5]" /> ABOUT
                </h2>
                <div className="relative w-full h-64 mb-4 overflow-hidden border-2 border-[#ff6ad5]">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff6ad5]/20 to-[#c774e8]/20 animate-gradient"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Angel character with wings */}
                    <div className="relative w-48 h-48 floating">
                      {/* Left wing */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div className="pixel-wing-left w-16 h-32"></div>
                      </div>

                      {/* Character */}
                      <Image
                        src="/placeholder.svg?height=192&width=192"
                        alt="K-Angel"
                        width={192}
                        height={192}
                        className="pixel-image"
                      />

                      {/* Right wing */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                        <div className="pixel-wing-right w-16 h-32"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#6a4a8c] text-sm leading-relaxed">
                  Just a normal streamer trying to reach <span className="text-[#ff6ad5] font-bold">1 MILLION</span>{" "}
                  followers! Not mentally unstable at all! ヽ(✿ﾟ▽ﾟ)ノ
                </p>
                <div className="flex justify-between text-[#6a4a8c] text-xs">
                  <span>
                    Mental Health: <span className="text-[#ff6ad5]">■■■□□</span>
                  </span>
                  <span>
                    Stress Level: <span className="text-[#ff6ad5]">■■■■□</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <div className="retro-window-dot bg-white/50"></div>
                <span className="text-white text-xs ml-2">stats.exe</span>
              </div>
              <div className="p-4 space-y-3">
                <h2 className="text-xl text-[#ff6ad5] mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-[#ff6ad5]" /> STATS
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-[#ffc8e6]/50 p-2 rounded-sm">
                    <span className="text-[#6a4a8c]">Followers:</span>
                    <span className="text-[#ff6ad5] font-bold">154,872</span>
                  </div>
                  <div className="flex justify-between bg-[#ffc8e6]/50 p-2 rounded-sm">
                    <span className="text-[#6a4a8c]">Affection:</span>
                    <span className="text-[#ff6ad5] font-bold">♥♥♥♡♡</span>
                  </div>
                  <div className="flex justify-between bg-[#ffc8e6]/50 p-2 rounded-sm">
                    <span className="text-[#6a4a8c]">Stress:</span>
                    <span className="text-[#ff6ad5] font-bold">■■■■□</span>
                  </div>
                  <div className="flex justify-between bg-[#ffc8e6]/50 p-2 rounded-sm">
                    <span className="text-[#6a4a8c]">Darkness:</span>
                    <span className="text-[#ff6ad5] font-bold">■■■□□</span>
                  </div>
                </div>
              </div>
            </div>

            {/* P-chan section */}
            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <div className="retro-window-dot bg-white/50"></div>
                <span className="text-white text-xs ml-2">p-chan.exe</span>
              </div>
              <div className="p-4 space-y-3">
                <h2 className="text-xl text-[#64d2ff] mb-4 flex items-center">
                  <Smile className="w-5 h-5 mr-2 text-[#64d2ff]" /> P-CHAN
                </h2>
                <div className="relative w-full h-32 mb-4 overflow-hidden border-2 border-[#64d2ff] flex items-center justify-center">
                  <div className="w-24 h-24 relative floating">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="P-chan"
                      width={96}
                      height={96}
                      className="pixel-image"
                    />
                  </div>
                </div>
                <p className="text-[#6a4a8c] text-sm leading-relaxed">
                  My adorable cat P-chan! He's always there for me and definitely not just a figment of my imagination!
                  (=^･ω･^=)
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <div className="retro-window-dot bg-white/50"></div>
                <span className="text-white text-xs ml-2">hobbies.exe</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-[#ff6ad5] mb-4 flex items-center">
                  <Gamepad2 className="w-5 h-5 mr-2 text-[#ff6ad5]" /> HOBBIES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                    <h3 className="text-[#ff6ad5] font-bold mb-2 flex items-center">
                      <Gamepad2 className="w-4 h-4 mr-2" /> Gaming
                    </h3>
                    <p className="text-[#6a4a8c] text-sm">
                      Mostly horror and psychological games that don't affect my mental state at all!
                    </p>
                  </div>
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                    <h3 className="text-[#ff6ad5] font-bold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" /> Streaming
                    </h3>
                    <p className="text-[#6a4a8c] text-sm">
                      Connecting with my lovely followers who definitely care about me as a person!
                    </p>
                  </div>
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                    <h3 className="text-[#ff6ad5] font-bold mb-2 flex items-center">
                      <Cloud className="w-4 h-4 mr-2" /> Internet Browsing
                    </h3>
                    <p className="text-[#6a4a8c] text-sm">
                      Finding interesting content and definitely not doomscrolling for hours!
                    </p>
                  </div>
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                    <h3 className="text-[#ff6ad5] font-bold mb-2 flex items-center">
                      <Cpu className="w-4 h-4 mr-2" /> Pixel Art
                    </h3>
                    <p className="text-[#6a4a8c] text-sm">
                      Creating cute emotes and definitely not disturbing imagery!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <div className="retro-window-dot bg-white/50"></div>
                <span className="text-white text-xs ml-2">interests.exe</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-[#ff6ad5] mb-4 flex items-center">
                  <Music className="w-5 h-5 mr-2 text-[#ff6ad5]" /> INTERESTS
                </h2>
                <div className="space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden border-2 border-[#ff6ad5]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6ad5]/20 to-[#64d2ff]/20 animate-gradient"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="w-16 h-16 bg-[#ff6ad5]/50 rounded-sm pixel-shadow floating"></div>
                        <div
                          className="w-16 h-16 bg-[#64d2ff]/50 rounded-sm pixel-shadow floating"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="w-16 h-16 bg-[#c774e8]/50 rounded-sm pixel-shadow floating"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                      <h3 className="text-[#ff6ad5] font-bold mb-2">Cute Things</h3>
                      <p className="text-[#6a4a8c] text-sm">
                        Especially P-chan, my adorable cat who is always there for me!
                      </p>
                    </div>
                    <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                      <h3 className="text-[#ff6ad5] font-bold mb-2">Internet Fame</h3>
                      <p className="text-[#6a4a8c] text-sm">
                        Becoming the most popular streamer and definitely not for validation!
                      </p>
                    </div>
                    <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                      <h3 className="text-[#ff6ad5] font-bold mb-2">Cyberpunk Aesthetic</h3>
                      <p className="text-[#6a4a8c] text-sm">
                        Neon lights, digital glitches, and the beauty of technology!
                      </p>
                    </div>
                    <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                      <h3 className="text-[#ff6ad5] font-bold mb-2">Psychology</h3>
                      <p className="text-[#6a4a8c] text-sm">
                        Understanding the human mind and definitely not self-diagnosing!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="retro-window bg-white/80 pixel-shadow">
              <div className="retro-window-header">
                <div className="retro-window-dot bg-white"></div>
                <div className="retro-window-dot bg-white/70"></div>
                <div className="retro-window-dot bg-white/50"></div>
                <span className="text-white text-xs ml-2">messages.exe</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-[#ff6ad5] mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-[#ff6ad5]" /> MESSAGES
                </h2>
                <div className="space-y-3">
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#64d2ff] pixel-shadow">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#64d2ff] font-bold">P-chan</span>
                      <span className="text-[#6a4a8c] text-xs">Today</span>
                    </div>
                    <p className="text-[#6a4a8c] text-sm">Meow~ (Don't forget to take your meds!)</p>
                  </div>
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#c774e8] pixel-shadow">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#c774e8] font-bold">Producer-kun</span>
                      <span className="text-[#6a4a8c] text-xs">Yesterday</span>
                    </div>
                    <p className="text-[#6a4a8c] text-sm">Remember to rest between streams. Your health comes first.</p>
                  </div>
                  <div className="bg-[#ffc8e6]/50 p-3 rounded-sm border-2 border-[#ff6ad5] pixel-shadow">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#ff6ad5] font-bold">Anonymous</span>
                      <span className="text-[#6a4a8c] text-xs">3 days ago</span>
                    </div>
                    <p className="text-[#6a4a8c] text-sm">Your last stream was amazing! Can't wait for the next one!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t-2 border-[#ff6ad5] mt-12 py-4 text-center text-[#6a4a8c] text-xs bg-white/50">
        <p>© {new Date().getFullYear()} K-Angel | Not affiliated with NEEDY STREAMER OVERLOAD</p>
        <p className="mt-1 text-[#ff6ad5]">Mental stability not guaranteed ♥</p>
        <div className="flex justify-center mt-2 space-x-2">
          <div className="w-4 h-4 bg-[#ff6ad5] rounded-sm"></div>
          <div className="w-4 h-4 bg-[#64d2ff] rounded-sm"></div>
          <div className="w-4 h-4 bg-[#c774e8] rounded-sm"></div>
        </div>
      </footer>
    </div>
  )
}

