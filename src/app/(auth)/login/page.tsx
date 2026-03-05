'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from '../auth-form.module.css'

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulación de carga (luego conectaremos a NextAuth/Supabase)
        setTimeout(() => {
            setIsLoading(false)
            alert('Mock Login: El backend de Auth será integrado en la siguiente etapa.')
        }, 1500)
    }

    return (
        <div className={styles.formWrapper}>
            <div>
                <h1 className={styles.title}>Iniciar sesión</h1>
                <p className={styles.subtitle}>
                    Ingresa tus credenciales para acceder a tu panel de control.
                </p>
            </div>

            <button className={styles.socialBtn} type="button">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continuar con Google
            </button>

            <div className={styles.divider}>O ingresa con tu correo</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.input}
                        placeholder="juan@empresa.cl"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={styles.input}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <Link href="/recuperar" className={styles.forgotPassword}>
                    ¿Olvidaste tu contraseña?
                </Link>

                <button
                    type="submit"
                    className={`btn btn--primary btn--lg ${styles.submitBtn}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Ingresando...' : 'Iniciar sesión'}
                </button>
            </form>

            <p className={styles.bottomText}>
                ¿No tienes una cuenta? <Link href="/registro" className={styles.link}>Regístrate aquí</Link>
            </p>
        </div>
    )
}
