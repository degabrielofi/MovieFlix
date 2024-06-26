import styled from "styled-components";

export const FooterContainer = styled.div`
    margin-top: ${({ marginTop }) => marginTop || "0"};

    .container {
        max-width: 500%;
        margin: auto;
        padding: 1rem 1.5rem;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    ul {
        list-style: none;
    }

    .footer {
        background: rgba(000, 000, 000, 0.99);
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.9);
        padding: 5rem 0;
    }

    .footer-col {
        width: 25%;
        padding: 0 15px;
    }

    .footer-col h4 {
        font-size: 18px;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }

    .footer-col h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #8e0e00;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }

    .footer-col ul li a {
        font-size: 16px;
        text-transform: capitalize;
        color: #fff;
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

    .footer-col .social-links a {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #fff;
        transition: all 0.5s ease;
    }

    .footer-col .social-links a:hover {
        color: #24262b;
        background-color: #fff;
    }

    .degabrieldev {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5% 5%;
    }

    .copy h4 {
        color: #fff;
        font-weight: 500;
    }

    .degabrieldevLink {
        width: 20%;
    }

    .degabrieldevLink img {
        width: 100%;
    }

    @media (max-width: 992px) {
        .copy h4 {
            font-size: 50%;
        }

        .degabrieldevLink {
            width: 40%;
        }
    }

    @media (max-width: 250px) {
        .degabrieldev {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media (max-width: 767px) {
        .footer-col h4::before {
            margin: 2px 35%;
            width: 30%;
        }

        text-align: center;

        .footer-col {
            width: 50%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 574px) {
        text-align: center;

        .footer-col {
            width: 100%;
        }
    }
`;
