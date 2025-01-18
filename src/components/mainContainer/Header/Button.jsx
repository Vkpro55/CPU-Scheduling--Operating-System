import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, icon, text, onClickFun, setValue = null }) => {

    const onClickHandler = () => {
        if (setValue !== null) {
            onClickFun(true);
        }
        else {
            onClickFun();
        }
    }

    return (
        <>
            <button className={className} onClick={onClickHandler}>
                <FontAwesomeIcon icon={icon} /> {text}
            </button >
        </>
    )
}

export default Button