const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValuem, args, req) {
        req.session.userQuery++;//store in mongodb session
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
