import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { GOOGLE_SIGN_IN_WEB_CLIENT_ID } from '@env';

// auth context that holds functions needed for firebase auth interactions
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  GoogleSignin.configure({
    webClientId: GOOGLE_SIGN_IN_WEB_CLIENT_ID,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // login function
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            Alert.alert("Incorrect username/password combination");
            console.log(e);
          }
        },
        // registration function
        register: async (email, password, name, username) => {
          try {

            const user = await auth().createUserWithEmailAndPassword(email, password);

            console.log(name + " " + username);

            firestore().collection('Users').doc(auth().currentUser.uid).set({
              name: name,
              username: username
            }).then(() => {
              console.log('User Added!');
            })

          } catch (e) {
            Alert.alert("Email address is already in use");
            console.log(e);
          }
        },
        // logout function
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};