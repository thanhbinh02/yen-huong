import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ - YẾN HƯƠNG",
  description: "Thông tin liên hệ công ty YẾN HƯƠNG",
};

export default function LienHePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">LIÊN HỆ</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Thông tin liên hệ</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">CÔNG TY TNHH MỘT THÀNH VIÊN YẾN HƯƠNG</h3>
                  <p className="text-gray-700">
                    Đặc sản kẹo dừa, kẹo chuối, bánh phồng sữa Bến Tre
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Địa chỉ</h3>
                  <p className="text-gray-700">
                    Quốc Lộ 60 ấp 1 xã Hữu Định<br />
                    Huyện Châu Thành, tỉnh Bến Tre
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Hotline</h3>
                  <p className="text-primary text-2xl font-bold ">(075) 38.34567</p>
                  <p className="text-gray-700 mt-2">
                    Điện thoại: <span className="font-semibold">(075) 38.34567 - 356.1756</span>
                  </p>
                  <p className="text-gray-700">
                    Fax: <span className="font-semibold">(075) 38.13310</span>
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Hỗ trợ từ 8:00 - 20:00 (Thứ 2 - Chủ nhật)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Email</h3>
                  <p className="text-gray-700">
                    yenhuong@hcm.vnn.vn
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Giờ làm việc</h3>
                  <p className="text-gray-700">
                    Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                    Thứ 7 - Chủ nhật: 8:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="font-semibold text-lg mb-3 text-primary">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">📘</a>
                <a href="#" className="text-primary hover:text-primary-dark text-2xl">📺</a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">📷</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🐦</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Gửi tin nhắn</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Chủ đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Nhập chủ đề"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Nhập nội dung tin nhắn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>

        {/* Customer Benefits */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
            Ưu đãi khách hàng
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
  
            <div className="p-4">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-black">Đa dạng sản phẩm</h3>
              <p className="text-gray-600">Nhiều sản phẩm hot</p>
            </div>
            
            <div className="p-4">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-semibold text-lg mb-2 text-black">Hàng chính hãng</h3>
              <p className="text-gray-600">Giao hàng trong 24h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
