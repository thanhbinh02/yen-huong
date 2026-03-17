import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - YẾN HƯƠNG | Đặc sản kẹo dừa Bến Tre",
  description: "Yến Hương - Hơn 30 năm sản xuất kẹo dừa và kẹo chuối đặc sản Bến Tre. 4 cơ sở sản xuất, 250+ công nhân, sản lượng 3 tấn/ngày. Xuất khẩu 5 quốc gia, đạt chuẩn GMP.",
};

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">GIỚI THIỆU YẾN HƯƠNG</h1>
          <p className="text-xl text-black">Đặc sản kẹo dừa Bến Tre - Hơn 30 năm uy tín</p>
        </div>

        {/* Hero Section */}
        <div className="bg-linear-to-r from-primary to-primary-dark text-white p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">KHẲNG ĐỊNH NHỮNG MẶT HÀNG THẾ MẠNH</h2>
          <p className="text-lg leading-relaxed">
            Kẹo dừa Yến Hương đã trở thành thương hiệu khá quen thuộc với khách hàng trong ngoài nước. 
            Đó là quá trình dày công vun đắp của cơ sở trong suốt 30 năm qua. Qua nhiều năm thăng trầm, 
            Yến Hương đã khá đứng vững trên thương trường, sản phẩm ngày càng được nhiều khách hàng biết đến.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🏭</div>
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p className="text-black">Cơ sở sản xuất</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">👥</div>
            <div className="text-3xl font-bold text-primary mb-2">250+</div>
            <p className="text-black">Công nhân viên</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📦</div>
            <div className="text-3xl font-bold text-primary mb-2">3 tấn</div>
            <p className="text-black">Sản lượng mỗi ngày</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">VỀ YẾN HƯƠNG</h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Cơ sở sản xuất Yến Hương nằm trên quốc lộ 60, đoạn xã Hữu Định – Châu Thành, Bến Tre. 
              Hiện tại, cơ sở đã xây dựng trung tâm sản xuất và giao dịch khá rộng, khoảng vài công đất 
              nằm sát cạnh mặt tiền, rất thuận lợi trong sản xuất và giao thương mua bán.
            </p>

            <p>
              Ngôi nhà nhiều tầng được bố trí khá rộng rãi, thoáng mát từ nơi sản xuất đến nơi giao dịch 
              đều khá khang trang, bắt mắt. Khuôn viên rộng dùng làm chỗ đậu xe 4 bánh cho khách hàng. 
              Đội ngũ nhân viên tiếp thị chuyên nghiệp, lịch sự phục vụ khách tham quan, mua hàng. 
              Khách hàng được nghỉ ngơi, uống nước, ăn kẹo miễn phí, các tài xế còn được hỗ trợ chi phí 
              mua vé xe qua cầu Rạch Miễu.
            </p>
          </div>
        </div>

        {/* Leader Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">NGƯỜI LÃNH ĐẠO</h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Ông Nguyễn Văn Quốc</strong> - Giám đốc và chủ cơ sở kẹo Yến Hương, là cựu chiến binh 
              xuất ngũ về cùng với gia đình kế tục sự nghiệp nghề kẹo dừa truyền thống hàng mấy chục năm qua.
            </p>

            <p>
              Với tinh thần bộc trực và thẳng thắn, ông cho rằng thời buổi kinh tế thị trường muốn thành công 
              thì phải cạnh tranh lành mạnh để không chỉ giữ uy tín cho cơ sở mình mà còn giữ được thương hiệu 
              kẹo dừa Bến Tre. Ngoài làm giàu cho bản thân, nghề làm kẹo dừa còn tiêu thụ nguồn nguyên liệu 
              nông sản khá lớn cho nông dân, giải quyết hàng chục ngàn lao động nông thôn có việc làm ổn định.
            </p>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">HỆ THỐNG CƠ SỞ SẢN XUẤT</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2 text-black">Cơ sở chính</h3>
              <p className="text-gray-700">Quốc Lộ 60 ấp 1 xã Hữu Định, Huyện Châu Thành, tỉnh Bến Tre</p>
              <p className="text-gray-600 text-sm mt-1">
                📞 (075) 38.34567 - 356.1756 | 📠 (075) 38.13310
              </p>
              <p className="text-gray-600 text-sm">
                ✉️ yenhuong@hcm.vnn.vn
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2 text-black">Cơ sở 2</h3>
              <p className="text-gray-700">Phường 4, TP. Bến Tre</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2 text-black">Cơ sở 3</h3>
              <p className="text-gray-700">Thành Triệu, Châu Thành, Bến Tre</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2 text-black">Cơ sở 4</h3>
              <p className="text-gray-700">Sơn Phú, Giồng Trôm, Bến Tre</p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">SẢN PHẨM THẾ MẠNH</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kẹo dừa */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🥥</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">Kẹo dừa truyền thống</h3>
              <p className="text-gray-700 leading-relaxed">
                Sản phẩm chủ lực với hơn 30 năm kinh nghiệm. Kẹo dừa Yến Hương được làm từ 
                nguyên liệu dừa tươi ngon nhất, giữ trọn hương vị đặc trưng của đặc sản Bến Tre.
              </p>
            </div>

            {/* Kẹo chuối */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-center">🍌</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">Kẹo chuối độc quyền</h3>
              <p className="text-gray-700 leading-relaxed">
                Sản phẩm độc đáo, sáng tạo của Yến Hương. Mỗi tháng tiêu thụ trên 60 tấn chuối tươi 
                từ nông dân, giúp nhiều vùng quê có lối ra cho cây chuối. Đây là bí quyết riêng của 
                giám đốc Nguyễn Văn Quốc sau nhiều năm nghiên cứu.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[#fff5eb] rounded-lg">
              <p className="font-semibold text-primary">Kẹo trái cây</p>
            </div>
            <div className="text-center p-4 bg-[#fff5eb] rounded-lg">
              <p className="font-semibold text-primary">Bánh phồng sữa</p>
            </div>
            <div className="text-center p-4 bg-[#fff5eb] rounded-lg">
              <p className="font-semibold text-primary">Mứt Tết</p>
            </div>
            <div className="text-center p-4 bg-[#fff5eb] rounded-lg">
              <p className="font-semibold text-primary">Đặc sản Bến Tre</p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">ĐẦU TƯ CÔNG NGHỆ</h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Với sản lượng ngày một tăng và nhu cầu khách hàng ngày càng lớn, trong các năm qua 
              cơ sở đã mạnh dạn đầu tư hàng tỷ đồng để xây dựng nhà xưởng và trang bị máy móc 
              thiết bị hiện đại:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <span>Máy nấu bằng điện công suất lớn</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <span>Máy gói kẹo tự động các loại</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <span>Máy nước cốt hiện đại</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <span>Máy định hình cắt viên chính xác</span>
              </div>
            </div>

            <p>
              Cơ sở dự kiến tiếp tục đầu tư trang bị thêm dây chuyền sản xuất mới đồng bộ, tự động 
              và đầu tư dây chuyền sản xuất bánh phồng để nâng cao sản lượng thành phẩm.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">THÀNH TỰU & CHỨNG NHẬN</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-linear-to-br from-yellow-50 to-yellow-100 rounded-lg">
              <div className="text-5xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2 text-black">Đạt chuẩn GMP</h3>
              <p className="text-black text-sm">Quy chuẩn sản xuất tốt</p>
            </div>

            <div className="text-center p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-5xl mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-black">Hàng Việt Nam</h3>
              <p className="text-black text-sm">Chất lượng cao 2009-2010</p>
            </div>

            <div className="text-center p-6 bg-linear-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-5xl mb-3">🌏</div>
              <h3 className="font-bold text-lg mb-2 text-black">Xuất khẩu 5 quốc gia</h3>
              <p className="text-black text-sm">Thái Lan, Lào, Campuchia, Bắc Mỹ, Châu Đại Dương</p>
            </div>
          </div>
        </div>

        {/* Export Markets */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">THỊ TRƯỜNG XUẤT KHẨU</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Từ chất lượng thơm ngon đến phong phú chủng loại, sản phẩm của Yến Hương đã bay khắp 
            các thị trường trong và ngoài nước:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 border-2 border-[#ffe8d4] rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl mb-2">🇹🇭</div>
              <p className="font-semibold text-black">Thái Lan</p>
            </div>
            <div className="text-center p-4 border-2 border-[#ffe8d4] rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl mb-2">🇱🇦</div>
              <p className="font-semibold text-black">Lào</p>
            </div>
            <div className="text-center p-4 border-2 border-[#ffe8d4] rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl mb-2">🇰🇭</div>
              <p className="font-semibold text-black">Campuchia</p>
            </div>
            <div className="text-center p-4 border-2 border-[#ffe8d4] rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl mb-2">🌎</div>
              <p className="font-semibold text-black">Bắc Mỹ</p>
            </div>
            <div className="text-center p-4 border-2 border-[#ffe8d4] rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl mb-2">🌏</div>
              <p className="font-semibold text-black">Châu Đại Dương</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-linear-to-r from-primary to-primary-dark text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">CAM KẾT CỦA CHÚNG TÔI</h2>
          
          <div className="prose max-w-none text-white leading-relaxed space-y-4">
            <p className="text-lg">
              Để có thương hiệu Yến Hương như ngày nay là cả quá trình dày công vun đắp với biết bao thăng trầm. 
              Cơ sở quyết tâm giữ vững thương hiệu và ngày càng nâng cao chất lượng thành phẩm, mở rộng sản xuất, 
              đáp ứng ngày càng tốt hơn lòng mong đợi của khách hàng trong và ngoài nước.
            </p>

            <p className="text-lg">
              <strong>Điều mà Yến Hương chú tâm hơn bao giờ hết là chất lượng sản phẩm.</strong>
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-gray-700 mb-6">
            Để biết thêm thông tin chi tiết về Yến Hương và sản phẩm của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0906183471" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-primary-dark transition-colors">
              📞 (075) 38.34567
            </a>
            <a href="/lien-he" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-[#fff5eb] transition-colors">
              Gửi tin nhắn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
