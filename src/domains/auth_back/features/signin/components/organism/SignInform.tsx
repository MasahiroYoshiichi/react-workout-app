import { FC } from "react";
import { SignInForm } from "../../../../types";

const SignInform: FC<SignInForm> = (SignInForm) => {
    return (
        <div className="flex flex-col items-center">
            <input
                className="border border-gray-300 rounded-md p-2 mb-4"
                type="email"
                placeholder="Eメール"
                value={SignInForm.email}
                onChange={(e) => SignInForm.onEmailChange(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-md p-2 mb-4"
                type="password"
                placeholder="パスワード"
                value={SignInForm.password}
                onChange={(e) => SignInForm.onPasswordChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={SignInForm.onSingInClick}
            >
                サインイン
            </button>
        </div>
    );
};

export default SignInform;
