import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function DetailsCard() {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.search.dataFields);
  const matchHistory = userDetails[0][3].matchHistory;

  console.log(matchHistory);

  const matchIds = {
    id: ""
  }

  useEffect(() => {
    fetchMatchHistoryDetails();
  });

  const fetchMatchHistoryDetails = async() => {
    const response = await fetch("http://localhost:3001/matchhistory",{
      method: "POST",
      body: JSON.stringify(matchHistory),
      headers: {
          'Content-type': 'application/json'
      }
    })
    const data = await response.json();
    //console.log(data);
    dispatch();
  }

  return (
    <div className='pb-10 mb-5 p-5 bg-gray text-zinc-500 max-w'>
      {matchHistory.map((match) => {
        return <div>{match}</div>
      })}

    </div>
  )
}

export default DetailsCard