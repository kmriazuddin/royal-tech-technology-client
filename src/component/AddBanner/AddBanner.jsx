
const AddBanner = () => {
    return (
        <div className="mt-10">
            <div className="hero h-52" style={{ backgroundImage: 'url(https://i.ibb.co/98krBL1/techonlogy-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl grid md:grid-cols-2 items-center">
                        <h1 className="mb-5 text-5xl font-bold">Technology Solution</h1>
                        <div className="flex gap-5">
                            <button className="btn bg-teal-500 hover:bg-teal-300">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBanner;