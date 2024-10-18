"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import useCart from "@/hooks/use-cart";

const Payment = () => {
    const searchParams = useSearchParams();
    const removeAll = useCart((state) => state.removeAll)
    useEffect(() => {
        if(searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.")
        }
    }, [searchParams, removeAll]);
    return (
        <div></div>
    )
}

export default Payment;