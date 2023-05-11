export type ConfirmSignUpInfo = {
    confirmationCode: string;
}
export type ConfirmSignUpForm = {
    confirmationCode: string;
    onConfirmationCodeChange: (value: string) => void;
    onConfirmClick: () => void;
}
