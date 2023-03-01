import React from "react";
import File from "../media/File.svg"

const ProjectLink = ({name, url}) => {
    return (
        <div className="Link-1">
            <a href = {url} target={"_blank"} rel="noreferrer">
                <img className="Link-Image" src={File}/>
                <div>{name}</div>
            </a>
        </div> )
}

export default ProjectLink;