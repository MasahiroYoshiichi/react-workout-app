import type {FC} from "react";
import Navber from "../atom/Navber";
import Title from "../atom/Title";

const Headar: FC = () => {
    return (
        <nav className="flex w-full h-20 bg-red-500 sticky top-0">
            <Title title={"Exprosive Workout"}></Title>
            <Navber navTitle={["コース紹介", "イベント", "ログイン", "新規登録"]}></Navber>
        </nav>
    )

}

export default Headar