import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {HandleMFA} from "../../../../api/auth";
import {MFASignInSchema} from "../../../../schema/mfaSignInform";
import {MFAInfo} from "../../../../types/mfa";
import MFASignInForm from "../organism/MFASignInForm";

const HandleMFASignIn: FC = () => {
    const navigate = useNavigate()




    const MFASignIn = async (data: MFASignInSchema) => {
        const authInfo: MFAInfo = {
            MFACode: data.MFACode
        };
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
            <MFASignInForm onMFASignInClick={MFASignIn}
            />
        </div>
    );
};

export default HandleMFASignIn;
