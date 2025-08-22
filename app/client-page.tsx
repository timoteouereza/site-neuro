"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, LineChart, Shield, Star, Quote, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </div>
  )
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function PriceItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
      <span>{children}</span>
    </li>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
              <div className="flex flex-col justify-center">
                <SectionLabel>Meet StreamLine</SectionLabel>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Supercharge your workflow. Ship 3x faster.
                </h1>
                <p className="mt-4 max-w-prose text-muted-foreground sm:text-lg">
                  Automate repetitive tasks, collaborate seamlessly, and gain real-time insights across your projects —
                  all in one place.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#pricing"
                    className={cn(
                      "inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium text-white shadow",
                      "bg-emerald-600 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30",
                    )}
                    aria-label="Get started with StreamLine"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#features"
                    className={cn(
                      "inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium",
                      "hover:bg-accent hover:text-accent-foreground",
                    )}
                    aria-label="Learn more about StreamLine features"
                  >
                    Learn more
                  </Link>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                  <span>{"Loved by 5,000+ teams worldwide"}</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={"/placeholder.svg?height=520&width=720&query=streamline%20dashboard%20ui%20mock"}
                  alt="StreamLine dashboard preview"
                  width={720}
                  height={520}
                  className="mx-auto aspect-[4/3] rounded-xl border object-cover shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full py-16 sm:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Features</SectionLabel>
              <h2 className="mt-3 text-pretty text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
              <p className="mt-3 text-muted-foreground">
                StreamLine brings your team, tools, and data together so you can move from idea to production with speed
                and confidence.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon={ZapIcon}
                title="Automation Flows"
                description="Eliminate busywork with no-code and low-code automation for recurring tasks."
              />
              <Feature
                icon={LineChart}
                title="Real-time Insights"
                description="Dashboards and alerts help you track progress and catch issues early."
              />
              <Feature
                icon={Shield}
                title="Enterprise-grade Security"
                description="SSO, audit logs, and granular permissions out of the box."
              />
              <Feature
                icon={Clock}
                title="Lightning Performance"
                description="Optimized to be fast, reliable, and always available for your team."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full border-y bg-muted/40 py-16 sm:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-3 text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
                Teams that ship choose StreamLine
              </h2>
              <p className="mt-3 text-muted-foreground">
                Don&apos;t just take our word for it. Here&apos;s what our customers say.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "VP Engineering, PixelWorks",
                  img: "/portrait-tech-leader.png",
                  quote: "StreamLine has transformed our release cadence. We ship features in days, not weeks.",
                },
                {
                  name: "Priya Singh",
                  role: "CTO, Nimbus Cloud",
                  img: "/portrait-cto.png",
                  quote: "The automation flows removed 80% of our manual handoffs. It just works.",
                },
                {
                  name: "Diego Martinez",
                  role: "Product Lead, NovaLabs",
                  img: "/portrait-product-lead.png",
                  quote: "Our team finally has a single source of truth. The insights are invaluable.",
                },
              ].map((t, i) => (
                <Card key={i} className="flex h-full flex-col">
                  <CardHeader className="space-y-4">
                    <Quote className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    <CardDescription className="text-base">{t.quote}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={t.img || "/placeholder.svg"} alt={`${t.name} avatar`} />
                        <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-16 sm:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="mt-3 text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent plans
              </h2>
              <p className="mt-3 text-muted-foreground">
                Start free. Upgrade as your team grows. No hidden fees, cancel anytime.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For individuals and small experiments</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-6">
                  <div>
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">{" / mo"}</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <PriceItem>Up to 3 projects</PriceItem>
                    <PriceItem>Basic automation</PriceItem>
                    <PriceItem>Community support</PriceItem>
                  </ul>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    asChild
                    aria-label="Get started with Starter plan"
                  >
                    <Link href="#cta">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative flex h-full flex-col border-emerald-600">
                <div className="absolute right-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Best for growing teams</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-6">
                  <div>
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">{" / mo"}</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <PriceItem>Unlimited projects</PriceItem>
                    <PriceItem>Advanced automation flows</PriceItem>
                    <PriceItem>Real-time dashboards</PriceItem>
                    <PriceItem>Priority support</PriceItem>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild aria-label="Choose Pro plan">
                    <Link href="#cta">Choose Pro</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Security, scale, and dedicated support</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <PriceItem>SSO, audit logs, and SAML</PriceItem>
                    <PriceItem>Custom SLAs</PriceItem>
                    <PriceItem>Dedicated solutions engineer</PriceItem>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    asChild
                    aria-label="Contact sales about Enterprise plan"
                  >
                    <Link href="#footer">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="w-full border-t bg-muted/40 py-16 sm:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-xl border bg-background p-6 sm:p-10">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to streamline your workflow?
                </h2>
                <p className="mt-3 text-muted-foreground">Start free in minutes. No credit card required.</p>
              </div>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
                  alert(`Thanks! We'll reach out to ${email}.`)
                }}
                aria-label="Signup form"
              >
                <div className="grid flex-1 gap-2">
                  <label htmlFor="email" className="sr-only">
                    Work email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={cn(
                        "h-11 w-full rounded-md border bg-background pl-10 pr-3 text-sm outline-none",
                        "focus-visible:ring-2 focus-visible:ring-emerald-600/30",
                      )}
                      aria-describedby="email-help"
                    />
                  </div>
                  <span id="email-help" className="sr-only">
                    Enter your work email to sign up
                  </span>
                </div>
                <Button
                  type="submit"
                  className="h-11 w-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto"
                  aria-label="Create your free account"
                >
                  Create free account
                </Button>
              </form>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                14-day Pro trial included. No commitment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

/* Small local icon proxy so Feature accepts Zap without importing different name */
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 Z" />
    </svg>
  )
}
