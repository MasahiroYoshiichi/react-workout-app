import type {FC} from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useProvideAuth} from "../../hooks/useAuth";
const AwsSignUpForm: FC = () => {

    const auth = useProvideAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const executeSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await auth.signIn(username, password);
        if (result.success) {
            navigate({pathname: '/confirm'});
        } else {
            alert(result.message);
        }
    };

    return (
        <>
            <div className="flex">
                <form noValidate onSubmit={executeSignUp}>
                    <div>
                        <label htmlFor="username">メールアドレス: </label>
                        <input
                            id="username"
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">パスワード: </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">新規登録</button>
                </form>
            </div>
        </>
    )
}

export default AwsSignUpForm;