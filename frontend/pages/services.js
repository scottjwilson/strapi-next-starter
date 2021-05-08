import Hero from "@/components/Hero";

export default function ServicesPage() {
  return (
    <>
      <Hero title="Providing everything you need for your perfect website" />
      <section className="wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At suscipit
          eius minima nulla, eveniet alias, impedit, non quo libero ullam omnis
          quod porro velit! Accusantium quisquam esse voluptatum provident
          aliquid necessitatibus odit sapiente voluptates vel reiciendis illo,
          nulla est ratione velit beatae laudantium ab doloremque ullam
        </p>
      </section>
    </>
  );
}
// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: process.env.STRAPI_GRAPHQL_API,
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({ query: GET_SERVICES_PAGE });

//   return {
//     props: {
//       servicesTitle: data.service,
//       servicesAll: data.services,
//     },
//   };
// };
