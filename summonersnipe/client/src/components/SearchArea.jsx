import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSearchDetails } from '../store/searchSlice'; 

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/regions', false, /\.(png|jpe?g|svg)$/));

function SearchArea() {

    const [summonerName, setSummonerName] = useState("");

    const [region, setRegion] = useState("North America");

    const searchDetails = {
        region: region,
        summonerName: summonerName
    }

    useEffect(() =>{
        console.log(summonerName);
        console.log(region);
    },[summonerName,region]);

    async function handleSubmit(e){
        e.preventDefault();
        if(summonerName !== " " && region !== " "){
            const response = await fetch("http://localhost:3001/summoner", {
                method: "POST",
                body: JSON.stringify(searchDetails),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        }
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
        <form className='flex bg-gray p-5 pt-2 pb-2 rounded-full'>
            <div className='pl-2'>
                <label for="regions" className='text-xs text-white font-bold'>Region</label><p></p>
                <select id="regions" name="regions" className='mr-5 bg-inherit text-slate-400 dark:bg-gray focus:outline-none' 
                    onChange={(e) => setRegion(e.target.value)}>
                    {regions.map((item) => {
                        return <option value={item.region} style={{backgroundImage: `url(${item.imgURL})`}}>{item.region}</option>
                    })}
                </select>
            </div>
            <div>
                <label for="name" className='text-xs text-white font-bold'>Search</label><p></p>
                <input id="name" name="summonerName" type="text" placeholder="Summoner Name" className='mr-5 w-80 bg-inherit focus:outline-none text-slate-400' 
                onChange={(e) => setSummonerName(e.target.value)}/>
            </div>
            <button className='border-black border-l-2 text-slate-400 pr-4 pl-4' onClick={handleSubmit}>Search</button>
        </form>
    </>
  )
}

export default SearchArea