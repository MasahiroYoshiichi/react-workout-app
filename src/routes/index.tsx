import type {FC} from "react";
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "components/templates/Home";
import AllCourse from "../components/ecosystems/AllCourse";
import SelectCourse from "../components/ecosystems/SelectCourse";
import Course from "../components/templates/Course";
import Signin from "../components/templates/Signin";


const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [hash, pathname]);

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="course" element={<Course/>}>
                <Route path="" element={<AllCourse/>}/>
                <Route path=":courseID" element={<SelectCourse/>}/>
            </Route>
            <Route path="signin" element={<Signin/>}></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>

    );
};

export default IndexRoutes;
