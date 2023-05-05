import type {InferType} from 'yup';
import * as yup from 'yup';


export const regForm = yup.object({
    username: yup.string().required('必須入力です'),
    email: yup.string().required('必須入力です'),
    age: yup.number().required('必須入力です'),

    bodyWeight: yup.number().required('必須n油力です'),
    bodyFat: yup.number(),
})

export type regFormSchema = InferType<typeof regForm>