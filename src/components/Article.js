import React from 'react'
import { Link } from 'react-router-dom';

function Article({flags, name, population, region, subregion, capital, area, removeCountry}) {
  return (
    <>
        <Link to={`/${name.common}`}>
            <article className='bg-white hover:bg-gray-200  transition-all duration-200 rounded-lg shadow overflow-hidden'>
                <img src={flags.svg} alt="" className='md:h-72 w-full object-cover' />
                <div className='p-5'>
                    <h2 className='font-bold text-lg text-gray-900 mb-2'>{name.common}</h2>
                    <ul className='flex flex-col items-start justify-start gap-2'>
                        <li>Population: {population.toLocaleString()}</li>
                        <li>Region: {region}</li>
                        <li>Subregion: {subregion}</li>
                        <li>Capital: {capital}</li>
                        <li>Area: {area.toLocaleString()}</li> 
                    </ul>
                    <button onClick={removeCountry} className='mt-4 px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700'>Remove</button>
                </div>
            </article>
        </Link>
        
    </>
  );
}

export default Article