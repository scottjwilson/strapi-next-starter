import Head from "next/head";
import Layout from "@/components/Layout";

export default function About({ dishes }) {
  return <Layout>About Page</Layout>;
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/dishes");
//   const dishes = await res.json();

//   return {
//     props: { dishes },
//   };
// }
