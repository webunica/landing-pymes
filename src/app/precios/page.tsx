import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import Pricing from '@/components/sections/Pricing/Pricing'
import FAQ from '@/components/sections/FAQ/FAQ'
import CTABanner from '@/components/sections/CTABanner/CTABanner'

export const metadata: Metadata = {
    title: 'Planes y Precios | WebÚnica Chile',
    description: 'Planes desde $29.990 CLP al mes. Prueba WebÚnica 7 días gratis sin tarjeta de crédito. Cancela cuando quieras.',
}

const PRICING_FAQS = [
    {
        question: '¿Qué pasa al finalizar los 7 días de prueba?',
        answer: 'Tu cuenta se pausará, tu información quedará guardada, y la plataforma te pedirá elegir un plan para continuar. Si decides no seguir, no se te cobrará nada porque no pedimos tarjeta de crédito para la prueba.',
    },
    {
        question: '¿Puedo cambiar de plan más adelante?',
        answer: 'Sí, puedes subir (upgrade) o bajar (downgrade) de plan en cualquier momento desde tu panel de control. El cobro se ajustará proporcionalmente al tiempo de uso.',
    },
    {
        question: '¿Emiten factura en Chile?',
        answer: 'Sí. WebÚnica SpA es una empresa chilena. Emitimos Factura Exenta o Afecta a IVA según la normativa legal del SII, que enviaremos a tu correo mes a mes.',
    },
    {
        question: '¿Hay cobros ocultos o de instalación?',
        answer: 'No. Pagas exactamente la mensualidad de tu plan, ni un peso más. No cobramos setup, comisiones por venta ni cargos ocultos.',
    },
    {
        question: 'Si elijo el plan Anual, ¿cómo es el cobro?',
        answer: 'Se te cobrará el monto total de los 12 meses por adelantado, pero con un 20% de descuento. Obtienes un año completo al precio de 10 meses.',
    },
    {
        question: '¿Ofrecen garantía de devolución?',
        answer: 'Sí, tenemos garantía de satisfacción de 30 días. Si contrataste y durante el primer mes decides que el sistema no es para ti, te devolvemos el 100% de tu dinero, sin preguntas.',
    },
]

export default function PreciosPage() {
    return (
        <>
            <Navbar />
            <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>

                {/* Componente central interactivo de Precios */}
                <Pricing />

                {/* Garantía Trust Banner */}
                <section className="section section--sm text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <div className="container">
                        <p style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)' }}>
                            <span style={{ fontSize: '1.25rem' }}>🛡️</span>
                            30 días de garantía de satisfacción o te devolvemos el dinero.
                        </p>
                    </div>
                </section>

                {/* FAQ de pagos y facturación */}
                <FAQ
                    title="Preguntas sobre planes y facturación"
                    subtitle="Transparencia total. Esto es lo que necesitas saber sobre cobros en WebÚnica."
                    items={PRICING_FAQS}
                />

                {/* CTA */}
                <CTABanner
                    title="El orden que tu negocio necesita, por menos de lo que cuesta el café del equipo."
                    subtitle="Inicia tu prueba gratis de 7 días. Elige tu plan después."
                    variant="default"
                />

            </main>
            <Footer />
        </>
    )
}
