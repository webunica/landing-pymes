import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import ProductList from "./ProductList"

export const metadata = {
    title: "Inventario | Panel WebÚnica",
}

export default async function ProductosPage() {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        redirect('/login')
    }

    // Obtener data del usuario para saber su workspace
    const userData = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { workspaces: true }
    })

    // Si no tiene, redirigimos o mostramos error (asumimos que sí tiene por crear cuenta)
    const workspaceId = userData?.workspaces[0]?.workspaceId

    if (!workspaceId) {
        return <div>Error crítico: Tu cuenta no tiene negocio asociado. Contactar Soporte.</div>
    }

    // Cargar productos del servidor (SSR)
    const serverProducts = await prisma.product.findMany({
        where: { workspaceId, active: true },
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Inventario</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>Administra el catálogo y stock de tus productos o servicios.</p>
                </div>
            </div>

            <ProductList initialProducts={serverProducts} />
        </div>
    )
}
