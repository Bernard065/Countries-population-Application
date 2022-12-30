import React from 'react'
import { Link } from 'react-router-dom';

function Article({flags, name, population, region, subregion, capital, area}) {
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
                </div>
            </article>
        </Link>
    </>
  );
}

export default Article