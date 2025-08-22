"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Navigation, CheckCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { site, buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MapCard() {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  return (
    <section id="localizacao" aria-label="Localização e atendimento" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-slate-500/20 shadow-md bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 overflow-hidden"
          >
            {/* Top colored border */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />

            <div className="flex flex-col h-full">
              <iframe
                title="Mapa do consultório"
                src={site.gmapsEmbed}
                className="h-80 w-full flex-shrink-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, borderRadius: 0 }}
              />

              <div
                className="flex-1 flex items-center justify-center p-6 min-h-[120px]"
                style={{ backgroundColor: "rgba(70, 130, 180, 0.3)" }}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 opacity-75">
                  <Image
                    src="/drmah-simbolo-location.png"
                    alt="Dr. Mohamad Hussein - Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, 192px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-6 border border-slate-500/20 shadow-md bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex flex-col min-h-full"
          >
            {/* Top colored border */}
            <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600" />

            {/* Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md mb-4 bg-gradient-to-br from-green-400 to-green-600">
              <MapPin className="w-6 h-6 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4">Localização & Atendimento</h2>

            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              Atendimento presencial em Curitiba. Opção de telemedicina conforme regulamentação vigente.
            </p>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-300 mb-6">
              <MapPin className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
              <span className="leading-relaxed">{site.addressFull}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-base sm:text-lg text-slate-300">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Atendimento presencial</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg text-slate-300">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Telemedicina disponível</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg text-slate-300">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Estacionamento no local</span>
              </li>
            </ul>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row mt-auto">
              <Button
                asChild
                className="h-12 bg-sky-500 hover:bg-sky-600 text-lg sm:text-xl font-bold flex items-center gap-2 px-6"
                data-evt="cta_como_chegar"
                onClick={() => track("maps_click", { where: "location" })}
              >
                <a href={site.gmapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-6 h-6" />
                  Como chegar
                </a>
              </Button>
              <Button
                asChild
                className="h-12 inline-flex items-center gap-2 px-8 py-4 font-bold bg-emerald-400 hover:bg-emerald-500 text-emerald-950 border border-white/70 rounded-lg shadow-sm transition-colors text-lg sm:text-xl"
                data-evt="whatsapp_localizacao"
                onClick={() => track("whatsapp_click", { where: "location" })}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
                  Agendar
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
