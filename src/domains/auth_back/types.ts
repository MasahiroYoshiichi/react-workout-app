

export type SignUpInfo = {
    username: string;
    password: string
    email: string;
    phoneNumber: string
}

export type SignUpForm = {
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    onUsernameChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onPhoneNumberChange: (value: string) => void;
    onSignUpClick: () => void;
}

export type ConfirmSignUpInfo = {
    username: string;
    confirmationCode: string;
}
export type ConfirmSignUpForm = {
    username: string;
    confirmationCode: string;
    onUsernameChange: (value: string) => void;
    onConfirmationCodeChange: (value: string) => void;
    onConfirmClick: () => void;
}

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

export type SignOutInfo = {
    accessToken: string;
}
export type SignOutForm = {
    accessToken: string;
    onAccessTokenChange: (value: string) => void;
    onSignOutClick: () => void;
}



export type SignUpResponce = {
    accessToken: string;
    refreshToken: string;
    idToken: string;
}