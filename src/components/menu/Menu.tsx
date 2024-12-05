import React from 'react';
import styled from "styled-components";


type MenupropsType = {
    menuItems: Array<string>
}


export const Menu = (props: MenupropsType) => {
    return (
        <StyledMenu>
            <ul>{props.menuItems.map((el, index) => {
                return (
                    <li key={index}>
                        <a href='#'>
                            {el}
                        </a>
                    </li>
                )
            })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        justify-content: center;
    }

`