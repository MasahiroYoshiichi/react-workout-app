import type {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "components/templates/Home";
import Course from "../components/templates/Course";
import Event from "../components/templates/Event";
import Login from "../components/templates/Login";
import Signin from "../components/templates/Signin";


const IndexRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="course" element={<Course/>}></Route>
            <Route path="event" element={<Event/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="signin" element={<Signin/>}></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>

    );
};

export default IndexRoutes;
