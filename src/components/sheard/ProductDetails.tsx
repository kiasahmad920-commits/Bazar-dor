import { getProductsData } from "@/lib/allDataFetch";
import { IProductDataType } from "@/types/allDataType";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import DetailsPageTop from "../cards/DetailsPageTop";
import PriceSummury from "./PriceSummury";
import MarketsPrice from "./MarketsPrice";
import NotFound from "../not-found/NotFound";

export default async function ProductDetails({
  productsId,
}: {
  productsId: string ;
}) {
  const products: IProductDataType[] = await getProductsData();
  const product = products.find((item) => item.id === Number(productsId));
  if(product?.id !== Number(productsId)){
    return <NotFound />
  }
  return (
    <div className="grid gap-5 my-5">
      <div className="flex items-center gap-3">
        <Link href="/">হোম</Link>
        <IoIosArrowForward />
        <Link href={`/categories/${product?.category}`}>
          {product?.categoryNameBn}
        </Link>
        <IoIosArrowForward />
        <p>{product?.nameBn}</p>
      </div>
     <DetailsPageTop product={product}/>
     <div className="bg-white p-5 grid gap-5 rounded-2xl">
        <PriceSummury product={product}/>
        <MarketsPrice product={product}/>
     </div>
    </div>
  );
}
