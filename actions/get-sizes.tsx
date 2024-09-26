import { Size } from "@/types"

const getSizes = async (storeId: string): Promise<Size[]> => {

    const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}/sizes`
    const res = await fetch(URL);

    return res.json()
}

export default getSizes;