import type {FC} from "react";
import Header from "../molecules/Header";
import Top from "../organisms/Top";

const Home: FC = () => {
    return (
        <div className="w-screen h-screen">
            <Header></Header>
            <Top topTitle={"最高のワークアウトを全ての人へ"} buttonTitle={"Challenge Workout"}
                 image={"url(/images/EXTop.png)"}></Top>
        </div>
    )
};

export default Home;
