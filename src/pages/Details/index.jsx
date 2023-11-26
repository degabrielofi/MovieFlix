import React, { useEffect, useState } from "react";
import { Background, TitleActors } from "./style";
import MovieInfo from "components/MovieInfo";
import MovieDetails from "components/MovieDetails";
import Header from "components/Header";
import Credits from "components/Credits";
import { ApiKey } from "config/key";
import { useParams } from "react-router-dom";
import { ApiBackground } from "config/back";
import PreLoad from "components/PreLoad";

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR&page=1`
        )
            .then((response) => response.json())
            .then((data) => {
                const { runtime, budget, revenue, backdrop_path } = data;
                setRemoveLoading(true);

                const movie = {
                    runtime,
                    budget,
                    revenue,
                    background: `${ApiBackground}${backdrop_path}`,
                };

                setMovie(movie);
            });
        console.log(removeLoading);
    }, []);

    return (
        <>
            <Background style={{ backgroundImage: `url(${movie.background})` }}>
                <Header style={{ display: "none" }} />
                <MovieDetails />
                <MovieInfo
                    time={movie.runtime}
                    budget={movie.budget}
                    revenue={movie.revenue}
                />
            </Background>

            <TitleActors>
                <h1>Atores:</h1>
            </TitleActors>

            <Credits style={{ backgroundColor: "#fff" }} />
        </>
    );
}

export default Details;
