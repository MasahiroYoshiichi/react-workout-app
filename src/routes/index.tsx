import type {FC} from "react";
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "domains/top/features/components/templates/Home";
import ConfirmPage from "../domains/auth/features/confirm-signup/components/templates/ConfirmPage";
import MFASignInPage from "../domains/auth/features/mfa-signin/components/templates/MFASignInPage";
import SignInPage from "../domains/auth/features/signin/components/templates/SignInPage";
import HandleSignOut from "../domains/auth/features/signout/components/ecosystem/HandleSignOut";
import SignUpPage from "../domains/auth/features/signup/components/templates/SignUpPage";
import AllCourse from "../domains/course_selects/features/components/ecosystem/AllCourse";
import SelectCourse from "../domains/course_selects/features/components/ecosystem/SelectCourse";
import Course from "../domains/course_selects/features/components/templates/Course";



const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [hash, pathname]);



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
    );
};

export default IndexRoutes;
