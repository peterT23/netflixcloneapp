import React, { useEffect } from "react";

import { createContext, useReducer } from "react";
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  isLogin: false,
  email: null,
  password: null,
};

const INITIALIZE = "INITIALIZE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      const { isAuthenticated, email, password } = action.payload;
      console.log("inside reducer", isAuthenticated);
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        isLogin: false,
        email,
        password,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLogin: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isLogin: false,
        email: null,
        password: null,
      };

    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  useEffect(() => {
    const initialize = async () => {
      const email = window.localStorage.getItem("email");
      const password = window.localStorage.getItem("password");
      try {
        console.log(email, password);

        if (email && password) {
          console.log("test running initialize");
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              isLogin: false,
              email: { email },
              password: { password },
            },
          });
        } else {
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, email: null, password: null },
          });
        }
      } catch (error) {
        console.log("err initialize", error);
        dispatch({
          type: INITIALIZE,
          payload: { isAuthenticated: false, email: null, password: null },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password, callback) => {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        email: { email },
        password: { password },
      },
    });
    callback();
  };

  const logout = async (callback) => {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("password");
    dispatch({
      type: LOGOUT,
    });
    callback();
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
