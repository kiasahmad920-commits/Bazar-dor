
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
    throw new Error(
      `API request failed: ${res.status} ${res.statusText}`,
    );
  }

  const result = await res.json();

  // API যদি { data: [...] } আকারে ডেটা দেয়
  if (result && Array.isArray(result.data)) {
    return result.data as T;
  }

  // API যদি সরাসরি array দেয়
  return result as T;
}

export async function getCategoriesData(): Promise<ICategoryDataType[]> {
  return fetchAPI<ICategoryDataType[]>("categories");
}

export async function getProductsData(): Promise<IProductDataType[]> {
  return fetchAPI<IProductDataType[]>("products");
}

