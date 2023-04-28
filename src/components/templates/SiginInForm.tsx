import type {FC} from "react";
import Header from "../molecules/Header";
import AwsSignInForm from "../organisms/AwsSignInForm";


const SignInForm: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <AwsSignInForm></AwsSignInForm>
        </div>
    )
};

export default SignInForm;
