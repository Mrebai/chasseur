import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';

import messageSchema from '../../api/messages/messages.graphql';
import messageResolvers from '../../api/messages/resolvers';
//hihihiiivvsqfcfsssdsssfffhhdssszsssssssssssssss
// hiiiicdxcsdcscvcxndssjyssxssgsgfssfssssssssdsssssss sfsssssdsssdssdsssssssss


const typeDefs = [UserSchema,messageSchema];



const resolvers = merge(UserResolvers,messageResolvers);

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
