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
  const [isWhatsAppLoading, setIsWhatsAppLoading] = useState(false)

  const openWhatsApp = (plan?: string) => {
    setIsWhatsAppLoading(true)
    
    let message = "¡Hola! Me interesa contratar el servicio de tienda online."

    if (plan) {
      message = `¡Hola! Me interesa contratar el ${plan}. ¿Podrían darme más información?`
    } else {
      message += " ¿Podrían darme más información?"
    }

    const whatsappMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5491128582149?text=${whatsappMessage}`
    
    console.log("Abriendo WhatsApp con URL:", whatsappUrl)
    console.log("Mensaje:", message)
    
    try {
      // Intentar abrir en nueva pestaña
      const newWindow = window.open(whatsappUrl, "_blank")
      
      // Si falla, intentar abrir en la misma pestaña
      if (!newWindow) {
        console.log("Fallback: abriendo en la misma pestaña")
        window.location.href = whatsappUrl
      }
    } catch (error) {
      console.error("Error al abrir WhatsApp:", error)
      // Fallback: redirigir en la misma pestaña
      window.location.href = whatsappUrl
    }
    
    // Resetear el estado de carga después de un breve delay
    setTimeout(() => {
      setIsWhatsAppLoading(false)
    }, 1000)
  }

  const basicPrice = 25000
  const annualDiscount = 0.9 // 10% descuento

  const getPrice = (basePrice: number) => {
    return Math.round(basicPrice * annualDiscount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A]">
      <nav className="bg-gradient-to-r from-[#03113A] to-[#03113A] text-white py-4 px-6 border-b border-[#00bcd4]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="SomaTienda" width={100} height={58} className="h-10 w-auto" />
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
              disabled={isWhatsAppLoading}
              className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isWhatsAppLoading ? "Abriendo..." : "Contactar"}
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
                disabled={isWhatsAppLoading}
                className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-4 py-2 text-sm w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isWhatsAppLoading ? "Abriendo..." : "Contactar"}
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
          <div className="flex justify-center items-center mt-16">
            <div className="relative">
              <Image 
                src="/celulares.png" 
                alt="Demos de Restaurante y Tienda de Ropa" 
                width={600} 
                height={500} 
                className="rounded-[2rem]"
              />
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
              <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white border-0 shadow-lg px-6 py-3 text-lg font-semibold">
                10% OFF Plan Anual
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Básico */}
            <Card className="group border border-gray-100 shadow-lg hover:shadow-[#00bcd4]/20 transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-[#00bcd4] via-[#00acc1] to-[#0097a7] text-white relative p-6">
                <CardTitle className="text-xl font-bold">Plan Básico</CardTitle>
                <CardDescription className="text-gray-100 text-sm">
                  Perfecto para aquellos que quieren vender fácil y rápido.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-br from-[#00bcd4]/3 to-transparent">
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#03113A] to-[#03113A] bg-clip-text text-transparent">
                    ${basicPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2 text-base">/mes</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Catálogo de productos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Descuentos y promociones</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Pedidos por WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Actualización en tiempo real</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-white">
                <Button
                  onClick={() => openWhatsApp("Plan Básico")}
                  className="w-full bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl"
                >
                  {isWhatsAppLoading ? "Abriendo WhatsApp..." : "Contratar Plan"}
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Básico Anual */}
            <Card className="group border border-gray-100 shadow-lg hover:shadow-[#d5006d]/20 transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl relative">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-gradient-to-r from-[#d5006d] to-[#b8005a] text-white border-0 shadow-md px-3 py-1 text-xs font-semibold rounded-full">
                  Más Popular
                </Badge>
              </div>
              <CardHeader className="bg-gradient-to-r from-[#d5006d] via-[#c2005f] to-[#b8005a] text-white relative p-6">
                <CardTitle className="text-xl font-bold">Plan Básico Anual</CardTitle>
                <CardDescription className="text-gray-100 text-sm">
                  El mismo plan básico con 10% de descuento por pago anual.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-br from-[#d5006d]/3 to-transparent">
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#03113A] to-[#03113A] bg-clip-text text-transparent">
                    ${getPrice(basicPrice).toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2 text-base">/mes</span>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="line-through">${(basicPrice * 12).toLocaleString()}/año</span>
                    <span className="text-green-600 ml-2 font-semibold">
                      Ahorrás ${(basicPrice * 12 - getPrice(basicPrice) * 12).toLocaleString()}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Todo lo del Plan Básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-green-600 font-semibold">10% de descuento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Pago anual</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#d5006d] to-[#b8005a] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">Ahorro garantizado</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-white">
                <Button
                  onClick={() => openWhatsApp("Plan Básico Anual")}
                  className="w-full bg-gradient-to-r from-[#d5006d] to-[#b8005a] hover:from-[#b8005a] hover:to-[#a0004d] text-white py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl"
                >
                  {isWhatsAppLoading ? "Abriendo WhatsApp..." : "Contratar Plan"}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Demo Restaurante */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-orange-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Restaurantes</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">
                  Menú digital con categorías, fotos y gestión de pedidos
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Menú organizado por categorías</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Fotos de platos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Gestión de disponibilidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Pedidos por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
                  onClick={() => window.open("https://demo-restaurante.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Ropa */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-blue-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Shirt className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Tienda de Ropa</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">
                  Catálogo con talles, colores y gestión de inventario
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Productos por categoría</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Variantes de talle y color</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Control de stock</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Lookbook digital</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
                  onClick={() => window.open("https://demo-ropa.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Cafetería */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-yellow-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Cafetería</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">
                  Carta de bebidas, snacks y sistema de pedidos rápidos
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Carta de bebidas y comidas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Opciones de personalización</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Pedidos para llevar/delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Programa de fidelidad</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
                  onClick={() => window.open("https://demo-cafeteria.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Supermercado */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-green-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Supermercado</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">
                  Productos por categorías con búsqueda y carrito
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Amplio catálogo de productos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Búsqueda por categorías</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Carrito de compras</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Ofertas y descuentos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
                  onClick={() => window.open("https://demo-super.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Farmacia */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-red-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Farmacia</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">Medicamentos, productos de salud y belleza</CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Catálogo de medicamentos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Productos de salud y belleza</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Búsqueda por principio activo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Consultas por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
                  onClick={() => window.open("https://demo-farmacia.somatech.com", "_blank")}
                >
                  Ver Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Demo Servicios */}
            <Card className="group border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden rounded-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-purple-50 to-transparent p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#03113A] font-bold">Servicios</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600">
                  Reservas, citas y gestión de servicios profesionales
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-6 pt-0">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Catálogo de servicios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Sistema de reservas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Gestión de horarios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex-shrink-0"></div>
                    <span>Confirmación por WhatsApp</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="bg-white p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white bg-transparent font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl py-2.5 text-sm"
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
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6 font-[family-name:var(--font-space-grotesk)]">
              ¿Por qué elegir Somatienda?
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
              <div className="w-20 h-20 bg-gradient-to-r from-[#00bcd4] to-[#00acc1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
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
              <p className="text-gray-400 mb-3 font-medium">WhatsApp: +54 9 11 2858-2149</p>
              <p className="text-gray-400 font-medium">Email: info@somatech.com.ar</p>
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
