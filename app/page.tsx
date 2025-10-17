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

  // Lista de demos por tipo de negocio
  const demos = [
    {
      id: 'restaurante',
      title: 'Restaurantes',
      description: 'Menú digital con categorías, fotos y gestión de pedidos',
      icon: Utensils,
      color: 'orange',
      gradient: 'from-orange-50/40 via-white to-orange-100/20',
      iconGradient: 'from-orange-400 to-orange-500',
      url: 'https://demo-restaurante.somatech.com'
    },
    {
      id: 'ropa',
      title: 'Tienda de Ropa',
      description: 'Catálogo con talles, colores y gestión de inventario',
      icon: Shirt,
      color: 'blue',
      gradient: 'from-blue-50/40 via-white to-blue-100/20',
      iconGradient: 'from-blue-400 to-blue-500',
      url: 'https://demo-ropa.somatech.com'
    },
    {
      id: 'cafeteria',
      title: 'Cafetería',
      description: 'Carta de bebidas, snacks y sistema de pedidos rápidos',
      icon: Coffee,
      color: 'yellow',
      gradient: 'from-yellow-50/40 via-white to-yellow-100/20',
      iconGradient: 'from-yellow-400 to-yellow-500',
      url: 'https://demo-cafeteria.somatech.com'
    },
    {
      id: 'supermercado',
      title: 'Supermercado',
      description: 'Productos por categorías con búsqueda y carrito',
      icon: ShoppingCart,
      color: 'green',
      gradient: 'from-green-50/40 via-white to-green-100/20',
      iconGradient: 'from-green-400 to-green-500',
      url: 'https://demo-super.somatech.com'
    },
    {
      id: 'farmacia',
      title: 'Farmacia',
      description: 'Medicamentos, productos de salud y belleza',
      icon: Store,
      color: 'red',
      gradient: 'from-red-50/40 via-white to-red-100/20',
      iconGradient: 'from-red-400 to-red-500',
      url: 'https://demo-farmacia.somatech.com'
    },
    {
      id: 'carniceria',
      title: 'Carnicería',
      description: 'Cortes de carne, embutidos y productos frescos',
      icon: Utensils,
      color: 'rose',
      gradient: 'from-rose-50/40 via-white to-rose-100/20',
      iconGradient: 'from-rose-400 to-rose-500',
      url: 'https://demo-carniceria.somatech.com'
    }
  ]

  return (
    <div className="min-h-screen bg-[#03113A]">
      <nav className="bg-[#03113A]/95 backdrop-blur-md border-b border-[#00bcd4]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="SomaTienda" width={100} height={58} className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
                className="text-white hover:text-[#00bcd4] transition-colors duration-200 text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#planes"
                className="text-white hover:text-[#00bcd4] transition-colors duration-200 text-sm font-medium"
            >
              Planes
            </a>
            <a
              href="#demos"
                className="text-white hover:text-[#00bcd4] transition-colors duration-200 text-sm font-medium"
            >
              Demos
            </a>
            <a
              href="#contacto"
                className="text-white hover:text-[#00bcd4] transition-colors duration-200 text-sm font-medium"
            >
              Contacto
            </a>
            <Button
              onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-full"
            >
                Comenzar ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-[#00bcd4] transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00bcd4]/20 pt-4">
            <div className="flex flex-col space-y-3">
                <a href="#inicio" className="text-white hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Inicio
              </a>
                <a href="#planes" className="text-white hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Planes
              </a>
                <a href="#demos" className="text-white hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Demos
              </a>
                <a href="#contacto" className="text-white hover:text-[#00bcd4] transition-colors text-sm font-medium">
                Contacto
              </a>
              <Button
                onClick={() => openWhatsApp()}
                  className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-4 py-2 text-sm w-fit rounded-full"
              >
                  Comenzar ahora
              </Button>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/10 to-[#d5006d]/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00bcd4]/20 to-[#d5006d]/20 text-white rounded-full text-sm font-medium mb-6 border border-[#00bcd4]/30">
                🚀 Tu tienda online en minutos
              </div> */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Crea tu tienda online
                <span className="block bg-gradient-to-r from-[#00bcd4] to-[#d5006d] bg-clip-text text-transparent">sin complicaciones</span>
          </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Perfecto para pequeños vendedores. Gestiona tus productos y ventas directamente desde 
              
                <span className="font-semibold text-[#25D366]"> WhatsApp</span>
                . 
                <span className="font-semibold text-white"> Simple, rápido y efectivo.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => openWhatsApp()}
                  className="bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-full"
            >
              Comenzar Ahora
            </Button>
            <Button
              variant="outline"
                  className="border-2 border-[#d5006d] text-[#d5006d] hover:bg-[#d5006d] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200 rounded-full"
              onClick={() => document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })}
            >
                  Ver ejemplos
            </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Configuración en 24hs
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Soporte técnico incluido
                </div>
              </div>
          </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="flex justify-center items-center">
              <Image 
                src="/celulares.png" 
                  alt="Tienda online en celular"
                width={450} 
                height={300}                   
              /></div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-[#00bcd4]/20 to-[#d5006d]/20 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-[#d5006d]/20 to-[#00bcd4]/20 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20 px-6 bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planes simples y transparentes
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio. Sin sorpresas, sin costos ocultos.
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                🎉 10% de descuento en plan anual
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Básico */}
            <Card className="group border border-[#00bcd4]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/95 backdrop-blur-sm overflow-hidden rounded-3xl">
              <CardHeader className="p-8 pb-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Básico</h3>
                  <p className="text-gray-600 mb-6">
                    Perfecto para empezar tu negocio online
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${basicPrice.toLocaleString('es-AR')}
                  </span>
                    <span className="text-gray-500 ml-2">/mes</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Catálogo de productos ilimitado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Pedidos por WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Descuentos y promociones</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Soporte técnico incluido</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  onClick={() => openWhatsApp("Plan Básico")}
                  className="w-full bg-gradient-to-r from-[#00bcd4] to-[#00acc1] hover:from-[#00acc1] hover:to-[#0097a7] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl"
                >
                  Comenzar Ahora
                </Button>
              </CardFooter>
            </Card>

            {/* Plan Básico Anual */}
            <Card className="group border-2 border-[#d5006d] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/95 backdrop-blur-sm overflow-hidden rounded-3xl relative">
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-gradient-to-r from-[#d5006d] to-[#b8005a] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Más Popular
                </div>
              </div>
              <CardHeader className="p-8 pb-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Anual</h3>
                  <p className="text-gray-600 mb-6">
                    Ahorra dinero con el pago anual
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#d5006d] to-[#b8005a] bg-clip-text text-transparent">
                      ${getPrice(basicPrice).toLocaleString('es-AR')}
                    </span>
                    <span className="text-gray-500 ml-2">/mes</span>
                    <div className="text-sm text-gray-500 mt-2">
                      <span className="line-through">${basicPrice.toLocaleString('es-AR')}/mes</span>
                      <span className="text-green-600 ml-2 font-semibold">
                        Ahorras ${(basicPrice - getPrice(basicPrice)).toLocaleString('es-AR')}/mes
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Todo lo del Plan Básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-semibold text-green-600">10% de descuento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Pago anual único</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Sin compromiso de permanencia</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  onClick={() => openWhatsApp("Plan Básico Anual")}
                  className="w-full bg-gradient-to-r from-[#d5006d] to-[#b8005a] hover:from-[#b8005a] hover:to-[#a0004d] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl"
                >
                  Comenzar ahora
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-20 px-6 bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ve cómo funciona en tu negocio
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explora ejemplos reales de tiendas online para diferentes tipos de negocios. 
              Encuentra el que más se parezca al tuyo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => {
              const IconComponent = demo.icon
              return (
                <Card 
                  key={demo.id}
                  className="group bg-white/95 backdrop-blur-sm border border-[#00bcd4]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-2xl"
                >
                  <CardHeader className="text-center p-8 pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${demo.iconGradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                </div>
                    <CardTitle className="text-xl text-gray-900 font-bold mb-3">
                      {demo.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {demo.description}
                </CardDescription>
              </CardHeader>
                  <CardFooter className="p-8 pt-0">
                <Button
                  variant="outline"
                      className="w-full border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white font-semibold transition-all duration-200 rounded-xl py-3"
                      onClick={() => window.open(demo.url, "_blank")}
                >
                      Ver ejemplo
                </Button>
              </CardFooter>
            </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#03113A] via-[#03113A] to-[#03113A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir SomaTienda?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              La solución más simple y efectiva para que tu negocio esté online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00bcd4]/20 to-[#00acc1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-[#00bcd4]/30">
                <Smartphone className="w-10 h-10 text-[#00bcd4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">100% Mobile</h3>
              <p className="text-gray-200 leading-relaxed">
                Tu tienda se adapta perfectamente a cualquier dispositivo móvil
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#d5006d]/20 to-[#b8005a]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-[#d5006d]/30">
                <MessageCircle className="w-10 h-10 text-[#d5006d]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Integrado</h3>
              <p className="text-gray-200 leading-relaxed">
                Los pedidos llegan directamente a tu WhatsApp, sin complicaciones
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00bcd4]/20 to-[#d5006d]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-[#00bcd4]/30">
                <Zap className="w-10 h-10 text-[#00bcd4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Configuración Rápida</h3>
              <p className="text-gray-200 leading-relaxed">
                Tu tienda estará lista en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#00bcd4] to-[#00acc1] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d5006d]/10 to-[#00bcd4]/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Contactanos ahora y tené tu tienda online funcionando en  
            <span className="font-semibold text-white"> 24 horas</span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => openWhatsApp()}
              className="bg-white text-[#00bcd4] hover:bg-gray-50 px-12 py-4 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 rounded-full flex items-center justify-center"
          >
              <MessageCircle className="w-6 h-6" />
              Comenzar ahora
          </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/90">
            
            <div className="flex items-center">
              <span className="text-green-300 mr-2">✓</span>
              Configuración en 24h
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-2">✓</span>
              Soporte incluido
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#03113A] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/5 to-[#d5006d]/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Image src="/logo-somatech.png" alt="Somatech" width={180} height={54} className="h-12 w-auto mb-6" />
              <p className="text-gray-300 leading-relaxed">
                Soluciones tecnológicas para hacer crecer tu negocio online de forma simple y efectiva.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
              <div className="space-y-3">
                <p className="text-gray-300 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-[#00bcd4]" />
                  WhatsApp: +54 9 11 2858-2149
                </p>
                <p className="text-gray-300 flex items-center">
                  <span className="w-5 h-5 mr-3 text-[#d5006d]">✉</span>
                  Email: info.somatienda@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Enlaces</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#planes" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#demos" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-300 hover:text-[#00bcd4] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#00bcd4]/20 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2025 Somatech. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Burbuja flotante de WhatsApp */}
      <a 
        href="https://wa.me/5491128582149?text=¡Hola! Me interesa contratar el servicio de tienda online. ¿Podrían darme más información?"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 flex items-center space-x-2 font-semibold text-sm"
        style={{
          boxShadow: '0 6px 20px rgba(0,0,0,.15)',
          animation: 'pulse 2s infinite'
        }}
      >
        <span className="text-lg">💬</span>
        <span>WhatsApp</span>
      </a>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 6px 20px rgba(0,0,0,.15);
          }
          50% {
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          }
          100% {
            box-shadow: 0 6px 20px rgba(0,0,0,.15);
          }
        }
      `}</style>
    </div>
  )
}
