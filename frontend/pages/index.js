import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Scott Wilson Developer Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero
        subtitle="Hey i'm Scott,"
        title="I help businesses get more customers."
      >
        <div className="flex justify-center pt-6">
          <Link href="/contact">
            <button className="bg-green-500 text-gray-50 font-semibold rounded-lg px-12 py-4 dark:bg-purple-900 shadow transform hover:-translate-y-0.5 hover:shadow-2xl duration-300">
              Lets Do It
            </button>
          </Link>
        </div>
      </Hero>
      <Section>
        <p>
          eveniet in nesciunt ipsam? Ipsam expedita at ratione quod corporis
          dolorem voluptatem, voluptatibus voluptas officia odio dolor
          voluptatum doloribus obcaecati repellendus itaque rerum esse nesciunt
          fugiat modi qui minus. A ea recusandae ducimus, fugiat, quam
          perferendis placeat odit voluptatum molestias animi reiciendis porro
          nihil cupiditate magni autem id totam iste explicabo accusamus. Magnam
          minus provident odio sunt tenetur at fuga possimus vero, officia
          repellendus excepturi debitis consequatur accusantium nesciunt?
        </p>
      </Section>
    </div>
  );
}
