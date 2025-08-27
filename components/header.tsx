"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Menu, X, PhoneCall } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { site, buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

export default function Header() {
  const [open, setOpen] = useState(false)
  const utm = useUtm()

  const whatsHref = useMemo(
    () =>
      buildWhatsAppHref({
        utm,
        message:
          "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
      }),
    [utm],
  )

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  const nav = [
    { href: "#condicoes", label: "Condições" },
    { href: "#sobre", label: "Sobre" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex-1" />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 border border-white/70 text-lg font-bold px-6 py-3"
                  onClick={() => track("cta_click", { where: "header", type: "sheet" })}
                  data-evt="cta_agendar_header"
                >
                  Agendar Consulta
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Agendar Consulta</SheetTitle>
                </SheetHeader>

                <div className="mt-4 grid gap-3">
                  {/* WhatsApp CTA (desktop sheet) */}
                  <a
                    href={whatsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp_click", { where: "header_sheet" })}
                    data-evt="whatsapp_click"
                    className="h-12 inline-flex items-center justify-center gap-3 leading-none
                               px-5 rounded-2xl border-2 border-white/70
                               bg-emerald-500 hover:brightness-95 text-white text-lg font-bold"
                  >
                    <FaWhatsapp className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span>Agendar agora pelo WhatsApp</span>
                  </a>

                  <Button
                    variant="outline"
                    className="h-12 bg-transparent text-lg font-bold"
                    asChild
                    onClick={() => track("form_click", { where: "header_sheet" })}
                    data-evt="form_open"
                  >
                    <Link href="#formulario">Preencher formulário de consulta</Link>
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-12 text-lg font-bold flex items-center gap-2"
                    asChild
                    data-evt="phone_click"
                    onClick={() => track("phone_click", { where: "header_sheet" })}
                  >
                    <a href={site.phoneHref}>
                      <PhoneCall className="w-6 h-6" />
                      Ligar para {site.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto px-4 py-3" aria-label="Navegação mobile">
            <ul className="flex flex-col gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      className="h-12 w-full bg-sky-500 hover:bg-sky-600 border border-white/70 text-lg font-bold"
                      data-evt="cta_agendar_header_mobile"
                      onClick={() => track("cta_click", { where: "header_mobile", type: "sheet" })}
                    >
                      Agendar Consulta
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="min-h-[40vh]">
                    <SheetHeader>
                      <SheetTitle>Agendar Consulta</SheetTitle>
                    </SheetHeader>

                    <div className="mt-4 grid gap-3">
                      {/* WhatsApp CTA (mobile sheet) */}
                      <a
                        href={whatsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-evt="whatsapp_click"
                        onClick={() => track("whatsapp_click", { where: "header_mobile_sheet" })}
                        className="h-12 inline-flex items-center justify-center gap-3 leading-none
                                   px-5 rounded-2xl border-2 border-white/70
                                   bg-emerald-500 hover:brightness-95 text-white text-lg font-bold w-full"
                      >
                        <FaWhatsapp className="w-6 h-6 shrink-0" aria-hidden="true" />
                        <span>Agendar agora pelo WhatsApp</span>
                      </a>

                      <Button
                        variant="outline"
                        className="h-12 bg-transparent text-lg font-bold"
                        asChild
                        data-evt="form_open"
                        onClick={() => track("form_click", { where: "header_mobile_sheet" })}
                      >
                        <Link href="#formulario">Preencher formulário de consulta</Link>
                      </Button>

                      <Button
                        variant="ghost"
                        className="h-12 text-lg font-bold flex items-center gap-2"
                        asChild
                        data-evt="phone_click"
                        onClick={() => track("phone_click", { where: "header_mobile_sheet" })}
                      >
                        <a href={site.phoneHref}>
                          <PhoneCall className="w-6 h-6" />
                          Ligar para {site.phoneDisplay}
                        </a>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
