import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-semibold">404 not found</h1>
            <p className="text-lg my-5">a server could not find a client-requested webpage.</p>
            <Link to="/"><button className="btn btn-error">Back To Home</button></Link>
            <img className="px-5 my-3" src="https://i.ibb.co/DD0XTcK/404-error.jpg" alt="" />
        </div>
    );
};

export default Error;