import { Category } from "@/types"

const getCategories = async (storeId: string): Promise<Category[]> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}/categories`
    const res = await fetch(URL);
    if(!res.ok) {
        throw new Error("Failed to fetch categories")
    }
    return res.json()
}

export default getCategories;