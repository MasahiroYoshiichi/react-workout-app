import type { InferType } from "yup";
import * as yup from "yup";
import {countryData} from "../data/countryData";

export const yupSignUpForm = yup.object({
    username: yup
        .string()
        .min(3, "ユーザー名は3文字以上で入力してください")
        .max(128, "ユーザー名は128文字以下で入力してください")
        .matches(
            /^[a-zA-Z0-9_]+$/,
            "ユーザー名は英数字とアンダースコアのみを含めることができます"
        )
        .required("ユーザー名は必須入力です"),
    password: yup
        .string()
        .min(8, "パスワードは8文字以上で入力してください")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            "パスワードは大文字・小文字・数字・特殊文字をそれぞれ1つ以上含む必要があります"
        )
        .required("パスワードは必須入力です"),
    email: yup
        .string()
        .email("メールアドレスが有効ではありません")
        .required("メールアドレスは必須入力です"),
    countryCode: yup.
                string()
                .oneOf(countryData.map(option => option.value), 'Invalid country code')
                .required("国コードは必須です"),
    phoneNumber: yup
        .string()
        .matches(
            /^\d{1,4}[-]?\d{1,4}[-]?\d{1,9}$/,
            "有効な電話番号を入力してください"

        )
        .required("電話番号は必須入力です。"),
});

export type signUpFormSchema = InferType<typeof yupSignUpForm>;
