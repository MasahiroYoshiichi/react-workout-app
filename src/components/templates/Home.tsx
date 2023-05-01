import type {FC} from "react";
import {Helmet} from "react-helmet-async";
import Header from "../molecules/Header";
import Top from "../organisms/Top";

const Home: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Helmet>{import.meta.env.VITE_APP_TITLE}</Helmet>
            <Header></Header>
            <Top></Top>
        </div>
    )
};

export default Home;
