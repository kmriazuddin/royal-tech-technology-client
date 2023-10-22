import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState(null);
    const [isLoading, setIsLoading] = useState([]);

    const apiProductDetails = useLoaderData();

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            let product = apiProductDetails?.find((product) => product?._id === id)
            console.log(product);
            if (product) {
                setProductDetails(product);
            } else {
                setProductDetails(null);
            }
        } else {
            setProductDetails(null);
        }
        setIsLoading(false);
    }, [])


    return (
        <div>
            {
                isLoading ? <p>Loading.....</p> : <div className="max-w-6xl mx-auto">
                    {
                        productDetails ? <>
                            <img className="w-full h-96" src={productDetails?.photo} alt="" />
                            <h2 className="text-4xl my-2">{productDetails.name}</h2>
                            <h2 className="text-4xl my-2">{productDetails.model}</h2>
                            <h2 className="text-4xl my-2">{productDetails.categories}</h2>
                            <h2 className="text-4xl my-2">{productDetails.price}</h2>
                            <p className="text-lg my-5">{productDetails.description}</p>
                        </>
                        : <p>No Products Found</p>
                    }
                </div>
            }
        </div>
    );
};

export default ProductDetails;