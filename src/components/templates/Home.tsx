import type {FC} from "react";
import {Helmet} from "react-helmet-async";
import Header from "../molecules/Header";
import Top from "../organisms/Top";

const appTitle = import.meta.env.ExprosiveWoekout;

const Home: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Helmet>{appTitle}</Helmet>
            <Header></Header>
            <Top topTitle={"Exprosive Workout"} buttonTitle={"最高のワークアウトを全ての人へ"}
                 image={"url(images/EXTop.png)"}></Top>
        </div>
    )
};

export default Home;
