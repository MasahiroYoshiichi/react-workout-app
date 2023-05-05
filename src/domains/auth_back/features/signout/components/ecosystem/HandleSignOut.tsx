import {FC, useState} from "react";
import { handleSignOut } from 'domains/auth_back/api/auth';
import { SignOutInfo } from "domains/auth_back/types";
import SignOutForm from "../organism/SignOutForm";





const HandleSignOut: FC = () => {
    const [accessToken, setAccessToken] = useState("")

    const authInfo: SignOutInfo = {
        accessToken
    }
    const signOut = async () => {
        try {
            await handleSignOut(authInfo);
            alert("サインアウトに成功しました。");
        } catch (error) {
            alert("サインアウトに失敗しました。");
            console.log(error);
        }
    };

    return <SignOutForm
            accessToken={accessToken}
            onAccessTokenChange={setAccessToken}
            onSignOutClick={signOut} />;
};

export default HandleSignOut;
