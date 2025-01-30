

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Dropdown = ({ countries }) => {    
    const [selectedCountry, setSelectedCountry] = useState('Select a country');

    return (
        <div className="container mt-6">
            <select className="form-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option>Select a country</option>
                {countries.map((country, index) => <option key={index}>{country}</option>)}
            </select>
        </div>
    );
};  

export default Dropdown;
