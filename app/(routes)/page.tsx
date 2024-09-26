import getStores from "@/actions/get-stores";
import StoreSwitcher from "@/components/store-switcher";

export const revalidate = 0

const StoresPage = async () => {
    const stores = await getStores();
    return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-8">Choose a store</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {stores.map((store) => (
            <StoreSwitcher key={store.id} store={store} />
          ))}
        </div>  
    </div>
    ) 
};

export default StoresPage;