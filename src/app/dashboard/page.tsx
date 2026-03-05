import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function DashboardHomePage() {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        redirect('/login')
    }

    // Buscar al usuario y su workspace asociado (El Comercio / Tenant)
    const userData = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
            workspaces: {
                include: { workspace: true }
            }
        }
    })

    // Obtener el primer negocio del usuario
    const userBusiness = userData?.workspaces[0]?.workspace

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                    ¡Bienvenido de vuelta, {session.user.name || "Usuario"}! 👋
                </h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
                    Aquí tienes un resumen rápido de cómo le va a <strong>{userBusiness?.name || "tu negocio"}</strong> hoy.
                </p>
            </div>

            {/* Tarjetas de Métricas Rápidas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>

                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Ventas de Hoy
                    </h3>
                    <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>$0 CLP</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-success)', fontWeight: 500 }}>+0% vs ayer</span>
                </div>

                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Nuevos Clientes
                    </h3>
                    <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>0</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Esperando primer registro</span>
                </div>

                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Estado de Sistema
                    </h3>
                    <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Activo</p>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Módulo POS & Inventario</span>
                </div>

            </div>

            {/* Banner de Ayuda / Onboarding (Mockup) */}
            <div style={{ backgroundColor: 'var(--color-primary-100)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    🚀 Siguiente paso: Configura tu Inventario
                </h3>
                <p style={{ color: 'var(--color-text-primary)', marginBottom: '1.5rem', maxWidth: '600px' }}>
                    Para que WebÚnica pueda funcionar como tu Punto de Venta (POS) o llevar el control del stock, empieza añadiendo tus primeros productos o servicios.
                </p>
                <button className="btn btn--primary">
                    Añadir Producto Manual
                </button>
            </div>

        </div>
    )
}
