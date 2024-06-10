import { Link, useNavigate } from 'react-router-dom';
import './SingUp.css'
import { FaEye, FaGithub } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { IoEyeOff } from 'react-icons/io5';
import useTitle from '../../UseTitle/UseTitle';


const SingUp = () => {
    const { createUser, singInGoogle, singInGithub } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();
    useTitle('SingUp')
    const handelSingUp = (event) => {
        event.preventDefault();
        if (!accept) {
            alert('You must accept the terms and conditions before signing up.');
            return;
        }
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                userUpdate(loggedUser, name, photo);
                setAccept(false);
                form.reset();
                navigate('/');
                console.log(loggedUser);

            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    const userUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    };
    const handelGoogle = () => {
        singInGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch((error) => console.log(error.message))
    };

    const handelGithub = () =>{
        singInGithub()
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/');
        })
        .catch((error)=>console.log(error.message))
    };

    const termsCondition = (event) => {
        setAccept(event.target.checked);
    };
    return (
        <div className='mb-8 pb-8 pt-4 main-container'>
            <p className='text-center text-3xl font-medium mb-5'>SingUp your account</p>
            <form onSubmit={handelSingUp}>
                <div className="form-container">
                    <div className="ml-[70px] mt-5 mb-2">
                        <label className='block mb-2 text-2xl ml-5 pt-2' htmlFor="">Name</label>
                        <input className='w-[400px] h-11 border-none outline-none pl-4 rounded-3xl input-name' type="text" name="name" id="" placeholder='Enter your name' required />
                    </div>
                    <div className="ml-[70px] mb-2">
                        <label className='block mb-2 text-2xl ml-5' htmlFor="">Photo</label>
                        <input className='w-[400px] h-11 border-none outline-none pl-4 rounded-3xl input-name' type="text" name="photo" id="" placeholder='Enter your photo' required />
                    </div>
                    <div className="ml-[70px] mb-2">
                        <label className='block mb-2 text-2xl ml-5' htmlFor="">Email</label>
                        <input className='w-[400px] h-11 border-none outline-none pl-4 rounded-3xl input-name' type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>
                    <div className="ml-[70px] mb-3">
                        <label className='block mb-2 text-2xl ml-5' htmlFor="">Password</label>
                        <div className='flex '>
                            <input className='w-[360px] h-11 border-none outline-none pl-4 input-password' type={show ? "text" : "password"} name="password" id="" placeholder='Enter your password' required />
                            <p onClick={() => setShow(!show)} className='h-11 hide-section  pt-3 pl-2 pr-2'>{show ? <FaEye className='h-5 w-5' /> : <IoEyeOff className='h-5 w-5' />}</p>
                        </div>
                    </div>
                    <label className='flex items-center ml-[80px] mb-4'>
                        <input onClick={termsCondition} type="checkbox" name='checkbox' className="h-4 w-4" />
                        <p className='ml-2'>Accept <Link className='underline' to={'/terms'}>the Terms and Conditions</Link></p>
                    </label>
                    <input className='ml-[70px]  rounded-3xl text-center w-[400px] h-11 mb-3 input-submit text-white' type="submit" value="SingUp" />
                    <div className='ml-[75px] flex gap-x-3 mb-3'>
                        <div>
                            <button onClick={handelGoogle} className='flex items-center google pl-3 pt-1 pb-1 pr-3 rounded-2xl'><span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1443 21.8798 21.2395 23.1864L21.2128 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" />
                                <path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853" />
                                <path d="M8.16007 18.769C7.85848 17.8979 7.68395 16.9645 7.68395 16.0001C7.68395 15.0356 7.85849 14.1023 8.1442 13.2312L8.13621 13.0456L3.67126 9.64746L3.52518 9.71556C2.55696 11.6134 2.0014 13.7445 2.0014 16.0001C2.0014 18.2556 2.55696 20.3867 3.52518 22.2845L8.16007 18.769Z" fill="#FBBC05" />
                                <path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335" />
                            </svg></span>Continue Google</button>
                        </div>
                        <button onClick={handelGithub} className='flex items-center google pl-3 pr-3 pt-1 pb-1 rounded-2xl'><span><FaGithub className='h-[32px] w-[32px]' /></span>Continue Github</button>
                    </div>
                    <p className='text-center'>Already Have An Account ? <Link className='underline text-red-700' to={'/login'}>Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default SingUp;