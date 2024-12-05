import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "50.000000"} height={props.height || "50.000000"}
             viewBox={props.viewBox || "0 0 50 50"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>

    );
};

export default Icon;