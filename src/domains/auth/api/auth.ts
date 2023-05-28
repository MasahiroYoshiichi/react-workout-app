import axios from 'axios';
import { ConfirmSignUpInfo } from "../types/confirm";
import { MFAInfo, MFAResponse} from "../types/mfa";
import { SignInInfo} from "../types/signin";
import { SignOutResponse} from "../types/signout";
import { SignUpInfo} from "../types/signup";

const apiBaseUrl = "/api";

const apiClient = axios.create({
        baseURL: `${apiBaseUrl}`,
        withCredentials: true,
});



export const handleSignUp = async (authInfo: SignUpInfo): Promise<void> => {
        await apiClient.post('/signup', authInfo);
};

export const handleConfirmSignUp = async (authInfo: ConfirmSignUpInfo): Promise<void> => (
    await apiClient.post('/confirm-signup', authInfo)
);

export const handleSignIn = async (authInfo: SignInInfo): Promise<void> => {
        await apiClient.post('/signin', authInfo);
};

export const HandleMFA = async (authinfo: MFAInfo): Promise<MFAResponse> => {
        const responce = await apiClient.post<MFAResponse>('/mfa', authinfo)
        if (responce.status === 200) {
                apiClient.interceptors.request.use((config) => {
                        const accessToken = responce.data.accessToken;
                        if (accessToken !== null) {
                                if (!config.headers) {
                                        config.headers = {};
                                }
                                config.headers.Authorization = `Bearer ${accessToken}`;
                        }

                        return config;
                });
        }
        localStorage.setItem("authentication", responce.data.authentication)

        return responce.data;
}

export const handleSignOut = async (): Promise<SignOutResponse> => {
        const responce = await apiClient.post<SignOutResponse>('/signout');
        if (responce.status === 200) {
        apiClient.interceptors.request.use((config) => {
                if (config.headers) {
                        delete config.headers.Authorization
                }

                return config
        })
        }
        localStorage.setItem("authentication", responce.data.authentication)

        return responce.data;
};
