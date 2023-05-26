import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hook/useTitle';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { createUser } = useContext(AuthContext);
    useTitle('Register');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setSuccess("");

        createUser(email, password)
            .then(result => {
                setSuccess("Register successfully");
                profileUpdate(result.user, name, photoUrl);
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Registration success',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'ooop!',
                    text: 'Your Registration Unsuccess ',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    const profileUpdate = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="font-['Poppins', sans-serif] flex justify-center items-center min-h-screen bg-gray-400">
            <div className="relative w-11/12 md:w-[500px] pt-4 flex-col flex justify-center items-center bg-transparent border-2 border-[rgba(255,255,255,0.5)] rounded-2xl my-12">
                <form onSubmit={handleRegister} className='w-10/12 md:w-[400px]'>
                    <p className='text-red-600'>{error && <span>{error}</span>}</p>
                    <p className='text-green-600'>{success && <span>{success}</span>}</p>
                    <h2 className="text-3xl text-white text-center font-bold mb-16">Please Register!</h2>
                    <div className="relative my-8  border-b-2 border-white">
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="name" id="name" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="name">Your Name</label>
                    </div>
                    <div className="relative my-8  border-b-2 border-white">
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="email" name="email" id="email" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="email">Email</label>
                    </div>
                    <div className="relative my-8 border-b-2 border-white">
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" name="photoUrl" id="photoUrl" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="photoUrl">Photo URL</label>
                    </div>
                    <div className="relative my-8 border-b-2 border-white">
                        <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="password" name="password" id="password" required />
                        <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="password">Password</label>
                    </div>


                    <input className="w-full btn mt-4 btn-secondary font-semibold text-lg" type="submit" value="Register" />
                    <div className="text-sm text-white text-center mb-3">
                        <p className="mb-4">You already register please! <Link to='register' className="text-white  hover:underline ">Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;