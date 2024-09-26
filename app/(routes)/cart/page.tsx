// app/(routes)/cart/page.tsx
import { Suspense } from "react";
import ClientCart from "./components/clientcart";

const CartPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientCart />
        </Suspense>
    );
};

export default CartPage;