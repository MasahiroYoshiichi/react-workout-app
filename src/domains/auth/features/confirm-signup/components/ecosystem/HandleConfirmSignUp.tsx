import { FC, useState } from "react";
import { handleConfirmSignUp } from "domains/auth/api/auth";
import { ConfirmSignUpInfo } from "domains/auth/types";
import ConfirmForm from "../organism/ConfirmForm";

const HandleConfirmSignUp: FC = () => {
    const [username, setUsername] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");

    const authInfo: ConfirmSignUpInfo = {
        username,
        confirmationCode,
    };

    const confirmSignUp = async () => {
        try {
            await handleConfirmSignUp(authInfo);
            alert("確認コードの検証に成功しました。");
        } catch (error) {
            alert("確認コードの検証に失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <ConfirmForm
                username={username}
                confirmationCode={confirmationCode}
                onUsernameChange={setUsername}
                onConfirmationCodeChange={setConfirmationCode}
                onConfirmClick={confirmSignUp}
            />
        </div>
    );
};

export default HandleConfirmSignUp;
