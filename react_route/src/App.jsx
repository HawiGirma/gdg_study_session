import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import menu from "./assets/menu.svg";
import search from "./assets/search.svg";
import refresh from "./assets/refresh.svg";
import view from "./assets/view.svg";
import settings from "./assets/settings.svg";
import brush from "./assets/brush.svg";
import image from "./assets/image.svg";
import apps from "./assets/apps.svg";
import home from "./assets/light.svg";
import logout from "./assets/notifications.svg";
import keep from "./assets/keep.png";
import profile from "./assets/profile.png";
import "./App.css";

// function Header({ isOpen, setIsOpen }) {
//   return (
//     <nav className="header">
//       <div className="header-left">
//         <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
//           <img src={menu} alt="Menu" className="icon" />
//         </button>
//         <img src={keep} alt="Keep" className="logo" />
//         <h1 className="title">Keep</h1>
//       </div>
//       <div className="search-bar">
//         <img src={search} alt="Search" className="icon" />
//         <input type="text" placeholder="Search" className="search-input" />
//       </div>
//       <div className="header-right">
//         <img src={refresh} alt="Refresh" className="icon" />
//         <img src={view} alt="View" className="icon" />
//         <img src={settings} alt="Settings" className="icon" />
//         <img src={apps} alt="Apps" className="icon" />
//         <img src={profile} alt="Profile" className="icon" />
//       </div>
//     </nav>
//   );
// }

// function Sidebar({ isOpen }) {
//   return (
//     <div className="sidebar-container">
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <img src={home} alt="Home" className="icon" />
//             {isOpen && <span>Home</span>}
//           </li>
//           <li>
//             <img src={settings} alt="Settings" className="icon" />
//             {isOpen && <span>Settings</span>}
//           </li>
//           <li>
//             <img src={logout} alt="Logout" className="icon" />
//             {isOpen && <span>Logout</span>}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

function Input() {
  const [note, setNote] = useState("");

  function handleNote(e) {
    e.preventDefault();
    console.log("Note Submitted:", note);
    setNote("");
  }

  return (
    <div className="takeNote">
      <form onSubmit={handleNote}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Take a note..."
          className="note-input"
        />
        <button type="submit" style={{ display: "none" }}></button>
        <img src={settings} alt="Settings" className="icon" />
        <img src={brush} alt="Brush" className="icon" />
        <img src={image} alt="Image" className="icon" />
      </form>
    </div>
  );
}

function SavedNote() {
  const notes = [
    {
      title: "Title 1",
      content: "Content 1",
      createdAt: new Date(),
    },
    {
      title: "Title 2",
      content: "Content 2",
      createdAt: new Date(),
    },
    // Add more notes here...
  ];
  return (
    <div className="saved-note">
      <div>
        {notes.map((note, index) => (
          <div key={index} className="saved-note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <span>{note.createdAt.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="app-container">
    //   <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    //   <div className="main-content">
    //     <Sidebar isOpen={isOpen} />
    <div className="notes-container">
      <Input />
      <SavedNote />
    </div>
    //   </div>
    // </div>
  );
}

export default App;
