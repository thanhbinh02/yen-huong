import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "YẾN HƯƠNG - Đặc sản Bến Tre",
  description: "Kẹo dừa, kẹo chuối, bánh phồng sữa - Hơn 30 năm uy tín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  YẾN HƯƠNG
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Đặc sản Bến Tre - Kẹo dừa, kẹo chuối, bánh phồng sữa
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-2xl hover:text-primary">
                    📘
                  </a>
                  <a href="#" className="text-2xl hover:text-primary">
                    📺
                  </a>
                  <a href="#" className="text-2xl hover:text-primary">
                    📷
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/gioi-thieu" className="hover:text-primary">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link href="/san-pham" className="hover:text-primary">
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link href="/dich-vu" className="hover:text-primary">
                      Dịch vụ
                    </Link>
                  </li>
                  <li>
                    <Link href="/tin-tuc" className="hover:text-primary">
                      Tin tức
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Product Categories */}
              <div>
                <h4 className="font-semibold mb-4">Danh mục sản phẩm</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link
                      href="/san-pham/keo-chuoi"
                      className="hover:text-primary"
                    >
                      Kẹo chuối
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/san-pham/keo-dua"
                      className="hover:text-primary"
                    >
                      Kẹo dừa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/san-pham/banh-phong-sua"
                      className="hover:text-primary"
                    >
                      Bánh phồng sữa
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Liên hệ</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    📍 Quốc Lộ 60 ấp 1 xã Hữu Định, Huyện Châu Thành, Bến Tre
                  </li>
                  <li>
                    📞{" "}
                    <span className="text-primary font-bold">
                      (075) 38.34567
                    </span>
                  </li>
                  <li>📞 (075) 38.34567 - 356.1756</li>
                  <li>📠 Fax: (075) 38.13310</li>
                  <li>✉️ yenhuong@hcm.vnn.vn</li>
                  <li>⏰ T2-CN: 8:00 - 20:00</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 YẾN HƯƠNG. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
