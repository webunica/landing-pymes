'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    title?: string
    subtitle?: string
    items: FAQItem[]
    variant?: 'accordion' | 'grid'
}

const DEFAULT_FAQS: FAQItem[] = [
    {
        question: '¿Cuánto tiempo toma activar WebÚnica?',
        answer: 'Menos de 30 minutos. Crea tu cuenta, configura tu rubro y ya puedes empezar a registrar ventas el mismo día. No necesitas técnicos ni instalar nada.',
    },
    {
        question: '¿Puedo probar el sistema sin pagar?',
        answer: 'Sí. Tienes 7 días de prueba gratuita, sin ingresar tarjeta de crédito. Al finalizar el período, puedes elegir el plan que mejor te acomode.',
    },
    {
        question: '¿Funciona para cualquier tipo de negocio?',
        answer: 'WebÚnica tiene Vertical Packs configurados para 10 rubros distintos: restaurantes, tiendas, clínicas, talleres, peluquerías, academias, inmobiliarias y más.',
    },
    {
        question: '¿Acepta Webpay y otros medios de pago chilenos?',
        answer: 'Sí. Viene integrado con Webpay, Flow y Mercado Pago. También puedes registrar pagos en efectivo, transferencia y otros medios personalizados.',
    },
    {
        question: '¿Qué pasa con mis datos si cancelo?',
        answer: 'Todos tus datos son tuyos. Puedes exportarlos en cualquier momento en formato Excel o CSV antes de cancelar. No retenemos información.',
    },
    {
        question: '¿Tiene soporte en español? ¿Y en qué horario?',
        answer: 'Soporte en español, de lunes a viernes de 9:00 a 18:00 hrs (hora Chile) por chat y email. Respuesta garantizada en menos de 4 horas hábiles. [ASUMIDO]',
    },
]

export default function FAQ({
    title = 'Preguntas frecuentes',
    subtitle,
    items = DEFAULT_FAQS,
    variant = 'accordion',
}: FAQProps) {
    const [open, setOpen] = useState<number | null>(0)

    const toggle = (i: number) => {
        setOpen(open === i ? null : i)
    }

    return (
        <section className="section section--bg-gray" aria-labelledby="faq-title">
            <div className="container container--narrow">
                <div className={`${styles.header} text-center`}>
                    <h2 id="faq-title" className="text-balance">{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>

                <div className={styles.list} role="list">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
                            role="listitem"
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggle(i)}
                                aria-expanded={open === i}
                                aria-controls={`faq-answer-${i}`}
                                id={`faq-question-${i}`}
                            >
                                <span>{item.question}</span>
                                <span className={styles.chevron} aria-hidden="true">
                                    {open === i ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                className={styles.answer}
                                role="region"
                                aria-labelledby={`faq-question-${i}`}
                                hidden={open !== i}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Schema FAQ JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: items.map((item) => ({
                            '@type': 'Question',
                            name: item.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: item.answer,
                            },
                        })),
                    }),
                }}
            />
        </section>
    )
}
