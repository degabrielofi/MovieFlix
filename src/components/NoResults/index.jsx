import React from "react";
import { Content } from "./style";

const NoResults = () => {
    return (
        <>
            <Content>
                <div className="results">
                    <h1>Nenhum resultado foi encontrado!</h1>
                </div>
            </Content>
        </>
    );
};

export default NoResults;
