import React, { useEffect, useState } from "react";
import { Content, Infos, WebLinks } from "./style";
import ReleaseDate from "components/ReleaseData";
import { Link, useParams } from "react-router-dom";
import { ApiKey } from "config/key";
import { ApiBackground } from "config/back";
import { ApiImage } from "config/image";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [jobs, setJobs] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const SearchCredits = (path) => {
            fetch(path)
                .then((response) => response.json())
                .then((response) => {
                    setJobs([...credits, ...response.crew]);
                });
        };

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR&page=1`
        )
            .then((response) => response.json())
            .then((data) => {
                const {
                    title,
                    poster_path,
                    overview,
                    release_date,
                    homepage,
                    status,
                    credit_id,
                    name,
                    vote_average,
                } = data;

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${ApiImage}${poster_path}`,
                    releaseDate: release_date,
                    homepage: `${homepage}`,
                    status,
                    credit_id,
                    name,
                    average: `${vote_average.toFixed(1)}`,
                };

                setMovie(movie);
            });

        const ApiCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=pt-BR`;

        SearchCredits(ApiCredits);
    }, []);

    return (
        <>
            <Content>
                <section className="movie">
                    <img src={movie.image} alt={movie.sinopse} />
                    <div className="details">
                        <h1 className="title">{movie.title}:</h1>
                        <span>
                            Sinopse:{" "}
                            {movie.sinopse
                                ? movie.sinopse
                                : "Nenhum dado foi encontrado."}
                        </span>

                        <Infos>
                            <div className="infos">
                                <div className="info_title">
                                    <i className="fas fa-star"></i>
                                    <span className="infoTitle">
                                        Avaliação:
                                    </span>
                                    <div className="rating">
                                        <div className="circle">
                                            <h1>{movie.average}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="info_title"></div>
                                <div className="info_title">
                                    <i className="fas fa-film"></i>
                                    <span className="infoTitle">
                                        Diretores(as):
                                    </span>
                                    {jobs.map((director) => {
                                        return (
                                            <div
                                                key={director.credit_id}
                                                className="directors"
                                            >
                                                <span
                                                    style={
                                                        director.job ===
                                                        "Director"
                                                            ? {
                                                                  display:
                                                                      "flex",
                                                              }
                                                            : {
                                                                  display:
                                                                      "none",
                                                              }
                                                    }
                                                >
                                                    {director.job === "Director"
                                                        ? `${director.name}.`
                                                        : ""}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Infos>

                        <ReleaseDate date={movie.releaseDate} />

                        <WebLinks>
                            <div className="buttons">
                                <a
                                    style={
                                        movie.homepage
                                            ? { display: "flex" }
                                            : { display: "none" }
                                    }
                                    href={movie.homepage}
                                    target="__blank"
                                >
                                    <button>Assistir</button>
                                </a>
                                <Link
                                    style={
                                        movie.homepage
                                            ? { margin: "0 1rem" }
                                            : { margin: "0" }
                                    }
                                    to="/"
                                >
                                    <button className="button_back">
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                        </WebLinks>
                    </div>
                </section>
            </Content>
        </>
    );
};

export default MovieDetails;
