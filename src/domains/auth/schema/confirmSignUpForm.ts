import * as yup from "yup";
import {InferType} from "yup";

export const yupConfirmSignUpForm = yup.object({
    confirmationCode: yup
        .string()
        .min(5,"確認コードは6桁です")
        .max(6, "確認コードは6桁です")
        .required("確認コードは必須です"),
})

export type confirmSignUpSchema = InferType<typeof yupConfirmSignUpForm>