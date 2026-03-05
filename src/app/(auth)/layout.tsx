export const metadata = {
    title: 'Autenticación | WebÚnica Chile',
    description: 'Inicia sesión o regístrate en tu cuenta de WebÚnica para administrar tu negocio.',
}

import styles from './auth-layout.module.css'
import Link from 'next/link'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.authContainer}>

            {/* Lado izquierdo: El formulario (Login/Registro) */}
            <div className={styles.authFormSide}>
                <div className={styles.authHeader}>
                    <Link href="/" className={styles.logoLink}>
                        <span className={styles.logoIcon}>W</span>
                        <span className={styles.logoText}>WebÚnica</span>
                    </Link>
                </div>

                <div className={styles.authContent}>
                    {children}
                </div>

                <div className={styles.authFooter}>
                    <p>© {new Date().getFullYear()} WebÚnica SpA. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Lado derecho: Visual / Decorativo */}
            <div className={styles.authVisualSide}>
                <div className={styles.visualContent}>
                    <h2>El sistema operativo para las PYMEs de Chile.</h2>
                    <p>
                        Controla tu inventario, boletas electrónicas del SII, reportes y más, desde un solo lugar ordenado.
                    </p>

                    <div className={styles.glassBadge}>
                        <span className={styles.avatar}>🧑🏻‍💼</span>
                        <div>
                            <strong>"Desde que usamos WebÚnica, dejamos los cuadernos."</strong>
                            <span>— Café del Centro, Providencia</span>
                        </div>
                    </div>
                </div>

                {/* Decoraciones de fondo abstracto */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

        </div>
    )
}
