import image from '../assets/Hero.png';
import illustration from '../assets/coding.png'
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center bg-gradient-to-b from-stone-300">

      <div className=" lg:max-w-5xl md:max-w-2xl sm:max-w-xl mx-auto flex items-center justify-between relative sm:flex-row flex-col gap-8 py-16">
        <div className="sm:w-4/5 max-sm:flex max-sm:flex-col max-sm:items-center">
          
          <span className="text-sky-500 font-bold text-lg flex items-center gap-2 max-sm:hidden"> <span className="inline-block w-12 h-[2px] bg-purple-600 animate-width " /> O seu parceiro em tecnólogia.</span>
          <h1 className="font-title font-black lg:text-7xl md:text-6xl sm:text-5xl text-4xl max-sm:text-center  mb-4">As Melhores <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">soluções </span>
            em <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">tecnólogia!</span>
          </h1>
          <span
            className="text-xl font-bold max-sm:text-center"
          >
            Fazemos <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent"><Typewriter
              words={['Design gráfico', 'Desenvolvimento', 'Marketing', 'Reparação', 'Redes de computadores', 'IT training', 'Controle de acesso', 'Sistemas de vigilância', 'Cerca eléctrica', 'Portões automáticos' ]}
              loop
              cursor
              cursorStyle="|"
              cursorBlinking
            />
            </span>
          </span>
        </div>
        
        <img src={illustration} alt="" className="hidden lg:block w-48 absolute -bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow"/>

        <div>
          <img src={image} alt="Working Lady" className="lg:w-[650px] md:w-[500px] sm:w-96 w-[480px]"/>
        </div>
      </div>
    </div>
  )
}

export { Hero };