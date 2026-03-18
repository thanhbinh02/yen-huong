export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details?: string;
  ingredients?: string[];
  weight?: string;
  expiry?: string;
};

export type Category = {
  name: string;
  description: string;
  products: Product[];
};

export const categories: Record<string, Category> = {
  "keo-chuoi": {
    name: "KẸO CHUỐI",
    description:
      "Sản phẩm độc quyền của Yến Hương - Kẹo chuối được chế biến từ chuối tươi ngon nhất, qua quy trình nghiên cứu kỹ lưỡng để giữ trọn hương vị tự nhiên và dinh dưỡng. Mỗi tháng Yến Hương tiêu thụ hơn 60 tấn chuối từ nông dân, góp phần hỗ trợ tiêu thụ nông sản địa phương.",
    products: [
      {
        slug: "keo-chuoi-tuoi",
        name: "Kẹo chuối tươi",
        price: "85.000đ",
        image: "/products/keo-chuoi/keo-chuoi-tuoi.jpg",
        description:
          "Kẹo chuối tươi nguyên chất, vị ngọt tự nhiên, mềm dẻo. Được làm từ chuối già hảo hạng của Bến Tre, qua quy trình chế biến nghiêm ngặt để giữ trọn hương vị tự nhiên và dinh dưỡng của chuối.",
        details:
          "Kẹo chuối tươi Yến Hương là sản phẩm độc quyền được chế biến từ 100% chuối già hảo hạng Bến Tre. Quy trình sản xuất khép kín, nghiêm ngặt đảm bảo giữ trọn hương vị tự nhiên, dinh dưỡng và màu sắc đẹp mắt của chuối. Sản phẩm không chứa chất bảo quản, phẩm màu tổng hợp, an toàn cho sức khỏe.",
        ingredients: [
          "Chuối già Bến Tre 85%",
          "Đường tinh luyện",
          "Nước cốt chanh tươi",
          "Muối biển",
        ],
        weight: "250g",
        expiry: "6 tháng kể từ ngày sản xuất",
      },
    ],
  },
  "keo-dua": {
    name: "KẸO DỪA",
    description:
      "Kẹo dừa Bến Tre truyền thống - Di sản hơn 30 năm của Yến Hương. Được làm từ dừa tươi ngon nhất vùng đất Bến Tre, qua bàn tay khéo léo của những người thợ lành nghề, mỗi viên kẹo mang trong mình hương vị đặc trưng của quê hương. Kẹo dừa Yến Hương đã trở thành thương hiệu quen thuộc với khách hàng trong ngoài nước.",
    products: [
      {
        slug: "keo-dua-dau-phung",
        name: "Kẹo dừa dầu phụng",
        price: "85.000đ",
        image: "/products/keo-dua/keo-dua-dau-phung.jpg",
        description:
          "Kẹo dừa kết hợp với đậu phộng rang giòn thơm, vị béo ngậy hòa quyện cùng vị ngọt tự nhiên của dừa Bến Tre, tạo nên hương vị độc đáo khó quên.",
        details:
          "Kẹo dừa dầu phụng là sự kết hợp hoàn hảo giữa dừa tươi Bến Tre và đậu phộng rang giòn. Mỗi viên kẹo được làm thủ công tỉ mỉ, đảm bảo tỷ lệ nguyên liệu cân đối, tạo nên hương vị béo ngậy, thơm ngon khó cưỡng.",
        ingredients: [
          "Nước cốt dừa tươi 60%",
          "Đậu phộng rang 20%",
          "Đường mía",
          "Bơ thực vật",
        ],
        weight: "300g",
        expiry: "8 tháng kể từ ngày sản xuất",
      },
      {
        slug: "keo-dua-deo-ca-cao",
        name: "Kẹo dừa dẻo ca cao",
        price: "90.000đ",
        image: "/products/keo-dua/keo-dua-deo-ca-cao.jpg",
        description:
          "Kẹo dừa dẻo thơm béo với hương vị ca cao đậm đà. Kết cấu mềm dẻo tan chầm trong miệng, kết hợp hoàn hảo giữa dừa Bến Tre và ca cao nhập khẩu cao cấp.",
        details:
          "Kẹo dừa dẻo ca cao sử dụng ca cao nguyên chất nhập khẩu, kết hợp cùng dừa tươi Bến Tre tạo nên hương vị độc đáo. Kết cấu mềm dẻo đặc trưng, tan chầm trong miệng mang đến trải nghiệm thú vị.",
        ingredients: [
          "Nước cốt dừa tươi 55%",
          "Bột ca cao nguyên chất 15%",
          "Đường",
          "Gelatin",
          "Bơ",
        ],
        weight: "250g",
        expiry: "6 tháng",
      },
      {
        slug: "keo-dua-khoai-mon",
        name: "Kẹo dừa khoai môn",
        price: "88.000đ",
        image: "/products/keo-dua/keo-dua-khoai-mon.jpg",
        description:
          "Sự kết hợp độc đáo giữa kẹo dừa truyền thống và khoai môn thơm béo. Vị ngọt thanh của dừa hòa quyện cùng hương thơm nức mũi của khoai môn tạo nên hương vị mới lạ.",
        details:
          "Kẹo dừa khoai môn là sản phẩm sáng tạo từ công thức truyền thống. Khoai môn được chọn lựa kỹ càng, hấp chín và nghiền mịn trộn đều với dừa tạo nên hương vị béo ngậy đặc biệt.",
        ingredients: [
          "Nước cốt dừa 50%",
          "Khoai môn 25%",
          "Đường",
          "Bơ",
          "Nước cốt dừa khô",
        ],
        weight: "300g",
        expiry: "6 tháng",
      },
      {
        slug: "keo-dua-la-dua",
        name: "Kẹo dừa lá dứa",
        price: "82.000đ",
        image: "/products/keo-dua/keo-dua-la-dua.jpg",
        description:
          "Kẹo dừa hương lá dứa tự nhiên, mang đến mùi thơm đặc trưng của lá dứa hòa quyện cùng vị béo ngậy của dừa. Sản phẩm không sử dụng hương liệu tổng hợp.",
        details:
          "Kẹo dừa lá dứa sử dụng 100% nước lá dứa tươi, không sử dụng hương liệu hay màu tổng hợp. Hương thơm tự nhiên của lá dứa kết hợp vị béo ngậy của dừa tạo nên sản phẩm an toàn, thơm ngon.",
        ingredients: [
          "Nước cốt dừa tươi 65%",
          "Nước lá dứa tươi",
          "Đường mía",
          "Bơ thực vật",
        ],
        weight: "250g",
        expiry: "8 tháng",
      },
      {
        slug: "keo-dua-sau-rieng-250g",
        name: "Kẹo dừa sầu riêng 250g",
        price: "125.000đ",
        image: "/products/keo-dua/keo-dua-sau-rieng-250g.jpg",
        description:
          "Kẹo dừa sầu riêng cao cấp, kết hợp vị béo ngậy của dừa với hương thơm nồng nàn của sầu riêng. Đóng gói tiện lợi 250g, phù hợp làm quà biếu.",
        details:
          "Kẹo dừa sầu riêng cao cấp sử dụng sầu riêng chín mùa vụ, được xử lý và bảo quản đúng cách để giữ trọn hương vị. Kết hợp cùng dừa tươi Bến Tre tạo nên sản phẩm thượng hạng.",
        ingredients: [
          "Nước cốt dừa 50%",
          "Thịt sầu riêng 20%",
          "Đường",
          "Bơ",
          "Sữa đặc",
        ],
        weight: "250g",
        expiry: "6 tháng",
      },
      {
        slug: "keo-dua-sua-ca-cao",
        name: "Kẹo dừa sữa ca cao",
        price: "95.000đ",
        image: "/products/keo-dua/keo-dua-sua-ca-cao.jpg",
        description:
          "Kẹo dừa sữa ca cao - sự kết hợp hoàn hảo giữa ba hương vị: dừa tươi Bến Tre, sữa thơm béo và ca cao đậm đà. Vị ngọt nhẹ, tan chầm trong miệng.",
        details:
          "Kẹo dừa sữa ca cao là sự kết hợp 3 hương vị đặc trưng: dừa tươi béo ngậy, sữa thơm béo và ca cao đắng nhẹ. Sản phẩm có vị ngọt vừa phải, không gây ngấy, phù hợp với mọi lứa tuổi.",
        ingredients: [
          "Nước cốt dừa 45%",
          "Sữa tươi 20%",
          "Bột ca cao 12%",
          "Đường",
          "Bơ",
        ],
        weight: "280g",
        expiry: "6 tháng",
      },
      {
        slug: "keo-dua-sua-dua",
        name: "Kẹo dừa sữa dừa",
        price: "92.000đ",
        image: "/products/keo-dua/keo-dua-sua-dua.jpg",
        description:
          "Kẹo dừa sữa thơm béo, kết hợp nước cốt dừa tươi và sữa cao cấp. Hương vị béo ngậy, mềm mịn, tan chầm, là lựa chọn yêu thích của mọi lứa tuổi.",
        details:
          "Kẹo dừa sữa dừa kết hợp nước cốt dừa tươi với sữa cao cấp, tạo nên hương vị béo ngậy đặc trưng. Sản phẩm mềm mịn, tan chầm trong miệng, được đông đảo khách hàng yêu thích.",
        ingredients: [
          "Nước cốt dừa tươi 50%",
          "Sữa tươi 25%",
          "Đường",
          "Bơ",
          "Sữa đặc",
        ],
        weight: "300g",
        expiry: "8 tháng",
      },
      {
        slug: "keo-dua-sua-sau-rieng-300g",
        name: "Kẹo dừa sữa sầu riêng 300g",
        price: "155.000đ",
        image: "/products/keo-dua/keo-dua-sua-sau-rieng-300g.jpg",
        description:
          "Kẹo dừa sữa sầu riêng cao cấp đóng gói 300g. Ba hương vị béo ngậy hòa quyện: dừa tươi, sữa thơm và sầu riêng thơm nồng. Size lớn tiết kiệm hơn.",
        details:
          "Kẹo dừa sữa sầu riêng 300g là sản phẩm cao cấp với 3 hương vị hoàn hảo. Đóng gói chắc chắn, bảo quản lâu dài, phù hợp làm quà biếu hoặc thưởng thức gia đình.",
        ingredients: [
          "Nước cốt dừa 40%",
          "Sữa tươi 20%",
          "Sầu riêng 18%",
          "Đường",
          "Bơ",
        ],
        weight: "300g",
        expiry: "6 tháng",
      },
      {
        slug: "keo-dua-sua-sau-rieng-400g",
        name: "Kẹo dừa sữa sầu riêng 400g",
        price: "195.000đ",
        image: "/products/keo-dua/keo-dua-sua-sau-rieng-400g.jpg",
        description:
          "Túi gia đình 400g kẹo dừa sữa sầu riêng cao cấp. Sản phẩm được đóng gói chắc chắn, bảo quản lâu dài. Phù hợp cho gia đình đông người hoặc làm quà biếu cao cấp.",
        details:
          "Túi gia đình 400g kẹo dừa sữa sầu riêng là lựa chọn tiết kiệm cho gia đình hoặc làm quà biếu cao cấp. Sản phẩm được đóng gói kín, bảo quản tốt, giữ nguyên hương vị thơm ngon.",
        ingredients: [
          "Nước cốt dừa 40%",
          "Sữa tươi 20%",
          "Sầu riêng 18%",
          "Đường",
          "Bơ",
        ],
        weight: "400g",
        expiry: "8 tháng",
      },
    ],
  },
  "banh-phong-sua": {
    name: "BÁNH PHỒNG SỮA",
    description:
      "Bánh phồng sữa giòn tan, thơm béo - Sản phẩm mới được Yến Hương đầu tư nghiên cứu và phát triển. Bánh phồng được làm từ gạo thơm ngon, sữa tươi chất lượng cao, tạo nên món ăn vặt hấp dẫn cho mọi lứa tuổi. Giòn rụm, thơm béo, không gây ngán, là lựa chọn hoàn hảo cho bữa ăn nhẹ.",
    products: [
      {
        slug: "banh-phong-sua-la-dua",
        name: "Bánh phồng sữa lá dứa",
        price: "68.000đ",
        image: "/products/banh-phong-sua/banh-phong-sua-la-dua.jpg",
        description:
          "Bánh phồng sữa hương lá dứa tự nhiên, giòn rụm tan trong miệng. Kết hợp hương thơm của lá dứa cùng vị béo ngậy của sữa, tạo nên món ăn vặt thơm ngon khó cưỡng.",
        details:
          "Bánh phồng sữa lá dứa được làm từ gạo thơm Việt Nam, sữa tươi cao cấp và nước lá dứa tự nhiên. Quy trình sản xuất hiện đại đảm bảo bánh giòn đều, thơm ngon, không dầu mỡ.",
        ingredients: [
          "Gạo thơm 60%",
          "Sữa tươi 20%",
          "Nước lá dứa tự nhiên",
          "Bột nở",
          "Muối",
        ],
        weight: "200g",
        expiry: "4 tháng",
      },
      {
        slug: "banh-phong-sua-nuoc-cot-dua",
        name: "Bánh phồng sữa nước cốt dừa",
        price: "72.000đ",
        image: "/products/banh-phong-sua/banh-phong-sua-nuoc-cot-dua.jpg",
        description:
          "Bánh phồng sữa được làm từ nước cốt dừa tươi Bến Tre, kết hợp cùng sữa cao cấp. Vị béo ngậy đặc trưng, giòn tan, thơm nức mũi. Món ăn vặt lý tưởng cho mọi lứa tuổi.",
        details:
          "Bánh phồng sữa nước cốt dừa kết hợp 3 nguyên liệu đặc sản: gạo thơm, sữa tươi và nước cốt dừa Bến Tre. Vị béo ngậy đặc trưng, giòn tan, không bị ngấy, là món ăn vặt hoàn hảo.",
        ingredients: [
          "Gạo thơm 55%",
          "Sữa tươi 20%",
          "Nước cốt dừa Bến Tre 15%",
          "Bột nở",
          "Muối",
        ],
        weight: "200g",
        expiry: "4 tháng",
      },
    ],
  },
};
