"use client"

import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

export default function CTAFinal() {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  const WHATS_CTA =
    "inline-flex items-center gap-3 px-12 py-6 text-3xl font-bold bg-emerald-400 hover:bg-emerald-500 text-emerald-950 border border-white/70 rounded-lg shadow-sm transition-colors"

  return (
    <section aria-label="CTA final" className="border-t bg-muted/30 py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-6xl sm:text-7xl font-bold leading-tight">
            Pronto(a) para cuidar da sua saúde neurológica?
          </h2>
          <p className="mt-4 text-xl text-white" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Clique abaixo para agendar agora.
          </p>

          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className={WHATS_CTA}
              data-evt="whatsapp_final"
              onClick={() => track("whatsapp_click", { where: "final" })}
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-8 h-8" aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Mohamad_013_INSTAGRAM.jpg-kscikGn7yzMUp7on4fslUScx1mMN9l.jpeg"
            alt="Dr. Mohamad Hussein - Neurologista em Curitiba"
            width={560}
            height={672}
            className="aspect-[5/6] w-full rounded-2xl border object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}
