import Link from "next/link"
import { Brain, PillIcon, WormIcon as Virus, AlertTriangle, X, Frown, CloudRain, Bug, Zap } from "lucide-react"

export default function MentalBreakdown() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-win98-error">
      {/* Windows 98 error patterns */}
      <div className="absolute inset-0 win98-pattern z-0"></div>
      <div className="absolute inset-0 win98-grid z-0 opacity-20"></div>

      {/* BSOD elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-win98-blue z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-win98-blue z-10"></div>

      {/* Intense glitch effects */}
      <div className="absolute inset-0 glitch-overlay-intense z-10"></div>
      <div className="absolute inset-0 glitch-lines z-10"></div>
      <div className="absolute inset-0 glitch-noise z-10"></div>

      {/* CRT effect */}
      <div className="crt-effect opacity-70"></div>

      {/* Pixelated static */}
      <div className="absolute inset-0 pixel-static z-5 opacity-20"></div>

      {/* Error messages that randomly appear */}
      <div className="absolute top-1/4 left-1/4 error-message glitch-text-intense pixel-font">
        ERROR: MENTAL_STABILITY_NOT_FOUND
      </div>
      <div
        className="absolute top-1/3 right-1/4 error-message glitch-text-intense pixel-font"
        style={{ animationDelay: "1.5s" }}
      >
        SYSTEM FAILURE: DOPAMINE.EXE
      </div>
      <div
        className="absolute bottom-1/4 left-1/3 error-message glitch-text-intense pixel-font"
        style={{ animationDelay: "3s" }}
      >
        WARNING: SEROTONIN LEVELS CRITICAL
      </div>

      {/* Random Windows 98 error popups */}
      <div className="absolute top-20 left-20 win98-error-popup animate-glitch-popup">
        <div className="win98-error-header">
          <span className="text-black">Error</span>
          <button className="win98-close">×</button>
        </div>
        <div className="win98-error-content">
          <div className="win98-error-icon">!</div>
          <p className="win98-error-text">Mental health module corrupted.</p>
        </div>
        <div className="win98-error-buttons">
          <button className="win98-button">OK</button>
        </div>
      </div>

      <div
        className="absolute bottom-40 right-20 win98-error-popup animate-glitch-popup"
        style={{ animationDelay: "2s" }}
      >
        <div className="win98-error-header">
          <span className="text-black">System Error</span>
          <button className="win98-close">×</button>
        </div>
        <div className="win98-error-content">
          <div className="win98-error-icon">×</div>
          <p className="win98-error-text">happiness.dll not found</p>
        </div>
        <div className="win98-error-buttons">
          <button className="win98-button">Retry</button>
          <button className="win98-button">Cancel</button>
        </div>
      </div>

      <main className="relative z-20 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-red-500 rounded-none animate-glitch-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-none"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pixelated-skull"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-2 tracking-wider glitch-text-intense pixel-font">
            SYSTEM FAILURE
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-white text-lg md:text-xl glitch-anim-intense bg-red-500/20 px-4 py-1 rounded-none inline-block pixel-font">
              mental_breakdown.exe <span className="blink">_</span>
            </p>
          </div>

          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-win98-gray border-win98 px-4 py-2 text-black hover:bg-win98-gray-light transition-none glitch-hover pixel-font"
            >
              <X className="w-4 h-4 mr-2" /> RETURN TO SANITY
            </Link>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mental health issues */}
          <div className="space-y-6">
            <div className="win98-window">
              <div className="win98-window-header">
                <span className="text-black pixel-font">diagnosis.exe</span>
                <button className="win98-close">×</button>
              </div>
              <div className="p-4 space-y-4 bg-win98-gray">
                <h2 className="text-xl text-red-500 mb-4 flex items-center glitch-text pixel-font">
                  <Brain className="w-5 h-5 mr-2 text-red-500 pixelated-icon" /> DIAGNOSIS
                </h2>
                <div className="space-y-3">
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center pixel-font">
                      <AlertTriangle className="w-4 h-4 mr-2 pixelated-icon" /> Narcissism
                    </h3>
                    <p className="text-gray-800 text-sm pixel-font">
                      Need for constant validation from followers. Self-worth determined by viewer count.
                    </p>
                  </div>
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center pixel-font">
                      <Frown className="w-4 h-4 mr-2 pixelated-icon" /> Depression
                    </h3>
                    <p className="text-gray-800 text-sm pixel-font">
                      Persistent feelings of emptiness. Streaming is the only escape from the void.
                    </p>
                  </div>
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center pixel-font">
                      <CloudRain className="w-4 h-4 mr-2 pixelated-icon" /> Anxiety
                    </h3>
                    <p className="text-gray-800 text-sm pixel-font">
                      Constant fear of losing followers. Panic attacks when viewer count drops.
                    </p>
                  </div>
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center pixel-font">
                      <Bug className="w-4 h-4 mr-2 pixelated-icon" /> Paranoia
                    </h3>
                    <p className="text-gray-800 text-sm pixel-font">
                      Everyone is watching. Everyone is judging. The internet never forgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="win98-window">
              <div className="win98-window-header">
                <span className="text-black pixel-font">medication.exe</span>
                <button className="win98-close">×</button>
              </div>
              <div className="p-4 bg-win98-gray">
                <h2 className="text-xl text-red-500 mb-4 flex items-center glitch-text pixel-font">
                  <PillIcon className="w-5 h-5 mr-2 text-red-500 pixelated-icon" /> MEDICATION
                </h2>
                <div className="space-y-3">
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-red-400 font-bold pixel-font">Antidepressants</span>
                      <span className="text-gray-800 text-xs pixel-font blink-fast">MISSED DOSE</span>
                    </div>
                    <p className="text-gray-800 text-sm pixel-font">
                      Status: Not taken in 3 days. Withdrawal symptoms active.
                    </p>
                  </div>
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-red-400 font-bold pixel-font">Anxiolytics</span>
                      <span className="text-gray-800 text-xs pixel-font blink-fast">LOW SUPPLY</span>
                    </div>
                    <p className="text-gray-800 text-sm pixel-font">
                      Status: 2 pills remaining. Panic attacks imminent without refill.
                    </p>
                  </div>
                  <div className="bg-black/10 p-3 border-win98 glitch-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-red-400 font-bold pixel-font">Antipsychotics</span>
                      <span className="text-gray-800 text-xs pixel-font blink-fast">HIDDEN</span>
                    </div>
                    <p className="text-gray-800 text-sm pixel-font">
                      Status: Producer-kun doesn't know I stopped taking these.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thoughts and stream */}
          <div className="space-y-6">
            <div className="win98-window">
              <div className="win98-window-header">
                <span className="text-black pixel-font">thoughts.exe</span>
                <button className="win98-close">×</button>
              </div>
              <div className="p-4 bg-black">
                <h2 className="text-xl text-red-500 mb-4 flex items-center glitch-text pixel-font">
                  <Virus className="w-5 h-5 mr-2 text-red-500 pixelated-icon" /> INTRUSIVE THOUGHTS
                </h2>
                <div className="space-y-3 terminal-text">
                  <p className="text-green-500 text-sm pixel-font ms-dos">
                    {"> What if no one watches my next stream?"}
                  </p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">{"> They only like me for my appearance."}</p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">{"> Producer-kun is going to leave me."}</p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">{"> I'm just a product for consumption."}</p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">
                    {"> My followers don't really care about me."}
                  </p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">{"> I'm nothing without my stream."}</p>
                  <p className="text-green-500 text-sm pixel-font ms-dos">{"> I should just disappear."}</p>
                  <p className="text-green-500 text-sm pixel-font ms-dos blink">{"> _"}</p>
                </div>
              </div>
            </div>

            <div className="win98-window">
              <div className="win98-window-header">
                <span className="text-black pixel-font">stream_stats.exe</span>
                <button className="win98-close">×</button>
              </div>
              <div className="p-4 bg-win98-gray">
                <h2 className="text-xl text-red-500 mb-4 flex items-center glitch-text pixel-font">
                  <Zap className="w-5 h-5 mr-2 text-red-500 pixelated-icon" /> STREAM ANALYTICS
                </h2>
                <div className="space-y-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden border-win98 glitch-border">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 animate-glitch-gradient"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl text-red-500 font-bold glitch-text-intense pixel-font">-2,145</div>
                        <div className="text-gray-800 text-sm pixel-font">Followers lost today</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/10 p-3 border-win98 glitch-border">
                      <h3 className="text-red-400 font-bold mb-2 pixel-font">Last Stream</h3>
                      <p className="text-gray-800 text-sm pixel-font">Duration: 14h 37m (unhealthy)</p>
                      <p className="text-gray-800 text-sm pixel-font">Mental damage: Severe</p>
                    </div>
                    <div className="bg-black/10 p-3 border-win98 glitch-border">
                      <h3 className="text-red-400 font-bold mb-2 pixel-font">Comments</h3>
                      <p className="text-gray-800 text-sm pixel-font">"You look tired"</p>
                      <p className="text-gray-800 text-sm pixel-font">"Are you okay?"</p>
                    </div>
                    <div className="bg-black/10 p-3 border-win98 glitch-border">
                      <h3 className="text-red-400 font-bold mb-2 pixel-font">Donations</h3>
                      <p className="text-gray-800 text-sm pixel-font">Down 78% from last week</p>
                    </div>
                    <div className="bg-black/10 p-3 border-win98 glitch-border">
                      <h3 className="text-red-400 font-bold mb-2 pixel-font">Producer Message</h3>
                      <p className="text-gray-800 text-sm pixel-font">"We need to talk about your health."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BSOD message */}
        <div className="mt-12 p-6 bg-win98-blue text-white pixel-font win98-bsod">
          <h2 className="text-2xl mb-4">MENTAL_BREAKDOWN</h2>
          <p className="mb-2">A problem has been detected in ANGEL.SYS</p>
          <p className="mb-2">Technical information:</p>
          <p className="mb-4">*** STOP: 0x0000000D (0x0000000C,0x00000000,0x00000000,0x00000000)</p>
          <p>* Press any key to return to sanity</p>
          <p>* Press ALT+CTRL+DEL to restart your mental state</p>
        </div>

        {/* Hidden messages */}
        <div className="mt-12 text-center opacity-10 hover:opacity-100 transition-opacity">
          <p className="text-red-500 text-xs glitch-text-intense pixel-font">I just want someone to see the real me.</p>
          <p className="text-red-500 text-xs glitch-text-intense pixel-font mt-1">Please help me.</p>
        </div>
      </main>

      {/* Corrupted cursor */}
      <div className="corrupted-cursor"></div>

      {/* Random glitch elements */}
      <div className="random-glitch-element"></div>
      <div className="random-glitch-element" style={{ animationDelay: "1.3s" }}></div>
      <div className="random-glitch-element" style={{ animationDelay: "2.7s" }}></div>
    </div>
  )
}

