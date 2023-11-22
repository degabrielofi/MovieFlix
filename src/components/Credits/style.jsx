import styled from "styled-components";

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .infos {
        text-align: center;
        align-items: center;
        background: rgba(000, 000, 000, 0.99);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 1rem;
        width: 90%;
        transition: all 0.3s;
    }

    .infos img {
        width: 100%;
        column-gap: 1rem;
        border-radius: 1rem;
        margin-bottom: 0;
        transition: all 0.3s;
        border: none;
    }

    .infos:hover {
        transform: scale(1.1);
    }

    .infos p {
        padding: 0.5rem;
    }

    @media screen and (max-width: 968px) {
        .infos {
            width: 65%;
        }
    }
`;

export const Actors = styled.div`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;

    .movies {
        margin-top: 1.5rem;
    }
`;
