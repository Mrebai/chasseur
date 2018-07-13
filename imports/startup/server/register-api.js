import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';



const typeDefs = [UserSchema];



const resolvers = merge(UserResolvers);

Meteor.users.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    }
});
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
