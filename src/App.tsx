import { AboutUs } from "./components/AboutUs"
import { CallToAction } from "./components/CallToAction"
import { Clients } from "./components/Clients"
import { Contacts } from "./components/Contacts"
import { Core } from "./components/Core"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Services } from "./components/Services"
import { Statistics } from "./components/Statistics"

function App() {

  return (
    <div className="overflow-x-hidden">
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
      <Footer />
    </div>
  )
}

export default App
