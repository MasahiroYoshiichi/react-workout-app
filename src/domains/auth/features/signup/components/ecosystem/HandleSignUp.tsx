import { FC } from "react";
import {useNavigate} from "react-router-dom";
import parsePhoneNumberFromString from "libphonenumber-js";
import { handleSignUp } from "domains/auth/api/auth";
import {SignUpInfo} from "domains/auth/types/signup";
import {signUpFormSchema} from "../../../../schema/signUpForm";
import SignupForm from "../organism/SignUpForm";

const HandleSignUp: FC = () => {
    const navigate = useNavigate();

    const signUp = async (data: signUpFormSchema) => {
        const fullPhoneNumber = `${data.countryCode}${data.phoneNumber}`;
        const parsedPhoneNumber = parsePhoneNumberFromString(fullPhoneNumber);
        if (parsedPhoneNumber) {
            const phoneNumber = parsedPhoneNumber.format('E.164');
            const authInfo: SignUpInfo = {
                username: data.username,
                password: data.password,
                email: data.email,
                phoneNumber,
            };
            try {
                await handleSignUp(authInfo);
                alert("サインアップに成功しました。");
                sessionStorage.setItem("allow", "true")
                navigate({pathname: "/confirm"})
            } catch (error) {
                alert("サインアップに失敗しました。");
                console.log(error);
            }
        } else {
            alert("電話番号が正しくありません。")
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <SignupForm
                onSignUpClick={signUp}
            />
        </div>
    );
};

export default HandleSignUp;