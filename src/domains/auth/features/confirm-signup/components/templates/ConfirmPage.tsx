import { FC } from "react";
import Header from "../../../../../../common/features/components/organism/Header";
import HandleConfirmSignUp from "../ecosystem/HandleConfirmSignUp";

const ConfirmPage: FC = () => {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <Header />
            <div className="flex justify-center items-center h-3/4">
                <HandleConfirmSignUp />
            </div>
        </div>
    );
};

export default ConfirmPage;
