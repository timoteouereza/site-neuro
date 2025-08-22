import Link from "next/link"
import { Phone, MessageSquare, Mail, FileText } from "lucide-react"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold">Dr. Mohamad Hussein — Neurologia</div>
          <div className="text-xs text-muted-foreground">CRM-PR 36918 / RQE 28146</div>
          <p className="max-w-sm text-xs text-muted-foreground">
            Conteúdo informativo. Não substitui consulta médica. Em suspeita de AVC, procure emergência e acione o SAMU
            192.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Contato</div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={site.phoneHref} data-evt="phone_footer">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <a href={site.whatsappBase} target="_blank" rel="noopener noreferrer" data-evt="whatsapp_footer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:drmohamad.consultorio@gmail.com" data-evt="email_footer">
                drmohamad.consultorio@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Links</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#" className="inline-flex items-center gap-2 hover:underline">
                <FileText className="h-4 w-4" />
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center gap-2 hover:underline">
                <FileText className="h-4 w-4" />
                Termos de Uso
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mohamad.neuro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
                data-evt="instagram_footer"
              >
                <FaInstagram className="h-4 w-4" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@minutocefaleia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
                data-evt="youtube_footer"
              >
                <FaYoutube className="h-4 w-4" />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
