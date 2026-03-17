"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b">
          <div className="text-gray-600">
            📞 Hotline:{" "}
            <span className="text-primary font-bold">(075) 38.34567</span>
          </div>
          <div className="text-gray-600 hidden sm:block">
            yenhuong@hcm.vnn.vn
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-primary"
              onClick={closeMenu}
            >
              YẾN HƯƠNG
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                TRANG CHỦ
              </Link>
              <Link
                href="/gioi-thieu"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                GIỚI THIỆU
              </Link>
              <Link
                href="/san-pham"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                SẢN PHẨM
              </Link>
              <Link
                href="/dich-vu"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                DỊCH VỤ
              </Link>
              <Link
                href="/su-le"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                SỰ KIỆN & LỄ TẾT
              </Link>
              <Link
                href="/tin-tuc"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                TIN TỨC
              </Link>
              <Link
                href="/lien-he"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                LIÊN HỆ
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Link
              href="/san-pham"
              className="hidden lg:block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
            >
              ĐẶT HÀNG
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 py-4 border-t">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                TRANG CHỦ
              </Link>
              <Link
                href="/gioi-thieu"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                GIỚI THIỆU
              </Link>
              <Link
                href="/san-pham"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                SẢN PHẨM
              </Link>
              <Link
                href="/dich-vu"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                DỊCH VỤ
              </Link>
              <Link
                href="/su-le"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                SỰ KIỆN & LỄ TẾT
              </Link>
              <Link
                href="/tin-tuc"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                TIN TỨC
              </Link>
              <Link
                href="/lien-he"
                className="text-gray-700 hover:text-primary transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                LIÊN HỆ
              </Link>

              <Link
                href="/san-pham"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center mt-2"
                onClick={closeMenu}
              >
                ĐẶT HÀNG NGAY
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
