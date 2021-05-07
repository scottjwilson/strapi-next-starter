import { useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function MyOrdersPage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Layout>
      <PageHero>
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Welcome,
      </PageHero>
      {JSON.stringify(user)}
    </Layout>
  );
}
