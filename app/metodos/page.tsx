import Link from "next/link"
import { Coffee, Droplets, Clock, Flame, Zap, Beaker, Timer, Thermometer, Scale } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function MetodosPage() {
  const metodos = [
    {
      name: "Espresso",
      href: "/metodos/espresso",
      icon: <Coffee className="h-6 w-6" />,
      tempo: "25-30s",
      temperatura: "90-96°C",
      corpo: "Alto",
      acidez: "Baixa",
      doçura: "Alta",
      perfil: "Concentrado, cremoso, intenso",
      tipo: "Pressão",
      filtro: "Metal",
      dificuldade: "Alta",
      description: "Base de todas as bebidas com leite, produz café concentrado com crema característica.",
    },
    {
      name: "V60",
      href: "/metodos/v60",
      icon: <Droplets className="h-6 w-6" />,
      tempo: "2:30-3:30",
      temperatura: "92-96°C",
      corpo: "Baixo",
      acidez: "Alta",
      doçura: "Média",
      perfil: "Limpo, brilhante, floral",
      tipo: "Pour-over",
      filtro: "Papel",
      dificuldade: "Média",
      description: "Método japonês que destaca acidez e notas delicadas com clareza excepcional.",
    },
    {
      name: "AeroPress",
      href: "/metodos/aeropress",
      icon: <Zap className="h-6 w-6" />,
      tempo: "2:30-3:00",
      temperatura: "80-85°C",
      corpo: "Médio",
      acidez: "Baixa",
      doçura: "Alta",
      perfil: "Limpo, encorpado, versátil",
      tipo: "Imersão + Pressão",
      filtro: "Papel",
      dificuldade: "Baixa",
      description: "Versátil e tolerante a erros, combina imersão com pressão suave.",
    },
    {
      name: "Chemex",
      href: "/metodos/chemex",
      icon: <Beaker className="h-6 w-6" />,
      tempo: "4:00-4:30",
      temperatura: "94-96°C",
      corpo: "Muito Baixo",
      acidez: "Alta",
      doçura: "Baixa",
      perfil: "Cristalino, delicado, puro",
      tipo: "Pour-over",
      filtro: "Papel Espesso",
      dificuldade: "Média",
      description: "Filtração superior produz cafés excepcionalmente limpos e brilhantes.",
    },
    {
      name: "French Press",
      href: "/metodos/french-press",
      icon: <Clock className="h-6 w-6" />,
      tempo: "4:00",
      temperatura: "92-94°C",
      corpo: "Alto",
      acidez: "Baixa",
      doçura: "Alta",
      perfil: "Encorpado, oleoso, intenso",
      tipo: "Imersão",
      filtro: "Metal",
      dificuldade: "Baixa",
      description: "Método tradicional que preserva óleos e produz café com corpo pronunciado.",
    },
    {
      name: "Moka",
      href: "/metodos/moka",
      icon: <Flame className="h-6 w-6" />,
      tempo: "3-5min",
      temperatura: "Variável",
      corpo: "Alto",
      acidez: "Baixa",
      doçura: "Média",
      perfil: "Concentrado, aromático, tradicional",
      tipo: "Pressão",
      filtro: "Metal",
      dificuldade: "Média",
      description: "Cafeteira italiana que produz café concentrado com tradição familiar.",
    },
  ]

  const tiposMetodos = [
    {
      tipo: "Pour-over (Despejo)",
      metodos: ["V60", "Chemex", "Kalita Wave"],
      caracteristicas: "Controle total sobre extração, destaca acidez e clareza",
      perfil: "Limpo, brilhante, notas delicadas",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
    },
    {
      tipo: "Imersão",
      metodos: ["French Press", "AeroPress", "Cold Brew"],
      caracteristicas: "Contato prolongado, extração uniforme, corpo pronunciado",
      perfil: "Encorpado, doce, equilibrado",
      icon: <Clock className="h-8 w-8 text-green-500" />,
    },
    {
      tipo: "Pressão",
      metodos: ["Espresso", "Moka", "AeroPress"],
      caracteristicas: "Extração rápida, concentração alta, crema",
      perfil: "Intenso, concentrado, cremoso",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Métodos de Preparo"
        description="Descubra como diferentes métodos de extração transformam o mesmo café em experiências sensoriais únicas."
        icon={<Coffee className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          {/* Introdução */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">A Arte da Extração</h2>
            <p className="text-lg text-[#884A39]/80 dark:text-amber-100/90 leading-relaxed mb-8">
              Cada método de preparo é uma ferramenta que permite extrair diferentes características do mesmo grão de
              café. A escolha do método determina o corpo, acidez, doçura e perfil aromático da sua xícara final.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Timer className="h-8 w-8 text-[#C38154] dark:text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-[#884A39] dark:text-amber-200 mb-2">Tempo de Contato</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  De 25 segundos (espresso) até 24 horas (cold brew)
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Thermometer className="h-8 w-8 text-[#C38154] dark:text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-[#884A39] dark:text-amber-200 mb-2">Temperatura</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  De água fria até 96°C, cada temperatura extrai compostos diferentes
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Scale className="h-8 w-8 text-[#C38154] dark:text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-[#884A39] dark:text-amber-200 mb-2">Pressão</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  De pressão atmosférica até 9 bar no espresso
                </p>
              </div>
            </div>
          </div>

          {/* Tipos de Métodos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-8 text-center">
              Categorias de Extração
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiposMetodos.map((categoria, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {categoria.icon}
                    <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300">{categoria.tipo}</h3>
                  </div>
                  <p className="text-[#884A39]/80 dark:text-amber-100/80 mb-4">{categoria.caracteristicas}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#884A39] dark:text-amber-200 mb-2">Métodos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {categoria.metodos.map((metodo, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#F9E0BB]/50 dark:bg-amber-900/30 text-[#884A39] dark:text-amber-200 rounded-full text-sm"
                        >
                          {metodo}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/20 rounded">
                    <p className="text-sm text-[#884A39] dark:text-amber-200">
                      <strong>Perfil:</strong> {categoria.perfil}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparação de Métodos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-8 text-center">
              Comparação Detalhada
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <thead className="bg-[#F9E0BB] dark:bg-amber-900/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">Método</th>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">Tempo</th>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">Corpo</th>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">Acidez</th>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">Doçura</th>
                    <th className="px-4 py-3 text-left text-[#884A39] dark:text-amber-200 font-semibold">
                      Dificuldade
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  {metodos.map((metodo, index) => (
                    <tr key={index} className="hover:bg-[#F9E0BB]/20 dark:hover:bg-amber-900/20 transition-colors">
                      <td className="px-4 py-3">
                        <Link
                          href={metodo.href}
                          className="flex items-center gap-2 text-[#884A39] dark:text-amber-200 hover:text-[#C38154] dark:hover:text-amber-400 transition-colors"
                        >
                          {metodo.icon}
                          <span className="font-medium">{metodo.name}</span>
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-[#884A39]/80 dark:text-amber-100/80">{metodo.tempo}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            metodo.corpo === "Alto"
                              ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                              : metodo.corpo === "Médio"
                                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                                : metodo.corpo === "Baixo"
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {metodo.corpo}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            metodo.acidez === "Alta"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                              : metodo.acidez === "Média"
                                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                                : "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                          }`}
                        >
                          {metodo.acidez}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            metodo.doçura === "Alta"
                              ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                              : metodo.doçura === "Média"
                                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {metodo.doçura}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            metodo.dificuldade === "Alta"
                              ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                              : metodo.dificuldade === "Média"
                                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                                : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                          }`}
                        >
                          {metodo.dificuldade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards dos Métodos */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-8 text-center">
              Explore Cada Método
            </h2>

            <p className="text-lg text-[#884A39]/80 dark:text-amber-100/90 leading-relaxed mb-8">
              Cada método de preparo oferece uma experiência única. Clique em cada um para aprender mais sobre suas
              características, perfil de sabor e dicas de preparo.
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metodos.map((metodo, index) => (
                <Link key={index} href={metodo.href} className="group">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#F9E0BB] dark:bg-amber-900/50 rounded-full group-hover:scale-110 transition-transform">
                        {metodo.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300">{metodo.name}</h3>
                    </div>

                    <p className="text-[#884A39]/80 dark:text-amber-100/80 mb-4 text-sm">{metodo.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#884A39]/70 dark:text-amber-100/70">Tipo:</span>
                        <span className="text-[#884A39] dark:text-amber-200 font-medium">{metodo.tipo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#884A39]/70 dark:text-amber-100/70">Filtro:</span>
                        <span className="text-[#884A39] dark:text-amber-200 font-medium">{metodo.filtro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#884A39]/70 dark:text-amber-100/70">Temperatura:</span>
                        <span className="text-[#884A39] dark:text-amber-200 font-medium">{metodo.temperatura}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/20 rounded">
                      <p className="text-sm text-[#884A39] dark:text-amber-200">
                        <strong>Perfil:</strong> {metodo.perfil}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Guia de Escolha */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-8 text-center">
              Como Escolher o Método Ideal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-4 bg-[#F9E0BB] dark:bg-amber-900/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">☕</span>
                </div>
                <h3 className="font-bold text-[#884A39] dark:text-amber-300 mb-2">Para Iniciantes</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  French Press ou AeroPress - métodos tolerantes a erros
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-[#F9E0BB] dark:bg-amber-900/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-[#884A39] dark:text-amber-300 mb-2">Para Precisão</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  V60 ou Chemex - controle total sobre variáveis
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-[#F9E0BB] dark:bg-amber-900/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-[#884A39] dark:text-amber-300 mb-2">Para Rapidez</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Espresso ou Moka - café concentrado em minutos
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-[#F9E0BB] dark:bg-amber-900/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-bold text-[#884A39] dark:text-amber-300 mb-2">Para Clareza</h3>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Chemex ou V60 - destacam notas delicadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
