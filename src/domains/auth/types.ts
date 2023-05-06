export type UseAuth = {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    // ReactContextを利用した方法
    // signUpUsername: string;
    // signUpPassword: string;
    signUp: (username: string, email: string, password: string, formattedPhoneNumber: string) => Promise<Result>;
    sendVerificationCode: () => Promise<Result>;
    confirmSignUp: (verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}
interface Result {
    success: boolean;
    message: string;
}

export type countryType = {
    value: string;
    label: string;
}

