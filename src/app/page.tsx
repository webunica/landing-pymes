import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import Hero from '@/components/sections/Hero/Hero'
import RubrosGrid from '@/components/sections/RubrosGrid/RubrosGrid'
import Features from '@/components/sections/Features/Features'
import FAQ from '@/components/sections/FAQ/FAQ'
import CTABanner from '@/components/sections/CTABanner/CTABanner'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: 'WebÚnica — Software de gestión para PYMEs en Chile',
  description:
    'Sistema completo para administrar tu negocio: caja, agenda, inventario y clientes. Configurado para Chile (Webpay, boleta SII). Prueba gratis 7 días.',
}

const METRICS = [
  { value: '+127', label: 'PYMEs activas' },
  { value: '4.8★', label: 'Satisfacción' },
  { value: '< 30 min', label: 'Para empezar' },
]

const TESTIMONIALS = [
  {
    quote: 'Antes cerraba la caja en 45 minutos. Ahora en 8. Es increíble lo simple que es.',
    name: 'Valentina Rojas',
    role: 'Dueña de Restaurante',
    city: 'Ñuñoa, Santiago',
    rubro: '🍽️',
  },
  {
    quote: 'Mis clientes pueden agendar sola, a cualquier hora. Bajaron los no-shows a la mitad.',
    name: 'Fernanda Soto',
    role: 'Estilista',
    city: 'Providencia, Santiago',
    rubro: '✂️',
  },
  {
    quote: 'Me avisó antes de quedarme sin el producto más vendido. Eso no tiene precio.',
    name: 'Hernán Vargas',
    role: 'Dueño de Tienda',
    city: 'Concepción',
    rubro: '🛍️',
  },
]

const INTEGRATIONS = [
  { name: 'Webpay', emoji: '💳' },
  { name: 'Flow', emoji: '⚡' },
  { name: 'Mercado Pago', emoji: '💰' },
  { name: 'SII', emoji: '📄' },
  { name: 'Bsale', emoji: '🔗' },
  { name: 'Sendu', emoji: '📦' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Hero
          badge="🇨🇱 Hecho para Chile — Webpay integrado"
          h1="Un sistema completo para tu negocio, sin complicaciones"
          highlight="sin complicaciones"
          subtext="WebÚnica centraliza caja, agenda, inventario y clientes en una sola pantalla. Diseñado para PYMEs chilenas. Activo en menos de 30 minutos."
          ctaPrimary={{ label: 'Prueba gratis 7 días →', href: '/contacto' }}
          ctaSecondary={{ label: 'Ver cómo funciona', href: '/producto' }}
          metrics={METRICS}
          variant="split"
        />

        {/* Prueba social — métricas */}
        <section className={`section section--sm ${styles.logoBand}`} aria-label="Integraciones disponibles">
          <div className="container">
            <p className={styles.logoBandLabel}>Se integra con las herramientas que usas en Chile</p>
            <ul className={styles.logos} role="list">
              {INTEGRATIONS.map((int) => (
                <li key={int.name} className={styles.logoItem}>
                  <span aria-hidden="true">{int.emoji}</span>
                  <span>{int.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Rubros */}
        <RubrosGrid />

        {/* Features */}
        <Features
          title="Todo lo que necesitas, en un solo lugar"
          subtitle="Sin módulos sueltos ni integraciones complicadas. WebÚnica viene completo para tu rubro."
        />

        {/* Testimonios */}
        <section className="section section--bg-gray" aria-labelledby="testimonios-title">
          <div className="container">
            <h2 id="testimonios-title" className="text-center text-balance" style={{ marginBottom: 'var(--space-12)' }}>
              PYMEs que ya simplificaron su negocio
            </h2>
            <ul className="grid-3" role="list">
              {TESTIMONIALS.map((t) => (
                <li key={t.name} className={styles.testimonioCard}>
                  <div className={styles.testimonioRubro} aria-hidden="true">{t.rubro}</div>
                  <blockquote className={styles.testimonioQuote}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className={styles.testimonioFooter}>
                    <strong>{t.name}</strong>
                    <span>{t.role} · {t.city}</span>
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber antes de empezar."
        />

        {/* CTA Final */}
        <CTABanner
          title="¿Listo para simplificar tu negocio?"
          subtitle="7 días gratis, sin tarjeta de crédito, sin compromiso. Activo hoy."
          ctaPrimary={{ label: 'Empieza gratis ahora →', href: '/contacto' }}
          ctaSecondary={{ label: 'Habla con un asesor', href: '/contacto' }}
        />
      </main>
      <Footer />
    </>
  )
}
