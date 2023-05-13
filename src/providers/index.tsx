import type {FC, PropsWithChildren} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {SWRConfig} from "swr";

const swrOptions = {
    suspense: true,
    revalidateOnFocus: false,
    dedupingInterval: 60000,
    shouldRetryOnError: false,
};

const Index: FC<PropsWithChildren> = ({children}) => (
    <HelmetProvider>
            <Router>
                <SWRConfig value={swrOptions}>{children}</SWRConfig>
            </Router>
    </HelmetProvider>
);

export default Index;
