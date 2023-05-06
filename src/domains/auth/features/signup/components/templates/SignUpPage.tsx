import { FC } from "react";
import Header from "../../../../../../common/features/components/organism/Header";
import HandleSignUp from "../ecosystem/HandleSignUp";

const SignUpPage: FC = () => {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <Header/>
            <div className="flex justify-center items-center h-3/4">
                <HandleSignUp/>
            </div>
        </div>
    );
};

export default SignUpPage