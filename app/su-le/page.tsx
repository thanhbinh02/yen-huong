import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sự kiện & Lễ tết - YẾN HƯƠNG",
  description: "Sản phẩm cho sự kiện và lễ tết",
};

export default function SuLePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">
          SỰ KIỆN & LỄ TẾT
        </h1>

        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            YẾN HƯƠNG chuyên cung cấp các sản phẩm bánh kẹo cao cấp cho các dịp
            lễ tết và sự kiện đặc biệt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-[#fff5eb] to-[#ffe8d4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">
              Tết Nguyên Đán
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bánh kẹo Tết cao cấp 2026</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hộp quà Tết sang trọng</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Các loại hạt dinh dưỡng</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mứt Tết truyền thống</span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Sự kiện - Hội nghị
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Bánh kẹo cho hội nghị, hội thảo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Quà tặng doanh nghiệp</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Combo quà tặng sự kiện</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Tư vấn lựa chọn quà theo ngân sách</span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
              Trung Thu
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Bánh Trung Thu các loại</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Đèn lồng và quà tặng thiếu nhi</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Hộp quà Trung Thu đặc biệt</span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">
              Các dịp lễ khác
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Quà tặng Noel, Năm mới</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Quà tặng sinh nhật, kỷ niệm</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Quà tặng 8/3, 20/10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-primary text-white p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-3">Đặt hàng ngay</h2>
          <p className="text-3xl font-bold">Hotline: (075) 38.34567</p>
        </div>
      </div>
    </div>
  );
}
