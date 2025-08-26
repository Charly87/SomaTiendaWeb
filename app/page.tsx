"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Smartphone,
  ShoppingCart,
  MessageCircle,
  Zap,
  Users,
  Store,
  Coffee,
  Shirt,
  Utensils,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  const openWhatsApp = (plan?: string) => {
    let message = "¡Hola! Me interesa contratar el servicio de tienda online."

    if (plan) {
      const billingType = isAnnual ? "anual" : "mensual"
      message = `¡Hola! Me interesa contratar el ${plan} con facturación ${billingType}. ¿Podrían darme más información?`
    } else {
      message += " ¿Podrían darme más información?"
    }

    const whatsappMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5491140413508?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const basicPrice = 15000
  const premiumPrice = 25000
  const annualDiscount = 0.9 // 10% descuento

  const getPrice = (basePrice: number) => {
    return isAnnual ? Math.round(basePrice * annualDiscount) : basePrice
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A]">
      <nav className="bg-gradient-to-r from-[#03113A] to-[#03113A] text-white py-4 px-6 border-b border-[#00bcd4]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Somatech" width={200} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="hover:text-[#00bcd4] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Inicio
            </a>
            <a
              href="#planes"
              className="hover:text-[#00bcd4] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Planes
            </a>
            <a
              href="#demos"
              className="hover:text-[#00bcd4] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Demos
            </a>
            <a
              href="#contacto"
              className="hover:text-[#00bcd4] transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Contacto
            </a>
            <Button
              onClick={() => openWhatsApp()}
              className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00bcd4]/20 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Inicio
              </a>
              <a href="#planes" className="hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Planes
              </a>
              <a href="#demos" className="hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Demos
              </a>
              <a href="#contacto" className="hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Contacto
              </a>
              <Button
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-4 py-2 text-sm w-fit"
              >
                Contactar
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="inicio"
        className="bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] text-white py-24 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-bold text-5xl md:text-7xl mb-8 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#00bcd4] via-[#00acc1] to-[#d5006d] bg-clip-text text-transparent leading-tight">
            Obtené tu <span className="block md:inline">Tienda Online</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200 max-w-4xl mx-auto font-medium">
            Abrí tu tienda online y dejá de renegar, es más sencillo de lo que pensás.
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
            Manejá tus ventas y productos de forma práctica directo desde WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={() => openWhatsApp()}
              className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-[#00bcd4]/25 transition-all duration-300 hover:scale-105"
            >
              Comenzar Ahora
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Demos
            </Button>
          </div>

          {/* Phone Mockups */}
          <div className="flex justify-center items-center space-x-4 mt-16">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-orange-500 p-4 text-white">
                    <h3 className="font-bold text-sm">Restaurante</h3>
                    <p className="text-xs opacity-90">Menú Digital</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Pizza Margherita</p>
                        <p className="text-green-600 font-bold">$1,750</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-12 h-12 bg-red-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Hamburguesa</p>
                        <p className="text-green-600 font-bold">$1,900</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-blue-600 p-4 text-white">
                    <h3 className="font-bold text-sm">Tienda de Ropa</h3>
                    <p className="text-xs opacity-90">Catálogo Online</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Remera Básica</p>
                        <p className="text-green-600 font-bold">$2,500</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Jean Clásico</p>
                        <p className="text-green-600 font-bold">$4,200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="planes"
        className="py-24 px-6 bg-gradient-to-r from-[#03113A] via-[#03113A] to-[#03113A] text-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/20 to-[#d5006d]/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6 font-[family-name:var(--font-space-grotesk)]">
              Elegí tu Plan
            </h2>
            <p className="text-xl text-gray-200 font-medium">Soluciones adaptadas a tu tipo de negocio</p>

            <div className="flex items-center justify-center mt-10 mb-8">
              <span className={`mr-4 text-lg font-semibold ${!isAnnual ? "text-white" : "text-gray-300"}`}>
                Mensual
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 shadow-lg ${
                  isAnnual ? "bg-gradient-to-r from-[#00bcd4] to-[#00acc1]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                    isAnnual ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-4 text-lg font-semibold ${isAnnual ? "text-white" : "text-gray-300"}`}>Anual</span>
              {isAnnual && (
                <Badge className="ml-4 bg-gradient-to-r from-green-400 to-green-500 text-white border-0 shadow-lg">
                  10% OFF
                </Badge>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-[#00bcd4]/20 transition-all duration-500 hover:scale-105 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00bcd4]/5 to-transparent"></div>
              <CardHeader className="bg-gradient-to-r from-[#00bcd4] via-[#00acc1] to-[#0097a7] text-white relative">
                <CardTitle className="text-2xl font-bold">Plan Básico</CardTitle>
                <CardDescription className="text-gray-100 font-medium">
                  Perfecto para emprendedores que quieren vender fácil y rápido.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#03113A] to-[#03113A] bg-clip-text text-transparent">
                    ${getPrice(basicPrice).toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg">/{isAnnual ? "año" : "mes"}</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-2">
                      <span className="line-through">${(basicPrice * 12).toLocaleString()}/año</span>
                      <span className="text-green-600 ml-2 font-semibold">
                        Ahorrás ${(basicPrice * 12 - getPrice(basicPrice) * 12).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Catálogo de productos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Gestión de stock</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Descuentos y promociones</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Pedidos por WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Actualización en tiempo real</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  onClick={() => openWhatsApp("Plan Básico")}
                  className="w-full bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contratar Plan
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-[#d5006d]/20 transition-all duration-500 hover:scale-105 bg-white">
              <div className="absolute top-6 right-6 z-20">
                <Badge className="bg-gradient-to-r from-[#d5006d] to-[#b8005a] text-white border-0 shadow-lg px-4 py-2 text-sm font-semibold">
                  Más Popular
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#d5006d]/5 to-transparent"></div>
              <CardHeader className="bg-gradient-to-r from-[#d5006d] via-[#c2005f] to-[#b8005a] text-white relative">
                <CardTitle className="text-2xl font-bold">Plan Premium</CardTitle>
                <CardDescription className="text-gray-100 font-medium">
                  Ideal para distribuidores o ventas en grandes cantidades.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#03113A] to-[#03113A] bg-clip-text text-transparent">
                    ${getPrice(premiumPrice).toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg">/{isAnnual ? "año" : "mes"}</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-2">
                      <span className="line-through">${(premiumPrice * 12).toLocaleString()}/año</span>
                      <span className="text-green-600 ml-2 font-semibold">
                        Ahorrás ${(premiumPrice * 12 - getPrice(premiumPrice) * 12).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Todo lo del Plan Básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Gestión de clientes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Reportes de ventas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Venta mayorista</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Múltiples listas de precios</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Soporte prioritario</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  onClick={() => openWhatsApp("Plan Premium")}
                  className="w-full bg-gradient-to-r from-[#d5006d] to-[#b8005a] hover:from-[#b8005a] hover:to-[#a0004d] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contratar Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="demos"
        className="py-24 px-6 bg-gradient-to-r from-[#03113A] via-[#03113A] to-[#03113A] text-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/10 to-[#d5006d]/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6 font-[family-name:var(--font-space-grotesk)]">
              Demos por Tipo de Negocio
            </h2>
            <p className="text-xl text-gray-200 font-medium">
              Explorá cómo funciona nuestra plataforma en diferentes industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Restaurantes</CardTitle>
                <CardDescription className="font-medium">
                  Menú digital con categorías, fotos y gestión de pedidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Menú organizado por categorías</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Fotos de platos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Gestión de disponibilidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Pedidos por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-restaurante.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Ropa */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shirt className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Tienda de Ropa</CardTitle>
                <CardDescription className="font-medium">
                  Catálogo con talles, colores y gestión de inventario
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Productos por categoría</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Variantes de talle y color</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Control de stock</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Lookbook digital</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-ropa.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Cafetería */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Cafetería</CardTitle>
                <CardDescription className="font-medium">
                  Carta de bebidas, snacks y sistema de pedidos rápidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Carta de bebidas y comidas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Opciones de personalización</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Pedidos para llevar/delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Programa de fidelidad</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-cafeteria.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Supermercado */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Supermercado</CardTitle>
                <CardDescription className="font-medium">
                  Productos por categorías con búsqueda y carrito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Amplio catálogo de productos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Búsqueda por categorías</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Carrito de compras</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Ofertas y descuentos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-super.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Farmacia */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Store className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Farmacia</CardTitle>
                <CardDescription className="font-medium">Medicamentos, productos de salud y belleza</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Catálogo de medicamentos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Productos de salud y belleza</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Búsqueda por principio activo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Consultas por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-farmacia.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Servicios */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#03113A] font-bold">Servicios</CardTitle>
                <CardDescription className="font-medium">
                  Reservas, citas y gestión de servicios profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Catálogo de servicios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Sistema de reservas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Gestión de horarios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full"></div>
                    <span>Confirmación por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://demo-servicios.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/10 to-[#d5006d]/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00bcd4] to-[#d5006d] bg-clip-text text-transparent mb-6 font-[family-name:var(--font-space-grotesk)]">
              ¿Por qué elegir Somatech?
            </h2>
            <p className="text-xl text-gray-300 font-medium">La solución más completa para tu negocio online</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">100% Mobile</h3>
              <p className="text-gray-300 font-medium">
                Tu tienda se adapta perfectamente a cualquier dispositivo móvil
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Integrado</h3>
              <p className="text-gray-300 font-medium">
                Los pedidos llegan directamente a tu WhatsApp, sin complicaciones
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00bcd4] to-[#d5006d] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Configuración Rápida</h3>
              <p className="text-gray-300 font-medium">Tu tienda estará lista en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#03113A] via-[#03113A] to-[#03113A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/20 to-[#d5006d]/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">¿Listo para empezar?</h2>
          <p className="text-xl mb-12 text-gray-200 font-medium">
            Contactanos ahora y tené tu tienda online funcionando en 24 horas
          </p>
          <Button
            onClick={() => openWhatsApp()}
            className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-12 py-5 text-lg font-semibold shadow-2xl hover:shadow-[#00bcd4]/25 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Contactar por WhatsApp
          </Button>
        </div>
      </section>

      <footer id="contacto" className="bg-gradient-to-br from-[#03113A] to-[#03113A] text-white py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Image src="/logo-somatech.png" alt="Somatech" width={180} height={54} className="h-12 w-auto mb-6" />
              <p className="text-gray-400 font-medium">Soluciones tecnológicas para hacer crecer tu negocio</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#00bcd4]">Contacto</h3>
              <p className="text-gray-400 mb-3 font-medium">WhatsApp: +54 9 11 4041-3508</p>
              <p className="text-gray-400 font-medium">Email: info@somatech.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#00bcd4]">Enlaces</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#planes" className="hover:text-[#00bcd4] transition-colors font-medium">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#demos" className="hover:text-[#00bcd4] transition-colors font-medium">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-[#00bcd4] transition-colors font-medium">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="font-medium">&copy; 2025 Somatech. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
