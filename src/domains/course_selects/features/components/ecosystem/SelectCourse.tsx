import {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import {courseData} from 'domains/auth/data';
import {COURSE_CODE} from 'domains/course_selects/constants';
import Athlete from "../organisms/Athlete";
import Exercise from "../organisms/Exercise";
import Fitness from "../organisms/Fitness";


const SelectCourse: FC = () => {
    const {courseID = ''} = useParams();

    if (COURSE_CODE.includes(courseID as never)) {
        const course = courseData.filter((course) => course.courseId === courseID);
        const selectCourse = course[0];

        return (
            <>
                {courseID === 'athlete' ? <Athlete course={selectCourse} detailFlag={courseID}></Athlete> : undefined}
                {courseID === 'exercise' ? <Exercise course={selectCourse} detailFlag={courseID}></Exercise> : undefined}
                {courseID === 'fitness' ? <Fitness course={selectCourse} detailFlag={courseID}></Fitness> : undefined}
            </>
        );
    }

    return <Navigate to="/" replace/>
};


export default SelectCourse;