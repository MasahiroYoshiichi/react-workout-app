export type SignInInfo = {
    email: string;
    password: string;
}
export type SignInForm = {
    email: string;
    password: string;
    onEmailChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onSingInClick: () => void;
}

export type SignInResponse = {
    session: string;
}

// export type SignInResponse = {
//     AuthenticationResult: AuthenticationResult;
//     ChallengeName?: string;
// }
//
// export type AuthenticationResult = {
//     idToken: string;
//     accessToken: string;
//     refreshToken?: string;
//     ExpiresIn: number;
//     tokenType: string
// }
