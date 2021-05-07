import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <Layout>
      <PageHero>
        <h1>Hey</h1>
      </PageHero>
    </Layout>
  );
}

// export default function ServicesPage({ servicesTitle, servicesAll }) {
//   return (
//     <Layout>
//       <PageHero>
//         <h1>{servicesTitle.title}</h1>
//       </PageHero>
//       <section className="max-w-5xl mx-auto">
//         <div className="py-4">
//           <p className="text-2xl ">{servicesTitle.description}</p>
//         </div>

//         {servicesAll.map((service) => (
//           <div className="py-4 px-2 bg-red-500 text-gray-800">
//             <h1>{service.name}</h1>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </section>
//     </Layout>
//   );
// }

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
