import { FC, useState } from "react";
import parsePhoneNumberFromString from "libphonenumber-js";
import { handleSignUp } from "domains/auth/api/auth";
import {CountryInfo, SignUpInfo} from "domains/auth/types";
import {countryData} from "../../../../data/countryData";
import SignupForm from "../organism/SignUpForm";


const HandleSignUp: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState<CountryInfo>(countryData[0])

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const countryCode = countryData.find(label => label.value === event.target.value);
        if(countryCode) {
            setCountryCode(countryCode)
        }
    };

    const setPhoneNumberFromString = (value: string) => {
        const digits = value.replace(/\D/g, '');
        setPhoneNumber(digits)
    }



    const signUp = async () => {
        const fullPhoneNumber = `${countryCode.value}${phoneNumber}`;
        const parsedPhoneNumber = parsePhoneNumberFromString(fullPhoneNumber);
        if (parsedPhoneNumber) {
            const phoneNumber = parsedPhoneNumber.format('E.164');
            const authInfo: SignUpInfo = {
                username,
                password,
                email,
                phoneNumber,
            };
            try {
                await handleSignUp(authInfo);
                alert("サインアップに成功しました。");
            } catch (error) {
                alert("サインアップに失敗しました。");
                console.log(error);
            }
        } else {
            alert("電話番号が正しくありません。")
        }
    };

    return (
        <div className="bg-white w-1/4 p-10 rounded-xl shadow-md">
            <SignupForm
                username={username}
                password={password}
                email={email}
                phoneNumber={phoneNumber}
                countryCode={countryCode}
                onUsernameChange={setUsername}
                onPasswordChange={setPassword}
                onEmailChange={setEmail}
                onPhoneNumberChange={setPhoneNumberFromString}
                onCountryChange={selectChange}
                onSignUpClick={signUp}
            />
        </div>
    );
};

export default HandleSignUp;