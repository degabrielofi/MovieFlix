import styled from "styled-components";

export const Search = styled.div`
    .curved-div svg {
        display: block;
    }

    .curved-div .svg_fund {
        margin-top: -4rem;
        width: 100%;
    }

    .curved-div.upper {
        background: #fff;
        width: 100%;
    }

    .curved-div h1 {
        font-size: 4.5rem;
        color: #111;
        text-align: center;
        margin-top: -1.5rem;
    }

    .curved-div p {
        font-size: 1.1rem;
        color: #111;
        font-weight: 500;
        text-align: center;
        margin: 2rem 5rem 0 5rem;
    }

    .custom-search {
        position: relative;
        text-align: center;
        overflow: hidden;
        width: 300px;
        margin: 2rem auto 0 auto;
    }

    .custom-search-input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 1rem;
        padding: 10px 100px 10px 20px;
        line-height: 1;
        outline: none;
    }

    .custom-search-botton {
        position: absolute;
        right: 3px;
        top: 3px;
        bottom: 3px;
        border: 0;
        background: rgba(000, 000, 000, 0.99);
        cursor: pointer;
        color: #fff;
        outline: none;
        margin: 0;
        padding: 0 10px;
        border-radius: 100px;
        z-index: 1;
    }

    @media (max-width: 991px) {
        .curved-div svg {
            width: 143%;
            transform: translate(-30%);
        }

        .curved-div .svg_fund {
            width: 143%;
            transform: translate(-30%);
            margin-top: 0;
        }

        .curved-div h1 {
            font-size: 1.9rem;
            margin-top: 0.5rem;
        }

        .curved-div p {
            font-size: 1.1rem;
        }
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;

    .movies {
        margin-top: 1.5rem;
    }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 13rem;
        column-gap: 42px;
        border-radius: 1rem;
        margin-bottom: 0;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 798px) {
        img {
            width: 17rem;
        }
    }
`;

export const MoreMovies = styled.div`
    padding: 4rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background: #8e0e00;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        filter: brightness(0.8);
    }

    button:active {
        filter: brightness(0.5);
    }
`;
