"use client"

import Image from "next/image"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

const WhatsIcon = ({ size = 32 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
  </svg>
)

export default function CTAFinal() {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message:
      "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  return (
    <section aria-label="CTA final" className="border-t bg-muted/30 py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-6xl sm:text-7xl font-bold leading-tight">Pronto(a) para cuidar da sua saúde neurológica?</h2>
          <p className="mt-4 text-xl text-white" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Clique abaixo para agendar agora.
          </p>

          <div className="mt-8">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-evt="whatsapp_final"
              onClick={() => track("whatsapp_click", { where: "final" })}
              className="relative inline-flex w-full md:w-auto items-center justify-center px-12 py-6 pl-16 text-3xl font-bold rounded-2xl border-2 border-white/70 bg-emerald-500 text-white shadow-md hover:brightness-95 transition-colors whitespace-nowrap"
            >
              <span className="absolute left-6 top-1/2 -translate-y-1/2">
                <WhatsIcon size={32} />
              </span>
              <span className="leading-none">Chamar no WhatsApp</span>
            </a>
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
