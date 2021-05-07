import qs from "qs";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import PageHero from "@/components/PageHero";
import DishItem from "@/components/DishItem";

export default function SearchPage({ dishes }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <PageHero>
        <h1>Search Results for {router.query.term} </h1>
      </PageHero>

      {dishes.map((dish) => (
        <DishItem dish={dish} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }],
    },
  });

  const res = await fetch(`${API_URL}/dishes?name_contains=${term}`);
  const dishes = await res.json();

  return {
    props: { dishes },
  };
}
