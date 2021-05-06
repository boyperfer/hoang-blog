import styled from "styled-components";

export const NavBarContainer = styled.nav`
    background: rgba(0, 0, 0, 0.6);
    padding: 1.2rem;
`;

export const NavBarBrand = styled.a`
    color: #fff;
    font-size: 2rem;
    display: block;
    text-align: center;
    text-decoration: none;
    font-family: var(--Playfair);
    letter-spacing: 1px;
`;

export const NavBarNav = styled.div`
    color: #fff;
    font-size: 2rem;
    display: block;
    text-align: center;
    text-decoration: none;
    font-family: var(--Playfair);
    letter-spacing: 1px;
`;

export const NavBarNavA = styled.a`
    text-transform: uppercase;
    font-family: var(--Roboto);
    letter-spacing: 1px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 0.4rem 0.1rem;
    letter-spacing: 3px;
    transition: opacity 0.5s ease;

    &::hover {
        opacity: 0.7;
    }
`;
