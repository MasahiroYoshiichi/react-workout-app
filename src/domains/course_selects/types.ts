import {COURSE_CODE} from './constants';

export type CourseType = {
    courseId: typeof COURSE_CODE[number];
    title: string;
    text: string;
    image: string;
}

