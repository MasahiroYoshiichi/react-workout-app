import type {InferType} from 'yup';
import * as yup from 'yup';
import {genderCode} from 'domains/constants';

export const regForm = yup.object({
    username: yup.string().required('必須入力です'),
    email: yup.string().required('必須入力です'),
    age: yup.number().required('必須入力です'),
    gender: yup.mixed().oneOf(Object.keys(genderCode)),
    bodyWeight: yup.number().required('必須n油力です'),
    bodyFat: yup.number(),
})

export type regFormSchema = InferType<typeof regForm>