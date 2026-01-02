import hero from "../assets/hero.jpg";
import image_3 from "../assets/image_3.avif";
import image_4 from "../assets/image_4.avif";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Classic Black Tee",
      price: "₹1,299",
      category: "Men",
      image: hero,
    },
    {
      id: 2,
      name: "Minimal White Shirt",
      price: "₹1,899",
      category: "Women",
      image: image_3,
    },
    {
      id: 3,
      name: "Everyday Hoodie",
      price: "₹2,499",
      category: "Unisex",
      image: image_4,
    },
    {
      id: 4,
      name: "Leather Sling Bag",
      price: "₹2,999",
      category: "Accessories",
      image: product1,
    },
    {
      id: 5,
      name: "Tailored Trousers",
      price: "₹2,199",
      category: "Men",
      image: product2,
    },
    {
      id: 6,
      name: "Oversized Jacket",
      price: "₹3,499",
      category: "Women",
      image: product3,
    },
  ];

  return (
    <div className="px-6 py-16 bg-gray-100">
      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-wide mb-3">Our Products</h1>
        <p className="text-gray-600">
          Curated essentials designed for everyday elegance
        </p>
      </div>

      {/* Products Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="border bg-white p-6 rounded-lg hover:shadow-lg transition"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gray-200 mb-4 rounded-md flex items-center justify-center text-gray-500">
              <img src={hero} alt={item.name}></img>
            </div>

            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.category}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-medium">{item.price}</span>
              <button className="text-sm border px-4 py-1 hover:bg-black hover:text-white transition rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
