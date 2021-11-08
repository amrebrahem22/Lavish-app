import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <div className="avatar-container">
                    <Avatar sx={{ bgcolor: '#ccc', width: 24, height: 24 }}>N</Avatar>
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
