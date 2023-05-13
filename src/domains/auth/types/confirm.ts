import {confirmSignUpSchema} from "../schema/confirmSignUpForm";

export type ConfirmSignUpInfo = {
    confirmationCode: string;
}
export type ConfirmSignUpForm = {
    onConfirmClick: (value: confirmSignUpSchema) => void;
}
