import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
        }

        // Buscar workspace
        const user = await prisma.user.findUnique({
            where: { email: session.user.email },
            include: { workspaces: true }
        })

        if (!user || user.workspaces.length === 0) {
            return NextResponse.json({ error: 'Sin workspace' }, { status: 403 })
        }

        const workspaceId = user.workspaces[0].workspaceId

        // Capturar datos
        const { name, description, price, stock, sku } = await req.json()

        if (!name || isNaN(price)) {
            return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 })
        }

        const product = await prisma.product.create({
            data: {
                workspaceId,
                name,
                description,
                price: Number(price),
                stock: Number(stock || 0),
                sku,
                active: true,
            }
        })

        return NextResponse.json({ success: true, product }, { status: 201 })
    } catch (error: any) {
        console.error('Error creando producto:', error)
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }
}
