"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Menu, X, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { site, buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

const WhatsIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
  </svg>
)

const waClasses =
  "relative inline-flex items-center justify-center h-12 px-5 pl-12 rounded-2xl border-2 border-white/70 " +
  "bg-emerald-500 text-white text-lg font-bold hover:brightness-95 transition-colors whitespace-nowrap"

export default function Header() {
  const [open, setOpen] = useState(false)
  const utm = useUtm()

  const whatsHref = useMemo(
    () =>
      buildWhatsAppHref({
        utm,
        message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
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

        <div className="flex flex-1 justify-end">
          <div className="hidden md:flex">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  className="border border-white/70 bg-sky-500 px-6 py-3 text-lg font-bold hover:bg-sky-600"
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
                  {/* WhatsApp CTA (anchor puro) */}
                  <a
                    href={whatsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp_click", { where: "header_sheet" })}
                    data-evt="whatsapp_click"
                    className={waClasses}
                  >
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                      <WhatsIcon size={24} />
                    </span>
                    <span className="leading-none">Agendar agora pelo WhatsApp</span>
                  </a>

                  <Button variant="outline" className="h-12 bg-transparent text-lg font-bold" asChild data-evt="form_open"
                    onClick={() => track("form_click", { where: "header_sheet" })}
                  >
                    <Link href="#formulario">Preencher formulário de consulta</Link>
                  </Button>

                  <Button variant="ghost" className="h-12 text-lg font-bold" asChild data-evt="phone_click"
                    onClick={() => track("phone_click", { where: "header_sheet" })}
                  >
                    <a href={site.phoneHref} className="inline-flex items-center gap-2">
                      <PhoneCall className="h-6 w-6" />
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
                      className="h-12 w-full border border-white/70 bg-sky-500 text-lg font-bold hover:bg-sky-600"
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
                      <a
                        href={whatsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${waClasses} w-full`}
                        data-evt="whatsapp_click"
                        onClick={() => track("whatsapp_click", { where: "header_mobile_sheet" })}
                      >
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          <WhatsIcon size={24} />
                        </span>
                        <span className="leading-none">Agendar agora pelo WhatsApp</span>
                      </a>

                      <Button variant="outline" className="h-12 bg-transparent text-lg font-bold" asChild data-evt="form_open"
                        onClick={() => track("form_click", { where: "header_mobile_sheet" })}
                      >
                        <Link href="#formulario">Preencher formulário de consulta</Link>
                      </Button>

                      <Button variant="ghost" className="h-12 text-lg font-bold" asChild data-evt="phone_click"
                        onClick={() => track("phone_click", { where: "header_mobile_sheet" })}
                      >
                        <a href={site.phoneHref} className="inline-flex items-center gap-2">
                          <PhoneCall className="h-6 w-6" />
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
