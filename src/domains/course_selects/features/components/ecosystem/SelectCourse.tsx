import {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import {COURSE_CODE} from '../../../constants';
import {courseData} from '../../../data/courseData';
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