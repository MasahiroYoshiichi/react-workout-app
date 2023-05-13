import {signinFormSchema} from "../schema/signInForm";

export type SignInInfo = {
    email: string;
    password: string;
}
export type SignInForm = {
    onSignInClick: (value: signinFormSchema) => void;
};

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
