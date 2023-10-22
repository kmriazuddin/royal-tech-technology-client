

const UserPost = () => {

    const handlePostUser = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const model = form.model.value;
        const categories = form.categories.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const brandCategories = form.brandCategories.value;
        const myData = { name, model, categories, price, description, photo, brandCategories }

        fetch('https://royal-tech-pmbh.onrender.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="mt-5">
                <h2 className="text-4xl text-center font-semibold">Add Product</h2>
                <form onSubmit={handlePostUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input type="text" name="model" placeholder="Model" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Categories</span>
                        </label>
                        <input type="text" name="categories" placeholder="Categories" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="flex items-end gap-3 flex-wrap-reverse md:flex-nowrap">
                        <div className="form-control w-96">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <select className="select select-bordered w-full max-w-xs mt-5" name="brandCategories">
                                <option disabled>Brand Name</option>
                                <option >HP</option>
                                <option >Apple</option>
                                <option >Dell</option>
                                <option >Oppo</option>
                                <option >Samsung</option>
                                <option >Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Products</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserPost;