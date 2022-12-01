import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query getSingleUser {
    user {
      _id
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
