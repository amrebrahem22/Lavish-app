import React, { useState } from 'react';
import { Button } from '@mui/material';
import Search from '../search/Search';
import './banner.css';

const Banner = () => {
    const [showDate, setShowDate]= useState(false);

    return (
        <div className="banner">
            <div className="banner__searchButton">
                {showDate && <Search />}
                <Button varaint="outlined" onClick={() => setShowDate(!showDate)}>{showDate ? "Hide" : "Search Date"}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
