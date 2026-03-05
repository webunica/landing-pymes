import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | WebÚnica',
    default: 'WebÚnica — Software de gestión para PYMEs en Chile',
  },
  description:
    'Un sistema completo para administrar tu negocio: caja, agenda, inventario y clientes. Diseñado para PYMEs chilenas. Prueba gratis 7 días.',
  keywords: ['software pyme chile', 'sistema gestión negocio', 'software administrativo chile'],
  authors: [{ name: 'WebÚnica' }],
  creator: 'WebÚnica',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webunica.cl'),
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://webunica.cl',
    siteName: 'WebÚnica',
    title: 'WebÚnica — Software de gestión para PYMEs en Chile',
    description:
      'Caja, agenda, inventario y clientes en un solo sistema. Configurado para Chile (Webpay, boleta electrónica). Prueba gratis 7 días.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebÚnica — Software para PYMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebÚnica — Software para PYMEs en Chile',
    description: 'Caja, agenda e inventario para tu negocio. Prueba 7 días gratis.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL" data-theme="tech-clean">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WebÚnica',
              url: 'https://webunica.cl',
              logo: 'https://webunica.cl/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
              },
              sameAs: [
                'https://linkedin.com/company/webunica',
                'https://instagram.com/webunica',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'WebÚnica',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'CLP',
                price: '29990',
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
