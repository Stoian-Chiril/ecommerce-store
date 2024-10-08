import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async ({storeid}: {storeid: string}) => {
    const categories = await getCategories(storeid);

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:mx-6 lg:px-8 flex h-16 items-center">
                    <Link href={`/stores/${storeid}`} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">
                            STORE
                        </p>
                    </Link>
                    <MainNav data ={categories} storeId={storeid}/>
                    <NavbarActions storeId ={storeid}/>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;