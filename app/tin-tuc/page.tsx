import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức - YẾN HƯƠNG",
  description: "Tin tức và chương trình khuyến mãi của YẾN HƯƠNG",
};

export default function TinTucPage() {
  const articles = [
    {
      id: 1,
      title: "Khuyến mãi lớn mùa Tết 2026",
      date: "15/03/2026",
      excerpt:
        "Giảm giá đến 30% cho các sản phẩm bánh kẹo Tết cao cấp. Đặc biệt tặng kèm quà tặng giá trị cho đơn hàng trên 5 triệu.",
      category: "Khuyến mãi",
    },
    {
      id: 3,
      title: "Chương trình ưu đãi khách hàng thân thiết",
      date: "05/03/2026",
      excerpt:
        "Tích điểm để nhận ưu đãi lên đến 20% cho lần mua hàng tiếp theo. Đăng ký ngay để được hưởng đặc quyền.",
      category: "Chương trình",
    },
    {
      id: 4,
      title: "Hướng dẫn bảo quản bánh kẹo đúng cách",
      date: "01/03/2026",
      excerpt:
        "Những mẹo nhỏ giúp bảo quản bánh kẹo luôn giữ được độ tươi ngon và chất lượng tốt nhất.",
      category: "Hướng dẫn",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">TIN TỨC</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-linear-to-br from-primary-light to-primary flex items-center justify-center">
                <span className="text-white text-4xl">📰</span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-[#fff5eb] text-primary text-xs px-3 py-1 rounded-full font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>

                <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-primary transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            Xem thêm tin tức
          </button>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Đăng ký nhận tin
          </h2>
          <p className="text-gray-700 mb-4">
            Đăng ký email để nhận thông tin khuyến mãi và tin tức mới nhất từ
            YẾN HƯƠNG
          </p>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
