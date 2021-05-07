import DishItem from "@/components/DishItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function Dish({ dish }) {
  return (
    <Layout>
      <DishItem dish={dish} />
    </Layout>
  );
}

// tell next how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/dishes`);
  const dishes = await res.json();

  const paths = dishes.map((dish) => ({
    params: { slug: dish.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for thet page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`${API_URL}/dishes?slug=${slug}`);
  const data = await res.json();
  const dish = data[0];

  return {
    props: { dish },
  };
}
