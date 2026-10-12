'use client'
import CategoryContent from "@/components/sheard/CategoryContent";
import CategoryProductsSkeleton from "@/components/skeleton/CategoryProductsSkeleton";
import { Suspense, useEffect, useState } from "react";

interface ICatergoryPageProps{
  params : Promise<{ categoryId: string }>
}
export default function CategoryPage({ params }:ICatergoryPageProps) {
  const[categoryId,setCategoryId] = useState("");
  useEffect(()=>{
    const getCategoryId = async() =>{
      const {categoryId} = await params;
      setCategoryId(categoryId);
    }
    getCategoryId()
  },[])
  console.log(categoryId)
  return (
   <Suspense fallback={<CategoryProductsSkeleton />}>
      <CategoryContent categoryId={categoryId} />
    </Suspense>
  )
}
