export default function LanguagesStrip() {
  const languages = [
    { flag: "🇧🇷", name: "Português" },
    { flag: "🇺🇸", name: "Inglês" },
    { flag: "🇪🇸", name: "Espanhol" },
    { flag: "🇱🇧", name: "Árabe" },
  ]

  return (
    <section className="bg-blue-500 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white">Ofereço consultas em:</h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-4 gap-8 sm:gap-12">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-2xl sm:text-3xl mb-2 drop-shadow-sm">{lang.flag}</div>
                <span className="text-sm sm:text-base font-medium text-white">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
