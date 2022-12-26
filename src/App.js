import { Navbar, Hero, History, Placeses, Footer, } from "./components/index"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="bg-primary">
        <div>
          <Navbar />

        </div>
        <div>

          <Hero />
        </div>
        <div>

          <History />
        </div>
        <div>

          <Placeses />
        </div>
        <div>

          <Footer />
        </div>
      </div>
    </>
  )
}