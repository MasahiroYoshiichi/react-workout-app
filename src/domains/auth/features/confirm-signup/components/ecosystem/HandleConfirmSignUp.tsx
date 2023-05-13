import { FC } from "react";
import {useNavigate} from "react-router-dom";
import { handleConfirmSignUp } from "domains/auth/api/auth";
import { ConfirmSignUpInfo } from "domains/auth/types/confirm";
import {confirmSignUpSchema} from "../../../../schema/confirmSignUpForm";
import ConfirmForm from "../organism/ConfirmForm";

const HandleConfirmSignUp: FC = () => {
    const navigate = useNavigate()

    const confirmSignUp = async (data: confirmSignUpSchema) => {
        const authInfo: ConfirmSignUpInfo = {
            confirmationCode: data.confirmationCode
        };
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
                onConfirmClick={confirmSignUp}
            />
        </div>
    );
};

export default HandleConfirmSignUp;
