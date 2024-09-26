import { Product } from "@/types"
import qs from "query-string"

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProducts = async (query: Query, storeId: string): Promise<Product[]> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}/products`

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json()
}

export default getProducts;