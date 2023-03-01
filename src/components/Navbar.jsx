/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#top">AndrejBabamov</a></li>
                    <li className="dropdown">
                        <a href="#">Socials</a>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/andrej-babamov-28b35a183/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://twitter.com/GrumpyBamba" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://github.com/babamovandrej" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href="https://opensea.io/GrumpyBamba/featured" target="_blank" rel="noreferrer">Opensea</a></li>
                        </ul>
                    </li>
                    <li><a href="mailto:andrejbabamov@gmail.com" target={"_blank"} rel="noreferrer">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar