import React, { useContext } from 'react';
import './login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { mainUser } from '../../App';
import { useNavigate } from 'react-router-dom';


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

    console.log(loggedInUser);

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





    return (

        <div className='loginPage'>

            {loggedUser == 'murshedkoli@gmail.com' ? <div>Your ar Logged Now with : {loggedUser}
                <br />

                <button onClick={logged}>Back To Dashboard</button>
            </div>
                :

                <div className='loginPage'>
                    {loggedUser && <p>You are Login with :{loggedUser}, and you are not admin, Please Login with admin</p>}
                    <h1 className='loginTitle'>Login </h1>
                    <form >

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <input onChange={1} type="text" name='username' id='username' placeholder='username' />
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <input onChange={1} type="password" name='password' id='password' placeholder='passowrd' />
                        </div>

                        <button className='loginBtn' onClick={1}> Login</button><br />


                    </form>
                    <button className='loginBtn' onClick={loginWithGoogle}> Login with Google</button>

                </div>}

        </div>
    );
};

export default Login;