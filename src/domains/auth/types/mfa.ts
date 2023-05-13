import {MFASignInSchema} from "../schema/mfaSignInform";

export type MFAInfo = {
    MFACode: string
}

export type MFAForm = {
    onMFASignInClick: (value: MFASignInSchema) => void;
}

export type MFAResponse = {
    accessToken: string
}