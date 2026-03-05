import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import Hero from '@/components/sections/Hero/Hero'
import Features from '@/components/sections/Features/Features'
import FAQ from '@/components/sections/FAQ/FAQ'
import CTABanner from '@/components/sections/CTABanner/CTABanner'
import { rubrosData } from '@/data/verticalPacks'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const data = rubrosData[slug as keyof typeof rubrosData]

    if (!data) return {}

    return {
        title: data.meta.title,
        description: data.meta.description,
    }
}

export default async function RubroPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const data = rubrosData[slug as keyof typeof rubrosData]

    if (!data) {
        notFound()
    }

    return (
        <>
            <Navbar />
            <main id="main-content">

                {/* HERO ESPECÍFICO DEL RUBRO */}
                <Hero
                    badge={data.hero.badge}
                    h1={data.hero.h1}
                    highlight={data.hero.highlight}
                    subtext={data.hero.subtext}
                    ctaPrimary={{ label: 'Probar 7 días gratis', href: '/contacto' }}
                    metrics={data.hero.metrics}
                />

                {/* DOLORES / PAIN POINTS */}
                <section className="section section--bg-gray">
                    <div className="container container--narrow">
                        <h2 className="text-center text-balance" style={{ marginBottom: 'var(--space-10)' }}>
                            {data.pains.title}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            {data.pains.items.map((pain, i) => (
                                <div key={i} style={{
                                    background: 'var(--color-surface)',
                                    padding: 'var(--space-6)',
                                    borderRadius: 'var(--radius-lg)',
                                    borderLeft: '4px solid var(--color-warning)'
                                }}>
                                    <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{pain.title}</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{pain.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOLUCIONES / FEATURES DEL PACK */}
                <Features
                    title={`Qué incluye el Pack ${data.name}`}
                    subtitle="Módulos configurados y listos para usar desde el día uno."
                    features={data.features}
                />

                {/* OBJECIONES (Formato FAQ Alternativo) */}
                <section className="section section--bg-gray">
                    <div className="container container--narrow">
                        <h2 className="text-center text-balance" style={{ marginBottom: 'var(--space-8)' }}>
                            Sabemos lo que estás pensando
                        </h2>
                        <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                            {data.objections.map((obj, i) => (
                                <div key={i} style={{ padding: 'var(--space-5)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                                    <strong style={{ display: 'block', marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>
                                        {obj.question}
                                    </strong>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
                                        {obj.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PREGUNTAS FRECUENTES */}
                <FAQ
                    title="Preguntas frecuentes sobre este rubro"
                    items={data.faqs}
                />

                {/* CTA FINAL */}
                <CTABanner
                    title={`¿Listo para modernizar tu ${data.name.toLowerCase()}?`}
                    variant="dark"
                />

            </main>
            <Footer />
        </>
    )
}
