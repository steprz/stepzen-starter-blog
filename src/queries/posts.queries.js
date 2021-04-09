import { gql } from "@apollo/client";

export const GET_POST_BY_ID = gql`
  query GetPostByIdQuery($id: ID!) {
    getPostById(id: $id) {
      id
      title
      content
      excerpt
      authorName
      authorLink
    }
  }
`;

export const GET_POSTS = gql`
  query GetPostsQuery {
    getPosts {
      id
      title
      content
      excerpt
      authorName
      authorLink
    }
  }
`;
