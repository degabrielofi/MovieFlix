import styled from "styled-components";

export const Menu = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(10deg, #8e0e00 0%, #1f1c18 150%);
    box-sizing: border-box;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header img {
        width: 10%;
        padding: 0 1rem;
    }

    @media screen and (max-width: 968px) {
        header img {
            width: 25%;
        }
    }
`;
