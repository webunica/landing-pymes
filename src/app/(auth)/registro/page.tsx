'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from '../auth-form.module.css'

export default function RegistroPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name') as string,
            companyName: formData.get('companyName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        try {
            // 1. Llamar al endpoint de registro custom
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const responseData = await res.json()

            if (!res.ok) {
                throw new Error(responseData.error || 'Ocurrió un error al registrarse')
            }

            // 2. Si fue exitoso, iniciar sesión automáticamente
            const signInRes = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            })

            if (signInRes?.error) {
                // Falló el autologin (raro)
                router.push('/login?registered=true')
            } else {
                router.push('/dashboard')
                router.refresh()
            }

        } catch (err: any) {
            console.error(err)
            setError(err.message || 'Error inesperado de red')
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = () => {
        signIn('google', { callbackUrl: '/dashboard' })
    }

    return (
        <div className={styles.formWrapper}>
            <div>
                <h1 className={styles.title}>Crea tu cuenta</h1>
                <p className={styles.subtitle}>
                    Comienza tu prueba gratuita de 7 días. No necesitas tarjeta de crédito.
                </p>
            </div>

            <button className={styles.socialBtn} type="button" onClick={handleGoogleSignIn}>
                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Registrarse con Google
            </button>

            <div className={styles.divider}>O usa tu correo electrónico</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nombre completo</label>
                    <input type="text" id="name" name="name" className={styles.input} placeholder="Ej: Juan Pérez" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="companyName" className={styles.label}>Nombre de tu negocio o empresa</label>
                    <input type="text" id="companyName" name="companyName" className={styles.input} placeholder="Ej: Café del Centro" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Correo electrónico</label>
                    <input type="email" id="email" name="email" className={styles.input} placeholder="juan@empresa.cl" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Crear contraseña</label>
                    <input type="password" id="password" name="password" className={styles.input} placeholder="Mínimo 8 caracteres" minLength={8} required />
                </div>

                {error && (
                    <div style={{ color: '#ef4444', fontSize: '14px', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '6px' }}>
                        {error}
                    </div>
                )}

                <button type="submit" className={`btn btn--primary btn--lg ${styles.submitBtn}`} disabled={isLoading}>
                    {isLoading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
                </button>

                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', margin: 0 }}>
                    Al registrarte, aceptas nuestros <Link href="#" className={styles.link}>Términos de servicio</Link> y <Link href="#" className={styles.link}>Política de privacidad</Link>.
                </p>
            </form>

            <p className={styles.bottomText}>
                ¿Ya tienes una cuenta? <Link href="/login" className={styles.link}>Inicia sesión</Link>
            </p>
        </div>
    )
}
