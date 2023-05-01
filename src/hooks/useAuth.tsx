import {FC, createContext, useContext, useEffect, useState, PropsWithChildren} from 'react';
import {Amplify, Auth} from 'aws-amplify';
import AwsConfigAuth from '../aws-config/auth';
import {UseAuth} from "../domains";
Amplify.configure({ Auth: AwsConfigAuth });

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const authContext = createContext({} as UseAuth);
export const ProvideAuth: FC<PropsWithChildren> = ({children}) => {
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
    const [password, setPassword] = useState('');

    const signUp = async (username: string, password: string) => {
        try {
            await Auth.signUp({ username, password });
            setUsername(username);
            setPassword(password);

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

    const confirmSignUp = async (verificationCode: string) => {
        try {
            await Auth.confirmSignUp(username, verificationCode);
            const result = await signIn(username, password);
            setPassword('');

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

            return { success: true, message: '' };
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

            return { success: true, message: '' };
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
        signUp,
        confirmSignUp,
        signIn,
        signOut,
    };
};