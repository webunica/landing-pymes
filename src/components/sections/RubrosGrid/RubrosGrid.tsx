import Link from 'next/link'
import styles from './RubrosGrid.module.css'

const RUBROS = [
    { slug: 'restaurantes', icon: '🍽️', label: 'Restaurantes & Café', tagline: 'Comandas, mesas y caja' },
    { slug: 'retail', icon: '🛍️', label: 'Retail & Tiendas', tagline: 'Stock, POS y clientes' },
    { slug: 'clinicas-salud', icon: '🏥', label: 'Clínicas & Salud', tagline: 'Agenda, ficha y cobro' },
    { slug: 'constructoras', icon: '🏗️', label: 'Constructoras', tagline: 'Obras, materiales y avances' },
    { slug: 'talleres-mecanicos', icon: '🔧', label: 'Talleres Mecánicos', tagline: 'OT, repuestos y cobro' },
    { slug: 'peluquerias-estetica', icon: '✂️', label: 'Peluquerías & Estética', tagline: 'Agenda online y caja' },
    { slug: 'academias-educacion', icon: '🎓', label: 'Academias & Educación', tagline: 'Matrículas y cobros' },
    { slug: 'inmobiliarias', icon: '🏠', label: 'Inmobiliarias', tagline: 'Propiedades y clientes' },
    { slug: 'ferias-mercados', icon: '🛒', label: 'Ferias & Mercados', tagline: 'Ventas desde el celular' },
    { slug: 'servicios-profesionales', icon: '💼', label: 'Servicios Profesionales', tagline: 'Cotiza, agenda y cobra' },
]

interface RubrosGridProps {
    title?: string
    subtitle?: string
}

export default function RubrosGrid({
    title = '¿Cuál es tu negocio?',
    subtitle = 'WebÚnica tiene un pack configurado para cada rubro. Todo listo desde el primer día.',
}: RubrosGridProps) {
    return (
        <section className="section section--bg-gray" aria-labelledby="rubros-title">
            <div className="container">
                <div className={`${styles.header} text-center`}>
                    <h2 id="rubros-title" className="text-balance">{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>

                <ul className={styles.grid} role="list">
                    {RUBROS.map((r, i) => (
                        <li key={r.slug}>
                            <Link
                                href={`/rubros/${r.slug}`}
                                className={`${styles.card} animate-fade-up`}
                                style={{ animationDelay: `${i * 50}ms` }}
                                aria-label={`Ver solución para ${r.label}`}
                            >
                                <span className={styles.icon} aria-hidden="true">{r.icon}</span>
                                <strong className={styles.name}>{r.label}</strong>
                                <span className={styles.tagline}>{r.tagline}</span>
                                <span className={styles.arrow} aria-hidden="true">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className={`${styles.cta} text-center`}>
                    <Link href="/rubros" className="btn btn--outline btn--md">
                        Ver todos los rubros →
                    </Link>
                </p>
            </div>
        </section>
    )
}
