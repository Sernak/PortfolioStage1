import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import photoOne from "../../../assets/images/proj-1.webp"
import photoTwo from "../../../assets/images/proj-2.webp"


const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>

            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>

            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                          'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. ' +
                          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                      src={photoOne}
                />
                <Work title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                          'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. ' +
                          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                      src={photoTwo}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #f6dca4;
    //display: flex;
    //flex-direction: column;
    //justify-content: flex-start;
    //align-items: center;
`
