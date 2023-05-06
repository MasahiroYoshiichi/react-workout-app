import { FC } from "react";
import { SignInForm } from "../../../../types";

const SignInform: FC<SignInForm> = (SignInForm) => {
    return (
        <div className="space-y-4">
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="email"
                placeholder="Eメール"
                value={SignInForm.email}
                onChange={(e) => SignInForm.onEmailChange(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="password"
                placeholder="パスワード"
                value={SignInForm.password}
                onChange={(e) => SignInForm.onPasswordChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                onClick={SignInForm.onSingInClick}
            >
                サインイン
            </button>
        </div>
    );
};

export default SignInform;
