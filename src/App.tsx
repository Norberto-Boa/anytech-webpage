import { useEffect, useState } from "react"
import { AboutUs } from "./components/AboutUs"
import { CallToAction } from "./components/CallToAction"
import { Clients } from "./components/Clients"
import { Contacts } from "./components/Contacts"
import { Core } from "./components/Core"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Preloaders } from "./components/Preloaders"
import { Services } from "./components/Services"
import { Statistics } from "./components/Statistics"



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  },[])

  return (
    
    <div className="overflow-x-hidden">
      <div className={`fixed inset-0 min-w-full min-h-screen bg-white z-20 transition-all duration-1000 block ${loading ? "opacity-100" : `-top-full opacity-0 hidden`}`}>
        <Preloaders />
      </div>
      <Navbar />
      <div className="w-full">
        <Hero />
        <Clients />
        <Core />
        <AboutUs />
        <Statistics />
        <Services />
        <CallToAction />
        <Contacts />
      </div>
    </div>
  )
}

export default App
