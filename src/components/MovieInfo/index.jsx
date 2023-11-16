import React from "react";
import { calcTime, convertMoney } from "../../helpers";
import { Content } from "./style";

const MovieInfo = ({ time, budget, revenue }) => {
    return (
        <Content>
            <section className="details">
                <div
                    className="column"
                    style={
                        time == 0 ? { display: "none" } : { display: "flex" }
                    }
                >
                    <i className="fas fa-clock"></i>
                    <p>Duração: {calcTime(time)}</p>
                </div>

                <div
                    className="column"
                    style={
                        budget == 0 ? { display: "none" } : { display: "flex" }
                    }
                >
                    <i className="fas fa-money-bill-alt"></i>
                    <p>Orçamento: {convertMoney(budget)}</p>
                </div>

                <div
                    className="column"
                    style={
                        revenue == 0 ? { display: "none" } : { display: "flex" }
                    }
                >
                    <i className="fas fa-coins"></i>
                    <p>Bilheteria: {convertMoney(revenue)}</p>
                </div>
            </section>
        </Content>
    );
};

export default MovieInfo;
