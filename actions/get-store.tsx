import { Store } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getStore = async (id: string): Promise<Store> => {
    const res = await fetch(`${URL}/${id}`);
    console.log(res)
    if(!res.ok){
        throw new Error("Failed to fetch store")
    }
    return res.json()
}

export default getStore;