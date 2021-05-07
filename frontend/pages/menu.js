import PageHero from "@/components/PageHero";
import CategoryButtons from "@/components/CategoryButtons";
import DishList from "@/components/DishList";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function MenuPage({ dishes, categories }) {
  return (
    <Layout>
      <PageHero>Menu</PageHero>
      <CategoryButtons categories={categories} />
      <DishList dishes={dishes} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/dishes`);
  const res1 = await fetch(`${API_URL}/categories`);

  const dishes = await res.json();
  const categories = await res1.json();

  return {
    props: { dishes, categories },
  };
}
