import PageHero from "@/components/PageHero";
import CategoryButtons from "@/components/CategoryButtons";
import DishList from "@/components/DishList";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Category({ category, allCat }) {
  return (
    <Layout>
      <PageHero>{category.name}</PageHero>
      <CategoryButtons categories={allCat} />
      <DishList dishes={category.dishes} />
    </Layout>
  );
}

// tell next how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/categories`);
  const categories = await res.json();

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for thet page
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_URL}/categories?slug=${slug}`);
  const data = await res.json();
  const category = data[0];

  const res1 = await fetch(`${API_URL}/categories`);
  const allCat = await res1.json();

  return {
    props: { category, allCat },
  };
}
