import { defineField, defineType } from 'sanity'

export const verticalPackType = defineType({
    name: 'verticalPack',
    title: 'Vertical Pack (Rubros)',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre del Rubro',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'metaTitle',
            title: 'SEO Title',
            type: 'string',
        }),
        defineField({
            name: 'metaDescription',
            title: 'SEO Description',
            type: 'text',
        }),
        defineField({
            name: 'heroBadge',
            title: 'Hero Badge (ej: 🍽️ Pack Restaurantes)',
            type: 'string',
        }),
        defineField({
            name: 'heroH1',
            title: 'Hero H1 Title',
            type: 'string',
        }),
        defineField({
            name: 'heroHighlight',
            title: 'Palabra destacada del H1 (En azul)',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtext',
            title: 'Hero Subtext',
            type: 'text',
        }),
        // Métricas en array
        defineField({
            name: 'metrics',
            title: 'Hero Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Valor (ej: -80%)' },
                        { name: 'label', type: 'string', title: 'Etiqueta (ej: Errores)' },
                    ],
                },
            ],
        }),
        // Pain points
        defineField({
            name: 'painsTitle',
            title: 'Título de sección Dolores',
            type: 'string',
        }),
        defineField({
            name: 'painPoints',
            title: 'Pain Points',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Dolor principal' },
                        { name: 'description', type: 'text', title: 'Explicación del dolor' },
                    ],
                },
            ],
        }),
        // Funcionalidades (Features)
        defineField({
            name: 'features',
            title: 'Funcionalidades del Pack',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', type: 'string', title: 'Ícono (Emoji o nombre)' },
                        { name: 'title', type: 'string', title: 'Título' },
                        { name: 'description', type: 'text', title: 'Descripción' },
                        { name: 'badge', type: 'string', title: 'Badge (opcional)' },
                    ],
                },
            ],
        }),
        // Objeciones
        defineField({
            name: 'objections',
            title: 'Objeciones (Manejo de objeciones)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Objeción (ej: Ya tengo caja)' },
                        { name: 'answer', type: 'text', title: 'Manejo / Respuesta' },
                    ],
                },
            ],
        }),
        // FAQs
        defineField({
            name: 'faqs',
            title: 'Preguntas Frecuentes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Pregunta' },
                        { name: 'answer', type: 'text', title: 'Respuesta' },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'slug.current',
        },
    },
})
