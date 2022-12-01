const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: {
      authors: [String],
      description: String!,
      bookId: String!,
      image: String,
      link: String,
      title: String!,
    }
  }

  type Mutation {
    getSingleUser(_id: ID, username: String): User
    createUser(_id: ID, username: String, email: String): User
    login(username: String, email: String): User
  }
`;

module.exports = typeDefs;
