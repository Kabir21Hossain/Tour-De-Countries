import { useState } from "react"
import './country.css'


export default function Country({ country,handleVisitedCountries }) {
    const [isVisited, setVisited] = useState(false);
    


    const handleVisited = (country) => {

        if(!isVisited){
            handleVisitedCountries(country);
            setVisited(true);
        }
        else{
            alert("Country is already visited");
        }
        


    }
    const nameStyle = {
        color: "black",
        fontSize: "20px",
        fontWeight: "700",
        fontFamily: "sans-serif"
    }

    const officialNameStyle = {
        color: "gray",
        fontSize: "10px",
        fontWeight: "500",
        fontFamily: "sans-serif"
    }

    const CapitalStyle = {

        fontSize: "16px",
        fontFamily: "sans-serif"
    }

    const symbolStyle = {
        color: "red",
        fontSize: "10px",
        fontWeight: "500",
        fontFamily: "sans-serif"
    }

    return (
        <>
            <div className={`border border-none shadow-xl rounded-xl p-4 flex flex-col justify-center-center gap-2 hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300 ${isVisited ? "visited" : "not-visited"} `}>

                <img className='w-20 h-10' src={country.flags?.flags?.png} alt={country.name} />
                <p style={nameStyle}>{country.name.common}</p>
                <p style={officialNameStyle}>Official Name:{country.name.official}</p>
                <p style={CapitalStyle} className={`bg-blue-100 p-2 rounded-lg w-fit mx-auto text-blue-300 font-semibold`}>Capital:{country.capital?.capital?.[0]}</p>
                <p className='flex items-center gap-2'>
                    <span>Currency:</span>
                    {Object.entries(country.currencies.currencies).map(([key, value]) => (
                        <span key={key} style={symbolStyle}>
                            {value.name} ({value.symbol})
                        </span>
                    ))}
                </p>

                <button onClick={() => handleVisited(country)} className='text-[12px] font-semibold btn btn-primary btn-soft w-25 h-7 rounded-lg px-0 py-0'>{
                    isVisited ? "visited" : "Not Visited"}

                </button>


            </div>
        </>
    )
}