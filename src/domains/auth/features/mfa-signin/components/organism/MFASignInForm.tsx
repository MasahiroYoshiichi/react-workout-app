import { FC } from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {MFASignInSchema, yupMFASignInForm} from "../../../../schema/mfaSignInform";
import {MFAForm} from "../../../../types/mfa";

const MFASignInForm: FC<MFAForm> = ({onMFASignInClick}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<MFASignInSchema>({
        defaultValues: {
            MFACode: ""
        },
        resolver: yupResolver(yupMFASignInForm)
    })

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onMFASignInClick)}>
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="確認コード"
                {...register("MFACode")}
                onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, '')}
                }
            />
            {errors.MFACode && <p className="text-red-500">{errors.MFACode.message}</p> }
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                type="submit"
            >
                確認コードを送信
            </button>
        </form>
    );
};

export default MFASignInForm;
