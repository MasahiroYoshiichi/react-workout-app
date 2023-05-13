import { FC } from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {confirmSignUpSchema, yupConfirmSignUpForm} from "../../../../schema/confirmSignUpForm";
import { ConfirmSignUpForm } from "../../../../types/confirm";

const ConfirmForm: FC<ConfirmSignUpForm> = ({onConfirmClick}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<confirmSignUpSchema>({
        defaultValues: {
            confirmationCode: "",
        },
        resolver: yupResolver(yupConfirmSignUpForm)
        }
    )

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onConfirmClick)}>
            <input
                className="border border-gray-300 rounded-md p-2 w-full"
                type="text"
                placeholder="確認コード"
                {...register("confirmationCode")}
                onChange={(e) =>{
                    e.target.value = e.target.value.replace(/\D/g, '')}
                }
            />
            {errors.confirmationCode && <p className="text-red-500">{errors.confirmationCode.message}</p> }
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                type="submit"
            >
                確認コードを送信
            </button>
        </form>
    );
};

export default ConfirmForm;
