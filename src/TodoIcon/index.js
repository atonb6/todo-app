import React from "react";
import './TodoIcon.css';
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";


const iconTypes = {
    "check": color =>(
        <AiOutlineCheck fill={color} />
    ),
    "delete": color => (
        <AiFillDelete fill={color} />
    )
}

function TodoIcon({type, color = 'gray', onClick}) {

    return (
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };