import * as React from "react"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 disabled:opacity-50 disabled:pointer-events-none"
    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "h-8 px-3 py-1",
      md: "h-9 px-4 py-2",
      lg: "h-10 px-5 py-2.5",
    }
    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      default: "bg-black text-white hover:opacity-90",
      outline: "border border-neutral-300 bg-white hover:bg-neutral-50",
      ghost: "bg-transparent hover:bg-neutral-100",
      link: "bg-transparent underline-offset-4 hover:underline",
    }
    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default Button
