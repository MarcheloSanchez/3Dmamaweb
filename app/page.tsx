import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import InstagramFeed from "@/components/InstagramFeed";

// TODO: Move this data to a database or CMS
const featuredProducts = [
  {
    id: "1",
    name: "Custom Figurine",
    price: 29.99,
    image: "/products/figurine.jpg",
    description: "Personalized 3D printed figurines made to order"
  },
  {
    id: "2",
    name: "Decorative Vase",
    price: 39.99,
    image: "/products/vase.jpg",
    description: "Modern geometric vase perfect for any home"
  },
  {
    id: "3",
    name: "Phone Stand",
    price: 14.99,
    image: "/products/phone-stand.jpg",
    description: "Ergonomic phone stand for desk or nightstand"
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Custom 3D Prints
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Made with Love
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              Bringing your ideas to life, one layer at a time.
              Discover unique 3D printed creations or request a custom design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
              >
                Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="bg-zinc-900 dark:bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Custom Design in Mind?
          </h2>
          <p className="text-zinc-300 mb-8 text-lg">
            We love bringing unique ideas to life. Get in touch to discuss your custom 3D printing project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
