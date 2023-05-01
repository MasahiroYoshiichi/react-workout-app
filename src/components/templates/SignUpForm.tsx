import type {FC} from "react";
import AwsSignUpForm from "../ecosystems/AwsSignUpFrom";
import Header from "../molecules/Header";


const SignUpForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsSignUpForm></AwsSignUpForm>
        </div>
    )
};

export default SignUpForm;
