"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
        <p className="font-display text-lg font-bold text-white">Mensagem enviada!</p>
        <p className="mt-2 text-sm text-gray-300">
          Obrigado pelo seu contacto. A nossa equipa responde normalmente dentro de 1 a 2 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="O seu nome"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="oseu@email.com"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-300">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Sobre o que se trata?"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Escreva a sua mensagem..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full justify-center sm:w-auto">
        {loading ? "A enviar..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
