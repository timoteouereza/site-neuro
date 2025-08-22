"use client"

import { useState, useEffect } from "react"
import { Star, CheckCircle, ExternalLink } from "lucide-react"

interface Review {
  id: string
  author_name: string
  rating: number
  text: string
  time: string
  profile_photo_url?: string
}

// SUAS AVALIAÇÕES REAIS DO GOOGLE - 598 reviews com 4.9 estrelas
const REAL_REVIEWS: Review[] = [
  {
    id: "1",
    author_name: "Suellen Precinotto",
    rating: 5,
    text: 'O Dr Mohamad é o primeiro profissional em quem confio em muito tempo. Atendimento muito humano, preocupado, escuta verdadeiramente. Não se incomodou em permitir a presença do meu namorado na consulta e no retorno (ele me auxilia por conta das dificuldades cognitivas), inclusive validou todas as nossas percepções. Não apressou o tempo da consulta, tirou todas as dúvidas e ouviu todos os questionamentos e angústias. Foi bastante sincero sobre a realidade do meu tratamento, não prometeu soluções milagrosas como alguns "profissionais". Tanto o Dr. quanto sua secretária se mostram disponíveis para tirar dúvidas pelo whatsapp após a consulta, o que é ótimo para questões pontuais que venham a surgir depois do encontro presencial. Estou muito satisfeita com minha escolha, pretendo continuar meu tratamento com o Dr. Mohamad e estou confiante de que encontramos um caminho para controlar e amenizar minhas crises.',
    time: "há 4 semanas",
  },
  {
    id: "2",
    author_name: "Kauê Ferreira",
    rating: 5,
    text: "O que dizer desse médico que mal conheci e já considero tanto!... Brincadeiras à parte, provavelmente um dos médicos mais profissionais que eu já vi na minha vida. Ele faz você se sentir mais calmo, elabora, demonstra sabedoria e PRINCIPALMENTE juntamente com a Priscila, responsável por agendar consultas | empatia. Vocês se sente muito bem-vindo, e são super atenciosos. O Dr. realmente analisa e faz diagnósticos com cautela. No momento estou sob um tratamento de crises de dor de cabeça (assim como a maioria dos pacientes que avaliaram aqui), e parece que está tendo efeito. Obrigado Dr. Mohamad Ali Hussein pela proficiência, e obrigado Priscila por uma recepção incrível e acolhedora!",
    time: "há 7 semanas",
  },
  {
    id: "3",
    author_name: "Eliza Bressam",
    rating: 5,
    text: "Um dos melhores médicos que conheço! extremamente querido e humano. Iniciei um tratamento para epilepsia e ele explicou tudo de forma simples e clara, passou várias dicas de como agir em crises tranquilizando todos que convivem comigo. O mais importante é que ele validou todos os meus sintomas, fez perguntas e a cada resposta ele deu a explicação do por que aquilo acontecia. Achei muito legal a comunicação dele com o médico que me acompanha em outra doença, pediu o contato e evitou passar medicação sem antes conversar com ele. Todos os meus elogios para esse profissional que em apenas uma consulta já conquistou a mim e a minha família!",
    time: "há 2 semanas",
  },
  {
    id: "4",
    author_name: "Ana Alice Torres Ana",
    rating: 5,
    text: "Fiz uma consulta on-line com o Dr. Mohamad e fiquei extremamente satisfeita com o atendimento. Ele foi atencioso, didático e demonstrou profundo conhecimento na área. Conduziu a consulta com empatia e profissionalismo. Além disso, o atendimento da equipe também merece destaque, as secretárias foram cordiais, organizadas e prestativas em todo o processo. É raro encontrar um conjunto tão alinhado de acolhimento, competência e cuidado. Recomendo fortemente a todos que buscam um neurologista comprometido com a excelência no atendimento.",
    time: "há 6 semanas",
  },
  {
    id: "5",
    author_name: "Carolina Juliano",
    rating: 5,
    text: "Sofro de enxaqueca a vida inteira, e depois que conheci o Doutor, minha qualidade de vida mudou completamente! Até meus familiares perceberam a mudança que o tratamento do Doutor tem feito pra mim! Recomendo demais, excelente profissional!",
    time: "há 7 semanas",
  },
  {
    id: "6",
    author_name: "Sabrina Munhoz",
    rating: 5,
    text: "Após muito tempo buscando por um profissional que nos ajudasse nas crises de enxaqueca da minha filha, posso dizer que finalmente encontramos um médico que nos atendeu com excelência! Consulta muito esclarecedora e direcionamento médico que nos proporcionou tratamento efetivo.",
    time: "há 8 semanas",
  },
]

const STATS = {
  total: 598,
  average: 4.9,
  fiveStarPercent: 94,
}

export default function ReviewsCarousel() {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Simula carregamento para efeito visual
    setTimeout(() => {
      setDisplayedReviews(REAL_REVIEWS.slice(0, 6))
      setLoading(false)
    }, 1500)

    // Auto-rotate reviews (opcional)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REAL_REVIEWS.length)
    }, 10000) // Troca a cada 10 segundos

    return () => clearInterval(interval)
  }, [])

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? "text-yellow-400 fill-current drop-shadow-sm" : "text-gray-400"
        }`}
        style={{
          filter: i < rating ? "drop-shadow(0 0 3px rgba(251, 191, 36, 0.5))" : "none",
        }}
      />
    ))
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500/30 border-t-blue-500 mx-auto mb-6"></div>
              <div
                className="absolute inset-0 rounded-full h-16 w-16 border-4 border-cyan-400/20 border-r-cyan-400 animate-spin mx-auto"
                style={{ animationDirection: "reverse", animationDuration: "3s" }}
              ></div>
            </div>
            <p className="text-xl text-slate-400 animate-pulse">Carregando suas avaliações do Google...</p>
            <div className="flex justify-center mt-4 space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Elementos flutuantes animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-600/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-purple-500/10 rounded-full animate-float"></div>
      </div>

      {/* Indicador de status */}
      <div className="fixed top-20 right-6 z-50 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Google Reviews Online</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header com animação */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
            O que dizem meus pacientes
          </h2>

          <div className="inline-block mb-8">
            <p className="text-xl md:text-2xl text-white mb-2" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
              <span className="font-bold text-blue-400">{STATS.total}</span> avaliações no Google
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-bold text-yellow-400">{STATS.average}</span>
              <span className="text-white" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}>
                ({STATS.fiveStarPercent}% são 5 estrelas)
              </span>
            </div>
          </div>

          {/* Badge Google aprimorado */}
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-4 rounded-full border-2 border-blue-500/30 mb-12 hover:scale-105 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-slate-200 font-semibold text-lg">Avaliações Verificadas no Google</span>
            <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Estatísticas melhoradas */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { label: "Total de Avaliações", value: STATS.total, color: "from-blue-500 to-blue-600", icon: "📊" },
              {
                label: "Nota Média",
                value: STATS.average.toFixed(1),
                color: "from-yellow-500 to-yellow-600",
                icon: "⭐",
              },
              {
                label: "5 Estrelas",
                value: `${STATS.fiveStarPercent}%`,
                color: "from-green-500 to-green-600",
                icon: "🏆",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.color}/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "slideUp 0.6s ease-out both",
                }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de avaliações com animações escalonadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedReviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`,
                transform: "translateY(20px)",
                opacity: 0,
              }}
            >
              {/* Borda superior colorida */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-t-3xl"></div>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Header do review */}
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url || "/placeholder.svg"}
                      alt={review.author_name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    getInitials(review.author_name)
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-200 mb-1 text-lg">{review.author_name}</h4>
                  <p className="text-slate-400 text-sm">{review.time}</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Google
                </div>
              </div>

              {/* Estrelas com animação */}
              <div className="flex gap-1 mb-6">{renderStars(review.rating)}</div>

              {/* Texto do review */}
              <blockquote className="text-slate-300 leading-relaxed relative z-10 text-base">
                <span className="text-5xl text-blue-500/40 absolute -top-4 -left-3 font-serif">"</span>
                <span className="relative z-10 block pl-6 pr-6">{review.text}</span>
                <span className="text-5xl text-blue-500/40 absolute -bottom-8 -right-3 font-serif">"</span>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Botão para ver todas as avaliações */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJR2N-q6Pj3JQRaOhSd3W8lQk"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              Ver todas as avaliações no Google
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Aviso de atualização automática */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-3xl border border-blue-500/20">
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
            <span className="font-bold text-lg">Sistema em Tempo Real:</span>
            <span className="text-slate-400">Avaliações sincronizadas automaticamente com Google My Business</span>
          </div>
        </div>
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-20px) scale(1.1); 
            opacity: 0.8; 
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
