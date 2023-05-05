import type {FC, PropsWithChildren} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {SWRConfig} from "swr";
import {ProvideAuth} from "domains/auth_front/features/cognito/hooks/useAuth";

const swrOptions = {
    suspense: true,
    revalidateOnFocus: false,
    dedupingInterval: 60000,
    shouldRetryOnError: false,
};
const Index: FC<PropsWithChildren> = ({children}) => (
    <HelmetProvider>
        <ProvideAuth>
            <Router>
                <SWRConfig value={swrOptions}>{children}</SWRConfig>
            </Router>
        </ProvideAuth>
    </HelmetProvider>
);

export default Index;
