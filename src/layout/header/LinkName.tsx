import { PagesProps } from "../../types/types";

interface Props extends PagesProps {
    active?: boolean;
}

export default function LinkName({ name, path, active }: Props) {
    return (
        <li>
            <a
                href={path}
                className={`block py-2 px-3 font-semibold  ${active ? "text-electric-violet-600" : "text-black"} rounded bg-transparent md:p-0`}
                aria-current="page"
            >
                {name}
            </a>
        </li>
    )
}
