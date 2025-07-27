interface NewsItem {
  date: string;
  title: string;
  category: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      date: '2024.01.15',
      title: '冬季限定メニュー「ほうじ茶ラテ」が登場しました',
      category: 'メニュー',
    },
    {
      date: '2024.01.08',
      title: '年始の営業時間のお知らせ',
      category: 'お知らせ',
    },
    {
      date: '2023.12.20',
      title: '年末年始の営業について',
      category: 'お知らせ',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'メニュー':
        return 'bg-koto-green text-white';
      case 'お知らせ':
        return 'bg-koto-brown text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="news" className="py-20 bg-koto-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-koto-brown-dark mb-4">
            お知らせ
          </h2>
          <p className="text-lg text-gray-600">
            古都茶房からの最新情報
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-koto-brown-dark hover:text-koto-brown transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center text-koto-brown hover:text-koto-brown-dark transition-colors font-medium">
              すべてのお知らせを見る
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;