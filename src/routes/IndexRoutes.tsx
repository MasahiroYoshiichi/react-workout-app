import type {FC} from "react";
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ConfirmPage from "../domains/auth/features/confirm-signup/components/templates/ConfirmPage";
import MFASignInPage from "../domains/auth/features/mfa-signin/components/templates/MFASignInPage";
import SignInPage from "../domains/auth/features/signin/components/templates/SignInPage";
import HandleSignOut from "../domains/auth/features/signout/components/ecosystem/HandleSignOut";
import SignUpPage from "../domains/auth/features/signup/components/templates/SignUpPage";
import AllCourse from "../domains/course_selects/features/components/ecosystem/AllCourse";
import SelectCourse from "../domains/course_selects/features/components/ecosystem/SelectCourse";
import Course from "../domains/course_selects/features/components/templates/Course";
import Home from "../domains/top/features/components/templates/Home";
import CourseSelectPage from "../domains/workout/features/course-training/components/template/CourseSelectPage";



const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        if((pathname === "/mfa" || pathname === "/confirm") && (sessionStorage.getItem("allow") == null)) {
            navigate({pathname: "/"});
        } else {
            sessionStorage.removeItem("allow")
        }
    }, [navigate, hash, pathname]);

    const accessToken = localStorage.getItem("accessToken")
    if (accessToken != null) {
        return (
            <Routes>
                <Route path="/" element={<CourseSelectPage/>} />
            </Routes>

        )
    } else {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="course" element={<Course/>}>
                    <Route path="" element={<AllCourse/>}/>
                    <Route path=":courseID" element={<SelectCourse/>}/>
                </Route>
                <Route path="signin" element={<SignInPage/>}/>
                <Route path="mfa" element={<MFASignInPage/>}/>
                <Route path="signup" element={<SignUpPage/>}/>
                <Route path="confirm" element={<ConfirmPage/>}/>
                <Route path="signout" element={<HandleSignOut/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        )
    }
};

export default IndexRoutes;
