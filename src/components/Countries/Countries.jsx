import React, { useState, use } from 'react';
import Country from './country/Country';

export default function Countries({ countriesPromise }) {
    const data = use(countriesPromise);
    const allCountries = data.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    }


    return (
        <>
            <h3 className='text-2xl font-semibold mb-4'>Total Country Visited:{visitedCountries.length}</h3>


            <div className="grid grid-cols-3 gap-4">
                {
                    allCountries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries}></Country>

                    )
                }
            </div>

        </>
    )
}