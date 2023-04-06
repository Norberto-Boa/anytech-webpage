import { FormEvent, useRef } from "react";
import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import emailjs from "@emailjs/browser";


const Form = () => {
  const form = useRef(null);

  const sendEmail = (e: FormEvent ) => {
    e.preventDefault();

    if (form.current == null) return;

    emailjs.sendForm('service_09b75oq', 'template_dp469ld', form.current, 'user_YxP8w6mA1FpMnzGbet6Iz')
      .then((res) => {
        console.log(res.text, res.status)
      }, (error) => {
        console.log(error.text)
      });
    
    alert("Mensagem enviada")
  };

  return (
    <Dialog.Content
      className="fixed flex flex-col items center bg-white py-8 px-10 text-slate-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-80 md:w-96 drop-shadow-lg">
      <Dialog.Title
        className="text-xl font-black text-center mb-4"
      >
        Pedir Orçamento
      </Dialog.Title>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="bg-zinc-900 text-zinc-200 py-3 px-4 rounded text-sm placeholder:text-zinc-500 w-[100%] mb-4"
          placeholder="Nome completo"
          name="from_name"
        />
        <input
          className="bg-zinc-900 text-zinc-200 py-3 px-4 rounded text-sm placeholder:text-zinc-500 w-[100%] mb-4"
          placeholder="Endereço electrónico (email)"
          name="user_email"
        />
        <textarea
          rows={6}
          className="bg-zinc-900 text-zinc-200 py-3 px-4 rounded text-sm placeholder:text-zinc-500 w-[100%] mb-4 resize-none"
          placeholder="Escreva os serviços que pretende receber!"
          name="message"
        />

        <button
          className="w-full bg-sky-500 px-4 py-3 rounded font-bold uppercase text-white hover:bg-sky-600 transition-all duration-500"
        >
          Enviar
        </button>

      </form>

      <Dialog.Close
        className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-all duration-500"
      >
        <X size={24} aria-label="Close" />
      </Dialog.Close>
    </Dialog.Content>
  )
}

export { Form };