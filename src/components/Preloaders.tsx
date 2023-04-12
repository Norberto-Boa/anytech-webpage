const Preloaders = () => {
  return (
    <div className="z-30 min-h-screen min-w-full overflow-hidden bg-white flex flex-col justify-center items-center animate-fadeOff animation-delay-5000">
      <div className="flex justify-center items-center">
        <span className="w-4 h-4 my-4 mx-1 bg-sky-500 rounded-full animate-loader"/>
        <span className="w-4 h-4 my-4 mx-1 bg-sky-500 rounded-full animate-loader animation-delay-200"/>
        <span className="w-4 h-4 my-4 mx-1 bg-sky-500 rounded-full animate-loader animation-delay-300"/><br/>
      </div>
      <h1 className="font-bold text-zinc-900 ">
        Montando o paraíso...
      </h1>
    </div>
  )
}

export { Preloaders };