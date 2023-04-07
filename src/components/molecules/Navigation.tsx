import type {FC} from "react";

const Navigation: FC = () => {
    return (
        <nav className="flex w-full h-20 bg-red-500 sticky top-0">
            <div className="flex w-1/4 justify-start font-sans text-5xl p-3.5 ">Exprosive Workout</div>
            <div className="flex flex-row w-3/4 text-2xl pt-7 mr-10 justify-end">
                <div className="px-4 text-white-500">
                    {/* <Course> */}
                    コース紹介
                    {/* </Course> */}
                </div>
                <div className="px-4 text-white-500">イベント</div>
                <div className="px-4 text-white-500">ログイン</div>
                <div className="px-4 text-white-500">新規登録</div>
            </div>
        </nav>
    )

}

export default Navigation