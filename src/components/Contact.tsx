const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-koto-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-koto-brown-dark mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600">
            ご予約・お問い合わせはお気軽にどうぞ
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-koto-cream rounded-full mb-4">
                  <svg className="w-8 h-8 text-koto-brown-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-koto-brown-dark mb-2">お電話</h3>
                <p className="text-2xl font-medium text-gray-800 mb-2">075-123-4567</p>
                <p className="text-sm text-gray-600">受付時間: 10:00 - 18:00</p>
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-koto-cream rounded-full mb-4">
                  <svg className="w-8 h-8 text-koto-brown-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-koto-brown-dark mb-2">メール</h3>
                <p className="text-xl text-gray-800 mb-2">info@koto-sabo.jp</p>
                <p className="text-sm text-gray-600">24時間受付</p>
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="bg-koto-cream rounded-lg p-6">
                <h4 className="font-serif font-bold text-koto-brown-dark mb-3">ご予約について</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  お席のご予約は、お電話またはメールにて承っております。
                  団体様（6名様以上）のご予約は、3日前までにご連絡ください。
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  ※ 営業時間外のお問い合わせは、翌営業日以降の対応となります
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;