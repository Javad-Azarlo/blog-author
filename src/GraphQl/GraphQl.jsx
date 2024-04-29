import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;
const GET_AUTHORE_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUT_INFO = gql`
  query getAutInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;
const GET_COMMENT_POST = gql`
  query MyQuery($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      text
      id
      name
    }
  }
`;

export {
  GET_BLOG_INFO,
  GET_AUTHORE_INFO,
  GET_AUT_INFO,
  GET_POST_INFO,
  GET_COMMENT_POST,
};
