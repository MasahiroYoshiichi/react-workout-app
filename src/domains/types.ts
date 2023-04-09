import {COURSE_CODE} from './constants';

export interface CourseType {
    courseId: typeof COURSE_CODE[number];
    title: string;
    text: string;
    image: string;
}