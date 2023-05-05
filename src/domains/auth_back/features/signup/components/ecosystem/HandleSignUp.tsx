import {FC, useState} from "react";
import { handleSignUp } from 'domains/auth_back/api/auth';
import { SignUpInfo } from "domains/auth_back/types";
import SignupForm from "../organism/SignUpForm";

const HandleSignupForm: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const authInfo: SignUpInfo = {
        username,
        password,
        email,
        phoneNumber,
    };

    const signUp = async () => {
        try {
            await handleSignUp(authInfo);
            alert("サインアップに成功しました。")
        } catch (error) {
            alert("サインアップに失敗しました。")
            console.log(error)
        }
    }

    return (
        <SignupForm
            username={username}
            password={password}
            email={email}
            phoneNumber={phoneNumber}
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
            onEmailChange={setEmail}
            onPhoneNumberChange={setPhoneNumber}
            onSignUpClick={signUp}
        />
    );
};

export default HandleSignupForm;
