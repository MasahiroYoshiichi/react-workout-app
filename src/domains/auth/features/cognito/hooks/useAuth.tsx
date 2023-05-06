import { FC, createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import AwsConfigAuth from 'domains/auth/config/auth';
import { UseAuth } from 'domains/auth/types';

Amplify.configure({ Auth: AwsConfigAuth });
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const authContext = createContext({} as UseAuth);
export const ProvideAuth: FC<PropsWithChildren> = ({ children }) => {
    const auth = useProvideAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
export const useAuth = (): UseAuth => {
    return useContext(authContext);
};

export const useProvideAuth = (): UseAuth => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    // const [signUpUsername, setSignUpUsername] = useState('');
    // const [signUpPassword, setSignUpPassword] = useState('');


    const signUp = async (username: string, email: string, password: string, phoneNumber: string) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    phone_number: phoneNumber,
                },
            });
            localStorage.setItem('tempUsername', username);
            localStorage.setItem('tempPassword', password);
            // setSignUpUsername(username);
            // setSignUpPassword(password);

            return {
                success: true,
                message: '',
            };
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const sendVerificationCode = async () => {
        const storedUsername = localStorage.getItem('tempUsername');
        if (storedUsername == null) {
            return {
                success: false,
                message: 'ユーザーが設定されていません。',
            };
        }
        try {
            await Auth.resendSignUp(storedUsername);

            return {
                success: true,
                message: 'コードの送信に成功しました。'
            };
        } catch (error) {
            return {
                success: false,
                message: 'コードの再送信に失敗しました。',
            };
        }
    };

    const confirmSignUp = async (verificationCode: string) => {
        const storedUsername = localStorage.getItem('tempUsername');
        const storedPassword = localStorage.getItem('tempPassword')
        if (storedUsername == null || storedPassword == null) {
            return {
                success: false,
                message: 'ユーザーかパスワードが設定されていません。',
            };
        }

        try {
            await Auth.confirmSignUp(storedUsername, verificationCode);
            const result = await signIn(storedUsername, storedPassword);
            localStorage.removeItem('tempUsername');
            localStorage.removeItem('tempPassword');

            return result;
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const result: UseAuth = await Auth.signIn(username, password);
            setUsername(result.username);
            setIsAuthenticated(true);

            return {success: true, message: ''};
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setUsername('');
            setIsAuthenticated(false);

            return {success: true, message: ''};
        } catch (error) {
            return {
                success: false,
                message: 'ログアウトに失敗しました。',
            };
        }
    };

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((result: UseAuth) => {
                setUsername(result.username);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch(() => {
                setUsername('');
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    }, []);

    return {
        isLoading,
        isAuthenticated,
        username,
        // signUpUsername,
        // signUpPassword,
        signUp,
        sendVerificationCode,
        confirmSignUp,
        signIn,
        signOut,
    };
}