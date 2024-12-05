import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myphoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Sergey Nakonechnyi</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>

    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #b4e7d7;

`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`