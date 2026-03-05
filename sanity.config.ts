import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool({
            title: 'Contenido WebÚnica',
        }),
    ],
})
