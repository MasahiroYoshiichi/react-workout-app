import type {FC} from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useProvideAuth} from "../../hooks/useAuth";

const AwsConfirmSignUpForm: FC = () => {
    const auth = useProvideAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const executeConfirmSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await auth.confirmSignUp(username);
        if (result.success) {
            navigate({pathname: '/signup'});
        } else {
            alert(result.message);
        }
    };

    return (
        <>
            <div className="flex">
                <form noValidate onSubmit={executeConfirmSignUp}>
                    <div>
                        <label htmlFor="username">メールアドレス: </label>
                        <input
                            id="username"
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <button type="submit">登録</button>
                </form>
            </div>
        </>
    )
}

export default AwsConfirmSignUpForm;