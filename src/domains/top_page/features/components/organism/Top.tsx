import type { FC } from "react";
import { Link } from "react-router-dom";
import { topData } from "../../../data/topData";

const Top: FC = () => {


    return (
        <>
            <div
                className="flex h-screen w-screen items-center bg-cover"
                style={{ backgroundImage: `url(${topData.image})`} }
            >
                <div className="flex-col ml-10 font-sans text-5xl md:text-4xl sm:text-3xl">
                    {topData.title}
                    <Link
                        className="flex mt-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        to={"/course"}
                    >
                        {topData.buttonTitle}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Top;