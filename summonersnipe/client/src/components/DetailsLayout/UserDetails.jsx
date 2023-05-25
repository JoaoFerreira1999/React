import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addChampions } from '../../store/championMasterySlice';

function UserDetails() {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.search.dataFields);
  const championDetails = useSelector((state) => state.champions.champions);

  const idRegion = {
    regionTag: userDetails[0][0].regionTag,
    id: userDetails[0][0].id
  }


  const fetchChampMastery = async() => {
    const response = await fetch("http://localhost:3001/championmastery",{
      method: "POST",
      body: JSON.stringify(idRegion),
      headers: {
          'Content-type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    dispatch(addChampions(data));
  }

  useEffect(() =>{
    fetchChampMastery();
    console.log(championDetails);
  }, []);

  return (
    <div className='flex flex-row mt-auto mb-auto ml-10 max-h-[220px]'>
      <div className='w-2/4 h-auto relative'>
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${userDetails[0][1].iconId}.png`} alt="Icon" className='rounded-xl z-10'/>      
        <div className='bg-stone-950 w-min rounded-2xl p-1 z-20 absolute bottom-[-10px] ml-[89px]'>{userDetails[0][1].level}</div>
      </div>
      <div className='ml-5'>
        <div className='font-bold text-xl'>{userDetails[0][1].name}</div>
        <div>
          {championDetails.slice(0,3).map((champion) => {
            return <>{champion[0].champions[0].championId}</>
          })}
        </div>
      </div>
    </div>
  )
}

export default UserDetails