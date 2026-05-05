import React, { use } from 'react';
import Country from './country/Country';

export default function Countries({ countriesPromise }) {
    const data = use(countriesPromise);
    const allCountries = data.countries;


    return (
        <>
            <p>{allCountries.length}</p>

            <div className="grid grid-cols-3 gap-4">
                {
                    allCountries.map(country =><Country country={country}></Country>
                        
                    )
                }
            </div>

        </>
    )
}