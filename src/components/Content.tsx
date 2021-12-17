import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

export function Content(props: MovieProps, title: any) {
    // const { seletedGenre } = props
    const { movies } = props
    const { xx } = title
    console.log(xx)
    return (
        <>
            <div className="container">
                <header>
                    <span className="category">Categoria: <span>{'seletedGenre.title'}</span></span>
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