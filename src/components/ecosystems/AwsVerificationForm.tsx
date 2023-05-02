import type { FC } from "react";
import React, { useState } from "react";
import {useProvideAuth} from "../../hooks/useAuth";

const AwsVerificationForm: FC = () => {
    const auth = useProvideAuth();
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await auth.confirmSignUp(verificationCode);

        if (!result.success) {
            setError(result.message);
        }
    };

    const handleResendCode = async () => {
        const result = await auth.sendVerificationCode();
        console.log(auth.username)
        if (!result.success) {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center text-2xl font-semibold mb-4">Verify Account</h2>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">Verification Code</label>
                        <input
                            type="text"
                            id="verificationCode"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Verification Code"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Verify</button>
                </form>
                <button onClick={handleResendCode} className="text-blue-500 hover:text-blue-800 text-sm font-semibold mt-4 w-full">Resend Verification Code</button>
            </div>
        </div>
    );
};

export default AwsVerificationForm;
