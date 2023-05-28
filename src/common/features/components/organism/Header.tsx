import type { FC } from "react";
import { Link } from "react-router-dom";
import {nav} from "common/data/navbarData";
import {handleSignOut} from "../../../../domains/auth/api/auth";

const Headar: FC = () => {
    const signOut = async () => {
        try {
            await handleSignOut ();
            alert("サインアウトに成功しました。");
        } catch (error) {
            alert("サインアウトに失敗しました。");
            console.log(error);
        }
    };

    return (
        <nav className="flex w-full bg-red-500 sticky">
            <div className="flex w-full lg:w-1/4 justify-start font-sans text-5xl p-3.5 md:text-4xl sm:text-3xl">
                <Link className="text-white hover:text-black" to={{ pathname: "/" }}>
                    {import.meta.env.VITE_APP_TITLE}
                </Link>
            </div>
            <div className="hidden lg:flex flex-row w-3/4 text-2xl pt-5 mr-10 justify-end">
                {nav.map((item, index) => {
                    return (
                        <div className="px-4 text-white-500" key={index}>
                            <Link className="text-white hover:text-black" to={{ pathname: item.navLink }}>
                                {item.navTitle}
                            </Link>
                        </div>
                    );
                })}
                <button onClick={signOut}>
                    ログアウト
                </button>
            </div>
            <div className="flex lg:hidden w-full justify-end">
                <button className="text-white hover:text-black p-3">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    );
};

export default Headar;