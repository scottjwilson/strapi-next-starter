import Link from "next/link";

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="max-w-6xl py-6 mx-auto md:flex md:justify-center md:items-center grid grid-cols-2 gap-2 px-2">
      {categories &&
        categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <a className="font-barlow font-semibold capitalize px-6 py-2 text-gray-100 bg-red-800 hover:bg-red-700 hover:text-white  rounded transition ease-in-out duration-500 shadow-xl hover:shadow-2xl">
              {category.name}
            </a>
          </Link>
        ))}
    </div>
  );
};

export default CategoryButtons;
