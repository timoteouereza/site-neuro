"use client";

import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm rounded-xl",
  md: "h-10 px-4 text-base rounded-xl",
  lg: "h-12 px-5 text-lg rounded-2xl",
  xl: "h-14 px-6 text-xl rounded-2xl",
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-black text-white hover:opacity-90",
  outline:
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50",
  ghost:
    "bg-transparent text-neutral-900 hover:bg-neutral-100",
  link:
    "bg-transparent text-neutral-900 underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 leading-none whitespace-nowrap " +
  "transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

export const Button = React.forwardRef<any, React.PropsWithChildren<ButtonProps>>(
  ({ asChild, variant = "default", size = "md", className = "", children, ...props }, ref) => {
    const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    // Se asChild=true, aplica as classes no filho (ex.: <a> ou <Link>)
    if (asChild && React.isValidElement(children)) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        ref,
        className: [classes, child.props.className].filter(Boolean).join(" "),
        ...props,
      });
    }

    // Comportamento padrão: <button>
    return (
      <button ref={ref as any} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

