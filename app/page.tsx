import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Authority from "@/components/authority"
import VideoBlock from "@/components/video-block"
import ReviewsCarousel from "@/components/reviews-carousel"
import MapCard from "@/components/map-card"
import CTAFinal from "@/components/cta-final"
import Footer from "@/components/footer"
import WhatsappFab from "@/components/whatsapp-fab"
import LanguagesStrip from "@/components/languages-strip"

export const metadata: Metadata = {
  title: "Neurologista em Curitiba | Dr. Mohamad Hussein - AVC, TDAH, Epilepsia, Alzheimer, Parkinson e Enxaqueca",
  description:
    "Neurologia de excelência em Curitiba. Diagnóstico e tratamento de AVC, TDAH, epilepsia, Alzheimer, Parkinson, enxaqueca e outras cefaleias. Agende sua consulta.",
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Neurologista em Curitiba | Dr. Mohamad Hussein - Neurologia de excelência",
    description: "Atendimento acolhedor e baseado em evidência. Presencial em Curitiba e telemedicina.",
    url: "https://example.com",
    siteName: "Dr. Mohamad Hussein — Neurologia",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Mohamad_016_INSTAGRAM.jpg-z4etmIALiWIZZnzakTVh6sq0TK5LF1.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Mohamad Hussein — Neurologista em Curitiba",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurologista em Curitiba | Dr. Mohamad Hussein - Neurologia de excelência",
    description: "Atendimento acolhedor e baseado em evidência. Presencial em Curitiba e telemedicina.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Mohamad_016_INSTAGRAM.jpg-z4etmIALiWIZZnzakTVh6sq0TK5LF1.jpeg",
    ],
  },
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Mohamad Hussein — Neurologia",
    medicalSpecialty: "Neurology",
    url: "https://example.com",
    telephone: "+55-41-99292-8930",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Rua General Mário Tourinho, 1805 – Andar 5, Sala 504 – Campina do Siqueira – Ed. Lakeside Building",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80740-000",
      addressCountry: "BR",
    },
    areaServed: ["Curitiba", "Paraná", "Brasil"],
    sameAs: ["https://wa.me/5541992928930", "tel:+5541992928930", "https://maps.google.com"],
  }

  return (
    <>
      <div className="bg-cyan-500 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm sm:text-base font-medium">
            Rua General Mário Tourinho, 1805 – Andar 5, Sala 504 – Campina do Siqueira – Edifício Lakeside Building –
            CEP 80740-000 – Curitiba-PR
          </p>
        </div>
      </div>
      <Header />
      <main id="inicio">
        <Hero />
        <LanguagesStrip />
        {/* Seção de condições com âncoras individuais para corresponder aos grupos de anúncios */}
        <section id="condicoes" aria-label="Condições atendidas">
          {/* Renderização das condições específica fica no Hero/condições abaixo */}
        </section>
        {/* Provas de autoridade */}
        <Authority />
        {/* Vídeo institucional */}
        <VideoBlock />
        {/* Avaliações do Google */}
        <ReviewsCarousel />
        {/* Localização & atendimento */}
        <MapCard />
        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />
      <WhatsappFab />
      <Script
        id="schema-medicalbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
