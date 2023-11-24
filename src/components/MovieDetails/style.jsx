import styled from "styled-components";

export const Content = styled.div`
    .movie {
        display: flex;
        margin: 1rem auto 1rem auto;
        justify-content: center;
        align-items: center;
        max-width: 85%;
        background: rgba(000, 000, 000, 0.6);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.8);
        border-radius: 1rem;
    }

    .title {
        padding: 0 1rem;
        font-size: 2.5rem;
        margin: 2rem 0;
    }

    img {
        width: 30%;
        height: 100%;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 85%;
    }

    span {
        padding: 0 1rem;
        line-height: 120%;
        margin-bottom: 1rem;
        font-size: 130%;
    }

    .infoTitle {
        padding: 0 0;
    }

    @media (max-width: 991px) {
        text-align: center;

        .movie {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .details {
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
            padding: 1rem;
        }

        img {
            width: 100%;
            border-radius: 1rem;
        }

        .movie .details h1 {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            font-size: 150%;
        }
    }
`;

export const Infos = styled.div`
    width: 100%;
    padding: 0 1rem;
    height: 100%;

    .infos {
        display: flex;
        justify-content: space-between;
    }

    .info_title i {
        margin-right: 0.2rem;
        font-size: 1.2rem;
    }

    .rating span {
        font-size: 1.5rem;
    }

    .rating .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        background-color: #fff;
        border-radius: 50%;
        padding: 0 1rem;
    }

    .rating .circle h1 {
        color: #111;
        font-size: 1.5rem;
    }

    .directors {
        margin: 0;
    }

    .directors span {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 968px) {
        display: flex;
        justify-content: center;
        margin: auto;
        align-items: center;

        .infos {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        .info_title {
            margin-bottom: 1rem;
            width: 100%;
        }

        .rating .circle {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
        }

        .directors {
            display: flex;
            justify-content: center;
        }
    }
`;

export const WebLinks = styled.div`
    position: relative;
    padding: 0 1rem;

    .buttons {
        display: flex;
        margin: 1rem 0 1rem 0;
    }

    .buttons button {
        background: #d52322;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 1.2rem 4.2rem;
        margin-top: 0.5rem;
        margin-right: 0;
        font-size: 100%;
        transition: all 0.3s;
    }

    .buttons a {
        text-decoration: none;
    }

    button:hover {
        filter: brightness(0.8);
    }

    button:active {
        filter: brightness(0.5);
    }

    @media screen and (max-width: 968px) {
        display: flex;
        justify-content: center;
        margin: auto;
        align-items: center;

        .buttons {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: auto;
            align-items: center;
        }
    }
`;
