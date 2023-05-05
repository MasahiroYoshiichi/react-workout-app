import type {FC} from "react";
import Header from "components/molecules/Header";
import AwsVerificationForm from "../ecosystem/AwsVerificationForm";

const VerificationForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsVerificationForm></AwsVerificationForm>
        </div>
    )
};

export default VerificationForm;
