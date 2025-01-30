

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const Dropdown = ({ countries }) => {    
    useEffect(() => {
        if (window.CustomElement) {
          window.CustomElement.init((element) => {
            // console.log("Custom Element loaded", element);
            if (element.value) {
                setSelectedCountry(element.value);
              }
          });
        }
      }, []);
    const [selectedCountry, setSelectedCountry] = useState('Select a country');
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCountry(selectedValue);
    
        // Notify Kontent.ai about the change
        CustomElement.setValue(selectedValue);
      };
    return (
        <div className="container mt-6">
            <select className="form-select" value={selectedCountry} onChange={handleChange}>
                <option>Select a country</option>
                {countries.map((country, index) => <option key={index}>{country}</option>)}
            </select>
        </div>
    );
};  



export default Dropdown;
