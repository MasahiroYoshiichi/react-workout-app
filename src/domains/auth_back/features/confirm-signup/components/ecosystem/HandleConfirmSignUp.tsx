import { FC,useState } from "react";
import { handleConfirmSignUp } from 'domains/auth_back/api/auth';
import { ConfirmSignUpInfo } from "domains/auth_back/types";
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
        <ConfirmForm
            username={username}
            confirmationCode={confirmationCode}
            onUsernameChange={setUsername}
            onConfirmationCodeChange={setConfirmationCode}
            onConfirmClick={confirmSignUp}
        />
    );
};

export default HandleConfirmSignUp;
