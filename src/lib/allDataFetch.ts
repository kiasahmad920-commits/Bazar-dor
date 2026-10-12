import {
  ICategoryDataType,
  IProductDataType,
} from "@/types/allDataType";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI<T>(endpoint: string): Promise<T> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is missing in .env.local");
  }

  const res = await fetch(`${API_URL}/${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  const result: unknown = await res.json();

  if (typeof result === "object" && result !== null && "data" in result) {
    return (result as { data: T }).data;
  }

  return result as T;
}

export async function getCategoryData(): Promise<ICategoryDataType[]> {
  const result = await fetchAPI<
    ICategoryDataType[] | { categories: ICategoryDataType[] }
  >("categories");

  if (Array.isArray(result)) {
    return result;
  }

  return result.categories;
}

export async function getProductsData(): Promise<IProductDataType[]> {
  const result = await fetchAPI<
    IProductDataType[] | { products: IProductDataType[] }
  >("products");

  if (Array.isArray(result)) {
    return result;
  }

  return result.products;
}