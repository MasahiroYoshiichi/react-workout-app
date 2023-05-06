import { FC } from "react";
import {countryData} from "../../../../data/countryData";
import { SignUpForm } from "../../../../types";

const SignupForm: FC<SignUpForm> = (SignUpForm) => {
    return (
        <div className="space-y-4">
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="ユーザー名"
                value={SignUpForm.username}
                onChange={(e) => SignUpForm.onUsernameChange(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="password"
                placeholder="パスワード"
                value={SignUpForm.password}
                onChange={(e) => SignUpForm.onPasswordChange(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="email"
                placeholder="メールアドレス"
                value={SignUpForm.email}
                onChange={(e) => SignUpForm.onEmailChange(e.target.value)}
            />
            <select
                value={SignUpForm.countryCode.value}
                onChange={(e) => SignUpForm.onCountryChange(e)}
                autoComplete="off"
                className="border border-gray-300 rounded-md p-2 w-1/4"
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
                value={SignUpForm.phoneNumber}
                onChange={(e) => SignUpForm.onPhoneNumberChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                onClick={SignUpForm.onSignUpClick}
            >
                サインアップ
            </button>
        </div>
    );
};

export default SignupForm;
