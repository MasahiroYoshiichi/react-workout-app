// import axios from 'axios';
// import {AuthInfo} from "../types";
//
// const apiBaseUrl = 'http://localhost:8080';
//
// export const signUp = async (authInfo: AuthInfo) => {
//     try {
//         const response = await axios.post(`${apiBaseUrl}/signup`, authInfo);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
//
// export const confirmSignUp = async (authInfo: AuthInfo) => {
//     try {
//         await axios.post(`${apiBaseUrl}/confirm-signup`, authInfo);
//     } catch (error) {
//         throw error;
//     }
// };
//
// export const signIn = async (authInfo: AuthInfo) => {
//     try {
//         const response = await axios.post(`${apiBaseUrl}/signin`, authInfo);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
//
// export const signOut = async (authInfo: AuthInfo) => {
//     try {
//         await axios.post(`${apiBaseUrl}/signout`, authInfo);
//     } catch (error) {
//         throw error;
//     }
// };
