import { FC } from "react";
import { ConfirmSignUpForm } from "../../../../types";

const ConfirmForm: FC<ConfirmSignUpForm> = (ConfirmSignUpForm) => {
    return (
        <div className="flex flex-col items-center">
            <input
                className="border border-gray-300 rounded-md p-2 mb-4"
                type="text"
                placeholder="ユーザー名"
                value={ConfirmSignUpForm.username}
                onChange={(e) => ConfirmSignUpForm.onUsernameChange(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-md p-2 mb-4"
                type="text"
                placeholder="確認コード"
                value={ConfirmSignUpForm.confirmationCode}
                onChange={(e) => ConfirmSignUpForm.onConfirmationCodeChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={ConfirmSignUpForm.onConfirmClick}
            >
                確認コードを送信
            </button>
        </div>
    );
};

export default ConfirmForm;
