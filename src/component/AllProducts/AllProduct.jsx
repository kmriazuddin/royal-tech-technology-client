/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllProduct = ({user}) => {
    const {_id, photo, name, model} = user;
    return (
        <div className="flex flex-wrap">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-60" src={photo} alt="Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-base">{model}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/productdetails/${_id}`} user={user}><button className="btn btn-accent bg-[#76c1d1] text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;