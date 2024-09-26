"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"

interface MainNavProps {
    data: Category[];
    storeId: string;
}

export const revalidate = 0

const MainNav: React.FC<MainNavProps> = ({
    data, storeId
}) => {
    const pathname = usePathname();

    const routes = [ 
        ...data.map((route) => ({
        href: `/stores/${storeId}/category/${route.id}`,
        label:  route.name,
        active: pathname === `/stores/${storeId}/category/${route.id}`,
    })),
    {
        href: `/`,
        label:  'Stores',
        active: pathname === `/`,
    }]
    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn("text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav;