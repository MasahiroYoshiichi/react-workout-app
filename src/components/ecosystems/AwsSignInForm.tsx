import type {FC} from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useProvideAuth} from "../../hooks/useAuth";
const AwsSignInForm: FC = () => {

    const auth = useProvideAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await auth.signIn(username, password);
        if (result.success) {
            navigate({pathname: '/course'});
        } else {
            alert(result.message);
        }
    };

    return (
        <>
            <div className="flex justify-center min-h-screen">
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3"
                >
                    <div className="mb-4 pt-10">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            メールアドレス:
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            パスワード:
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        ログイン
                    </button>
                </form>
            </div>
        </>
    )
}

export default AwsSignInForm;