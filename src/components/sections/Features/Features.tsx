import styles from './Features.module.css'

interface Feature {
    icon: string
    title: string
    description: string
    badge?: string
}

interface FeaturesProps {
    title: string
    subtitle?: string
    features?: Feature[]
    variant?: 'grid' | 'alternating'
}

const DEFAULT_FEATURES: Feature[] = [
    {
        icon: '🖥️',
        title: 'Caja & Punto de Venta',
        description: 'Registra ventas en segundos con cualquier medio de pago: Webpay, Flow, transferencia o efectivo. Cierra tu caja automáticamente al final del día.',
        badge: 'POS',
    },
    {
        icon: '📅',
        title: 'Agenda & Reservas',
        description: 'Calendario inteligente con recordatorios automáticos. Tus clientes reservan 24/7 desde tu sitio web, sin llamadas.',
        badge: 'CRM',
    },
    {
        icon: '📦',
        title: 'Inventario & Stock',
        description: 'Control en tiempo real. Alertas antes de quedarte sin stock. Idealmente integrado con tus ventas.',
    },
    {
        icon: '👥',
        title: 'CRM & Clientes',
        description: 'Historial completo de cada cliente. Campañas de fidelización. Segmenta por rubro, frecuencia o gasto.',
    },
    {
        icon: '📊',
        title: 'Reportes & Dashboard',
        description: 'Métricas clave de tu negocio en una sola pantalla. Exporta a Excel o PDF. Compara períodos.',
    },
    {
        icon: '🔗',
        title: 'Integraciones Chile',
        description: 'Webpay, Flow, Mercado Pago, boleta electrónica SII, y más. Todo configurado para operar en Chile desde el día uno.',
        badge: 'Chile ✓',
    },
]

export default function Features({
    title,
    subtitle,
    features = DEFAULT_FEATURES,
    variant = 'grid',
}: FeaturesProps) {
    return (
        <section className="section" aria-labelledby="features-title">
            <div className="container">
                <div className={`${styles.header} text-center`}>
                    <h2 id="features-title" className="text-balance">{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>

                <ul className={styles.grid} role="list">
                    {features.map((f, i) => (
                        <li
                            key={f.title}
                            className={`${styles.card} animate-fade-up`}
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <div className={styles.iconWrap} aria-hidden="true">
                                <span className={styles.icon}>{f.icon}</span>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.titleRow}>
                                    <h3 className={styles.title}>{f.title}</h3>
                                    {f.badge && <span className="badge badge--primary">{f.badge}</span>}
                                </div>
                                <p className={styles.desc}>{f.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
