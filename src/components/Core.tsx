import Teamwork from "../assets/teamwork.svg";

const Core = () => {
  return (
    <div
      className="w-full bg-zinc-200/60 py-24"
      id="core"
    >
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-lg xs:max-w-sm max-w-xs mx-auto w-full">
        <div className="mx-auto w-fit flex items-center gap-2 mb-4">
          <span className="bg-sky-800 w-20 h-[2px] inline-block" />
          <span className="text-center text-sky-800 font-sans font-bold">Valores</span>
          <span className="bg-sky-800 w-20 h-[2px] inline-block" />
        </div>
        <h1 className="font-title text-center text-4xl font-black pb-12">Porquê <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">AnyTech Solutions?</span></h1>


        <div className="flex lg:justify-between flex-wrap justify-center gap-4 pb-12">
          <div className= "w-[350px] min-[470px]:w-[450px] h-48 border-2 border-zinc-400 rounded-2xl bg-white flex items-center p-4 gap-4 hover:scale-105 transition-all duration-700">
            <div className="relative flex-none">
              <img src={Teamwork} alt="Equipa profissional" className="w-20" />
            </div>
            
            <div className="flex-initial">
              <h4 className="font-bold text-sky-500">Equipe Profissional</h4>
              <span className="font-medium">Dispomos de uma equipe altamente treinada e profissional para suas necessidades!</span>
            </div>
          </div>


          <div className= "w-[350px] min-[470px]:w-[450px] h-48 border-2 border-zinc-400 rounded-2xl bg-white flex items-center p-4 gap-4 hover:scale-105 transition-all duration-700">
            <div className="relative flex-none">
              <img src={Teamwork} alt="Equipa profissional" className="w-20" />
            </div>
            
            <div className="flex-initial">
              <h4 className="font-bold text-sky-500">Inovação & criatividade</h4>
              <span className="font-medium">Unimos estes dois para trazer lhe as melhores soluções e autênticas!</span>
            </div>
          </div>
        </div>

        <h1 className="font-title text-center text-4xl font-black">A satisfação do <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-orange-500 bg-clip-text text-transparent">cliente</span> é o nosso <span className="text-sky-500">objectivo!</span></h1>

      </div>
    </div>
  )
}

export { Core };