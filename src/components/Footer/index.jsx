import React from "react";
import { FooterContainer } from "./style";
import GueblyStudioIcon from "assets/icons/studio.png";

const Footer = ({ marginTop }) => {
    const atualDate = new Date().getFullYear();

    return (
        <FooterContainer marginTop={marginTop}>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>MovieFlix</h4>
                            <ul>
                                <li>
                                    <a href="/">Início</a>
                                </li>
                                <li>
                                    <a href="#pesquisar">Pesquisar</a>
                                </li>
                                <li>
                                    <a href="#movies">Filmes Populares</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Sobre o serviço</h4>
                            <ul>
                                <li className="about-text">
                                    MovieFlix é um serviço onde você encontra os
                                    filmes mais populares do momento e vê
                                    detalhes como sinopse, duração, orçamento,
                                    bilheteria e elenco — tudo em um só lugar.
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Desenvolvido por</h4>
                            <ul>
                                <li>
                                    <span className="by">
                                        Guebly Studio (by Guebly)
                                    </span>
                                </li>
                                <li>
                                    <a
                                        href="https://studio.guebly.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Acessar a Guebly Studio
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contato</h4>
                            <ul>
                                <li>
                                    <a href="mailto:contato@guebly.com.br">
                                        Suporte
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://studio.guebly.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Solicitar um projeto
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <section className="degabrieldev">
                        <div className="copy">
                            <h4>
                                © {atualDate} MovieFlix · Desenvolvido por
                                Guebly Studio
                            </h4>
                        </div>

                        <div className="degabrieldevLink">
                            <a
                                href="https://studio.guebly.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Guebly Studio"
                            >
                                <img
                                    src={GueblyStudioIcon}
                                    alt="Guebly Studio"
                                />
                            </a>
                        </div>
                    </section>
                </div>
            </footer>
        </FooterContainer>
    );
};

export default Footer;
