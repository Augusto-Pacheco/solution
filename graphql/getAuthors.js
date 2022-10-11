import { gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query {
    posts {
      rows {
        id
        title
        reactions
        author {
          name
        }
        categories {
          name
        }
      }
      length
      pages
    }
  }
`

export default GET_AUTHORS;
