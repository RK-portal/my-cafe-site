const Access = () => {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-koto-brown-dark mb-4">
            アクセス
          </h2>
          <p className="text-lg text-gray-600">
            古都茶房への道のり
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-koto-brown-dark mb-4">
                  店舗情報
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-gray-600 font-medium">住所</div>
                    <div className="flex-1">
                      <p className="text-gray-800">
                        〒604-0000<br />
                        京都府京都市中京区古都町1-2-3<br />
                        古都ビル 1F
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-gray-600 font-medium">営業時間</div>
                    <div className="flex-1">
                      <p className="text-gray-800">
                        10:00 - 18:00<br />
                        <span className="text-sm text-gray-600">（L.O. 17:30）</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-gray-600 font-medium">定休日</div>
                    <div className="flex-1">
                      <p className="text-gray-800">水曜日</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-gray-600 font-medium">電話</div>
                    <div className="flex-1">
                      <p className="text-gray-800">075-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-koto-brown-dark mb-3">
                  アクセス方法
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-koto-brown mr-2">▪</span>
                    <span>地下鉄烏丸線「京都市役所前駅」より徒歩5分</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-koto-brown mr-2">▪</span>
                    <span>京阪本線「三条駅」より徒歩8分</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-koto-brown mr-2">▪</span>
                    <span>市バス「河原町三条」バス停より徒歩3分</span>
                  </li>
                </ul>
              </div>

              <div className="bg-koto-cream rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  ※ 駐車場はございません。公共交通機関をご利用ください。
                </p>
              </div>
            </div>

            <div className="h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.7969741470856!2d135.76462931524!3d35.011665380356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108894b9f9f0f%3A0x1baec822e859c84a!2z5Lqs6YO95biC5b255omA!5e0!3m2!1sja!2sjp!4v1647856422000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="古都茶房の地図"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;