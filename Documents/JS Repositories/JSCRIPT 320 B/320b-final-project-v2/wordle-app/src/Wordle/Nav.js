// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Nav() {
    // const [user, setUser] = useState(null);
    // const navigate = useNavigate();
    // const auth = getAuth();

    // useEffect(()=> {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //         //   const uid = user.uid;
    //           setUser(user);
    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //         }
    //       });
    //     // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //     //     setUser(user);
    //     // });

    //     return () => unsubscribe();
    // }, [auth]);
    return (
        <div>
            <div className='TitleBar'>
                <div className='gg-menu'>

                </div>
                <div className='info-icon'>

                </div>
                {/* <div className='Nav'>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/wordle">Wordle</Link></div>
                    <li><Link to="/quordle">Quordle</Link></li>
                </div> */}
                <h1 className='title'>Wonderful World of Wordle</h1>
                <div className='gg-insights'>
                    
                </div>
                <div className='gg-options'>
                    
                </div>
                <div className='SignIn'>
                    {/* {user ? (
                    <div>
                        <p>{user.displayName}</p>
                        <button
                            onClick={() => {
                                firebase.auth().signOut();
                                navigate('/');
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to ="/">Sign In</Link>
                    </div>
                )} */}
                </div>
            </div>
        </div>
    )
}