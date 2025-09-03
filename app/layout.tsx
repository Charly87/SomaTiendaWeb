import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "SomaTienda - Crea tu Tienda Online con WhatsApp | Tienda por WhatsApp",
  description: "Crea tu tienda online y gestiona pedidos por WhatsApp. Solución completa para emprendedores. Tienda por WhatsApp, Store Online, Tienda WhatsApp. Sin costo inicial.",
  keywords: [
    "tienda online",
    "tienda por whatsapp", 
    "tienda whatsapp",
    "store online",
    "tienda virtual",
    "ecommerce whatsapp",
    "ventas por whatsapp",
    "catálogo online",
    "tienda digital",
    "negocio online",
    "emprendimiento digital",
    "ventas online",
    "tienda móvil",
    "whatsapp business",
    "tienda argentina",
    "sistema de ventas",
    "gestión de pedidos",
    "catálogo digital",
    "tienda sin costo",
    "plataforma de ventas"
  ],
  authors: [{ name: "SomaTech" }],
  creator: "SomaTech",
  publisher: "SomaTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://somatienda.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SomaTienda - Crea tu Tienda Online con WhatsApp",
    description: "Crea tu tienda online y gestiona pedidos por WhatsApp. Solución completa para emprendedores. Sin costo inicial.",
    url: "https://somatienda.com.ar",
    siteName: "SomaTienda",
    images: [
      {
        url: "/logo-somatech.png",
        width: 1200,
        height: 630,
        alt: "SomaTienda - Tienda Online con WhatsApp",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SomaTienda - Crea tu Tienda Online con WhatsApp",
    description: "Crea tu tienda online y gestiona pedidos por WhatsApp. Solución completa para emprendedores.",
    images: ["/logo-somatech.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Reemplazar con el código real
  },
  category: "technology",
  classification: "E-commerce, WhatsApp Business, Online Store",
  generator: "Next.js",
  icons: {
    icon: "/IconSomatienda.ico",
    shortcut: "/IconSomatienda.ico",
    apple: "/IconSomatienda.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SomaTienda",
    "description": "Crea tu tienda online y gestiona pedidos por WhatsApp. Solución completa para emprendedores.",
    "url": "https://somatienda.com.ar",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "ARS",
      "description": "Plan básico mensual"
    },
    "provider": {
      "@type": "Organization",
      "name": "SomaTech",
      "url": "https://somatienda.com.ar"
    },
    "featureList": [
      "Catálogo de productos ilimitado",
      "Pedidos por WhatsApp",
      "Descuentos y promociones",
      "Soporte técnico incluido"
    ]
  }

  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
