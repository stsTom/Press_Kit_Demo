import CountdownTimer from "./components/countdownTimer"
import { Header } from "./components/Header/Header"
import { GamesSection } from "./components/GameCardGrid/GamesSection"
import { MediaSection } from "./components/Media/MediaSection"

function App() {
  return (
    <div>
      <Header />
      <section id="home" className="relative py-50 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/main_bg.jpg" 
          className="h-full w-full object-cover" 
          alt="background" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]" />
      </div>
      <div className="container relative z-10">
        <h2 className="text-4xl font-bold mb-30 text-center">It's just around the corner</h2>
        <CountdownTimer  targetDate="2026-09-10T12:00:00" />
      </div>
      </section>
      <section id="press" className="min-h-screen py-20 px-4 bg-slate-300 dark:bg-slate-600 justify-start">
        <MediaSection pressKitDownloadUrl="/assets/press/press_kit.zip"/>
      </section>
      <section id="games" className="relative text-white pb-30 pt-30 px-4 bg-slate-0 dark:bg-slate-600 justify-start">
        <div className="absolute inset-0 z-0">
        <img 
          src="/bg2.jpg" 
          className="h-full w-full object-cover" 
          alt="background" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]" />
        </div>
        <div className="container relative z-10">
          <GamesSection />
        </div>
      </section>
    </div>
  )
}

export default App