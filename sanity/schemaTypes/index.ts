import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import testimonial from './testimonial'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, testimonial, contact],
}
