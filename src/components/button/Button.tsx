import React from 'react';
import './Button.scss'
import classNames from "classnames";

interface ButtonInterface {
    onClick?: () => void,
    children: string,
    className?: string,
}

const Button = ({onClick, children, className}: ButtonInterface) => {
    return (
        <div className={classNames('custom-button', className)}>
            <button onClick={onClick}>{children}</button>
        </div>
    );
};

Button.defaultProps = {
    children: 'button',
}

export default Button;