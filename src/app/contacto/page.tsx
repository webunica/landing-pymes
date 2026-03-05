'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import styles from './contacto.module.css'

export default function ContactoPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            companyName: formData.get('companyName'),
            vertical: formData.get('vertical'),
            message: formData.get('message'),
        }

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Ocurrió un error al enviar tu solicitud.')
            }

            setStatus('success')
        } catch (err: unknown) {
            console.error(err)
            setStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'Error desconocido')
        }
    }

    return (
        <>
            <Navbar />
            <main id="main-content" className={styles.main}>
                <section className={styles.contactSection}>
                    <div className="container">
                        <div className={styles.grid}>

                            {/* Información de contacto */}
                            <div className={styles.info}>
                                <h1 className="text-balance">Digitaliza tu negocio hoy.</h1>
                                <p className={styles.subtitle}>
                                    Déjanos tus datos para activar tu prueba gratis de 7 días o agendar una demostración con nuestro equipo en Chile.
                                </p>

                                <div className={styles.features}>
                                    <div className={styles.featureItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        <div>
                                            <strong>Onboarding sin costo</strong>
                                            <p>Te ayudamos a cargar tu inventario inicial gratis.</p>
                                        </div>
                                    </div>
                                    <div className={styles.featureItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        <div>
                                            <strong>Soporte por WhatsApp</strong>
                                            <p>Atención rápida y directa en horario comercial chileno.</p>
                                        </div>
                                    </div>
                                    <div className={styles.featureItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        <div>
                                            <strong>Sin tarjeta de crédito</strong>
                                            <p>Prueba el sistema completo durante 7 días sin miedo a cobros automáticos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Formulario */}
                            <div className={styles.formCard}>

                                {status === 'success' ? (
                                    <div className={styles.successState}>
                                        <div className={styles.successIcon}>🎉</div>
                                        <h2>¡Solicitud enviada!</h2>
                                        <p>Hemos recibido tus datos correctamente. Nuestro equipo se contactará contigo a la brevedad para habilitar tu cuenta.</p>
                                        <button
                                            type="button"
                                            onClick={() => setStatus('idle')}
                                            className="btn btn--outline"
                                            style={{ marginTop: 'var(--space-6)' }}
                                        >
                                            Volver
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Nombre completo <span className={styles.req}>*</span></label>
                                            <input type="text" id="name" name="name" required placeholder="Ej: Juan Pérez" />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Correo electrónico <span className={styles.req}>*</span></label>
                                            <input type="email" id="email" name="email" required placeholder="juan@tunegocio.cl" />
                                        </div>

                                        <div className={styles.row}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone">Teléfono / Celular</label>
                                                <input type="tel" id="phone" name="phone" placeholder="+56 9 1234 5678" />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="companyName">Nombre de tu empresa</label>
                                                <input type="text" id="companyName" name="companyName" placeholder="Ej: Café del Centro" />
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="vertical">¿De qué es tu negocio? <span className={styles.req}>*</span></label>
                                            <select id="vertical" name="vertical" required defaultValue="">
                                                <option value="" disabled>Selecciona tu rubro</option>
                                                <option value="Restaurantes">Restaurantes, Cafés y Comida Rápida</option>
                                                <option value="Retail">Retail, Minimarkets y Tiendas</option>
                                                <option value="Salud">Clínicas, Consultas y Salud</option>
                                                <option value="Construccion">Constructoras y Contratistas</option>
                                                <option value="Mecanica">Talleres Mecánicos y Automotrices</option>
                                                <option value="Estetica">Peluquerías y Centros de Estética</option>
                                                <option value="Educacion">Academias y Educación</option>
                                                <option value="Servicios">Servicios Profesionales o Consultorías</option>
                                                <option value="Otro">Otro rubro / No aparece aquí</option>
                                            </select>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">¿En qué podemos ayudarte?</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                placeholder="Ej: Necesito un sistema para controlar mi inventario y las mesas..."
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <div className={styles.errorAlert}>
                                                {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            className="btn btn--primary btn--lg"
                                            style={{ width: '100%' }}
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? 'Enviando...' : 'Solicitar prueba gratis de 7 días'}
                                        </button>
                                        <p className={styles.privacy}>
                                            Tus datos están protegidos. No hacemos spam.
                                        </p>
                                    </form>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
