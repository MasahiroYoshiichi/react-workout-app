import type {FC} from "react";
import SigninForm from "../ecosystems/SigninForm";
import Header from "../molecules/Header";


const Signin: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <SigninForm></SigninForm>
        </div>
    )
};

export default Signin;
