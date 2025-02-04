import { StartIcon } from "../icons/icons";

interface Props {
    name: string;
    price: number;
    punctuation: number;
    imageUrl: string;
}

export default function Product({ name, price, punctuation, imageUrl }: Props) {
    return (
        <article className="aspect-square">
            <img src={imageUrl} className=" rounded-lg mb-3 size-full" />
            <h3 className="text-[17px] font-medium text-black/80">{name}</h3>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-black/80">C$ <span className="text-black">{price}</span></span>

                <div className="flex items-center space-x-2">
                    <StartIcon />
                    <span className="font-medium text-yellow-400 text-base">{punctuation}</span>
                </div>
            </div>
        </article>
    )
}
