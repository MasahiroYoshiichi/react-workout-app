import type {FC} from 'react';

type Prpps = {
    navTitle: string[];
}
const Navber: FC<Prpps> = ({navTitle}) => {
    return (
        <>
            <div className="flex flex-row w-3/4 text-2xl pt-7 mr-10 justify-end">
                {navTitle.map((title, index) => {
                    return <div className="px-4 text-white-500" key={index}>{title}</div>
                })}
            </div>
        </>

    )
}

export default Navber