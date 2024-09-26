import { Billboard } from "@/types"

const id =  `${process.env.PUBLIC_BILLBOARD_ID}`
const getBillboard = async (storeId: string): Promise<Billboard> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}/billboards`
    const res = await fetch(`${URL}/${id}`);

    return res.json()
}

export default getBillboard;