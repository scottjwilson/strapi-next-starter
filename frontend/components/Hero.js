export default function Hero({ subtitle, title, children }) {
  return (
    <div className="max-w-3xl md:py-20 py-10 px-6 mx-auto md:space-y-4 space-y-1 text-center">
      <h2 className="md:text-2xl text-xl dark:text-gray-100">{subtitle}</h2>
      <h1 className="md:text-6xl text-4xl font-bold dark:text-gray-100">
        {title}
      </h1>
      {children}
    </div>
  );
}
