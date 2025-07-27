const About = () => {
  const features = [
    {
      title: "こだわりの豆",
      description: "世界各地から厳選した、個性豊かなコーヒー豆を使用。焙煎にもこだわり、豆本来の味わいを引き出します。",
      icon: "☕",
    },
    {
      title: "心地よい空間",
      description: "古都の風情を感じられる、落ち着いた和モダンな空間。ゆったりとした時間をお過ごしください。",
      icon: "🏛️",
    },
    {
      title: "ゆるやかな時間",
      description: "慌ただしい日常から離れ、一杯のコーヒーとともに、自分だけの特別な時間を。",
      icon: "⏰",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-koto-brown-dark mb-4">
            古都茶房について
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            古都の静寂に包まれた空間で、こだわりの一杯をお届けします。
            日常の喧騒から離れ、ゆったりとした時間をお過ごしください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-koto-brown mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-koto-cream rounded-lg p-8 md:p-12 shadow-lg">
            <p className="text-lg text-koto-brown-dark leading-relaxed text-center font-serif">
              "一杯のコーヒーから始まる、豊かな時間を。"
            </p>
            <p className="text-center mt-4 text-gray-600">
              古都茶房は、皆様に特別なひとときをお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;