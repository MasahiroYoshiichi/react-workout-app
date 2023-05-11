import { FC } from "react";
import {MFAForm} from "../../../../types/mfa";

const MFASignInForm: FC<MFAForm> = (MFAForm) => {
    return (
        <div className="space-y-4">
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="確認コード"
                value={MFAForm.MFACode}
                onChange={(e) => MFAForm.onMFACodeChange(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                onClick={MFAForm.onMFASignInClick}
            >
                確認コードを送信
            </button>
        </div>
    );
};

export default MFASignInForm;
