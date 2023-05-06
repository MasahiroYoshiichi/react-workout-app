import {COURSE_CODE} from 'domains/course_selects/constants';

export type CourseType = {
    courseId: typeof COURSE_CODE[number];
    title: string;
    text: string;
    image: string;
}

