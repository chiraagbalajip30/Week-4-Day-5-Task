const About = () => {
  return (
    <div className="px-6 py-16 bg-gray-100 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 tracking-wide">About AURA</h1>

      {/* Intro */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        AURA is a premium fashion brand focused on minimal design, timeless
        quality, and modern lifestyle essentials. We believe fashion should be
        effortless, expressive, and sustainable.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* Mission */}
        <div className="border p-6 rounded-lg hover:bg-gray-200 transition">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To create high-quality fashion pieces that balance comfort,
            durability, and style—designed for people who value simplicity and
            confidence.
          </p>
        </div>

        {/* Vision */}
        <div className="border p-6 rounded-lg hover:bg-gray-200 transition">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a globally trusted fashion brand that promotes mindful
            consumption and modern aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
