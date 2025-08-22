"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { conditions, buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

type FormState = {
  name: string
  phone: string
  email: string
  reason: string
  message: string
  honeypot: string
}

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  reason: "",
  message: "",
  honeypot: "",
}

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitting, setSubmitting] = useState(false)
  const [showWhats, setShowWhats] = useState(false)
  const { toast } = useToast()
  const utm = useUtm()

  const phoneMasked = useMemo(() => maskPhone(form.phone), [form.phone])

  const whatsHref = useMemo(() => {
    const parts = [
      `Olá, meu nome é ${form.name || "(nome)"}.`,
      `Gostaria de agendar consulta com o Dr. Mohamad.`,
      form.reason ? `Motivo/Condição: ${form.reason}.` : "",
      form.message ? `Mensagem: ${form.message}.` : "",
      form.phone ? `Telefone: ${phoneMasked}.` : "",
      form.email ? `E-mail: ${form.email}.` : "",
    ].filter(Boolean)
    return buildWhatsAppHref({ utm, message: parts.join(" ") })
  }, [form, phoneMasked, utm])

  function onChange<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: key === "phone" ? onlyDigits(value) : value }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (form.honeypot) return // bot
    if (!validate(form)) {
      toast({ description: "Verifique os campos e tente novamente." })
      return
    }
    setSubmitting(true)
    track("form_submit", { where: "appointment" })

    try {
      // Simula envio por e-mail (integrar com seu provedor posteriormente)
      await new Promise((r) => setTimeout(r, 800))

      setShowWhats(true)
      toast({ description: "Recebemos seus dados. Em breve entraremos em contato." })
      // Opcional: abrir e-mail do usuário:
      // window.location.href = `mailto:contato@seudominio.com?subject=Agendamento&body=${encodeURIComponent(JSON.stringify(form, null, 2))}`
    } catch (err) {
      toast({ description: "Não foi possível enviar. Tente novamente em instantes." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} aria-label="Formulário de agendamento">
      <div className="grid gap-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          autoComplete="name"
          value={form.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Telefone/WhatsApp</Label>
        <Input
          id="phone"
          name="phone"
          inputMode="tel"
          placeholder="(41) 9 9292-8930"
          value={phoneMasked}
          onChange={(e) => onChange("phone", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">E‑mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="voce@exemplo.com"
          autoComplete="email"
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label>Motivo/Condição</Label>
        <Select value={form.reason} onValueChange={(v) => onChange("reason", v)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            {conditions.map((c) => (
              <SelectItem key={c.id} value={c.title}>
                {c.title}
              </SelectItem>
            ))}
            <SelectItem value="Outra">Outra</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Descreva brevemente seu caso"
          className="min-h-[96px]"
          value={form.message}
          onChange={(e) => onChange("message", e.target.value)}
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => onChange("honeypot", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button type="submit" className="h-11 bg-sky-500 hover:bg-sky-600" data-evt="form_submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar"}
        </Button>
        {showWhats && (
          <Button
            asChild
            variant="outline"
            className="h-11 bg-transparent"
            data-evt="whatsapp_after_form"
            onClick={() => track("whatsapp_click", { where: "form_after_submit" })}
          >
            <a href={whatsHref} target="_blank" rel="noopener noreferrer">
              Enviar pelo WhatsApp
            </a>
          </Button>
        )}
      </div>
    </form>
  )
}

function onlyDigits(v: string) {
  return v.replace(/\D+/g, "")
}

function maskPhone(digits: string) {
  const v = digits.replace(/\D+/g, "").slice(0, 11)
  if (v.length <= 10) {
    // (41) 2929-8929
    return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2")
  }
  // (41) 9 9292-8930
  return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{1})(\d{4})(\d)/, "$1 $2-$3")
}

function validate(f: FormState) {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)
  const phoneOk = f.phone.replace(/\D+/g, "").length >= 10
  return f.name.length > 1 && emailOk && phoneOk
}
