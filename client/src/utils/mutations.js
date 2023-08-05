

import { gql} from '@apollo/client';

export const  LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`
  export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `
export const  SAVE_BOOK = gql`
mutation saveBook($input: BookInput) {
  saveBook(input: $input)  {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}`

export const REMOVE_BOOK = gql `

mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    username
    email
    _id
    savedBooks {
      title
      link
      image
      description
      bookId
      authors
    }
  }
}




`
