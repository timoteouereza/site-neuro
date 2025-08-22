"use client"

import { useMemo } from "react"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { MessageCircle } from "lucide-react"
import { track } from "@/lib/tracking"

export default function WhatsappFab() {
  const utm = useUtm()
  const href = useMemo(
    () =>
      buildWhatsAppHref({
        utm,
        message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
      }),
    [utm],
  )

  return (
    <a
      href={href}
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-105 md:hidden"
      aria-label="Abrir WhatsApp para agendar"
      target="_blank"
      rel="noopener noreferrer"
      data-evt="whatsapp_fab"
      onClick={() => track("whatsapp_click", { where: "fab" })}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
