import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

export function Content(props: MovieProps) {
    const { movies } = props;

    return (
        <div className="container">
            <Header title={'selectedGenre'} />
            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                    ))}
                </div>
            </main>
        </div>
    )
}