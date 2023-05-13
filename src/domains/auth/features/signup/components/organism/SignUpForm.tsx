import {FC} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {countryData} from "../../../../data/countryData";
import {signUpFormSchema, yupSignUpForm} from "../../../../schema/signUpForm";
import {SignUpForm} from "../../../../types/signup";

const SignupForm: FC<SignUpForm> = ({onSignUpClick}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<signUpFormSchema>({
        defaultValues: {
            username: "",
            password: "",
            email:  "",
            countryCode: countryData[2].value,
            phoneNumber: ""
        },
        resolver: yupResolver(yupSignUpForm),
    });

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSignUpClick)}>
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="ユーザー名"
                {...register("username")}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p> }
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="password"
                autoComplete="off"
                placeholder="パスワード"
                {...register("password")}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p> }
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="email"
                placeholder="メールアドレス"
                {...register("email")}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p> }
            <select
                autoComplete="off"
                className="border border-gray-300 rounded-md p-2 w-1/4"
                {...register("countryCode")}
            >
                {countryData.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <input
                className="border border-gray-300 rounded-md p-2 w-3/4"
                type="tel"
                placeholder="電話番号"
                autoComplete="off"
                {...register("phoneNumber")}
                onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, '');
                }}
            />
            {errors.countryCode && <p className="text-red-500">{errors.countryCode.message}</p> }
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p> }
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                type="submit"
            >
                サインアップ
            </button>
        </form>
    );
};

export default SignupForm;
