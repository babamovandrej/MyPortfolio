import React from "react";

const FolderNavbar = ({ closePopup, title }) => {
  return (
    <div>
      <nav className="Folder-Nav">
        <ul>
          <li>
            <div className="popup-title">{title}</div>
          </li>
          <li>
            <button className="close-button" onClick={closePopup}>
              x
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FolderNavbar;
