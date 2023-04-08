import type {FC} from "react";
import Index from "./providers";
import IndexRoutes from "./routes";

const App: FC = () => (
    <Index>
        <IndexRoutes/>
    </Index>
);

export default App;
