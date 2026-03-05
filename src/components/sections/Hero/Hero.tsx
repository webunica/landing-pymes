import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
    badge?: string
    h1: string
    highlight?: string   // palabra del H1 que se colorea
    subtext: string
    ctaPrimary: { label: string; href: string }
    ctaSecondary?: { label: string; href: string }
    metrics?: { value: string; label: string }[]
    variant?: 'split' | 'centered' | 'dark'
}

export default function Hero({
    badge,
    h1,
    highlight,
    subtext,
    ctaPrimary,
    ctaSecondary,
    metrics,
    variant = 'split',
}: HeroProps) {
    const rootClass = [styles.hero, styles[`hero--${variant}`]].join(' ')

    // Si viene highlight, lo coloreamos dentro del H1
    const renderH1 = () => {
        if (!highlight) return h1
        const parts = h1.split(highlight)
        return (
            <>
                {parts[0]}
                <span className="gradient-text">{highlight}</span>
                {parts[1]}
            </>
        )
    }

    return (
        <section className={rootClass} aria-label="Sección principal">
            {/* Decoración de fondo */}
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.bgBlob1} />
                <div className={styles.bgBlob2} />
                <div className={styles.bgGrid} />
            </div>

            <div className="container">
                <div className={styles.inner}>
                    {/* Contenido */}
                    <div className={styles.content}>
                        {badge && (
                            <div className={`badge badge--primary ${styles.badge} animate-fade-up`}>
                                {badge}
                            </div>
                        )}

                        <h1 className={`${styles.h1} animate-fade-up animate-delay-1 text-balance`}>
                            {renderH1()}
                        </h1>

                        <p className={`${styles.sub} animate-fade-up animate-delay-2`}>
                            {subtext}
                        </p>

                        <div className={`${styles.actions} animate-fade-up animate-delay-3`}>
                            <Link href={ctaPrimary.href} className="btn btn--primary btn--lg">
                                {ctaPrimary.label}
                            </Link>
                            {ctaSecondary && (
                                <Link href={ctaSecondary.href} className="btn btn--ghost btn--lg">
                                    {ctaSecondary.label}
                                </Link>
                            )}
                        </div>

                        {metrics && (
                            <ul className={`${styles.metrics} animate-fade-up animate-delay-4`} role="list">
                                {metrics.map((m) => (
                                    <li key={m.label} className={styles.metric}>
                                        <strong>{m.value}</strong>
                                        <span>{m.label}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Visual lado derecho (split variant) */}
                    {variant === 'split' && (
                        <div className={`${styles.visual} animate-fade-in animate-delay-2`} aria-hidden="true">
                            <div className={styles.mockup}>
                                <MockupDashboard />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

/* ── Dashboard Mockup Decorativo ── */
function MockupDashboard() {
    return (
        <div className={styles.mockupInner}>
            {/* Barra superior */}
            <div className={styles.mockupBar}>
                <div className={styles.mockupDots}>
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                </div>
                <span className={styles.mockupUrl}>app.webunica.cl</span>
            </div>

            {/* Stats row */}
            <div className={styles.mockupStats}>
                {[
                    { label: 'Ventas hoy', value: '$284.500', up: true },
                    { label: 'Tickets', value: '47', up: true },
                    { label: 'Stock OK', value: '98%', up: false },
                ].map((s) => (
                    <div key={s.label} className={styles.mockupStat}>
                        <span className={styles.mockupStatLabel}>{s.label}</span>
                        <strong className={styles.mockupStatValue}>{s.value}</strong>
                        <span className={s.up ? styles.up : styles.neutral}>
                            {s.up ? '▲ +12%' : '→ estable'}
                        </span>
                    </div>
                ))}
            </div>

            {/* Chart placeholder */}
            <div className={styles.mockupChart}>
                <div className={styles.chartBars}>
                    {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
                        <div
                            key={i}
                            className={styles.chartBar}
                            style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
                        />
                    ))}
                </div>
                <span className={styles.chartLabel}>Ventas última semana</span>
            </div>

            {/* Items recientes */}
            <div className={styles.mockupItems}>
                {[
                    { name: 'Mesa 4', amount: '$18.900', status: 'cobrado' },
                    { name: 'Mesa 7', amount: '$32.400', status: 'pendiente' },
                    { name: 'Mesa 2', amount: '$24.100', status: 'cobrado' },
                ].map((item) => (
                    <div key={item.name} className={styles.mockupItem}>
                        <span>{item.name}</span>
                        <strong>{item.amount}</strong>
                        <span className={item.status === 'cobrado' ? styles.statusOk : styles.statusPending}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
