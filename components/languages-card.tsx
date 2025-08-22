"use client"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import Image from "next/image"

const languages = [
  { name: "Português", flag: "/flags/brazil.png" },
  { name: "Inglês", flag: "/flags/usa.png" },
  { name: "Espanhol", flag: "/flags/spain.png" },
  { name: "Árabe", flag: "/flags/lebanon.png" },
]

export default function LanguagesCard({ index }: { index: number }) {
  const accents = [
    {
      bar: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
      icon: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    },
    {
      bar: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
      icon: "bg-gradient-to-br from-green-400 to-green-600",
    },
  ]

  const a = accents[index % 2]

  return (
    <motion.section
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
          <Languages className="w-6 h-6" stroke="white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-50">Ofereço consultas em:</h3>

        <div className="grid grid-cols-2 gap-3 mt-4 flex-grow">
          {languages.map((language, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-600/50">
              <div className="w-12 h-8 rounded-md overflow-hidden flex-shrink-0 border border-slate-400/30 shadow-sm">
                <Image
                  src={language.flag || "/placeholder.svg"}
                  alt={`${language.name} flag`}
                  width={48}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-slate-200 font-medium text-center">{language.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
