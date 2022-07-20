import React from 'react';
import './Card.scss'
interface CardInterface{
    children:JSX.Element
}
const Card = ({children}:CardInterface) => {
    return (
        <div className={'custom-card'}>
            {children}
        </div>
    );
};

export default Card;