import { FC, useState } from "react";
import {useNavigate} from "react-router-dom";
import { handleConfirmSignUp } from "domains/auth/api/auth";
import { ConfirmSignUpInfo } from "domains/auth/types/confirm";
import ConfirmForm from "../organism/ConfirmForm";

const HandleConfirmSignUp: FC = () => {
    const [confirmationCode, setConfirmationCode] = useState("");
    const navigate = useNavigate()
    const authInfo: ConfirmSignUpInfo = {
        confirmationCode,
    };

    const confirmSignUp = async () => {
        try {
            await handleConfirmSignUp(authInfo);
            alert("確認コードの検証に成功しました。");
            navigate({pathname: "/signin"})

        } catch (error) {
            alert("確認コードの検証に失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <ConfirmForm
                confirmationCode={confirmationCode}
                onConfirmationCodeChange={setConfirmationCode}
                onConfirmClick={confirmSignUp}
            />
        </div>
    );
};

export default HandleConfirmSignUp;
