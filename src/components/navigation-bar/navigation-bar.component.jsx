import React from "react";

import {
    NavBarContainer,
    NavBarBrand,
    NavBarNav,
    NavBarNavA,
} from "./navitagion-bar.style";

const NavBar = () => {
    return (
        <NavBarContainer class="navbar">
            <div>
                <NavBarBrand>Art.Design</NavBarBrand>
                <NavBarNav>
                    <NavBarNavA>home</NavBarNavA>
                    <NavBarNavA>design</NavBarNavA>
                    <NavBarNavA>blog</NavBarNavA>
                    <NavBarNavA>about</NavBarNavA>
                </NavBarNav>
            </div>
        </NavBarContainer>
    );
};

export default NavBar;
