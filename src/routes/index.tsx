import type {FC} from "react";
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "domains/top_page/features/components/templates/Home";
import SignInForm from "../domains/auth_front/features/cognito/components/templates/SiginInForm";
import SignUpForm from "../domains/auth_front/features/cognito/components/templates/SignUpForm";
import VerificationForm from "../domains/auth_front/features/cognito/components/templates/VerificationForm";
import {useAuth} from "../domains/auth_front/features/cognito/hooks/useAuth";
import AllCourse from "../domains/course_selects/features/components/ecosystem/AllCourse";
import SelectCourse from "../domains/course_selects/features/components/ecosystem/SelectCourse";
import Course from "../domains/course_selects/features/components/templates/Course";



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
