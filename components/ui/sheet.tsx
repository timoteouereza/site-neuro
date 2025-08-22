"use client"

import * as React from "react"

type SheetContextType = {
  open: boolean
  setOpen: (v: boolean) => void
}

const SheetContext = React.createContext<SheetContextType | null>(null)

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({
  children,
}: {
  children: React.ReactElement
}) {
  const ctx = React.useContext(SheetContext)
  if (!ctx) return children
  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e)
      ctx.setOpen(true)
    },
  })
}

export function SheetContent({
  side = "right",
  className = "",
  children,
}: {
  side?: "right" | "left" | "top" | "bottom"
  className?: string
  children: React.ReactNode
}) {
  const ctx = React.useContext(SheetContext)
  if (!ctx) return null

  const positions: Record<string, string> = {
    right: "right-0 top-0 h-full w-80 border-l",
    left: "left-0 top-0 h-full w-80 border-r",
    top: "top-0 left-0 w-full h-72 border-b",
    bottom: "bottom-0 left-0 w-full h-72 border-t",
  }

  return ctx.open ? (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => ctx.setOpen(false)}
      />
      <div
        className={`fixed z-50 bg-white shadow-lg ${positions[side]} ${className}`}
      >
        <div className="p-4">
          <button
            className="mb-3 text-sm text-neutral-600"
            onClick={() => ctx.setOpen(false)}
          >
            fechar
          </button>
          {children}
        </div>
      </div>
    </>
  ) : null
}

export const SheetHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2">{children}</div>
)
export const SheetTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold">{children}</h3>
)
export const SheetDescription = ({
  children,
}: {
  children: React.ReactNode
}) => <p className="text-sm text-neutral-600">{children}</p>
export const SheetFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">{children}</div>
)
