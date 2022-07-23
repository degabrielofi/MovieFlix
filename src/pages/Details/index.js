import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ApiBackground } from "../../config/back"
import { ApiImage } from "../../config/image"
import { ApiKey } from "../../config/key"
import { Container, Menu, All, Actors, Informations, Infos, Actor_title } from "./style"
import Logo from "../../assets/icons/tmbd-logo.svg"
import Icon from "../../assets/icons/logo_white.png"
import MovieInfo from "../../components/MovieInfo"
import NoImage from "../../assets/no_image.jpg"
import ReleaseDate from "../../components/ReleaseData"

function Details() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [credits, setCredits] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {

        const fetchCredits = (path) => {
            fetch(path)
                .then(response => response.json())
                .then(response => {
                    setCredits([...credits, ...response.cast])
                })
        }

        const SearchCredits = (path) => {
            fetch(path)
                .then(response => response.json())
                .then(response => {
                    setJobs([...credits, ...response.crew])
                })
        }

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {

                const { title, poster_path, overview, release_date, backdrop_path, homepage, runtime, budget, revenue, status, credit_id, name, vote_average } = data

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
                    average: `${vote_average}`

                }

                setMovie(movie)

            })

        const ApiCredits = (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=pt-BR`)

        fetchCredits(ApiCredits)
        SearchCredits(ApiCredits)

    }, [])

    return (

        <Container>

            <div className="background_movie" style={{ backgroundImage: `url(${movie.background})` }}>

                <Menu>
                    <header>
                        <img src={Icon} alt="Icon" className="icon" />
                        <img src={Logo} alt="Logo" />
                    </header>
                </Menu>

                <All>
                    <div className="movie">
                        <img src={movie.image} alt={movie.sinopse} />
                        <div className="details">
                            <h1>{movie.title}:</h1>
                            <span>Sinopse: {movie.sinopse ? movie.sinopse : 'Nenhum dado encontrado.'}</span>

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
                                    <div className="info_title_1">
                                        <i className={movie.status === 'Released' ? 'fas fa-check' : 'far fa-clock'}></i> <span>Status:</span>
                                        <div className="status">
                                            <span>{movie.status === 'Released' ? <span className="text">Já lançado.</span> : <span className="text">Em produção.</span>} </span>
                                        </div>
                                    </div>
                                    <div className="info_title_2">
                                        <i className="fas fa-film"></i>
                                        <span>Diretores(as):</span>
                                        {jobs.map(director => {
                                            return (
                                                <div key={director.credit_id} className="directors">
                                                    <span className={director.job === 'Director' ? 'exists' : 'not_exists'}>{director.job === 'Director' ? `${director.name}.` : ''}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Infos>

                            <ReleaseDate date={movie.releaseDate} />

                            <div className="buttons">
                                <a style={movie.homepage ? {display: "block"} : {display: "none"}} href={movie.homepage} target="__blank"><button >Assistir</button></a>
                                <Link to="/"><button className="button_back">Voltar</button></Link>
                            </div>
                        </div>
                    </div>
                </All>
            </div>

            <MovieInfo time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />

            <Actor_title>
                <h1>Atores:</h1>
            </Actor_title>

            <Actors className="filmesback">
                {credits.map(credits => {
                    return (
                        <section key={credits.id} className="movies" id="movies">
                            <Informations>
                                <div className="infos">
                                    <img src={credits.profile_path ? `${ApiImage}${credits.profile_path}` : NoImage} alt={credits.title} />
                                    <p>{credits.character}</p>
                                    <p>Interpretado por: {credits.name}</p>
                                </div>
                            </Informations>
                        </section>

                    )
                })}

            </Actors>

        </Container>

    )
}

export default Details