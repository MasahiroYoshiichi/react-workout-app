import type {FC} from 'react';
import {Link} from "react-router-dom";

type Prpps = {
    navTitle: string[];
}
const Navber: FC<Prpps> = ({navTitle}) => {

    return (
        <>
            <div className="flex flex-row w-3/4 text-2xl pt-7 mr-10 justify-end">
                {navTitle.map((title, index) => {
                    return <div className="px-4 text-white-500" key={index}>
                        <Link className="text-white hover:text-black" to={{pathname: '/course',}}>
                            {title}
                        </Link></div>
                })}

            </div>
        </>

    )
}

export default Navber