import { GenreResponseProps } from "../App";

export function Header(props: GenreResponseProps) {
    const globalAny: any = 'global';
    const { title } = props

    return (
        <header>
            <span className="category">Categoria: <span>{title?.title}</span></span>
        </header>
    )
}