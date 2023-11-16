import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiBackground } from "config/back";
import { ApiImage } from "config/image";
import { ApiKey } from "config/key";
import {
    Container,
    Background,
    Content,
    Actors,
    Information,
    Infos,
    TitleActors,
    WebLinks,
} from "./style";
import MovieInfo from "components/MovieInfo";
import NoImage from "assets/images/no_image.png";
import ReleaseDate from "components/ReleaseData";
import Header from "components/Header";

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchCredits = (path) => {
            fetch(path)
                .then((response) => response.json())
                .then((response) => {
                    setCredits([...credits, ...response.cast]);
                });
        };

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
                    backdrop_path,
                    homepage,
                    runtime,
                    budget,
                    revenue,
                    status,
                    credit_id,
                    name,
                    vote_average,
                } = data;

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    background: `${ApiBackground}${backdrop_path}`,
                    image: `${ApiImage}${poster_path}`,
                    releaseDate: release_date,
                    homepage: `${homepage}`,
                    runtime,
                    budget,
                    revenue,
                    status,
                    credit_id,
                    name,
                    average: `${vote_average.toFixed(1)}`,
                };

                setMovie(movie);
            });

        const ApiCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=pt-BR`;

        fetchCredits(ApiCredits);
        SearchCredits(ApiCredits);
    }, []);

    return (
        <Container>
            <Background style={{ backgroundImage: `url(${movie.background})` }}>
                <Header />

                <Content>
                    <div className="movie">
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
                                        <span>Avaliação:</span>
                                        <div className="rating">
                                            <div className="circle">
                                                <h1>{movie.average}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_title">
                                        <i
                                            className={
                                                movie.status === "Released"
                                                    ? "fas fa-check"
                                                    : "far fa-clock"
                                            }
                                        ></i>{" "}
                                        <span>Status:</span>
                                        <div className="status">
                                            <span>
                                                {movie.status === "Released" ? (
                                                    <span className="text">
                                                        Já lançado.
                                                    </span>
                                                ) : (
                                                    <span className="text">
                                                        Em produção.
                                                    </span>
                                                )}{" "}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="info_title">
                                        <i className="fas fa-film"></i>
                                        <span>Diretores(as):</span>
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
                                                        {director.job ===
                                                        "Director"
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
                    </div>
                </Content>
            </Background>

            <MovieInfo
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />

            <TitleActors>
                <h1>Atores:</h1>
            </TitleActors>

            <Actors>
                {credits.map((credits) => {
                    return (
                        <section key={credits.id} className="movies">
                            <Information>
                                <div className="infos">
                                    <img
                                        src={
                                            credits.profile_path
                                                ? `${ApiImage}${credits.profile_path}`
                                                : NoImage
                                        }
                                        alt={credits.title}
                                    />
                                    <p>{credits.character}</p>
                                    <p>Interpretado por: {credits.name}</p>
                                </div>
                            </Information>
                        </section>
                    );
                })}
            </Actors>
        </Container>
    );
}

export default Details;
