import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <nav className="Header-container">
            <div className="logo-container">
                <div className="logo">
                    <h3 className="send">Send <span className="freight">Freight</span></h3>
                </div>
                
                <div className="search_box">

                    <input className="search-input" type="text" placeholder="Search"></input>
                    <span className="fas fa-search"></span>
                </div>

            </div>
            <div className="btn-container">
                <button className="btn-one">
                    Request Quote
                </button>
                <button className="btn-two">
                    Book Shipment
                </button>
                
            </div>
        </nav>

    )
}

export default Header