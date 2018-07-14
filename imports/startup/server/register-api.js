import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge'

import UserSchema from '../../api/users/User';
import UserResolvers from '../../api/users/resolvers';

import cartSchema from '../../api/cart/cart';
import cartResolvers from '../../api/cart/resolvers';

//hihihiiivvsqfcfsssdsssfffhhdssszssssssssssssssssssss
// hiiiicdxcsdcscvcxndssjysghhsgfssfssssssdsssssss sfsssssdsssdssdsssssssss


const typeDefs = [UserSchema,cartSchema];



const resolvers = merge(UserResolvers,cartResolvers);

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
