import { GraphQLServer } from 'graphql-yoga'
import path from 'path'

import resolvers from './graphql/resolvers'

export const servGrap = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
    resolvers
})