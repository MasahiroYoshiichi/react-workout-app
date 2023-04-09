import {FC} from 'react';
import {Helmet} from "react-helmet-async";
import {CourseType} from "../../domains";

type Props = {
    course: CourseType;
}

const Fitness: FC<Props> = ({course}) => (
    <>
        <Helmet>
            <title>コース紹介｜フィットネスコース</title>
        </Helmet>
        <div className="flex" key={course.courseId}>
            <div className="w-2/4">
                <div className="p-5 text-5xl bg-white text-black">
                    {course.title}
                </div>
                <div className="text-3xl">
                    {course.text}
                </div>
            </div>
            <div className="w-2/4 bg-cover bg-center" style={{backgroundImage: course.image}}>
            </div>

        </div>
    </>
)

export default Fitness;