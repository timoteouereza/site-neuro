// components/ui/button.tsx
"use client";

import * as React from "react";

type Variant = "default" | "outline" | "ghost" | "secondary";
type Size = "default" | "lg" | "sm";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-grid place-items-center grid-flow-col gap-2 whitespace-nowrap rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  outline:
    "border border-white/70 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4",
  lg: "h-12 px-6",
  sm: "h-9 px-3 text-sm",
};

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

/**
 * Button que respeita `asChild`.
 * - Quando `asChild` for `true`, clonamos o filho (ex.: <a />)
 *   e aplicamos TODAS as props/classes nele.
 * - Quando `asChild` for `false`, renderizamos <button>.
 */
export function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  children,
  ...props
}: ButtonProps) {
  const classes = cx(base, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      ...props,
      className: cx(classes, (children as any).props?.className),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
