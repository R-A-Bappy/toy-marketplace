import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import useTitle from '../../hook/useTitle';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Log In');

    const from = location?.state?.from?.pathname || '/';

    const { loginUser, handleGithubProvider, handleGoogleProvider } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess("");
        setError("");
        loginUser(email, password)
            .then(() => {
                setSuccess("Login Successfully");
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate(from);
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'ooop!',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })

    }

    const handleProviderGithub = () => {
        setSuccess("");
        setError("");
        handleGithubProvider()
            .then(() => {
                setSuccess("Login Successfully");
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'ooop!',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    const handleProviderGoogle = () => {
        setSuccess("");
        setError("");
        handleGoogleProvider()
            .then(() => {
                setSuccess("Login Successfully");
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'ooop!',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    return (
        <div className="font-['Poppins', sans-serif] flex justify-center items-center min-h-screen bg-gray-400">
            <div className="relative w-11/12 md:w-[500px] pt-4 flex-col flex justify-center items-center bg-transparent border-2 border-[rgba(255,255,255,0.5)] rounded-2xl my-12">
                <form onSubmit={handleLogin} className='w-10/12 md:w-[400px]'>
                    <p className='text-red-600'>{error && <span>{error}</span>}</p>
                    <p className='text-green-600'>{success && <span>{success}</span>}</p>
                    <h2 className="text-3xl text-white text-center font-bold mb-16">Log In</h2>
                    <div className="relative my-8  border-b-2 border-white">
                        <EnvelopeIcon className="h-6 w-6 inline absolute right-2 text-white text-lg top-5"></EnvelopeIcon>
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="email" name="email" id="email" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="email">Email</label>
                    </div>
                    <div className="relative my-8 border-b-2 border-white">
                        <LockClosedIcon className="h-6 w-6 inline absolute right-2 text-white text-lg top-5"></LockClosedIcon>
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="password" name="password" id="password" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="password">Password</label>
                    </div>
                    <div className="-mt-4 -ml-4 text-xs text-white flex justify-center">
                        <label htmlFor=""> <input className="mr-1" type="checkbox" />Remember Me <Link className="text-white hover:underline pl-4"> Forget Password</Link> </label>

                    </div>
                    <input className="w-full btn mt-4 btn-secondary font-semibold text-lg" type="submit" value="Log In" />
                    <div className="text-sm text-white text-center mb-3">
                        <p className="">Do not have a account <Link to='/register' className="text-white  hover:underline">Register</Link></p>
                    </div>
                </form>
                <div className='flex justify-center items-center gap-1 mb-6 w-full'>
                    <p className='w-1/12 border-t border-white'></p>
                    <p className='text-white'>or use one of these options</p>
                    <p className='w-1/12 border-t border-white'></p>
                </div>
                <div className='flex gap-12 justify-center mb-6'>
                    <button onClick={handleProviderGoogle} className="bg-base-200 hover:bg-base-300 rounded">
                        <img className='w-28' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                    </button>
                    <button onClick={handleProviderGithub} className="bg-base-200 hover:bg-base-300 rounded w-28 flex justify-center items-center p-4">
                        <img className='w-24' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;