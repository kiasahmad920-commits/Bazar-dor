import { getProductsData } from "@/lib/allDataFetch";
import { IProductDataType } from "@/types/allDataType";
import { FaAnglesDown } from "react-icons/fa6";
import ProductCard from "../cards/ProductCard";

export default async function PriceDownProducts() {
    const products = await getProductsData();
    const priceUpProducts = products.filter((product: IProductDataType) => product.change.dir === "down");
    const TopSixProducts = priceUpProducts.sort((a:IProductDataType,b:IProductDataType) => a.today - b.today);
    return (
        <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold"><FaAnglesDown className="text-green-500" /> আজ দাম বেড়েছে</h2>
            <div className="grid sm:grid-cols-2 gap-5 mt-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    TopSixProducts.slice(0,6).map((product: IProductDataType) =><ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}