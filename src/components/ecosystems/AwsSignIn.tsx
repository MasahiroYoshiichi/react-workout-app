import {createContext, FC, useContext} from "react";
import {UseAuth} from "../../domains";
import {useProvideAuth} from "../../hooks/useAuth";
import AwsSignInForm from "../organisms/AwsSignInForm";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const authContext = createContext({} as UseAuth);
export const useAuth = (): UseAuth => {
    return useContext(authContext);
};
const AwsSignIn: FC = () => {
    const auth = useProvideAuth();

    return(
        <>
            <authContext.Provider value={auth}>
                <AwsSignInForm></AwsSignInForm>
            </authContext.Provider>;
        </>
    )
};

export default AwsSignIn