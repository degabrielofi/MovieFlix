import React from "react";
import { Content } from "./style";

const Footer = () => {
    return (
        <Content>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Navegue por aqui</h4>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="#pesquisar">Pesquisar</a>
                                </li>
                                <li>
                                    <a href="#movies">Filmes</a>
                                </li>
                                <li>
                                    <a href="/">Perguntas Frequentes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Obter Ajuda</h4>
                            <ul>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">Telefone</a>
                                </li>
                                <li>
                                    <a href="/">Chat</a>
                                </li>
                                <li>
                                    <a href="mailto:contatodegabrielofi@gmail.com">
                                        Suporte
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Companhia</h4>
                            <ul>
                                <li>
                                    <a href="/">Empresa</a>
                                </li>
                                <li>
                                    <a href="/">Quem Somos</a>
                                </li>
                                <li>
                                    <a href="/">Noticias</a>
                                </li>
                                <li>
                                    <a href="/">Serviços</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Redes Sociais:</h4>
                            <div className="social-links">
                                <a
                                    target="__blank"
                                    href="https://github.com/degabrielofi"
                                    aria-label="GitHub"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    target="__blank"
                                    href="https://discord.gg/TNMzEFyxA4"
                                    aria-label="Discord"
                                >
                                    <i className="fab fa-discord"></i>
                                </a>
                                <a
                                    target="__blank"
                                    href="https://www.instagram.com/degabrielofi_/"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    target="__blank"
                                    href="https://www.linkedin.com/in/degabrielofi/"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Content>
    );
};

export default Footer;
