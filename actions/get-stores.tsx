import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores`;

const getStores = async (): Promise<Store[]> => {
    const res = await fetch(URL) 
    if (!res.ok) {
        throw new Error("Failed to fetch stores");
    }
    return res.json();
};

export default getStores;