import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "../products-data";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories[category as keyof typeof categories];

  if (!categoryData) {
    return {
      title: "Không tìm thấy - YẾN HƯƠNG",
    };
  }

  return {
    title: `${categoryData.name} - YẾN HƯƠNG`,
    description: categoryData.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    category: slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = categories[category as keyof typeof categories];

  if (!categoryData) {
    notFound();
  }

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
          <span className="text-primary">{categoryData.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">
            {categoryData.name}
          </h1>
          <p className="text-gray-600 text-lg">{categoryData.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryData.products.map((product) => (
            <Link
              key={product.slug}
              href={`/san-pham/${category}/${product.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
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

                <p className="text-2xl font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-primary text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-3">Liên hệ với chúng tôi</h2>
          <p className="text-xl mb-4">
            Hotline: <span className="text-4xl font-bold">(075) 38.34567</span>
          </p>
          <p className="text-lg">
            Đặc sản Bến Tre - Sản phẩm độc quyền Yến Hương
          </p>
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
              <p className="text-gray-600 text-sm">
                100% chính hãng, có tem nhãn
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">Giá tốt nhất</h3>
              <p className="text-gray-600 text-sm">
                Cam kết giá sỉ lẻ cạnh tranh
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold mb-2">Giao hàng nhanh</h3>
              <p className="text-gray-600 text-sm">24h nội thành, toàn quốc</p>
            </div>

            <div>
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-semibold mb-2">Ưu đãi hấp dẫn</h3>
              <p className="text-gray-600 text-sm">
                Nhiều chương trình khuyến mãi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
