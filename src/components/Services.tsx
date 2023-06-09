import PenTool from "../assets/pen-tool.svg";
import network from "../assets/rede.svg";
import marketing from "../assets/growth.svg";
import wrench from "../assets/Repairing.svg";
import dev from "../assets/programming.svg";
import computer from "../assets/workstation.svg";

const Services = () => {
  return (
    <div
      className="w-full py-16"
      id="services"
    >
      <div className="lg:max-w-5xl md:max-w-3xl min-[680px]:max-w-2xl max-w-xl mx-auto w-full">
        <div className="mx-auto w-fit flex items-center gap-2 mb-4">
          <span className="bg-sky-800 w-20 h-[2px] inline-block" />
          <span className="text-center text-sky-800 font-sans font-bold">Serviços</span>
          <span className="bg-sky-800 w-20 h-[2px] inline-block" />
        </div>
        <h1 className="font-title text-center md:text-5xl text-4xl font-black pb-12">Temos as melhores <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">Soluções</span> para o seu negocio</h1>

        <div className="w-full flex flex-wrap min-[680px]:justify-between justify-center items-center">
          
          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Marketing digital</h2>
            <p>Colocámos a sua empresa bem posicionada no maior mercado do mundo!</p>
            <img src={marketing} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>

          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Design Gráfico</h2>
            <p>Damos uma identidade e autenticidade ao seu negócio para o fácil reconhecimento!</p>
            <img src={PenTool} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>
 
          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Desenvolvimento de Sistemas</h2>
            <p>Digitalizamos soluções e metodos de gestão, adaptando-se a sua necessidade!</p>
            <img src={dev} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>
 
          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Centro de Reparação</h2>
            <p>Fazemos a reparação de qualquer aparelho electrónico e com a garantia!</p>
            <img src={wrench} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>
 
          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Instalação de Redes</h2>
            <p>Conectamos o seu office de ponta à ponta de uma maneira rápida e segura!</p>
            <img src={network} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>
 
          <div className="shadow-xl mb-8 p-4 w-80 text-center relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-700">
            <h2 className="font-bold text-sky-500 pb-2 text-lg">Artigos Informáticos</h2>
            <p>Contemos todo tipo de produto informático, de perifericos à softwares!</p>
            <img src={computer} alt="Design services" className="w-28 absolute -bottom-[20%] right-0 opacity-25 -z-10"/>
          </div>
 
        </div>

      </div>
    </div>
  )
}

export { Services };