// import React from 'react';
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import "firebase/auth";
// import 'firebaseui/dist/firebaseui.css'
// import '../db';

export default function Home() {
  // // var firebase = require('firebase');
  // // var firebaseui = require('firebaseui');
  // // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  // var uiConfig = {
  //   callbacks: {
  //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
  //       // User successfully signed in.
  //       // Return type determines whether we continue the redirect automatically
  //       // or whether we leave that to developer to handle.
  //       return true;
  //     },
  //     uiShown: function() {
  //       // The widget is rendered.
  //       // Hide the loader.
  //       document.getElementById('loader').style.display = 'none';
  //     }
  //   },
  //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //   signInFlow: 'popup',
  //   signInSuccessUrl: '/',
  //   signInOptions: [
  //     // Leave the lines as is for the providers you want to offer your users.
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID
  //     //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
  //   ]
  // };

  // if (!firebase.apps.length) {
  //   initializeApp(uiConfig)
  // } 

  // var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

  

  return (
      <div>
          <div id="firebaseui-auth-container"></div>
          {/* {ui.start('#firebaseui-auth-container', uiConfig)} */}
          <div id="loader">Loading...</div>
      </div>
  );
}; 