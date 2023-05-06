import { FC, useState } from "react";
import { handleSignIn } from "../../../../api/auth";
import { SignInInfo } from "../../../../types";
import SignInform from "../organism/SignInform";

const HandleSignIn: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authInfo: SignInInfo = {
        email,
        password,
    };

    const signIn = async () => {
        try {
            await handleSignIn(authInfo);
            alert("サインインに成功しました。");
        } catch (error) {
            alert("サインインに失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <SignInform
                email={email}
                password={password}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
                onSingInClick={signIn}
            />
        </div>
    );
};

export default HandleSignIn;