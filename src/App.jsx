import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import VantaScene from './engine/VantaScene';
import Hero from './components/sections/Hero';
import Steps from './components/sections/Steps';
import Benefits from './components/sections/Benefits';
import Pricing from './components/sections/Pricing';
import Destinations from './components/sections/Destinations';
import Sponsors from './components/sections/Sponsors';


function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      <VantaScene />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-28 pb-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-40">
            <Hero />
            <Steps />
            <Benefits />
            
            <div className="py-12 border-y border-white/5">
                <Sponsors />
            </div>

            <Destinations />
            <Pricing />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;