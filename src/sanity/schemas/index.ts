import { type SchemaTypeDefinition } from 'sanity'
import { verticalPackType } from './verticalPack'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [verticalPackType],
}
