
const Statistics = () => {
  return (
    <div className="py-24 bg-stats bg-cover bg-fixed w-full">
      <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-xl mx-auto">
        <h1 className="text-center font-bold font-title text-lg text-white pb-4">Nossas estatisticas</h1>
        <h2 className="md:text-5xl text-sky-500 font-title font-black text-center pb-8 max-sm:pb-8 max-sm:text-3xl text-4xl">+50 Clientes satisfeitos</h2>~

        <div className="flex justify-between flex-wrap">
          <div className="max-md:w-1/2 max-sm:w-full max-sm:pb-16 max-md:pb-12">
            <h4 className="text-5xl font-black font-title text-sky-500 text-center pb-2">110</h4>
            <p className="text-xl text-white font-medium text-center">Projectos</p>
          </div>
          
          <div className="max-md:w-1/2 max-sm:w-full max-sm:pb-16 max-md:pb-12 ">
            <h4 className="text-5xl font-black font-title text-sky-500 text-center pb-2">80</h4>
            <p className="text-xl text-white font-medium text-center">Clientes</p>
          </div>
          
          <div className="max-md:w-1/2 max-sm:w-full max-sm:pb-16">
            <h4 className="text-5xl font-black font-title text-sky-500 text-center pb-2">20</h4>
            <p className="text-xl text-white font-medium text-center">Colaboradores</p>
          </div>
          
          <div className="max-md:w-1/2 max-sm:w-full max-sm:pb-16">
            <h4 className="text-5xl font-black font-title text-sky-500 text-center pb-2">160</h4>
            <p className="text-xl text-white font-medium text-center">Cafezinhos</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export { Statistics };