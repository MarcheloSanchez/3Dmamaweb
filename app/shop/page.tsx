import ProductCard from "@/components/ProductCard";

// TODO: Replace with database/API call to fetch products
const products = [
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
  {
    id: "4",
    name: "Desk Organizer",
    price: 24.99,
    image: "/products/organizer.jpg",
    description: "Keep your workspace tidy with this modular organizer"
  },
  {
    id: "5",
    name: "Plant Pot",
    price: 18.99,
    image: "/products/plant-pot.jpg",
    description: "Stylish geometric plant pot with drainage"
  },
  {
    id: "6",
    name: "Cable Management",
    price: 12.99,
    image: "/products/cable.jpg",
    description: "Organize your cables with these handy clips"
  },
];

export default function Shop() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Our Shop
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Browse our collection of unique 3D printed items. All products are made to order with high-quality materials.
          </p>
        </div>

        {/* TODO: Add filtering and sorting options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* TODO: Add pagination when product list grows */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Don't see what you're looking for?{" "}
            <a href="/contact" className="text-zinc-900 dark:text-white font-semibold hover:underline">
              Contact us
            </a>{" "}
            for custom orders!
          </p>
        </div>
      </div>
    </div>
  );
}
