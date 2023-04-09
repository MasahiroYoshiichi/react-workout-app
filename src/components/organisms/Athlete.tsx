import {FC} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {CourseType} from "../../domains";

type Props = {
    course: CourseType;
    detailFlag?: string;
}

const Athlete: FC<Props> = ({course, detailFlag}) => (
    <>
        <Helmet>
            <title>コース紹介｜アスリートコース</title>
        </Helmet>
        <div className="flex " key={course.courseId}>
            <div className="w-2/4">
                <div className="p-5 text-5xl bg-white text-black">
                    {course.title}
                </div>
                <div className="text-3xl">
                    {course.text}
                </div>
                {detailFlag === 'athlete' ?
                    <div className="text-3xl">
                        詳細表示にするかも〜
                    </div>
                    :
                    <Link className="w-10 bg-white text-black hover:text-red-500 font-bold rounded-full py-2 px-4"
                          to={"/course/athlete"}>
                        コース詳細（仮）
                    </Link>
                }

            </div>
            <div className="w-2/4 bg-cover bg-center" style={{backgroundImage: course.image}}>
            </div>

        </div>
    </>
)

export default Athlete;