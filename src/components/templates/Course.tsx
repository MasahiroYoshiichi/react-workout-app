import type {FC} from "react";
import {Helmet} from "react-helmet-async";
import {Ath, Exe, Fit} from "date/CourseText"
import Header from "../molecules/Header";
import Athlete from "../organisms/Athlete";
import Exercise from "../organisms/Exercise";
import Fitness from "../organisms/Fitness";

const appTitle = import.meta.env.ExprosiveWoekout;

const Home: FC = () => {

    return (
        <div className="w-screen h-screen">
            <Helmet>{appTitle}</Helmet>
            <Header></Header>
            <Athlete title={Ath.title} text={Ath.text} image={Ath.image}/>
            <Exercise title={Exe.title} text={Exe.text} image={Exe.image}/>
            <Fitness title={Fit.title} text={Fit.text} image={Fit.image}/>
        </div>
    )
};

export default Home;
