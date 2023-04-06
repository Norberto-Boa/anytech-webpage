import { EnvelopeSimple, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, TwitterLogo } from "@phosphor-icons/react";
import Logo from "../assets/AnyTech.png";

const Contacts = () => {
  return (
    <div
      className="w-full py-16"
      id=""
    >
      <div className="lg:max-w-5xl md:max-w-3xl max-w-md mx-auto w-full border-b border-sky-500">
        <div className="mx-auto w-fit flex items-center gap-2 mb-4">
            <span className="bg-sky-800 w-20 h-[2px] inline-block" />
            <span className="text-center text-sky-800 font-sans font-bold">Contactos</span>
            <span className="bg-sky-800 w-20 h-[2px] inline-block" />
        </div>
        <h1 className="font-title text-center md:text-5xl text-3xl font-black pb-8">Entre em <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 bg-clip-text text-transparent">contacto</span>  connosco!</h1>

        <div className="flex justify-between py-8 lg:flex-row flex-col md:flex-wrap gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="border-2 p-3 rounded-full border-black w-fit">
              <Phone className="text-4xl text-sky-500" weight="fill" />
            </div>
            <p className="flex lg:flex-row gap-1 flex-col items-center"><span className="text-sky-500 font-bold">Ligue para:</span> +258 84 686 0612</p>
          </div>
        
          <div className="flex flex-col items-center gap-4">
            <div className="border-2 p-3 rounded-full border-black w-fit">
              <EnvelopeSimple className="text-4xl text-sky-500" weight="fill" />
            </div>
            <p className="flex lg:flex-row gap-1 flex-col items-center"><span className="text-sky-500 font-bold">Mande email:</span> info@anytech.co.mz</p>
          </div>
        
          <div className="flex flex-col items-center gap-4">
            <div className="border-2 p-3 rounded-full border-black w-fit">
              <MapPin className="text-4xl text-sky-500" weight="fill" />
            </div>
            <p className="flex lg:flex-row gap-1 flex-col items-center"><span className="text-sky-500 font-bold">Encontre-nos:</span> Av das Industrias</p>
          </div>
        </div>

        <p className="text-center pb-8"><span className="text-sky-500 font-bold">Horas:</span> 07:30 - 18:00</p>
        <div className="mx-auto flex gap-4 w-fit pb-8">
          <FacebookLogo  className="text-3xl text-sky-600" />
          <InstagramLogo className="text-3xl text-orange-600"/>
          <TwitterLogo className="text-3xl text-sky-600" />
          <LinkedinLogo className="text-3xl text-sky-800" />
          <GithubLogo className="text-3xl" />
        </div>
      </div>

      <div className="mx-auto w-fit">
        <img src={Logo} alt="AnyTech Solutions" className="w-60 pt-16"/>
      </div>

    </div>
  )
}

export { Contacts };