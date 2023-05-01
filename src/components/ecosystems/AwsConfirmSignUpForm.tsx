import type {FC} from "react";
import {useState} from "react"
import {useProvideAuth} from "../../hooks/useAuth";

const VerificationForm: FC = () => {
    const auth = useProvideAuth();
    const [username, setUsername] = useState('');
    const [verificationCode, setVerificationCode] = useState('')
    const handleResendCode = async () => {
        const result = await auth.sendVerificationCode(username);

        if (result.success) {
            console.log('検証コードが再送されました。');
            // 再送信後の処理をここに追加
        } else {
            console.error(`検証コードの再送信に失敗しました: ${result.message}`);
            // エラー処理をここに追加
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const result = await auth.confirmSignUp(verificationCode);

        if (result.success) {
            console.log('サインアップが確認されました。');
            // サインアップ確認後の処理をここに追加
        } else {
            console.error(`サインアップの確認に失敗しました: ${result.message}`);
            // エラー処理をここに追加
        }
    };

    return (
        <>
            <button onClick={handleResendCode}>検証コードを再送</button>
            <form onSubmit={handleSubmit}>
                <label>
                    ユーザー名:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    検証コード:
                    <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                </label>
                <button type="submit">サインアップを確認</button>
            </form>
        </>
    )
}

export default VerificationForm;