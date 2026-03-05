'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Pricing.module.css'

const PLANS = [
    {
        id: 'basico',
        name: 'Básico',
        description: 'Perfecto para locales pequeños empezando a digitalizarse.',
        monthlyPrice: 29990,
        annualPrice: 23990, // Precio por mes pagando anual (-20%)
        features: [
            'Caja & Punto de Venta (POS)',
            '1 a 2 usuarios',
            'Control de Inventario Básico',
            'Integración Webpay / Flow',
            'Reportes de venta del día',
        ],
        notIncluded: ['Agenda y Reservas', 'Boleta Electrónica SII', 'Multi-sucursal'],
        highlight: false,
        cta: 'Comenzar gratis',
    },
    {
        id: 'pro',
        name: 'Pro',
        description: 'El plan más elegido. Todo lo que necesitas para crecer ordenado.',
        monthlyPrice: 59990,
        annualPrice: 47990,
        features: [
            'Todo lo del plan Básico',
            'Hasta 5 usuarios',
            'Agenda & Reservas online',
            'Módulo CRM & Clientes',
            'Boleta Electrónica SII (ilimitada)',
            'Alertas de quiebre de stock',
        ],
        notIncluded: ['Multi-sucursal'],
        highlight: true,
        cta: 'Probar Plan Pro',
    },
    {
        id: 'empresa',
        name: 'Empresa',
        description: 'Para negocios con alto volumen o múltiples locales.',
        monthlyPrice: 89990,
        annualPrice: 71990,
        features: [
            'Todo lo del plan Pro',
            'Usuarios ilimitados',
            'Gestión Multi-sucursal',
            'Reportes avanzados y exportables',
            'Programa de Fidelización',
            'Soporte prioritario WhatsApp',
        ],
        notIncluded: [],
        highlight: false,
        cta: 'Contactar a ventas',
    },
]

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true)

    const formatCLP = (amount: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <section className={styles.pricing}>
            {/* Header Pricing */}
            <div className={styles.header}>
                <h1 className="text-balance">Planes simples, sin letra chica</h1>
                <p className={styles.subtitle}>
                    Elige el plan que mejor se adapte a tu negocio. Prueba 7 días gratis, cancela cuando quieras.
                </p>

                {/* Toggle Mensual/Anual */}
                <div className={styles.toggleWrapper}>
                    <span className={!isAnnual ? styles.toggleActive : styles.toggleLabel}>Mensual</span>
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setIsAnnual(!isAnnual)}
                        aria-pressed={isAnnual}
                        aria-label="Cambiar entre facturación mensual y anual"
                    >
                        <div className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobRight : ''}`} />
                    </button>
                    <span className={isAnnual ? styles.toggleActive : styles.toggleLabel}>
                        Anual <span className={styles.discountBadge}>Ahorra 20%</span>
                    </span>
                </div>
            </div>

            {/* Grid de Planes */}
            <div className="container">
                <div className={styles.grid}>
                    {PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''}`}
                        >
                            {plan.highlight && <div className={styles.popularBadge}>El más elegido</div>}

                            <div className={styles.cardHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <p className={styles.planDesc}>{plan.description}</p>
                                <div className={styles.priceWrap}>
                                    <strong className={styles.price}>
                                        {formatCLP(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                                    </strong>
                                    <span className={styles.period}>/ mes</span>
                                </div>
                                {isAnnual && (
                                    <p className={styles.billedAnnually}>
                                        Facturado anualmente ({formatCLP(plan.annualPrice * 12)})
                                    </p>
                                )}
                            </div>

                            <div className={styles.cardBody}>
                                <Link
                                    href="/contacto"
                                    className={`btn btn--lg ${plan.highlight ? 'btn--primary' : 'btn--outline'} ${styles.ctaBtn}`}
                                >
                                    {plan.cta}
                                </Link>

                                <ul className={styles.featureList} role="list">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className={styles.featureItem}>
                                            <span className={styles.checkIcon}>✓</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded?.map((f, i) => (
                                        <li key={`not-${i}`} className={`${styles.featureItem} ${styles.featureItemDisabled}`}>
                                            <span className={styles.crossIcon}>×</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
