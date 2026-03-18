import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "../../../san-pham/products-data";

type Props = {
  params: Promise<{ category: string; productSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, productSlug } = await params;
  const categoryData = categories[category];

  if (!categoryData) {
    return { title: "Không tìm thấy - YẾN HƯƠNG" };
  }

  const product = categoryData.products.find((p) => p.slug === productSlug);

  if (!product) {
    return { title: "Không tìm thấy - YẾN HƯƠNG" };
  }

  return {
    title: `${product.name} - ${categoryData.name} - YẾN HƯƠNG`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const params: { category: string; productSlug: string }[] = [];

  Object.keys(categories).forEach((categoryKey) => {
    const category = categories[categoryKey];
    category.products.forEach((product) => {
      params.push({
        category: categoryKey,
        productSlug: product.slug,
      });
    });
  });

  return params;
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, productSlug } = await params;
  const categoryData = categories[category];

  if (!categoryData) {
    notFound();
  }

  const product = categoryData.products.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  // Get related products (other products in the same category)
  const relatedProducts = categoryData.products
    .filter((p) => p.slug !== productSlug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="hover:text-primary">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/san-pham/${category}`} className="hover:text-primary">
            {categoryData.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 relative h-96 md:h-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">
                  {product.price}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Mô tả sản phẩm
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.details && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Chi tiết
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.details}
                  </p>
                </div>
              )}

              {product.ingredients && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Thành phần
                  </h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.weight && (
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Khối lượng</p>
                    <p className="font-semibold text-gray-800">
                      {product.weight}
                    </p>
                  </div>
                )}
                {product.expiry && (
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Hạn sử dụng</p>
                    <p className="font-semibold text-gray-800">
                      {product.expiry}
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="border border-primary p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  Để đặt hàng, vui lòng liên hệ:
                </p>
                <p className="text-xl font-bold text-primary mb-1">
                  (075) 38.34567
                </p>
                <p className="text-sm text-gray-600">Hotline: 0906 183 471</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Highlights */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Đặc điểm nổi bật
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold mb-1 text-black">
                Nguyên liệu tươi ngon
              </p>
              <p className="text-sm text-gray-600">100% nguyên liệu tự nhiên</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏭</div>
              <p className="font-semibold mb-1 text-black">
                Quy trình nghiêm ngặt
              </p>
              <p className="text-sm text-gray-600">Đạt chuẩn GMP, ISO</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🎁</div>
              <p className="font-semibold mb-1 text-black">Đóng gói đẹp mắt</p>
              <p className="text-sm text-gray-600">Phù hợp làm quà biếu</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold mb-1 text-black">
                Thương hiệu uy tín
              </p>
              <p className="text-sm text-gray-600">Hơn 30 năm kinh nghiệm</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Sản phẩm liên quan
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/san-pham/${category}/${relatedProduct.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden group">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-primary">
                      {relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
