import React from 'react'

function Article({flags, name, population, region, subregion}) {
  return (
    <>
        <article className='bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden'>
            <img src={flags.svg} alt="" className='md:h-72 w-full object-cover' />
            <div className='p-5'>
                <h2 className='font-bold text-lg text-gray-900 dark:text-white mb-2'>{name.common}</h2>
                <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-400'>
                    <li>Pouplation: {population.toLocaleString()}</li>
                    <li>Region: {region}</li>
                    <li>Subregion: {subregion}</li>
                </ul>
            </div>
        </article>
    </>
  );
}

export default Article