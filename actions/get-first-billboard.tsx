import { Billboard } from "@/types"

const getfirstBillboard = async (storeId: string): Promise<Billboard> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}/billboards`
    const res = await fetch(`${URL}`);

    const billboards = await res.json();

    if (billboards.length === 0) {
        throw new Error("Billboard not found");
    }

    return billboards[0];
}

export default getfirstBillboard;