import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, companyName, vertical, message } = body

        // 1. Validaciones básicas
        if (!name || !email) {
            return NextResponse.json(
                { error: 'El nombre y el correo son obligatorios' },
                { status: 400 }
            )
        }

        // 2. Guardar en Base de Datos vía Prisma
        const newLead = await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                company: companyName, // mapeo correcto
                rubro: vertical,      // mapeo correcto
                message,
                sourcePage: 'Landing Page v1', // mapeo correcto
            },
        })

        // 3. (Opcional) Enviar correo de notificación a ventas vía Resend aquí.

        return NextResponse.json(
            { success: true, message: 'Lead capturado con éxito', lead: newLead },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error al capturar Lead:', error)
        return NextResponse.json(
            { error: 'Error interno del servidor al procesar el formulario', det: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        )
    }
}
