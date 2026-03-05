import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, password, companyName } = body

        if (!email || !password || !name) {
            return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 })
        }

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json({ error: "El correo electrónico ya está registrado" }, { status: 409 })
        }

        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(password, 12)

        // Crear Tenant (Workspace) y el User, con su rol de Owner por defecto
        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash: hashedPassword,
                workspaces: {
                    create: {
                        role: "OWNER",
                        workspace: {
                            create: {
                                name: companyName || "Mi Negocio",
                                slug: `${companyName?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'negocio'}-${Date.now()}`
                            }
                        }
                    }
                }
            },
        })

        return NextResponse.json(
            { success: true, message: "Usuario creado exitosamente", user: { id: user.id, email: user.email } },
            { status: 201 }
        )
    } catch (error: any) {
        console.error("Error al registrar el usuario:", error)
        return NextResponse.json(
            { error: "Ocurrió un error al crear la cuenta" },
            { status: 500 }
        )
    }
}
