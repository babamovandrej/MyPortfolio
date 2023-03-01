import React, { useState, useRef } from "react";
import FolderImage from "../media/FolderImage.svg";
import FolderNavbar from "./FolderNav";
import ProjectLink from "./ProjectLinks";

const ProjectsFolder = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const headerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleMouseDown = (e) => {
    console.log("onMouseDown");
    if (e.button !== 0) return;
    setIsDragging(true);
    setOffset({
      x: popupRef.current.offsetLeft - e.clientX,
      y: popupRef.current.offsetTop - e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    console.log("handleMouseMove");
    if (!isDragging) return;
    popupRef.current.style.left = `${e.clientX + offset.x}px`;
    popupRef.current.style.top = `${e.clientY + offset.y}px`;
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp");
    setIsDragging(false);
  };

  return (
    <div className="Folder-1">
      <a onClick={openPopup}>
        <img className="Folder-image" src={FolderImage} />
        <div>PROJECTS</div>
      </a>
      <div />
      {showPopup && (
        <div
          className="Folder-window"
          ref={popupRef}
          style={{ position: "fixed", userSelect: "none" }}
        >
          <div
            className="popup-header"
            ref={headerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <FolderNavbar closePopup={closePopup} title={"PROJECTS"}  />
          </div>
          <div className="popup-content">
            <div className="popup-links">
              <ProjectLink name={"ERC721A"} url={"https://github.com/babamovandrej/ERC721A_Implementation"}/> 
              <ProjectLink name={"ERC4907"} url={"https://github.com/babamovandrej/ERC4907_Implementation"}/> 
              <ProjectLink name={"ERC1155"} url={"https://github.com/babamovandrej/ERC1155_Smart_Contract"}/>             
            </div>
            <div className="popup-links">
              <ProjectLink name={"This Site"} url={"https://github.com"}/>    
              <ProjectLink name={"GRAZ"} url={"https://github.com/GRAZ-WORLD"}/>                  
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsFolder;
