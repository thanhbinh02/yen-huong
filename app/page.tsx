import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YẾN HƯƠNG - Đặc sản Bến Tre",
  description: "Kẹo dừa, kẹo chuối, bánh phồng sữa - Hơn 30 năm uy tín",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-light to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">YẾN HƯƠNG</h1>
            <p className="text-2xl md:text-3xl mb-4">
              Đặc sản Bến Tre - Hơn 30 năm uy tín
            </p>
            <p className="text-xl mb-8">
              Kẹo dừa, kẹo chuối độc quyền, bánh phồng sữa
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/san-pham"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/lien-he"
                className="bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors border-2 border-white"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <p className="text-gray-600">Nhân viên</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-gray-600">Cơ sở sản xuất</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-gray-600">Quốc gia xuất khẩu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            SẢN PHẨM ĐẶC TRƯNG
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Đặc sản Bến Tre - Sản phẩm độc quyền
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/san-pham/keo-chuoi"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="text-center p-8 bg-linear-to-br from-primary-light to-primary">
                <div className="text-8xl mb-4">🍌</div>
                <h3 className="text-3xl font-bold text-white">KẸO CHUỐI</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Sản phẩm độc quyền từ 100% chuối tươi Bến Tre
                </p>
                <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Xem chi tiết →
                </div>
              </div>
            </Link>

            <Link
              href="/san-pham/keo-dua"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="text-center p-8 bg-linear-to-br from-primary-light to-primary">
                <div className="text-8xl mb-4">🥥</div>
                <h3 className="text-3xl font-bold text-white">KẸO DỪA</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Kẹo dừa truyền thống - Hơn 30 năm uy tín
                </p>
                <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Xem chi tiết →
                </div>
              </div>
            </Link>

            <Link
              href="/san-pham/banh-phong-sua"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="text-center p-8 bg-linear-to-br from-primary-light to-primary">
                <div className="text-8xl mb-4">🥛</div>
                <h3 className="text-3xl font-bold text-white">
                  BÁNH PHỒNG SỮA
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Bánh phồng sữa thơm ngon, giòn tan
                </p>
                <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Xem chi tiết →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            TẠI SAO CHỌN YẾN HƯƠNG?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Chất lượng đảm bảo
              </h3>
              <p className="text-gray-600">
                Đạt chuẩn GMP, an toàn vệ sinh thực phẩm
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🍌</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Sản phẩm độc quyền
              </h3>
              <p className="text-gray-600">
                Kẹo chuối độc quyền - chỉ có tại Yến Hương
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Quy mô lớn
              </h3>
              <p className="text-gray-600">
                4 cơ sở sản xuất, công suất 3 tấn/ngày
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Xuất khẩu quốc tế
              </h3>
              <p className="text-gray-600">
                Có mặt tại 5 quốc gia trên thế giới
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Đặt hàng ngay hôm nay!
          </h2>
          <p className="text-xl mb-8">
            Giao hàng toàn quốc - Giá sỉ lẻ cạnh tranh
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="tel:0906183471"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              📞 (075) 38.34567
            </a>
            <Link
              href="/lien-he"
              className="bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-opacity-90 transition-colors border-2 border-white"
            >
              Liên hệ trực tuyến
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
