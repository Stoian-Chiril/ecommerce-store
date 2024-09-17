import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`
const id =  `${process.env.PUBLIC_BILLBOARD_ID}`
const getBillboard = async (): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json()
}

export default getBillboard;