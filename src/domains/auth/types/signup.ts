import React from "react";

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
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    countryCode: CountryInfo;
    onUsernameChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onCountryChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    onPhoneNumberChange: (value: string) => void;
    onSignUpClick: () => void;
}



