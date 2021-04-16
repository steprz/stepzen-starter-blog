import { gql } from '@apollo/client';

export const GET_POST_BY_ID = gql`
  query GetPostByIdQuery($id: ID!) {
    getPostById(id: $id) {
      date
      dateGMT
      guid
      id
      link
      modified
      modifiedGMT
      slug
      status
      type
      parentId
      title
      content
      contentProtected
      authorId
      excerpt
      excerptProtected
      featuredMediaId
      commentStatus
      pingStatus
      menuOrder
      format
      sticky
      template
      authorName
      authorUrl
      authorDescription
      authorLink
      authorSlug
      authorAvatarUrl24
      authorAvatarUrl48
      authorAvatarUrl96
      author {
        avatarUrl24
        avatarUrl48
        avatarUrl96
        id
        name
        slug
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPostsQuery {
    getPosts {
      date
      dateGMT
      guid
      id
      link
      modified
      modifiedGMT
      slug
      status
      type
      parentId
      title
      content
      contentProtected
      authorId
      excerpt
      excerptProtected
      featuredMediaId
      commentStatus
      pingStatus
      menuOrder
      format
      sticky
      template
      authorName
      authorUrl
      authorDescription
      authorLink
      authorSlug
      authorAvatarUrl24
      authorAvatarUrl48
      authorAvatarUrl96
      author {
        avatarUrl24
        avatarUrl48
        avatarUrl96
        id
        name
        slug
      }
    }
  }
`;
