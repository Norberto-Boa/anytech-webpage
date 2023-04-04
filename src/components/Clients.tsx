import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


import mide from "../assets/mide.svg";
import bres from "../assets/bres.svg";
import enviro from "../assets/enviro.svg"
import preditiva from "../assets/preditiva.svg"
import ercilady from "../assets/ercilady.svg"
import ml from "../assets/ml.svg";

const animation = { duration: 5000, easing: (t: number) => t }


const Clients = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width:430px)": {
        slides: {perView: 2, spacing:80},
      },
      "(min-width:640px)": {
        slides: {perView: 3, spacing: 80}
      },
      "(min-width:768px)": {
        slides: { perView: 3.5, spacing: 80 }
      },
      
      "(min-width:900px)": {
        slides: { perView: 4, spacing: 80 }
      }
    },
    slides: { origin:"center", perView: 1.3, spacing: 80 },
    drag: true,
    loop: true,
    renderMode: "performance",
  },
  [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  );

  return (
    <div  className="max-w-5xl mx-auto pb-16">
      <div ref={ref} className="mx-auto flex justify-between keen-slider px-4 ">
        <img src={mide} alt=""  className="lg:!w-32 md:!w-16 hover:scale-125 transition-all duration-700 keen-slider__slide"/>
        <img src={bres} alt="" className="lg:!w-32 md:!w-16 hover:scale-125 transition-all duration-700 keen-slider__slide"/>
        <img src={enviro} alt="" className="lg:!w-32 md:!w-16 hover:scale-125 transition-all duration-700 keen-slider__slide"/>
        <img src={preditiva} alt="" className="lg:!w-32 md:!w-16 hover:scale-125 transition-all duration-700 keen-slider__slide"/>
        <img src={ercilady} alt="" className="lg:!w-32 md:!w-16 hover:scale-125 transition-all duration-700 keen-slider__slide"/>
      </div>
    </div>
  )
}

export { Clients };

