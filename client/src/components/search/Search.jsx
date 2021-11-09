import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material'

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import './search.css';

const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
      startDate,
      endDate,
      key: 'selection',
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                <span>Number of guests</span> <PeopleIcon />
            </h2>
            <input className="guests" min={0} defaultValue={2} type="number" />
            <Button className="main-btn">Search Lavish</Button>
        </div>
    )
}

export default Search;
