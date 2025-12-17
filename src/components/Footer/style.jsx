import styled from "styled-components";

export const FooterContainer = styled.div`
    margin-top: ${({ marginTop }) => marginTop || "0"};

    .container {
        max-width: 1200px;
        margin: auto;
        padding: 1rem 1.5rem;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 24px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer {
        background: rgba(0, 0, 0, 0.99);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.9);
        padding: 5rem 0;
    }

    .footer-col {
        width: 23%;
        padding: 0 15px;
        min-width: 220px;
    }

    .footer-col h4 {
        font-size: 18px;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 20px;
        font-weight: 600;
        position: relative;
    }

    .footer-col h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #8e0e00; /* roxo Guebly */
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }

    .footer-col ul li a {
        font-size: 16px;
        text-transform: none;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
    }

    .footer-col ul li a:hover {
        color: #fff;
        padding-left: 8px;
    }

    .about-text {
        font-size: 14px;
        line-height: 1.6;
        color: #bbbbbb;
    }

    .by {
        font-size: 14px;
        color: #ffffff;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 6px;
    }

    .degabrieldev {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem 0 0;
        margin-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        gap: 16px;
    }

    .copy h4 {
        color: #fff;
        font-weight: 500;
        font-size: 14px;
    }

    .degabrieldevLink {
        width: 140px;
    }

    .degabrieldevLink img {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (max-width: 992px) {
        .footer-col {
            width: 45%;
        }

        .degabrieldevLink {
            width: 160px;
        }
    }

    @media (max-width: 767px) {
        .footer {
            padding: 4rem 0;
        }

        .footer-col {
            width: 100%;
            text-align: center;
        }

        .footer-col h4::before {
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
        }

        .row {
            justify-content: center;
        }

        .degabrieldev {
            flex-direction: column;
            text-align: center;
        }
    }

    @media (max-width: 250px) {
        .degabrieldev {
            flex-direction: column;
            justify-content: center;
        }
    }
`;
