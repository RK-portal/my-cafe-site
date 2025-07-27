import { useState } from 'react';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  return (
    <section id="menu" className="py-20 bg-koto-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-koto-brown-dark mb-4">
            お品書き
          </h2>
          <p className="text-lg text-gray-600">
            こだわりの一品をご用意しております
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 border-b border-koto-brown-light">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mx-2 mb-2 font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-koto-brown-dark border-b-2 border-koto-brown-dark'
                    : 'text-gray-600 hover:text-koto-brown'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData
              .find((category) => category.id === activeCategory)
              ?.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-koto-brown-dark">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-koto-brown ml-4">
                      ¥{item.price.toLocaleString()}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              ※ 価格は全て税込みです
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;