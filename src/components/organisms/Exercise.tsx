import {FC} from 'react';

type Prpps = {
    title: string;
    text: string;
    image: string;
}

const Exercise: FC<Prpps> = ({text, image}) => {
    return (
        <div className="flex-row">
            <div className="flex">
                {text}
            </div>
            <div className="flex">
                {image}
            </div>
        </div>
    )

}

export default Exercise;