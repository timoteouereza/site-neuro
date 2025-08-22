"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"
import Link from "next/link"

const steps = [
  { n: 1, t: "Contato & triagem breve" },
  { n: 2, t: "Consulta clínica detalhada" },
  { n: 3, t: "Exames (se necessários)" },
  { n: 4, t: "Plano terapêutico personalizado" },
  { n: 5, t: "Acompanhamento" },
]

export default function Steps() {
  const utm = useUtm()
  const href = buildWhatsAppHref({ utm })

  return (
    <section aria-label="Como funciona a consulta" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold">Como funciona a consulta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Atendimento baseado em evidências e em colaboração com o paciente.
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="rounded-2xl border bg-card p-4 text-center shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
                {s.n}
              </div>
              <div className="mt-2 text-sm">{s.t}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="h-11 bg-sky-500 hover:bg-sky-600"
            data-evt="cta_steps"
            onClick={() => track("cta_click", { where: "steps" })}
          >
            <Link href="#formulario">
              Agendar Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 bg-transparent flex items-center gap-2"
            data-evt="whatsapp_steps"
            onClick={() => track("whatsapp_click", { where: "steps" })}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-5 h-5 mr-1" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
