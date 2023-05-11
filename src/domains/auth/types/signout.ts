export type SignOutInfo = {
    accessToken: string;
}
export type SignOutForm = {
    accessToken: string;
    onAccessTokenChange: (value: string) => void;
    onSignOutClick: () => void;
}

