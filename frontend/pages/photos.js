import Image from "next/image";
import Layout from "@/components/Layout";
import { buildUrl } from "cloudinary-build-url";
import { API_URL } from "@/config/index";

export default function Photos({ gallery }) {
  const { images } = gallery;
  return (
    <Layout>
      <div className="bg-gray-200 grid grid-rows-1 grid-cols-3">
        {images.map((image) => {
          const url = buildUrl(`${image.hash}`, {
            cloud: {
              cloudName: "swdb",
            },
          });
          return (
            <div className="">
              <Image src={url} width={600} height={400} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/gallery`);

  const gallery = await res.json();

  return {
    props: { gallery },
  };
}
