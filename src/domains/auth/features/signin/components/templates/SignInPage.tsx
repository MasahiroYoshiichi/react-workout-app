import { FC } from "react";
import Header from "../../../../../../common/features/components/organism/Header";
import HandleSignIn from "../ecosystem/HandleSignIn";

const SignInPage: FC = () => {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <Header />
            <div className="flex justify-center items-center h-3/4">
                <HandleSignIn />
            </div>
        </div>
    );
};

export default SignInPage;
