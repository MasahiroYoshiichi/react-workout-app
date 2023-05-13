import * as yup from "yup";
import {InferType} from "yup";

export const yupMFASignInForm = yup.object({
    MFACode: yup
        .string()
        .min(5,"確認コードは6桁です")
        .max(6,"確認コードは6桁です")
        .required("確認コードは必須です"),
})

export type MFASignInSchema = InferType<typeof yupMFASignInForm>