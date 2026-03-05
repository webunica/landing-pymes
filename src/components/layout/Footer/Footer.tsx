import Link from 'next/link'
import styles from './Footer.module.css'

const RUBROS = [
    { href: '/rubros/restaurantes', label: 'Restaurantes' },
    { href: '/rubros/retail', label: 'Retail & Tiendas' },
    { href: '/rubros/clinicas-salud', label: 'Clínicas & Salud' },
    { href: '/rubros/talleres-mecanicos', label: 'Talleres Mecánicos' },
    { href: '/rubros/peluquerias-estetica', label: 'Peluquerías' },
    { href: '/rubros/academias-educacion', label: 'Academias' },
]

const PRODUCTO = [
    { href: '/producto', label: 'Características' },
    { href: '/precios', label: 'Precios' },
    { href: '/integraciones', label: 'Integraciones' },
    { href: '/casos', label: 'Casos de éxito' },
    { href: '/recursos', label: 'Blog & Recursos' },
]

const EMPRESA = [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/privacidad', label: 'Privacidad' },
    { href: '/terminos', label: 'Términos de uso' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Top: brand + nav */}
                <div className={styles.top}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                                <rect width="28" height="28" rx="7" fill="var(--color-primary)" />
                                <path d="M7 9l4 10 3-7 3 7 4-10" stroke="white" strokeWidth="2.2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Web<strong>Única</strong></span>
                        </Link>
                        <p className={styles.tagline}>
                            Un sistema completo para administrar tu negocio, sin complicaciones.
                        </p>
                        <div className={styles.cta}>
                            <Link href="/contacto" className="btn btn--primary btn--md">
                                Prueba gratis 7 días →
                            </Link>
                        </div>
                    </div>

                    {/* Nav cols */}
                    <nav className={styles.nav} aria-label="Navegación del pie de página">
                        <div className={styles.col}>
                            <h3 className={styles.colTitle}>Rubros</h3>
                            <ul role="list">
                                {RUBROS.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                                    </li>
                                ))}
                                <li>
                                    <Link href="/rubros" className={`${styles.colLink} ${styles.colLinkMore}`}>
                                        Ver todos →
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.col}>
                            <h3 className={styles.colTitle}>Producto</h3>
                            <ul role="list">
                                {PRODUCTO.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.col}>
                            <h3 className={styles.colTitle}>Empresa</h3>
                            <ul role="list">
                                {EMPRESA.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottom}>
                    <p>© {year} WebÚnica SpA · Chile · RUT: 77.XXX.XXX-X</p>
                    <p className={styles.made}>Hecho en 🇨🇱 para PYMEs chilenas</p>
                </div>
            </div>
        </footer>
    )
}
