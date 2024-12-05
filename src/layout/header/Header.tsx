import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Skills} from "../sections/skills/Skills";


const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: lightgreen;
    display: flex;
    justify-content: space-between;


`
