import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#home">Home</a>
                    <ul className="show">
                        <li>
                            <a href="#">Cong nghe</a>
                            <ul className="show">
                                <li>
                                    <a href="#">Cong nghe</a>
                                </li>
                                <li>
                                    <a href="#">Ngoai giao</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Ngoai giao</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#news">News</a>
                    <ul className="show">
                        <li>
                            <a href="#">Tin quoc te</a>
                        </li>
                        <li>
                            <a href="#">Tin trong nuoc</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#products">Products</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
