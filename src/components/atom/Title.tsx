import type {FC} from "react";
// import {Link} from 'react-router-dom'

type Props = {
    title: string;
}
const Title: FC<Props> = ({title}) => {
    return (
        <div className="flex w-1/4 justify-start font-sans text-5xl p-3.5 ">{title}</div>
    )

}

export default Title