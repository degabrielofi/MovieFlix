import React from "react";
import { Menu } from "./style";
import IMDb from "assets/icons/tmbd-logo.svg";
import Icon from "assets/icons/logo.png";

const Header = () => {
    return (
        <>
            <Menu>
                <header>
                    <img src={Icon} alt="Icon" className="icon" />
                    <img src={IMDb} alt="Logo" />
                </header>
            </Menu>
        </>
    );
};

export default Header;
