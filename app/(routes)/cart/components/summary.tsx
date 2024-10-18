"use client";

import axios from "axios";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const Summary = ({storeId}: {storeId: string}) => {
    const items = useCart((state) => state.items);
    const router = useRouter();

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${storeId}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = response.data.url
    }

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice}/>
                </div>
            </div>
            <Button disabled={items.length === 0} onClick={onCheckout} className="w-full mt-6">
                Checkout
            </Button>
            <Button onClick={() => router.push(`/stores/${storeId}`)} className="w-full mt-6">
                Go back to store
            </Button>
        </div>
    )
};

export default Summary;
