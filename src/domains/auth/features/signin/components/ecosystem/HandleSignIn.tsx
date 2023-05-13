import { FC} from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../../../../api/auth";
import {signinFormSchema} from "../../../../schema/signInForm";
import { SignInInfo } from "../../../../types/signin";
import SignInform from "../organism/SignInform";

const HandleSignIn: FC = () => {
    const navigate = useNavigate();

    const signIn = async (data: signinFormSchema) => {
        const authInfo: SignInInfo = {
            email: data.email,
            password: data.password,
        };
        try {
            await handleSignIn(authInfo);
            alert("サインインに成功しました。");
            sessionStorage.setItem("allow", "true")
            navigate({ pathname: "/mfa" });
        } catch (error) {
            alert("サインインに失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <SignInform onSignInClick={signIn} />
        </div>
    );
};

export default HandleSignIn;
