import { FaSearch, FaBell, FaPlus } from 'react-icons/fa';
import './header.css';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">Healthcare.</h1>
                <div className="search-container">
                    <div style={{border:1}}>
                        <FaSearch />
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                    </div>
                    <button className="icon-button">
                        <FaBell />
                    </button>
                </div>
                <div className="icons-container">
                    <img
                        src="https://img.freepik.com/premium-photo/icon-define-person-allocate-stylize-250_1137696-4267.jpg?ga=GA1.1.812906436.1744046584&semt=ais_items_boosted&w=740" // Replace with actual profile image URL
                        alt="Profile"
                        className="profile-icon"
                    />
                    <button className="add-button">
                        <FaPlus />
                    </button>
                </div>
            </div>
        </header>
    );
};

