import { getProductsData } from "@/lib/allDataFetch";
import { IProductDataType } from "@/types/allDataType";
import ProductCard from "../cards/ProductCard";

export default async function AllProducts() {
    const products = await getProductsData();
    return (
        <div id="allProducts">
            <h2 className="flex items-center gap-2 text-2xl font-bold">সব পণ্য</h2>
            <p className="text-gray-500">মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.map((product: IProductDataType) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}