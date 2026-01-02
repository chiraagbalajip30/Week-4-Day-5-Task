const Home = () => {
  const categories = [
    { id: 1, title: "Men", subtitle: "Timeless Essentials" },
    { id: 2, title: "Women", subtitle: "Modern Silhouettes" },
    { id: 3, title: "Accessories", subtitle: "Minimal Details" },
  ];

  return (
    <div className="px-6 py-12 bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-5xl tracking-wide mb-4">AURA</h1>
        <p className="text-lg text-gray-600 mb-6">
          Premium fashion for the modern lifestyle
        </p>
        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition rounded-lg">
          Shop Now
        </button>
      </section>

      {/* Featured Section */}
      <section className="mt-20 grid md:grid-cols-3 gap-8">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border items-center justify-center p-6 rounded-lg gap-2 hover:bg-gray-200 transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
