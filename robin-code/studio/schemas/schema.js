// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import my custom made schemas
import userSchema from './userSchema'
import transactionSchema from './transactionSchema'

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    userSchema,
		transactionSchema
  ]),
})
