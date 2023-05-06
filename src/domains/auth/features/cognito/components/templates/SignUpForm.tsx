import type {FC} from "react";
import Header from "components/molecules/Header";
import AwsSignUpForm from "../ecosystem/AwsSignUpFrom";


const SignUpForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsSignUpForm></AwsSignUpForm>
        </div>
    )
};

export default SignUpForm;
