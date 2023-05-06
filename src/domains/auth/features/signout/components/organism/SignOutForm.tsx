import {FC} from "react";
import { SignOutForm } from "../../../../types";

const SignOutFormComponent: FC<SignOutForm> = (SignOutForm) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                value={SignOutForm.accessToken}
                onClick={SignOutForm.onSignOutClick}
            >
                サインアウト
            </button>
        </div>
    );
};

export default SignOutFormComponent;
