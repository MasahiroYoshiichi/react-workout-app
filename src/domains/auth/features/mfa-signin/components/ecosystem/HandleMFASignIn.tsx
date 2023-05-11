import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HandleMFA} from "../../../../api/auth";
import {MFAInfo} from "../../../../types/mfa";
import MFASignInForm from "../organism/MFASignInForm";

const HandleMFASignIn: FC = () => {
    const [email] = useState(localStorage.getItem('email') ?? "")
    const [session] = useState(localStorage.getItem('session') ?? "")
    const [MFACode, setMFACode] = useState("")
    const navigate = useNavigate()

    const authInfo: MFAInfo = {
        email,
        session,
        MFACode
    };


    const MFASignIn = async () => {
        try {
            await HandleMFA(authInfo);
            alert("MFA認証に成功しました。");
            navigate({pathname: "/"})

        } catch (error) {
            alert("MFA認証に失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <MFASignInForm MFACode={MFACode} onMFACodeChange={setMFACode} onMFASignInClick={MFASignIn}
            />
        </div>
    );
};

export default HandleMFASignIn;
