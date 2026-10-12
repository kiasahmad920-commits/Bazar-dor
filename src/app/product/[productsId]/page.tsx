import ProductDetails from "@/components/sheard/ProductDetails";
import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import { Suspense } from "react";

interface ProductsDetailsPageProps{
    params: Promise<{
        productsId: string
    }>
}

export default async function ProductsDetailsPage({params}:ProductsDetailsPageProps) {
    const {productsId} = await params
    
    return (
        <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetails productsId={productsId} />
        </Suspense>
    )
}