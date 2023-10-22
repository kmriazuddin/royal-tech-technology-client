import { useLoaderData, useSearchParams } from "react-router-dom";
import AllProduct from "./AllProduct";
import {  useEffect, useState } from "react";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();

    const apiProducts = useLoaderData();

    useEffect(() => {
        setIsLoading(true);
        const category = searchParams?.get('category')
        if(category){
            let products = apiProducts?.filter((product) => product?.brandCategories === category)
            console.log(products)
            if(products?.length > 0){
                setProducts(products)
            }else{
                setProducts([]);
            }
        }else{
            setProducts(apiProducts);
        }
        setIsLoading(false);
    }, [])

    return (
        <div className="bg-white">
            <h1 className="text-4xl font-semibold text-end">All Products: {products?.length}</h1>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10">
                {
                    isLoading ? <p>Loading........</p> : products?.length > 0 ? products?.map(user => <AllProduct key={user?._id} user={user}></AllProduct>) : <h2>No Products</h2>
                }
            </div>
        </div>
    );
};

export default AllProducts;