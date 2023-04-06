import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "./Form";

const CallToAction = () => {
  return (
    <div
      className="w-full py-16 bg-sky-500"
      id="contacts"
    >
      <div className="lg:max-w-5xl md:max-w-3xl min-[680px]:max-w-2xl max-w-xl flex-col gap-8 min-[680px]:flex-row mx-auto flex items-center justify-between">
        <h4 className="md:text-3xl text-2xl md:text-start text-center px-1 font-title text-white font-black">Deseja fazer algum orçamento sem compromisso?</h4>
        <Dialog.Root>
          <Dialog.Trigger className="bg-white py-2 px-8 uppercase font-black font-title rounded-xl border-2 border-white text-sky-500 hover:border-2 hover:border-sky-500 transition-all duration-700">Orçar</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
            <Form />
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}

export { CallToAction };