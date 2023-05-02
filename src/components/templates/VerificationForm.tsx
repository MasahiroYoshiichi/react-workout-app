import type {FC} from "react";
import AwsVerificationForm from "../ecosystems/AwsVerificationForm";
import Header from "../molecules/Header";

const VerificationForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsVerificationForm></AwsVerificationForm>
        </div>
    )
};

export default VerificationForm;
