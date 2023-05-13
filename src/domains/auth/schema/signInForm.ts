import type { InferType } from "yup";
import * as yup from "yup";

export const yupSignInForm = yup.object({
    email: yup
        .string()
        .email("メールアドレスが有効ではありません")
        .required("メールアドレスは必須入力です"),
    password: yup
        .string()
        .min(8, "パスワードは8文字以上で入力してください")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            "パスワードは大文字・小文字・数字・特殊文字をそれぞれ1つ以上含む必要があります"
        )
        .required("パスワードは必須入力です"),
});

export type signinFormSchema = InferType<typeof yupSignInForm>;
