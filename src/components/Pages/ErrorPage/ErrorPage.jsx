// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-[100px] md:text-[150px] text-center text-transparent bg-cover bg-clip-text bg-[url('https://images.unsplash.com/photo-1521459467264-802e2ef3141f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] font-bold"><span className="text-[150px] md:text-[250px]">o</span>oop!</h2>
            <h2 className="text-center text-gray-600 text-4xl font-bold">404 - PAGE NOT FONUD</h2>
            <p className="text-center text-gray-500 w-80 md:w-[400px] mx-auto mt-4">The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
            <Link to='/'><button className="btn btn-primary mt-12">Back To Home Page</button></Link>
        </div>
    );
}
export default ErrorPage;