import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';

import messageSchema from '../../api/messages/messages.graphql';
import messageResolvers from '../../api/messages/resolvers';

import albumSchema from '../../api/albums/albums.graphql';
import albumResolvers from '../../api/albums/resolvers';

import videosSchema from '../../api/videos/videos.graphql';
import videosResolvers from '../../api/videos/resolvers';

import streamingSchema from '../../api/streaming/streaming.graphql';
import streamingResolvers from '../../api/streaming/resolvers';

//hihihiiivvsqfcfsssdsssfffhhdssszsssssssssssssss
// hiiiicdxcsdcscvcxndssssjyssxssgsgfssfssssssssdsssssss sfsssssdsssdssssssssssdsssssssss


const typeDefs = [UserSchema,messageSchema,albumSchema,videosSchema,streamingSchema];



const resolvers = merge(UserResolvers,messageResolvers,albumResolvers,videosResolvers,streamingResolvers);

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
