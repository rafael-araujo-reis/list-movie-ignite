import { GenreResponseProps, MovieProps } from "./SideBar";
import { MovieCard } from "./MovieCard";

export function Content(props: MovieProps, seletedGenre: GenreResponseProps) {
    const { movies } = props
    console.log('param recebido: ', seletedGenre)
    return (
        <>
            <div className="container">
                <header>
                    <span className="category">Categoria: <span>{seletedGenre?.title}</span></span>
                </header>
                <main>
                    <div className="movies-list">
                        {movies.map(movie => (
                            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}