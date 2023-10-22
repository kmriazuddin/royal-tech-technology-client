import { useNavigate } from "react-router-dom";

const ProductBrand = () => {
    const navigate = useNavigate();
    const handleGetCategoryProducts = name => {
        console.log('click')
        navigate(`/allproducts?category=${name}`)
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className="py-10">
                <h1 className="text-4xl font-semibold text-center mb-10">Categories Of The Brands</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 m-auto justify-center gap-5">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/dbKfNV7/Intel-logo.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Intel Processor</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("Intel")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/6bchNXv/Apple-Logo1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Apple</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("Apple")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/r7TnwV3/Dell-Logo.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dell</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("Dell")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/8BtYL3y/samsung.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Samsung</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("Samsung")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/F7Mj7SR/Oppo-Logo.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Oppo</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("Oppo")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="w-60" src="https://i.ibb.co/H4vPWR5/pngwing-com.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">HP</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleGetCategoryProducts("HP")} className="btn bg-teal-400 hover:bg-teal-300">Buy Products</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBrand;