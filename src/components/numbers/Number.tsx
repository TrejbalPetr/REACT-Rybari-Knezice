import React from 'react';
import CountUp from 'react-countup';
import { COLORS } from '../../colors';
import "./numbers.css"

type Props = {
    num: number;
    text: string;
}

const Number = ({num, text}: Props) => {

    return (
        <div className='Number'>
            <CountUp start={0} end={num} enableScrollSpy>
            {({ countUpRef}) => (
                <h1><span ref={countUpRef} /></h1>
            )}
            </CountUp>
            <p>{text}</p>
        </div>
    );
}
 
export default Number;