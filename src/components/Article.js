import React from 'react'
import { Link } from 'react-router-dom';

function Article({flags, name, population, region, subregion, capital, area}) {
  return (
    <>
        <Link to={`/${name.common}`}>
            <article className='bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden'>
                <img src={flags.svg} alt="" className='md:h-72 w-full object-cover' />
                <div className='p-5'>
                    <h2 className='font-bold text-lg text-gray-900 dark:text-white mb-2'>{name.common}</h2>
                    <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-400'>
                        <li>Population: {population.toLocaleString()}</li>
                        <li>Region: {region}</li>
                        <li>Subregion: {subregion}</li>
                        <li>Capital: {capital}</li>
                        <li>Area: {area.toLocaleString()}</li>
                        
                    </ul>
                </div>
                <div>
                    <button type="button" class="text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5 mb-2 ml-10">Edit</button>
                </div>
            </article>
        </Link>
    </>
  );
}

export default Article