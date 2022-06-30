import React from 'react';
import { COLORS } from '../../colors';
import "./squares.css";

type Props = {
    title: string;
    text: string;
    color: string;
}

const Square = ({title, text, color}: Props) => {
    let titleColor = COLORS.blue;
    let textColor = COLORS.greyText;
    if (color === COLORS.blue) {
        titleColor = COLORS.white;
        textColor = COLORS.white;
    }else if (color === COLORS.green) {
        textColor = COLORS.blue;
    }
    return (
        <button type='button' style={{backgroundColor: color}} className="SquareButton scale-up-center">
            <div>
                <h4 style={{color: titleColor}}>{title}</h4>
                <p style={{color: textColor}}>{text}</p>
                <p style={{color: titleColor}}>Zjistit více</p>
            </div>
        </button>
    );
}
 
export default Square;