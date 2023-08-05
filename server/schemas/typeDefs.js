const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Book {    
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }
  
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    user: User !
    
  }
  input BookInput{
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook( input : BookInput ): User
    removeBook(bookId: ID!): User
  }
  
  
  `;
  
  
  
  module.exports = typeDefs;
