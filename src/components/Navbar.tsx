import { useState } from 'react';
import { Link } from "react-scroll";


interface NavItemProps{
  name: string,
  to: string,
}

const Navigation = [
  { name: "Home", href: "hero" },
  { name: "Valores", href: "core" },
  { name: "Sobre-nós", href: "aboutUs" },
  { name: "Serviços", href: "services" },
  { name: "Contactos", href: "contacts" }
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-zinc-900 text-white py-3 fixed w-full z-10">
      <div className="xl:max-w-5xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-xs flex justify-between items-center mx-auto my-auto">
        <div>
          <span className="font-medium font-title text-sky-500">Any<span className="text-blue-600">Tech</span> Solutions</span>
        </div>

        <button className="md:hidden" onClick={toggleNavbar}>
          <div className="space-y-2">
            <span className="block w-8 h-[2px] bg-blue-400"></span>
            <span className="block w-8 h-[2px] bg-blue-400"></span>
            <span className="block w-8 h-[2px] bg-blue-400"></span>
          </div>
        </button>

        <div className={`fixed top-12 bottom-0 ${!isOpen ? '-right-full' : 'right-0'} bg-zinc-900 w-full md:w-auto md:static transition-all duration-1000`}>
          <div className="flex flex-col md:flex-row">
            {Navigation.map((item, i) => {
              return (
                <Link
                  key={i}
                  onClick={toggleNavbar}
                  to={item.href} spy={true} smooth={true} offset={-50} duration={1700}
                  className="px-4 max-md:py-4 max-md:border-b max-md:border-zinc-800 font-semibold text-center max-md:text-xl cursor-pointer transition-all w-full whitespace-nowrap"
                >
                { item.name}
              </Link>
              )
            })}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export { Navbar };