import { FC } from "react";
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
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
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
