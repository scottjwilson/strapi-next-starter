export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-red-700 font-bold mb-2">
              © {new Date().getFullYear()}
              Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
