import {FC} from "react";
import {Helmet} from "react-helmet-async";
import {courseData} from 'domains/auth_front/data';
import Athlete from "../organisms/Athlete";
import Exercise from "../organisms/Exercise";
import Fitness from "../organisms/Fitness";


const AllCourse: FC = () => {
    const athlete = courseData[0];
    const exercise = courseData[1];
    const fitness = courseData[2];


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