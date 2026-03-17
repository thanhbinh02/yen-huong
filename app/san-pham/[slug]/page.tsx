import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const categories = {
  "keo-chuoi": {
    name: "KẸO CHUỐI",
    description: "Sản phẩm độc quyền của Yến Hương - Kẹo chuối được chế biến từ chuối tươi ngon nhất, qua quy trình nghiên cứu kỹ lưỡng để giữ trọn hương vị tự nhiên và dinh dưỡng. Mỗi tháng Yến Hương tiêu thụ hơn 60 tấn chuối từ nông dân, góp phần hỗ trợ tiêu thụ nông sản địa phương.",
    products: [
      { 
        name: "Kẹo chuối tươi", 
        price: "85.000đ", 
        image: "🍌",
        description: "Kẹo chuối tươi nguyên chất, vị ngọt tự nhiên, mềm dẻo"
      },
      { 
        name: "Kẹo chuối tươi - túi 500gr", 
        price: "180.000đ", 
        image: "📦",
        description: "Túi size lớn tiết kiệm, phù hợp cho gia đình hoặc làm quà"
      },
      { 
        name: "Kẹo chuối gừng", 
        price: "90.000đ", 
        image: "🍌",
        description: "Kết hợp chuối tươi và gừng ấm, tốt cho sức khỏe"
      },
      { 
        name: "Kẹo chuối tươi hộp cao cấp", 
        price: "120.000đ", 
        image: "🎁",
        description: "Đóng gói sang trọng, phù hợp làm quà biếu"
      },
      { 
        name: "Kẹo chuối sữa", 
        price: "95.000đ", 
        image: "🥛",
        description: "Kẹo chuối kết hợp sữa thơm béo, hương vị độc đáo"
      },
      { 
        name: "Kẹo chuối mix (nhiều vị)", 
        price: "100.000đ", 
        image: "🌈",
        description: "Hỗn hợp nhiều vị kẹo chuối khác nhau trong một hộp"
      },
    ]
  },
  "keo-dua": {
    name: "KẸO DỪA",
    description: "Kẹo dừa Bến Tre truyền thống - Di sản hơn 30 năm của Yến Hương. Được làm từ dừa tươi ngon nhất vùng đất Bến Tre, qua bàn tay khéo léo của những người thợ lành nghề, mỗi viên kẹo mang trong mình hương vị đặc trưng của quê hương. Kẹo dừa Yến Hương đã trở thành thương hiệu quen thuộc với khách hàng trong ngoài nước.",
    products: [
      { 
        name: "Kẹo dừa truyền thống", 
        price: "75.000đ", 
        image: "🥥",
        description: "Kẹo dừa nguyên chất theo công thức truyền thống"
      },
      { 
        name: "Kẹo dừa gừng", 
        price: "80.000đ", 
        image: "🥥",
        description: "Kẹo dừa thơm béo kết hợp gừng cay nồng, ấm bụng"
      },
      { 
        name: "Kẹo dừa sữa", 
        price: "85.000đ", 
        image: "🥛",
        description: "Kẹo dừa pha sữa thơm béo, mềm mịn tan chầm"
      },
      { 
        name: "Kẹo dừa - túi 500gr", 
        price: "170.000đ", 
        image: "📦",
        description: "Túi kẹo dừa size lớn, tiết kiệm hơn"
      },
      { 
        name: "Kẹo dừa mix cao cấp", 
        price: "95.000đ", 
        image: "🎁",
        description: "Hộp kẹo dừa nhiều loại, đóng gói đẹp mắt"
      },
      { 
        name: "Kẹo dừa hương lá dứa", 
        price: "78.000đ", 
        image: "🌿",
        description: "Kẹo dừa thơm mùi lá dứa tự nhiên"
      },
    ]
  },
  "banh-phong-sua": {
    name: "BÁNH PHỒNG SỮA",
    description: "Bánh phồng sữa giòn tan, thơm béo - Sản phẩm mới được Yến Hương đầu tư nghiên cứu và phát triển. Bánh phồng được làm từ gạo thơm ngon, sữa tươi chất lượng cao, tạo nên món ăn vặt hấp dẫn cho mọi lứa tuổi. Giòn rụm, thơm béo, không gây ngán, là lựa chọn hoàn hảo cho bữa ăn nhẹ.",
    products: [
      { 
        name: "Bánh phồng sữa nguyên chất", 
        price: "65.000đ", 
        image: "🥛",
        description: "Bánh phồng sữa giòn tan, vị sữa thơm béo tự nhiên"
      },
      { 
        name: "Bánh phồng sữa sầu riêng", 
        price: "75.000đ", 
        image: "🥛",
        description: "Kết hợp vị sữa béo và sầu riêng thơm ngậy"
      },
      { 
        name: "Bánh phồng sữa cacao", 
        price: "70.000đ", 
        image: "🍫",
        description: "Bánh phồng sữa hương vị cacao thơm ngon"
      },
      { 
        name: "Bánh phồng sữa - túi 500gr", 
        price: "150.000đ", 
        image: "📦",
        description: "Túi size gia đình tiết kiệm hơn"
      },
      { 
        name: "Bánh phồng sữa mix 3 vị", 
        price: "85.000đ", 
        image: "🌈",
        description: "Hộp bánh phồng 3 vị: sữa, sầu riêng, cacao"
      },
      { 
        name: "Bánh phồng sữa hộp quà", 
        price: "95.000đ", 
        image: "🎁",
        description: "Hộp quà bánh phồng sữa cao cấp, sang trọng"
      },
    ]
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];
  
  if (!category) {
    return {
      title: "Không tìm thấy - YẾN HƯƠNG"
    };
  }

  return {
    title: `${category.name} - YẾN HƯƠNG`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="hover:text-primary">Sản phẩm</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">{category.name}</h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 bg-linear-to-br from-primary-light to-primary flex items-center justify-center">
                <span className="text-7xl">{product.image}</span>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                {product.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}
                
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">
                    Đặt hàng
                  </button>
                  <button className="px-4 border border-primary text-primary rounded-lg hover:bg-[#fff5eb] transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-primary text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-3">Đặt hàng ngay</h2>
          <p className="text-xl mb-4">Hotline: <span className="text-4xl font-bold">(075) 38.34567</span></p>
          <p className="text-lg">Đặc sản Bến Tre - Sản phẩm độc quyền Yến Hương</p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
            Cam kết của YẾN HƯƠNG
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold mb-2">Hàng chính hãng</h3>
              <p className="text-gray-600 text-sm">100% chính hãng, có tem nhãn</p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">Giá tốt nhất</h3>
              <p className="text-gray-600 text-sm">Cam kết giá sỉ lẻ cạnh tranh</p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold mb-2">Giao hàng nhanh</h3>
              <p className="text-gray-600 text-sm">24h nội thành, toàn quốc</p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-semibold mb-2">Ưu đãi hấp dẫn</h3>
              <p className="text-gray-600 text-sm">Nhiều chương trình khuyến mãi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
