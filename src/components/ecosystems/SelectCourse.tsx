import {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import {courseDate} from 'date';
import {COURSE_CODE} from 'domains';
import Athlete from "../organisms/Athlete";
import Exercise from "../organisms/Exercise";
import Fitness from "../organisms/Fitness";


const SelectCourse: FC = () => {
    const {courseID = ''} = useParams();

    if (COURSE_CODE.includes(courseID as never)) {
        const course = courseDate.filter((course) => course.courseId === courseID);
        const selectCourse = course[0];

        return (
            <>
                {courseID === 'athlete' ? <Athlete course={selectCourse} detailFlag={courseID}></Athlete> : undefined}
                {courseID === 'exercise' ? <Exercise course={selectCourse}></Exercise> : undefined}
                {courseID === 'fitness' ? <Fitness course={selectCourse}></Fitness> : undefined}
            </>
        );
    }

    return <Navigate to="/" replace/>
};


export default SelectCourse;