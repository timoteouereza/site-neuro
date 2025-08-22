"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="StreamLine home">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Workflow className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">StreamLine</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#pricing"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow",
              "bg-emerald-600 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30",
            )}
          >
            Get Started
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="container px-4 py-3 md:px-6" aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="#pricing"
                  className={cn(
                    "inline-flex h-9 w-full items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow",
                    "bg-emerald-600 hover:bg-emerald-700",
                  )}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
