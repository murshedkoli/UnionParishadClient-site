import React, { useContext, useState } from 'react';
import './login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { mainUser } from '../../App';
import { useNavigate } from 'react-router-dom';
import { host } from '../../host';
import swal from 'sweetalert';


const firebaseConfig = {
    apiKey: "AIzaSyDdYh4SXO8e0kxlZAU2nznHTqThs0eo6VY",
    authDomain: "unionparishad-app.firebaseapp.com",
    projectId: "unionparishad-app",
    storageBucket: "unionparishad-app.appspot.com",
    messagingSenderId: "385441600817",
    appId: "1:385441600817:web:16013de254f90c1a088c10"
};

const app = initializeApp(firebaseConfig);


const Login = () => {

    const navigate = useNavigate();

    const loggedUser = JSON.parse(sessionStorage.getItem('username'));

    const [loggedInUser, setLoggedInUser] = useContext(mainUser);


    document.title = "Admin Login page"


    const loginWithGoogle = () => {

        var provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user)
                const sessionAdd = JSON.stringify(user.email);
                sessionStorage.setItem('username', sessionAdd);

                navigate('/');
            })

    };

    const logged = () => {
        navigate('/');
    }

    const [user, setUser] = useState({
        phone: "",
        password: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;



        setUser({ ...user, [name]: value })

    }

    const loginWithUser = (e) => {
        fetch(`${host}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.result) {
                    swal("দুঃখিত!", `আপনার দেওয়া ইউজার পাসওয়ার্ড ভূল আছে ।  আবার চেষ্টা করুন `, "warning");

                } else {
                    swal("ধন্যবাদ!", ` ${data.nameBn} ্ আপনি সফলভাবে লগিন করেছেন`, "success");

                    setLoggedInUser(data.phone)
                    const sessionAdd = JSON.stringify(data.phone);
                    sessionStorage.setItem('username', sessionAdd);

                    navigate('/');
                }

            })

        e.preventDefault()
    }



    return (

        <div className='loginPage'>

            {loggedUser === !'' ? <div>Your ar Logged Now with : {loggedUser}
                <br />

                <button onClick={logged}>Back To Dashboard</button>
            </div>
                :

                <div className='loginPage'>
                    {loggedUser && <p>You are Login with :{loggedUser}, and you are not admin, Please Login with admin</p>}
                    <h1 className='loginTitle'>Login </h1>
                    <form >

                        <div className="inputDiv">
                            <label htmlFor="username">Mobile Number</label>
                            <input onChange={handleInput} type="text" name='phone' id='phone' placeholder='Mobile Number' />
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <input onChange={handleInput} type="password" name='password' id='password' placeholder='passowrd' />
                        </div>

                        <button className='loginBtn' onClick={loginWithUser}> Login</button><br />


                    </form>
                    <button className='loginBtn' onClick={loginWithGoogle}> Login with Google</button>

                </div>}

        </div>
    );
};

export default Login;