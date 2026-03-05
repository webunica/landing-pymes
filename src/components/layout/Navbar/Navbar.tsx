'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const NAV_LINKS = [
    { href: '/producto', label: 'Producto' },
    { href: '/rubros', label: 'Rubros' },
    { href: '/integraciones', label: 'Integraciones' },
    { href: '/precios', label: 'Precios' },
    { href: '/casos', label: 'Casos' },
    { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 12)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={`container ${styles.nav}`} aria-label="Navegación principal">
                {/* Logo */}
                <Link href="/" className={styles.logo} aria-label="WebÚnica — Inicio">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <rect width="28" height="28" rx="7" fill="var(--color-primary)" />
                        <path d="M7 9l4 10 3-7 3 7 4-10" stroke="white" strokeWidth="2.2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Web<strong>Única</strong></span>
                </Link>

                {/* Links desktop */}
                <ul className={styles.links} role="list">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* CTAs */}
                <div className={styles.actions}>
                    <Link href="/contacto" className="btn btn--ghost btn--sm">
                        Iniciar sesión
                    </Link>
                    <Link href="/contacto" className="btn btn--primary btn--sm">
                        Prueba gratis
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
                    <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
                    <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!open}
            >
                <ul role="list">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.mobileLink}
                                onClick={() => setOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.mobileActions}>
                    <Link href="/contacto" className="btn btn--outline btn--md"
                        onClick={() => setOpen(false)}>
                        Iniciar sesión
                    </Link>
                    <Link href="/contacto" className="btn btn--primary btn--md"
                        onClick={() => setOpen(false)}>
                        Prueba gratis — 7 días
                    </Link>
                </div>
            </div>
        </header>
    )
}
