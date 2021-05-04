import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div class="max-w-6xl mx-auto py-2 flex">
        <div class="bg-red-400">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <nav class="bg-gray-400 flex">
          <div>
            <Link href="/events">
              <a>About</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
