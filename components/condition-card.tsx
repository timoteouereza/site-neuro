"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Condition } from "@/lib/site"
import { buildWhatsAppHref } from "@/lib/site"
import { useUtm } from "@/hooks/use-utm"
import { track } from "@/lib/tracking"

const accents = [
  {
    bar: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
    icon: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    cta: "from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800",
  },
  {
    bar: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
    icon: "bg-gradient-to-br from-green-400 to-green-600",
    cta: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
  },
]

export default function ConditionCard({ condition, index }: { condition: Condition; index: number }) {
  const utm = useUtm()
  const href = buildWhatsAppHref({
    utm,
    message: "Olá, vim através da nova página do Dr. Mohamad e gostaria de saber mais sobre a minha consulta",
    context: condition.title,
  })
  const a = accents[index % 2]

  return (
    <motion.section
      id={condition.id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
    >
      <div className="condition-card relative rounded-2xl p-6 border border-slate-500/20 shadow-md bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex flex-col min-h-full">
        {/* Top colored border */}
        <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl ${a.bar}`} />

        {/* Icon */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md mb-4 ${a.icon}`}>
          <condition.icon className="w-6 h-6" stroke="white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-50">{condition.title}</h3>

        {/* Hook text */}
        <p className="text-base text-slate-300 mt-2">{condition.lead}</p>

        {/* Bullet list */}
        <ul className="list-disc list-outside pl-6 text-base text-slate-300 space-y-1 mt-3 flex-grow">
          {condition.bullets.map((bullet, index) => (
            <li key={index} className="marker:text-slate-400">
              {bullet.replace("• ", "")}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto pt-6">
          <Button
            className={`w-full py-4 px-4 rounded-md text-lg font-bold bg-gradient-to-br ${a.cta} shadow-md transition-colors border-0 text-white`}
            asChild
            data-evt={`cta_condition_${condition.id}`}
            onClick={() => track("cta_condition", { id: condition.id })}
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {condition.cta}
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
