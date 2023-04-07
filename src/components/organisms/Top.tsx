import type {FC} from 'react';
import Navigation from "../molecules/Navigation";

const Top: FC = () => {
    return (
        <>
            <div className="w-screen h-screen">
                <Navigation></Navigation>
                <div className="flex h-full w-full items-center  bg-cover"
                     style={{backgroundImage: `url(/images/EXTop.png)`}}>
                    <div className="flex-col ml-10 font-sans text-5xl">
                        最高のワークアウトを全ての人へ
                        <button
                            className="flex mt-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Challenge Workout
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Top;