import {
    MovieList,
    Movie,
    Pagination,
    Menu,
    FooterPage,
    Search,
} from "./style";
import { ApiKey } from "../../config/key";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiImage } from "config/image";
import Logo from "assets/icons/tmbd-logo.svg";
import Icon from "assets/icons/logo_white.png";

function Home() {
    const [movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [showLoading, setShowLoading] = useState(false);

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

    return (
        <>
            <Menu>
                <header>
                    <img src={Icon} alt="Icon" className="icon" />
                    <img src={Logo} alt="Logo" />
                </header>
            </Menu>

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
                        você, é saberá onde o assistir.
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
                {movies.map((movie) => {
                    return (
                        <section key={movie.id} className="movies" id="movies">
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
            </MovieList>

            <Pagination id="paginas" className="pageback">
                <button onClick={handleClick}>Carregar Mais...</button>
            </Pagination>

            <FooterPage>
                <footer className="footer" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>Navegue por aqui</h4>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="#pesquisar">Pesquisar</a>
                                    </li>
                                    <li>
                                        <a href="#movies">Filmes</a>
                                    </li>
                                    <li>
                                        <a href="/">Perguntas Frequentes</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Obter Ajuda</h4>
                                <ul>
                                    <li>
                                        <a href="/">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/">Telefone</a>
                                    </li>
                                    <li>
                                        <a href="/">Chat</a>
                                    </li>
                                    <li>
                                        <a href="mailto:contatodegabrielofi@gmail.com">
                                            Suporte
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Companhia</h4>
                                <ul>
                                    <li>
                                        <a href="/">Empresa</a>
                                    </li>
                                    <li>
                                        <a href="/">Quem Somos</a>
                                    </li>
                                    <li>
                                        <a href="/">Noticias</a>
                                    </li>
                                    <li>
                                        <a href="/">Serviços</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Redes Sociais:</h4>
                                <div className="social-links">
                                    <a
                                        target="__blank"
                                        href="https://github.com/degabrielofi"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a
                                        target="__blank"
                                        href="https://discord.gg/TNMzEFyxA4"
                                    >
                                        <i className="fab fa-discord"></i>
                                    </a>
                                    <a
                                        target="__blank"
                                        href="https://www.instagram.com/degabrielofi_/"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        target="__blank"
                                        href="https://www.linkedin.com/in/degabrielofi/"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </FooterPage>
        </>
    );
}

export default Home;
