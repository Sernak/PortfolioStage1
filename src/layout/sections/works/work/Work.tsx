import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href='#'>demo</Link>
            <Link href='#'>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #eca5ff;
    max-width: 540px;
    width: 100%;
    min-height: 443px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;


`
const Image = styled.img`
    height: 260px;
    width: 100%;
    object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p``

const Link = styled.a``