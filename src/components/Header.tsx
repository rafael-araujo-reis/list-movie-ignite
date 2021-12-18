import { GenreResponseProps } from "./SideBar";

export function Header(props: GenreResponseProps) {
    const { title } = props
    console.log('title: ', title !== '' ? title : 'vazio')
    return (
        <header>
            <span className="category">Categoria: <span>{title?.title}</span></span>
        </header>
    )
}