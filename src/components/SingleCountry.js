import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const {name} =useParams()

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
              const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
              const data = await res.json();
              setCountry(data);
            } catch (error) {
              console.error(error);
            }
        };
      
        getSingleCountry();

    }, [name])
    return (
        <>
          <section className="p-8 md:py-0 max-w-7xl mx-auto">
            {country.map((item) => (
              <div
                key={item.population}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
                <article>
                  <img src={item.flags.svg} alt={item.name.common} />
                </article>
    
                <article>
                  <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                    {item.name.official}
                  </h1>
                  <ul>
                    <li>Capital City: {item.capital[0]}</li>
                    <li>Pouplation: {item.population.toLocaleString()}</li>
                    <li>Region: {item.region}</li>
                    <li>Subregion: {item.subregion}</li>
                  </ul>
     
                </article>
              </div>
            ))}
          </section>
        </>
      );
    }
    
