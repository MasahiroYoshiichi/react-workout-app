import axios from "axios";
import {ConfirmSignUpInfo, SignInInfo, SignOutInfo, SignUpInfo, SignUpResponce} from "domains/auth_back/types";

const apiBaseUrl = "http://localhost:8080";

export const handleSignUp = async (authInfo: SignUpInfo): Promise<SignUpResponce>  => {
        const response = await axios.post<SignUpResponce>(`${apiBaseUrl}/signup`, authInfo);

        return response.data;
};

export const handleConfirmSignUp = async (authInfo: ConfirmSignUpInfo): Promise<SignUpResponce> => (
        await axios.post(`${apiBaseUrl}/confirm-signup`, authInfo)
);

export const handleSignIn = async (authInfo: SignInInfo): Promise<SignUpResponce> => {
        const response = await axios.post<SignUpResponce>(`${apiBaseUrl}/signin`, authInfo);

        return response.data;
};

export const handleSignOut = async (authInfo: SignOutInfo): Promise<SignUpResponce> => (
        await axios.post(`${apiBaseUrl}/signout`, authInfo)
)
