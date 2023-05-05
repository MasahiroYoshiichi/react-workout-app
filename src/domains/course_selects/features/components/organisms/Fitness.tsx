import {FC} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {CourseType} from "domains/course_selects/types";

type Props = {
    course: CourseType;
    detailFlag?: string;
}

const Fitness: FC<Props> = ({course,detailFlag}) => {
    const splitString = course.text.split(" ");

    return (
        <>
            <Helmet>
                <title>コース紹介｜フィットネスコース</title>
            </Helmet>
            <div className="flex-row" key={course.courseId}>
                <div className="py-2 bg-zinc-800 text-3xl tracking-wide text-center">
                    {course.title}
                </div>
            </div>
            <div className={detailFlag === 'fitness' ? 'flex h-full' : 'flex h-2/3'}>
                <div className="w-2/4 pt-8 bg-gray-200">
                    <div className="text-black pt-5">
                        {splitString.map((text, index) => (
                            <p className="text-xl tracking-wide font-bold text-center mt-2.5" key={index}>{text}</p>
                        ))}
                    </div>
                    {detailFlag === 'fitness' ?
                        <div className="text-3xl">
                            詳細表示にするかも〜
                        </div>
                        :
                        <div className="py-10 text-center">
                            <Link
                                className="bg-white text-2xl text-black hover:text-red-500 font-bold rounded-full py-4 px-8"
                                to={"/course/fitness"}>
                                コース詳細
                            </Link>
                        </div>

                    }
                </div>
                <div className="w-2/4 bg-cover bg-center" style={{backgroundImage:`url(${course.image})`}}>
                </div>
            </div>
        </>
    )
}
export default Fitness;