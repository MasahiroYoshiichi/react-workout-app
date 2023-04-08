import type {FC} from 'react';

type Props = {
    topTitle: string;
    buttonTitle: string;
    image: string;

}

const Top: FC<Props> = ({topTitle, buttonTitle, image}) => {
    return (
        <>
            <div className="flex h-full w-full items-center bg-cover"
                 style={{backgroundImage: image}}>
                <div className="flex-col  ml-10 font-sans text-5xl">
                    {topTitle}
                    <button
                        className="flex mt-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </>

    )
}

export default Top;