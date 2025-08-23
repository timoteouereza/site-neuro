import * as React from "react"

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
      default:
        "bg-black text-white border-transparent",
      secondary:
        "bg-neutral-100 text-neutral-800 border-neutral-200",
      outline:
        "bg-transparent text-neutral-700 border-neutral-300",
      destructive:
        "bg-red-600 text-white border-transparent",
    }

    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export default Badge
