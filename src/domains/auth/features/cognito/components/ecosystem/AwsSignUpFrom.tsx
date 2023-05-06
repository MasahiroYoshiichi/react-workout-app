import type {FC} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import parsePhoneNumberFromString from "libphonenumber-js";
import {countryData} from "domains/auth/data";
import {countryType} from "domains/auth/types";
import { useProvideAuth } from '../../hooks/useAuth';

const AwsSignUpForm: FC = () => {
    const auth = useProvideAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [selectedCountryCode, setSelectedCountryCode] = useState<countryType>(countryData[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const countryCode = countryData.find(option => option.value === event.target.value);
        if (countryCode) {
            setSelectedCountryCode(countryCode);
        }
    };
    const setPhoneNumberFromString = (value: string) => {
        const digits = value.replace(/\D/g, '');
        setPhoneNumber(digits);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fullPhoneNumber = `${selectedCountryCode.value}${phoneNumber}`;
        const parsedPhoneNumber = parsePhoneNumberFromString(fullPhoneNumber);

        if (parsedPhoneNumber) {
            const formattedPhoneNumber = parsedPhoneNumber.format('E.164');
            console.log(formattedPhoneNumber)
            const result = await auth.signUp(username, email, password, formattedPhoneNumber);
            if (result.success) {
                navigate({ pathname: '/verification'});
            } else {
                alert(result.message);
            }
        } else {
            alert('電話番号が正しくありません、')
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
                            ユーザーネーム:
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Eメール:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="phone-number"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            電話番号:
                        </label>
                        <div className="flex">
                            <select
                                value={selectedCountryCode.value}
                                onChange={handleChange}
                                className="w-1/3"
                                autoComplete="off"
                            >
                                {countryData.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                id="phone-number"
                                type="text"
                                autoComplete="off"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumberFromString(e.target.value)}
                                className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ml-2"
                            />
                        </div>
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
                        新規登録
                    </button>
                </form>
            </div>
        </>
    );
};

export default AwsSignUpForm;