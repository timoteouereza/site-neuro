"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-3 text-base rounded-xl",
  lg: "px-7 py-4 text-lg rounded-2xl",
  xl: "px-8 py-5 text-2xl rounded-2xl",
};

const iconSize: Record<NonNullable<Props["size"]>, number> = {
  sm: 20,
  md: 22,
  lg: 28,
  xl: 34,
};

export default function WhatsAppButton({
  href,
  label,
  size = "md",
  fullWidth = false,
  className = "",
}: Props) {
  const s = sizeClass[size];
  const is = iconSize[size];

  const base =
    "inline-flex items-center justify-center gap-3 border-2 border-white " +
    "bg-[#25D366] text-white font-semibold leading-none whitespace-nowrap " +
    "shadow-md hover:brightness-95 transition focus:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-transparent";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${s} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {/* Ícone WhatsApp (usa a mesma cor do texto) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={is}
        height={is}
        viewBox="0 0 24 24"
        className="shrink-0"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
      </svg>
      <span>{label}</span>
    </Link>
  );
}
