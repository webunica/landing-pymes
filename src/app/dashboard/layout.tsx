import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import styles from "./dashboard-layout.module.css"

export const metadata = {
    title: "Panel de Control | WebÚnica",
}

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // 1. Verificación de seguridad (Ruta Protegida)
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    // 2. Renderizado del Layout del SaaS
    return (
        <div className={styles.dashboardContainer}>
            {/* Barra lateral izquierda (Sidebar) */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.logoBadge}>W</div>
                    <span className={styles.logoText}>WebÚnica</span>
                </div>

                <nav className={styles.sidebarNav}>
                    <span className={styles.navLabel}>GestiÓn</span>
                    <Link href="/dashboard" className={`${styles.navItem} ${styles.active}`}>
                        📊 Resumen
                    </Link>
                    <Link href="/dashboard/productos" className={styles.navItem}>
                        📦 Inventario
                    </Link>
                    <Link href="/dashboard/clientes" className={styles.navItem}>
                        👥 Clientes
                    </Link>

                    <span className={styles.navLabel} style={{ marginTop: '1.5rem' }}>CUENTA</span>
                    <Link href="/dashboard/configuracion" className={styles.navItem}>
                        ⚙️ Configuración
                    </Link>
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.userMenu}>
                        <div className={styles.userAvatar}>
                            {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
                        </div>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>{session.user?.name || "Usuario"}</span>
                            <span className={styles.userEmail}>{session.user?.email}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Contenido principal (Donde inyectamos las pantallas) */}
            <main className={styles.mainContent}>
                <header className={styles.topbar}>
                    <h2 className={styles.topbarTitle}>Panel de Control</h2>
                    <Link href="/api/auth/signout" className="btn btn--outline" style={{ padding: '8px 16px', fontSize: '14px' }}>
                        Cerrar sesión
                    </Link>
                </header>

                <div className={styles.pageContainer}>
                    {children}
                </div>
            </main>
        </div>
    )
}
