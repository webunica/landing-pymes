import Link from 'next/link'
import styles from './CTABanner.module.css'

interface CTABannerProps {
    title?: string
    subtitle?: string
    ctaPrimary?: { label: string; href: string }
    ctaSecondary?: { label: string; href: string }
    variant?: 'default' | 'gradient' | 'dark'
}

export default function CTABanner({
    title = 'Empieza a simplificar tu negocio hoy',
    subtitle = 'Sin contrato. Sin letra chica. 7 días gratis para conocer el sistema a fondo.',
    ctaPrimary = { label: 'Prueba WebÚnica gratis — 7 días', href: '/contacto' },
    ctaSecondary = { label: 'Habla con un asesor', href: '/contacto' },
    variant = 'gradient',
}: CTABannerProps) {
    return (
        <section className={`${styles.cta} ${styles[`cta--${variant}`]}`} aria-label="Llamada a la acción">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={`${styles.title} text-balance`}>{title}</h2>
                        <p className={styles.sub}>{subtitle}</p>
                    </div>
                    <div className={styles.actions}>
                        <Link href={ctaPrimary.href} className="btn btn--white btn--lg">
                            {ctaPrimary.label}
                        </Link>
                        {ctaSecondary && (
                            <Link href={ctaSecondary.href} className={`btn btn--lg ${styles.btnSecondary}`}>
                                {ctaSecondary.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
