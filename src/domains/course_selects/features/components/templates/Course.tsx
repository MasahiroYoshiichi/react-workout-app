import type {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "../../../../../common/features/components/organism/Header";

const Course: FC = () => {

    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <Outlet/>
        </div>
    )
};

export default Course;
