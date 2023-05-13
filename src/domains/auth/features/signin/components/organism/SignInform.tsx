// 他のインポート文は省略
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { yupSignInForm, signinFormSchema } from "../../../../schema/signInForm";
import { SignInForm } from "../../../../types/signin";

const SignInform: FC<SignInForm> = ({ onSignInClick }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<signinFormSchema>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(yupSignInForm),
    });

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSignInClick)}>
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="email"
                placeholder="Eメール"
                {...register("email")}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="password"
                placeholder="パスワード"
                autoComplete="off"
                {...register("password")}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                type="submit"
            >
                サインイン
            </button>
        </form>
    );
};

export default SignInform;
