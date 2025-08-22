"use client"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

export default function VideoBlock() {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
  })

  const WHATS_CTA =
    "inline-flex items-center gap-2 px-8 py-4 text-2xl font-bold bg-emerald-400 hover:bg-emerald-500 text-emerald-950 border border-white/70 rounded-lg shadow-sm transition-colors"

  return (
    <section aria-label="Vídeo institucional" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">Conheça seu neurologista</h2>
          <p className="mt-2 text-base sm:text-lg text-white" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
            Como funciona a consulta e o que você pode esperar.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-6 max-w-3xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/rODjt6rNy9Y"
              title="Conheça seu neurologista - Dr. Mohamad Hussein"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <div className="mx-auto mt-4 flex max-w-3xl justify-center">
          <Button
            asChild
            className={WHATS_CTA}
            data-evt="whatsapp_click_video"
            onClick={() => track("whatsapp_click", { where: "video" })}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
              Quero agendar minha consulta!
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
