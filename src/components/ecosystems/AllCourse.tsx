import {FC} from "react";
import {courseDate} from 'date';
import {Helmet} from "react-helmet-async";
import Athlete from "../organisms/Athlete";
import Exercise from "../organisms/Exercise";
import Fitness from "../organisms/Fitness";


const AllCourse: FC = () => {
    const athlete = courseDate[0];
    const exercise = courseDate[1];
    const fitness = courseDate[2];


    return (
        <>
            <Helmet>
                <title>コース紹介</title>
            </Helmet>
            <Athlete course={athlete}></Athlete>
            <Exercise course={exercise}></Exercise>
            <Fitness course={fitness}></Fitness>
        </>

    )
}

export default AllCourse;