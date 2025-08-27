// components/cta-whatsapp.tsx
"use client";

import * as React from "react";

type Size = "md" | "lg";

const WhatsIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

export function CtaWhatsapp({
  href,
  text,
  dataEvt,
  size = "md",
  full = false,
  onClick,
}: {
  href: string;
  text: string;
  dataEvt: string;
  size?: Size;
  full?: boolean;
  onClick?: () => void;
}) {
  const pad =
    size === "lg" ? "px-12 py-6 text-3xl" : "px-8 py-4 text-lg";
  const icon = size === "lg" ? 32 : 24;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-evt={dataEvt}
      onClick={onClick}
      className={[
        "cta-whatsapp",
        pad,
        "rounded-2xl border-2 border-white/70",
        "bg-emerald-500 hover:brightness-95 text-white",
        "font-bold shadow-md",
        full ? "w-full" : "",
      ].join(" ")}
    >
      <WhatsIcon size={icon} />
      <span className="cta-whatsapp__label">{text}</span>
    </a>
  );
}

export default CtaWhatsapp;
