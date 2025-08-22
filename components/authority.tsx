"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

export default function Authority() {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  const WHATS_CTA =
    "inline-flex items-center gap-4 px-16 py-8 text-3xl font-bold bg-emerald-400 hover:bg-emerald-500 text-emerald-950 border border-white/70 rounded-lg shadow-sm transition-colors w-full justify-center"

  return (
    <section id="sobre" aria-label="Provas de autoridade" className="border-y bg-muted/30">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col"
        >
          <Image
            src="/dr-mohamad-about.jpg"
            alt="Dr. Mohamad Hussein — retrato"
            width={720}
            height={720}
            className="aspect-square w-full rounded-2xl border object-cover object-center shadow-sm"
          />

          <div className="mt-8">
            <Button
              className={WHATS_CTA}
              asChild
              data-evt="mini_cta_sobre_whatsapp"
              onClick={() => track("whatsapp_click", { where: "about_mini" })}
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-10 h-10" aria-hidden="true" />
                Agendar agora
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Sobre o médico</h2>
          <p
            className="mt-3 text-lg sm:text-xl leading-relaxed text-white"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)" }}
          >
            O Dr. Mohamad Hussein é neurologista em Curitiba, atuando em neurologia geral, além de ser especialista em
            dores de cabeça. Segundo o doutor, o cuidado integral ao paciente é essencial. Abaixo, alguns dos
            compromissos atuais:
          </p>
          <ul
            className="mt-5 list-disc pl-6 space-y-2 text-lg sm:text-xl leading-relaxed text-white"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)" }}
          >
            <li>Coordenador do Ambulatório de Cefaleias – INC;</li>
            <li>Coordenador do programa de fellowship em Cefaleias – INC;</li>
            <li>Membro da Sociedade Brasileira de Cefaleias;</li>
            <li>Membro do Comitê de Educação da Sociedade Brasileira de Cefaleias;</li>
            <li>Membro da Sociedade Internacional de Cefaleias.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
