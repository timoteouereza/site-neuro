"use client"

export function track(event: string, data?: Record<string, any>) {
  if (typeof window === "undefined") return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push({ event, ...data })
  if ((window as any).va) {
    // Vercel Analytics custom event (noop if not configured)
    ;(window as any).va(event, data)
  }
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("[track]", event, data || {})
  }
}
