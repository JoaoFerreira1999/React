import React from 'react'
import Axios from 'axios'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/regions', false, /\.(png|jpe?g|svg)$/));

function SearchArea() {

    function handleSubmit(e){
        e.preventDefault();

        Axios.post("http://localhost:3000/", {

        })    
    }

    const regions = [
        {
            region: 'North America',
            imgURL: images['NorthAmerica.png']
        }, 
        {
            region: 'Europe West',
            imgURL: images['EuropeWest.png']
        }, 
        {
            region: 'Europe Nordic & East',
            imgURL: images['NorthAmerica.png']
        }, 
        {
            region: 'Oceania',
            imgURL: images['Oceania.png']
        }, 
        {
            region: 'Korea',
            imgURL: images['Korea.png']
        }, 
        {
            region: 'Japan',
            imgURL: images['Japan.png']
        }, 
        {
            region: 'Brazil',
            imgURL: images['Brazil.png']
        }];

  return (
    <>
        <img src="https://opgg-static.akamaized.net/logo/20230421033010.53fba1927ccf4f92ac534310f318b6f9.png?image=q_auto,f_webp,w_auto&v=1682831347614" alt="logo" className='h-[13rem] rounded-full mb-10 mt-36'/>
        <form className='flex bg-gray p-5 pt-2 pb-2 rounded-full' onSubmit={handleSubmit}>
            <div className='pl-2'>
                <label for="regions" className='text-xs text-white font-bold'>Region</label><p></p>
                <select id="regions" name="regions" className='mr-5 bg-inherit text-slate-400 dark:bg-gray focus:outline-none'>
                    {regions.map((item) => {
                        return <option style={{backgroundImage: `url(${item.imgURL})`}}>{item.region}</option>
                    })}
                </select>
            </div>
            <div>
                <label for="name" className='text-xs text-white font-bold'>Search</label><p></p>
                <input id="name" name="summonerName" type="text" placeholder="Summoner Name" className='mr-5 w-80 bg-inherit focus:outline-none text-slate-400'/>
            </div>
            <button className='border-black border-l-2 text-slate-400 pr-4 pl-4'>Search</button>
        </form>
    </>
  )
}

export default SearchArea