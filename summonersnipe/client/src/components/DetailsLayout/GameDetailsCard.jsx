import React from 'react'
import { useSelector } from 'react-redux'

function DetailsCard() {

  const userDetails = useSelector((state) => state.search.dataFields);
  const matchHistory = userDetails[0][2].matchHistory;

  console.log(matchHistory);

  return (
    <div className='pt-10 pb-10 p-5 h-auto bg-gray text-zinc-500 max-w'>
{/*       {matchHistory.map((match) => {
        return <div>{match}</div>
      })} */}

    </div>
  )
}

export default DetailsCard