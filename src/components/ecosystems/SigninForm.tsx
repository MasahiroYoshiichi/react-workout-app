import {FC, SyntheticEvent} from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from 'react-hook-form';
import {regFormSchema} from "../../scamas/signinForm";

const SigninForm: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {
        register,
        handleSubmit,
        reset,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    } = useForm<regFormSchema>({
        defaultValues: {
            username: '',
            email: '',
            age: undefined,
            bodyWeight: undefined,
            bodyFat: undefined
        },
        resolver: yupResolver(regFormSchema),
    });
    const onSubmit: SubmitHandler<regFormSchema> = (data) => console.log(data);
    const onReset = (e: SyntheticEvent) => {
        e.stopPropagation();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        reset();
    }

    return (
        <>
            <div className="flex">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment */}
                <form onSubmit={handleSubmit(onSubmit)} action="/hoge">
                    <div>
                        <div>
                            ユーザー名
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('username')}/>
                    </div>
                    <div>
                        <div>
                            メールアドレス
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('email')}/>
                    </div>
                    <div>
                        <div>
                            年齢
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('age')}/>
                    </div>
                    <div>
                        <div>
                            性別
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('gender')}/>
                    </div>
                    <div>
                        <div>
                            体重
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('bodyWeight')}/>
                    </div>
                    <div>
                        <div>
                            体脂肪率
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                        <input {...register('bodyFat')}/>
                    </div>
                    <button onClick={onReset}>
                        リセット
                    </button>
                    <button type="submit">
                        新規登録
                    </button>
                </form>
            </div>

        </>


    )
}

export default SigninForm;