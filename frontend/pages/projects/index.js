import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { GET_PROJECTS_LIST } from "@/graphql/queries";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export default function ProjectsPage({ projects }) {
  return (
    <div>
      <Hero title="Projects" />
      <Section>
        <p>Hello</p>
        {JSON.stringify(projects)}
      </Section>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_PROJECTS_LIST,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
}
