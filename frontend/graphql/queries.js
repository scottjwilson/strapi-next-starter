import { gql } from "@apollo/client";

const GET_PROJECTS_LIST = gql`
  {
    projects {
      name
      excerpt
      desktop {
        url
      }
    }
  }
`;

export { GET_PROJECTS_LIST };
