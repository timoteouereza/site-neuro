"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { buildWhatsAppHref, conditions } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"
import ConditionCard from "./condition-card"

// Ícone WhatsApp inline (evita estilos de libs)
const WhatsIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
  </svg>
)

export default function Hero() {
  const utm = useUtm()
  const whatsHref = buildWhatsAppHref({
    utm,
    message:
      "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  const reorganizedConditions = [
    conditions.find((c) => c.id === "avc"),
    conditions.find((c) => c.id === "tdah"),
    conditions.find((c) => c.id === "epilepsia"),
    conditions.find((c) => c.id === "alzheimer"),
    conditions.find((c) => c.id === "parkinson"),
    conditions.find((c) => c.id === "enxaqueca"),
    conditions.find((c) => c.id === "outras-dores"),
  ].filter(Boolean)

  return (
    <section className="relative overflow-hidden border-b">
      {/* Marca d’água */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(/drmah-simbolo-color.png)`, backgroundSize: "60%", filter: "blur(18px)" }}
      />

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
        <div className="mb-8 -ml-2 flex items-center justify-start">
          <Image src="/drmah-simbolo-header.png" alt="Dr. Mohamad Ali Hussein Logo" width={48} height={48} className="mr-3" />
          <h1
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black" }}
          >
            Dr. Mohamad Ali Hussein - Neurologia
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-white text-center"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Receba o tratamento adequado para as suas queixas e viva
              <br />
              o dia-a-dia com mais tranquilidade e qualidade de vida!
            </motion.h2>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl border shadow-sm md:aspect-[3/4] md:max-w-xl">
              <Image
                src="/images/dr-mohamad-hero.jpg" // ajuste se sua imagem estiver em outro caminho
                alt="Dr. Mohamad Ali Hussein - Neurologista especialista em Curitiba"
                fill
                priority
                className="h-full w-full object-cover object-center"
                sizes="(max-width: 768px) 512px, 576px"
              />
            </div>

            <motion.p
              className="mt-6 max-w-lg text-center text-base sm:text-lg text-white"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Buscando avaliação para diagnóstico e tratamento de AVC, TDAH, epilepsia, Alzheimer, Parkinson, Enxaqueca e
              outras dores de cabeça?{" "}
              <span className="underline decoration-2 underline-offset-2" style={{ textDecorationColor: "#EF4444" }}>
                Você está no lugar certo
              </span>
              .
            </motion.p>
          </div>
        </div>

        {/* CTA central */}
        <div className="mt-12 flex flex-col items-center space-y-4 text-center">
          <a
            href={whatsHref}
            target="_blank"
            rel="noopener noreferrer"
            data-evt="whatsapp_click_hero"
            onClick={() => track("whatsapp_click", { where: "hero_primary" })}
            className="relative inline-flex items-center justify-center px-8 py-4 pl-14 text-2xl font-bold rounded-2xl border-2 border-white/70 bg-emerald-500 text-white shadow-md hover:brightness-95 transition-colors whitespace-nowrap"
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2">
              <WhatsIcon size={32} />
            </span>
            <span className="leading-none">Agendar agora pelo WhatsApp</span>
          </a>

          <Badge
            variant="secondary"
            className="rounded-full border border-white/40 bg-blue-900 px-6 py-3 text-lg text-white hover:bg-blue-950"
            style={{ borderRadius: "8px" }}
          >
            <div className="text-center leading-relaxed">
              <div>Atendimento presencial e telemedicina</div>
              <div>CRM-PR 36918 · RQE 28146</div>
            </div>
          </Badge>
        </div>
      </div>

      {/* Condições */}
      <div className="container relative z-10 mx-auto px-4 pb-10">
        <h2 id="condicoes" className="mb-4 text-xl font-semibold text-white">
          Condições atendidas
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reorganizedConditions.map((c, index) => c && <ConditionCard key={c.id} condition={c} index={index} />)}
        </div>
      </div>
    </section>
  )
}
