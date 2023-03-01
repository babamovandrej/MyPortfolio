import React, { useState, useRef } from "react";
import FolderImage from "../media/FolderImage.svg"
import FolderNavbar from "./FolderNav";

const AboutFolder = () => {
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
    <div className="Folder-2">
      <a onClick={openPopup}>
        <img className="Folder-image" src={FolderImage}/>
        <div>ABOUTME</div>
      </a>
    <div/>
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
            <FolderNavbar closePopup={closePopup} title={"AboutME"}  />
          </div>
          <div className="popup-content">
            <div className="aboutme-text">
              <p>I am a Fullstack developer with a passion for the decentralized web and its endless possibilities. My expertise in web3 technologies allows me to create innovative solutions that cater to the needs of the modern world. With my technical skills and enthusiasm, I strive to make a positive impact on society through technology.</p>
              <p>My dedication to staying up-to-date with the latest advancements in web3 technologies and my commitment to delivering high-quality results make me the perfect partner for your project. Let's work together to create cutting-edge solutions that drive innovation and push the boundaries of what's possible in the digital world.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutFolder;
