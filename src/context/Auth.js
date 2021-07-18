import React, { createContext, useEffect, useReducer } from 'react';
import firebase from '../services/firebase';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        authError: null,
        isAuthenticating: false,
        user: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        authError: action.payload,
        isAuthenticating: false,
        user: null
      }
    case 'SIGNUP':
    case 'SIGNIN':
    case 'SIGNOUT':
      return {
        ...state,
        user: null,
        authError: null,
        isAuthenticating: true
      }
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authError: null,
    isAuthenticating: false
  });
  const { user, authError, isAuthenticating } = state;

  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: 'SET_USER', payload: user });
    });
  }, [])

  const signUp = async (email, password) => {
    try {
      dispatch({ type: 'SIGNUP' });
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  }

  const signIn = async (email, password) => {
    try {
      dispatch({ type: 'SIGNIN' });
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  }

  const signOut = async () => {
    try {
      dispatch({ type: 'SIGNOUT' });
      firebase.auth().signOut();
    } catch (err) {
      console.error(err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticating,
      authError,
      signUp,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

