import Axios from 'react-native-axios/lib/core/Axios';
import React, {createContext } from 'react';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const register = (name, lastname, email, pass, phone, identification, adress, gender, birthday) =>{
            axios.post(`${BASE_URL}/User`, {
                [name, lastname, email, pass, phone, identification, adress, gender, birthday]
            }).then(res => {
                let userInfo = res.data;
                console.log(userInfo);
            }).catch(e => {
                console.log(`register error ${e}`);
            });
    };


    return (
        <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
    );    
};