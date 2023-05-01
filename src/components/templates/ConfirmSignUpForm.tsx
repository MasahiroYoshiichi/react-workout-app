import type {FC} from "react";
import AwsConfirmSignUpForm from "../ecosystems/AwsConfirmSignUpForm";
import Header from "../molecules/Header";

const ConfirmSignUpForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsConfirmSignUpForm></AwsConfirmSignUpForm>
        </div>
    )
};

export default ConfirmSignUpForm;
