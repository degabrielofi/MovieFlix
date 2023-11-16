import styled from "styled-components";

export const Content = styled.div`
    background-color: #111;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;

    .details {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .column {
        display: flex;
        align-items: center;
        padding: 1rem;
    }

    .column p {
        font-size: 1.2rem;
    }

    .column i {
        margin: 0 0.5rem;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 790px) {
        padding: 0.5rem;
        height: 100%;

        .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
`;
