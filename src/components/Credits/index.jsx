import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiImage } from "config/image";
import NoImage from "assets/images/no_image.png";
import { ApiKey } from "config/key";

import { Actors, Information } from "./style";

const Credits = () => {
    const { id } = useParams();
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

        const ApiCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=pt-BR`;

        fetchCredits(ApiCredits);
        SearchCredits(ApiCredits);
    }, []);

    return (
        <>
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
        </>
    );
};

export default Credits;
