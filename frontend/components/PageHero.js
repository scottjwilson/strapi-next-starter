const PageHero = ({ children }) => {
  return (
    <header className="mx-auto bg-black h-40 text-gray-100 flex justify-center items-center">
      <h1 className="text-4xl capitalize font-barlow italic">{children}</h1>
    </header>
  );
};

export default PageHero;
