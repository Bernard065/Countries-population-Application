import React from 'react'

function Article({flags, name, population, region, subregion}) {
  return (
    <>
        <article>
            <img src={flags.svg} alt="" />
            <h2>{name.common}</h2>
            <ul>
                <li>Pouplation: {population.toLocaleString()}</li>
                <li>Region: {region}</li>
                <li>Subregion: {subregion}</li>
            </ul>
        </article>
    </>
  );
}

export default Article