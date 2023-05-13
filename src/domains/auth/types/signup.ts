import {signUpFormSchema} from "../schema/signUpForm";

export type SignUpInfo = {
    username: string;
    password: string
    email: string;
    phoneNumber: string
}

export type CountryInfo = {
    value: string;
    label: string;
}


export type SignUpForm = {
    onSignUpClick: (value: signUpFormSchema) => void;
}



