import { MovieList, Movie, MoreMovies, Search } from "./style";
import { ApiKey } from "config/key";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiImage } from "config/image";
import Header from "components/Header";
import Footer from "components/Footer";
import NoResults from "components/NoResults";

function Home() {
    const [movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=`;
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`;

    useEffect(() => {
        getMovies(FEATURED_API);

        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`;

        fetchMovies(endpoint);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const fetchMovies = (path) => {
        fetch(path)
            .then((response) => response.json())
            .then((response) => {
                setMovies([...movies, ...response.results]);
                setCurrentPage(response.page);
            });
    };

    const handleClick = () => {
        let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=${
            CurrentPage + 1
        }`;

        fetchMovies(endpoint);
    };

    console.log(handleOnChange);

    return (
        <>
            <Header />

            <Search id="pesquisar">
                <div className="curved-div upper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#111111111"
                            opacity="1"
                            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,112C672,149,768,235,864,240C960,245,1056,171,1152,128C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        ></path>
                    </svg>
                </div>
                <div className="curved-div">
                    <h1>ENCONTRE O SEU FILME</h1>
                    <p>
                        Com a MovieFLix você irá achar um filme que combine com
                        você, e saberá onde o assistir.
                    </p>
                    <form
                        onSubmit={handleOnSubmit}
                        className="example"
                        action="action_page.php"
                    >
                        <div className="custom-search">
                            <input
                                type="text"
                                className="custom-search-input"
                                placeholder="Digite aqui sua pesquisa..."
                                value={searchTerm}
                                onChange={handleOnChange}
                            />
                            <button
                                className="custom-search-botton"
                                type="submit"
                            >
                                Buscar
                            </button>
                        </div>
                    </form>
                    <svg
                        className="svg_fund"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#111111111"
                            opacity="1"
                            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,112C672,149,768,235,864,240C960,245,1056,171,1152,128C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </Search>

            <MovieList className="filmesback">
                {movies.length === 0 ? (
                    <NoResults />
                ) : (
                    <>
                        {movies.map((movie) => {
                            return (
                                <section
                                    key={movie.id}
                                    className="movies"
                                    id="movies"
                                >
                                    <Movie>
                                        <Link to={`/details/${movie.id}`}>
                                            {" "}
                                            <img
                                                src={`${ApiImage}${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </Link>
                                    </Movie>
                                </section>
                            );
                        })}
                    </>
                )}
            </MovieList>

            <MoreMovies
                style={
                    (movies.length === 0
                        ? { display: "none" }
                        : { display: "flex" },
                    searchTerm >= 1 ? { display: "none" } : { display: "flex" })
                }
            >
                <button onClick={handleClick}>Carregar Mais...</button>
            </MoreMovies>

            <Footer />
        </>
    );
}

export default Home;
