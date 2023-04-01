import React from "react"
import "../styles/navbar.css";

export default function Nabvar() {
  return (

    <div className="navbar">
      <div className="navbar-logo">
        <svg></svg>
      </div>
      <a href="/" className="navbar-logout">
        <p className="navbar-txt">Cerrar sesión</p>
        <svg></svg>
      </a>
    </div>

  )
}