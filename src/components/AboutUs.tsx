import imagem from '../assets/s.jpg';
import { CheckFat } from "@phosphor-icons/react";

const AboutUs = () => {
  return (
    <div className="py-24 bg-white w-full px-auto">
      <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-xl xs:max-w-sm mx-auto px-auto flex justify-between gap-12 items-center lg:flex-row flex-col">
        <div className="lg:w-[48%] sm:max-w-xl xs:max-w-sm max-w-xs flex-none items-center mx-auto">
          <h2 className="font-bold text-sky-500 pb-2 max-md:text-center">Sobre nós</h2>
          <h1 className="font-black font-title md:text-5xl text-4xl pb-4 max-md:text-center">Fazemos a <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">tecnologia</span> trabalhar para si!</h1>
          <p className="text-zinc-600 font-medium pb-4">Somos uma empresa moçambicana que actua no ramo de tecnologia, procurando promover soluções digitais, práticas e acessiveis para os nossos clientes. Entregamos o diferincial nos nossos serviços por meio de dois pontos importantes:</p>
          <p className="flex gap-2 pb-2"><CheckFat className="text-sky-500 flex-none mt-1" weight="fill"/> <div className="text-zinc-500"><strong className="text-zinc-900">Autenticidade:</strong> Projectos adaptados aos nossos clientes!</div></p>
          <p className="flex gap-2 pb-8"><CheckFat className="text-sky-500 flex-none mt-1" weight="fill"/> <div className="text-zinc-500"><strong className="text-zinc-900">Comprometimento:</strong> Temos como meta, entregar sempre os projectos a dentro do prazo.</div></p>
          <div className="flex max-md:justify-center">
            <a href="#" className="py-3 px-5 bg-gradient-to-r mr-4 from-purple-800 via-purple-600 to-orange-500 rounded-lg font-bold font-title uppercase text-white transition-all duration-700 hover:opacity-90">Learn More</a>
            <a href="#" className="py-3 px-5 border-2 border-purple-600 bg-gradient-to-r bg-clip-text from-purple-800 via-purple-600 to-orange-500 rounded-lg font-bold font-title uppercase text-transparent transition-all duration-700 hover:opacity-90 items-center">Play Intro</a>
          </div>
        </div>

        <div className="sm:px-12 max-xs:max-w-xs md:px-4">
          <img src={imagem} alt="" className="w-full shadow-2xl object-cover"/>
        </div>
      </div>
    </div>
  )
}

export { AboutUs };