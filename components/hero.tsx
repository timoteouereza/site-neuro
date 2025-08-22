"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { buildWhatsAppHref, conditions } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"
import ConditionCard from "./condition-card"

export default function Hero() {
  const utm = useUtm()
  const whatsHref = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  const WHATS_CTA =
    "inline-flex items-center gap-2 px-8 py-4 text-2xl font-bold bg-emerald-400 hover:bg-emerald-500 text-emerald-950 border border-white/70 rounded-lg shadow-sm transition-colors"

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
      {/* Logo watermark */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(/drmah-simbolo-color.png)`,
          backgroundSize: "60%",
          filter: "blur(18px)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
        <div className="flex items-center justify-start mb-8 -ml-2">
          <Image
            src="/drmah-simbolo-header.png"
            alt="Dr. Mohamad Ali Hussein Logo"
            width={48}
            height={48}
            className="mr-3"
          />
          <h1
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{
              textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
            }}
          >
            Dr. Mohamad Ali Hussein - Neurologia
          </h1>
        </div>

        {/* TOP ROW: Main headline (left) + Doctor photo (right) */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-5xl font-bold tracking-tight text-white text-center sm:text-6xl leading-tight"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Receba o tratamento adequado para as suas queixas e viva
              <br />o dia‑a‑dia com mais tranquilidade e qualidade de vida!
            </motion.h2>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl border shadow-sm md:aspect-[3/4] md:max-w-xl">
              <Image
                src="/dr-mohamad-hero.jpg"
                alt="Dr. Mohamad Ali Hussein - Neurologista especialista em Curitiba"
                fill
                priority
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 768px) 512px, 576px"
              />
            </div>

            <motion.p
              className="text-base text-white sm:text-lg mt-6 text-center max-w-lg"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Buscando avaliação para diagnóstico e tratamento de AVC, TDAH, epilepsia, Alzheimer, Parkinson, Enxaqueca
              e outras dores de cabeça?{" "}
              <span
                className="decoration-red-500 underline decoration-2 underline-offset-2"
                style={{ textDecorationColor: "#EF4444" }}
              >
                Você está no lugar certo
              </span>
              .
            </motion.p>
          </div>
        </div>

        {/* BOTTOM ROW: Centered CTA button and credentials badge */}
        <div className="flex flex-col items-center text-center space-y-4 mt-12">
          <Button
            asChild
            className={WHATS_CTA}
            data-evt="whatsapp_click_hero"
            onClick={() => track("whatsapp_click", { where: "hero_primary" })}
          >
            <a href={whatsHref} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8" aria-hidden="true" />
              Agendar agora pelo WhatsApp
            </a>
          </Button>

          <Badge
            variant="secondary"
            className="rounded-full bg-blue-900 text-white hover:bg-blue-950 border border-white/40 text-lg px-6 py-3"
            style={{ borderRadius: "8px" }}
          >
            <div className="text-center leading-relaxed">
              <div>Atendimento presencial e telemedicina</div>
              <div>CRM‑PR 36918 · RQE 28146</div>
            </div>
          </Badge>
        </div>
      </div>

      {/* Condições atendidas */}
      <div className="container relative z-10 mx-auto px-4 pb-10">
        <h2 id="condicoes" className="mb-4 text-xl font-semibold text-white">
          Condições atendidas
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reorganizedConditions.map((c, index) => (
            <ConditionCard key={c.id} condition={c} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
