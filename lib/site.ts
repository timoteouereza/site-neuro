import { Brain, Activity, Zap, Stethoscope, Syringe, HeartPulse, HeadsetIcon as Headache } from "lucide-react"

export const site = {
  name: "Dr. Mohamad Hussein — Neurologia",
  specialty: "Neurologia",
  city: "Curitiba – PR",
  phoneDisplay: "(41) 99292‑8930",
  phoneHref: "tel:+5541992928930",
  whatsappBase: "https://wa.me/5541992928930",
  addressFull:
    "Rua General Mário Tourinho, 1805 – Andar 5, Sala 504 – Campina do Siqueira – Edifício Lakeside Building – CEP 80740-000 – Curitiba-PR",
  gmapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7234567890123!2d-49.27834568542!3d-25.42345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x8654a6a3f7d6e6f2!2sRua%20General%20M%C3%A1rio%20Tourinho%2C%201805%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
  gmapsLink: "https://www.google.com/maps/search/?api=1&query=Rua+General+Mário+Tourinho+1805+Curitiba+PR",
}

export type Condition = {
  id: string
  title: string
  lead: string
  bullets: string[]
  cta: string
  icon: any
}

export const conditions: Condition[] = [
  {
    id: "avc",
    title: "AVC",
    lead: "Tempo é cérebro.",
    bullets: [
      "• Uma em cada quatro pessoas terá AVC ao longo da vida.",
      "• Até 80% podem ser evitados com controle de pressão, diabetes e colesterol.",
    ],
    cta: "Marcar consulta Neurológica",
    icon: Activity,
  },
  {
    id: "tdah",
    title: "TDAH",
    lead: "Desatenção, hiperatividade e impulsividade têm tratamento.",
    bullets: [
      "• Afeta de 5 a 7 em cada 100 crianças.",
      "• Cerca de 60% mantêm sintomas na vida adulta; atinge aproximadamente 2,5 em cada 100 adultos.",
    ],
    cta: "Avaliação para TDAH",
    icon: Brain,
  },
  {
    id: "epilepsia",
    title: "Epilepsia",
    lead: "Crises controladas, vida ativa.",
    bullets: ["• Afeta cerca de 1 em cada 100 pessoas.", "• Com tratamento adequado, até 70% ficam sem crises."],
    cta: "Avaliação para Epilepsia",
    icon: Zap,
  },
  {
    id: "alzheimer",
    title: "Doença de Alzheimer",
    lead: "Diagnóstico precoce preserva autonomia.",
    bullets: [
      "• O risco dobra a cada cinco anos após os 65 anos.",
      "• Mulheres representam aproximadamente dois terços dos casos.",
    ],
    cta: "Avaliação de Memória",
    icon: Stethoscope,
  },
  {
    id: "parkinson",
    title: "Doença de Parkinson",
    lead: "Tratamento cedo mantém independência.",
    bullets: [
      "• Afeta cerca de 1 em cada 100 pessoas com mais de 60 anos.",
      "• Homens têm risco cerca de 1,5 vez maior.",
    ],
    cta: "Avaliação para Parkinson",
    icon: Syringe,
  },
  {
    id: "enxaqueca",
    title: "Enxaqueca",
    lead: "Não é apenas dor de cabeça.",
    bullets: [
      "• Afeta aproximadamente 15 em cada 100 adultos; três vezes mais comum em mulheres.",
      "• Está entre as principais causas de incapacidade no mundo.",
    ],
    cta: "Avaliação para Enxaqueca",
    icon: Headache,
  },
  {
    id: "outras-cefaleias",
    title: "Outras dores de cabeça",
    lead: "Diagnóstico certo, tratamento eficaz.",
    bullets: [
      "• Metade dos adultos tem cefaleia pelo menos uma vez por ano.",
      "• Manejo correto evita uso excessivo de analgésicos e exames desnecessários.",
    ],
    cta: "Avaliação para Cefaleias",
    icon: HeartPulse,
  },
]

type WhatsParams = {
  utm?: URLSearchParams
  message?: string
  context?: string
}

export function buildWhatsAppHref({ utm, message, context }: WhatsParams) {
  const base = site.whatsappBase
  const parts = [
    message || "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
    context ? `Assunto: ${context}.` : "",
  ].filter(Boolean)
  if (utm && Array.from(utm.keys()).length > 0) {
    parts.push(`UTM: ${utm.toString()}`)
  }
  const text = encodeURIComponent(parts.join(" "))
  return `${base}?text=${text}`
}
