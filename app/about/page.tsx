import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
          About 3D Mama
        </h1>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Welcome to 3D Mama! We are passionate about bringing creativity to life through 3D printing technology.
              What started as a hobby has grown into a full-fledged business dedicated to creating unique,
              high-quality 3D printed items.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Every piece we create is made with attention to detail and a commitment to quality.
              We use premium materials and state-of-the-art 3D printing technology to ensure each product
              meets our high standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              We specialize in creating custom 3D printed products for home, office, and gifts.
              From decorative items to functional accessories, we can bring your ideas to reality.
            </p>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-2">
              <li>Custom 3D printed designs</li>
              <li>Home decor and accessories</li>
              <li>Personalized gifts</li>
              <li>Functional organizers and tools</li>
              <li>Replacement parts and prototypes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Follow Our Journey
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              We love sharing our latest creations and behind-the-scenes content on Instagram.
              Follow us to see new designs, works in progress, and special promotions!
            </p>
            <div className="flex justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @3dmama
              </a>
            </div>
          </section>

          <section>
            <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                Have a custom design in mind? We'd love to hear about it!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
