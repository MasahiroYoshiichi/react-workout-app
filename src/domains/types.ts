import {COURSE_CODE} from './constants';

export interface CourseType {
    courseId: typeof COURSE_CODE[number];
    title: string;
    text: string;
    image: string;
}

export interface EventDetail {
    title: string;
    text: string;
    date: Date;
}

export interface UseAuth  {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    signUp: (username: string, password: string) => Promise<Result>;
    confirmSignUp: (verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}
interface Result {
    success: boolean;
    message: string;
}