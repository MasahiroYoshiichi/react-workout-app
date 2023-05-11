export type MFAInfo = {
    email: string,
    session: string,
    MFACode: string
}

export type MFAForm = {
    MFACode: string,
    onMFACodeChange: (value: string) => void;
    onMFASignInClick: () => void;
}

export type MFAResponse = {
    accessToken: string
}