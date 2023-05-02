import type {FC} from "react";
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "components/templates/Home";
import AllCourse from "../components/ecosystems/AllCourse";
import SelectCourse from "../components/ecosystems/SelectCourse";
import Course from "../components/templates/Course";
import SignInForm from "../components/templates/SiginInForm";
import SignUpForm from "../components/templates/SignUpForm";
import VerificationForm from "../components/templates/VerificationForm";
import {useAuth} from "../hooks/useAuth";



const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();
    const { isAuthenticated } = useAuth();

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
            <Route path="signin" element={<SignInForm/>}></Route>
            <Route path="signup" element={<SignUpForm/>}></Route>
            <Route path="verification" element={<VerificationForm/>}></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
            {/* <Route path="event" element={<Event/>}></Route> */}
             <Route path="main" element={isAuthenticated ? <></> : <Navigate to="/signin"/>}></Route>
        </Routes>

    );
};

export default IndexRoutes;
