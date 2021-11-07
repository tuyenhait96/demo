import React from 'react'
import avatar from "../../assests/image/Hoa_1.jpg";
import icon from "../../assests/image/Hoa_icon.jpg";
import "./image.css"

const Image = () => {
    return (
        <div>
            <img src={avatar} alt="avtar" />
            <img src={icon} alt="icon" />
        </div>

    )
}

export default Image
