import React from 'react';
import style from './Button.module.css'


const Button = (props,handleClickAdd) => {

    return ( 
        <>
            <button className={style.container}>
                {props.icon ?? (
                    props.icon
                )}
                {props.name}
            </button>
        </>
     );
}
 
export default Button;