import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sản phẩm - YẾN HƯƠNG",
  description: "Danh mục sản phẩm bánh kẹo cao cấp",
};

export default function SanPhamPage() {
  const categories = [
    {
      slug: "keo-chuoi",
      name: "KẸO CHUỐI",
      description: "Đặc sản kẹo chuối Yến Hương - Sản phẩm độc quyền",
      image: "/products/keo-chuoi/keo-chuoi-tuoi.jpg",
    },
    {
      slug: "keo-dua",
      name: "KẸO DỪA",
      description: "Kẹo dừa Bến Tre truyền thống - Hơn 30 năm uy tín",
      image: "/products/keo-dua/keo-dua-sua-dua.jpg",
    },
    {
      slug: "banh-phong-sua",
      name: "BÁNH PHỒNG SỮA",
      description: "Bánh phồng sữa thơm ngon, giòn tan",
      image: "/products/banh-phong-sua/banh-phong-sua-la-dua.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          DANH MỤC SẢN PHẨM
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Đặc sản Bến Tre - Kẹo dừa, kẹo chuối, bánh phồng sữa
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            🏆 Sản phẩm đặc trưng của Yến Hương
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Với hơn 30 năm kinh nghiệm, Yến Hương tự hào là đơn vị tiên phong
            trong việc sản xuất kẹo chuối độc quyền và kẹo dừa truyền thống Bến
            Tre. Sản phẩm được làm từ nguyên liệu tươi ngon, quy trình sản xuất
            nghiêm ngặt, đảm bảo chất lượng và an toàn vệ sinh thực phẩm.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-[#fff5eb] rounded-lg">
              <div className="text-3xl mb-2">🍌</div>
              <p className="font-semibold text-primary">60 tấn chuối/tháng</p>
              <p className="text-sm text-gray-600">Tiêu thụ nguyên liệu</p>
            </div>
            <div className="p-4 bg-[#fff5eb] rounded-lg">
              <div className="text-3xl mb-2">🥥</div>
              <p className="font-semibold text-primary">3 tấn/ngày</p>
              <p className="text-sm text-gray-600">Sản lượng kẹo dừa</p>
            </div>
            <div className="p-4 bg-[#fff5eb] rounded-lg">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold text-primary">Đạt chuẩn GMP</p>
              <p className="text-sm text-gray-600">Chứng nhận chất lượng</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/san-pham/${category.slug}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent flex items-end justify-center pb-8">
                  <h2 className="text-3xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Xem sản phẩm</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-primary text-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Hotline đặt hàng</h2>
              <p className="text-5xl font-bold mb-4">(075) 38.34567</p>
              <p className="text-lg mb-2">✅ Đa dạng sản phẩm</p>
              <p className="text-lg">✅ Hàng chính hãng 100%</p>
            </div>

            <div className="md:w-1/2 bg-primary-dark p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📦</div>
                <p className="text-xl font-semibold">Giao hàng toàn quốc</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Tại sao chọn YẾN HƯƠNG?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2 text-primary">
                Chất lượng đảm bảo
              </h3>
              <p className="text-gray-600 text-sm">
                Sản phẩm chính hãng, có nguồn gốc rõ ràng
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold mb-2 text-primary">
                Giá cạnh tranh
              </h3>
              <p className="text-gray-600 text-sm">
                Giá sỉ lẻ tốt nhất thị trường
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold mb-2 text-primary">
                Giao hàng nhanh
              </h3>
              <p className="text-gray-600 text-sm">
                Giao hàng trong 24h nội thành
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-semibold mb-2 text-primary">
                Ưu đãi hấp dẫn
              </h3>
              <p className="text-gray-600 text-sm">
                Nhiều chương trình khuyến mãi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
