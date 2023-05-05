import type {FC} from "react";
import Header from "components/molecules/Header";
import AwsSignInForm from "../ecosystem/AwsSignInForm";


const SignInForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsSignInForm></AwsSignInForm>
        </div>
    )
};

export default SignInForm;
