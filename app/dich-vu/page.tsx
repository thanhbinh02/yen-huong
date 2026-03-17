import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ - YẾN HƯƠNG",
  description: "Các dịch vụ của YẾN HƯƠNG",
};

export default function DichVuPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">DỊCH VỤ</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Phân phối sỉ lẻ
            </h3>
            <p className="text-gray-700">
              Phân phối sỉ và lẻ toàn quốc với giá cạnh tranh
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Tư vấn miễn phí
            </h3>
            <p className="text-gray-700">
              Tư vấn lựa chọn sản phẩm phù hợp theo nhu cầu
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Đảm bảo chất lượng
            </h3>
            <p className="text-gray-700">
              Cam kết hàng chính hãng 100%, có tem nhãn rõ ràng
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Hỗ trợ 24/7
            </h3>
            <p className="text-gray-700">
              Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc
            </p>
          </div>
        </div>

        <div className="mt-8 bg-[#fff5eb] p-6 rounded-lg text-black">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Liên hệ dịch vụ
          </h2>
          <p className="text-gray-700 mb-2">
            Để biết thêm chi tiết về các dịch vụ, vui lòng liên hệ:
          </p>
          <p className="text-lg">
            <span>Hotline:</span>{" "}
            <span className="text-primary font-bold">(075) 38.34567</span>
          </p>
          <p className="text-lg">
            <span>Điện thoại:</span>{" "}
            <span className="text-primary font-bold">
              (075) 38.34567 - 356.1756
            </span>
          </p>
          <p className="text-lg">
            <span>Email:</span>{" "}
            <span className="text-primary font-bold">yenhuong@hcm.vnn.vn</span>
          </p>
        </div>
      </div>
    </div>
  );
}
