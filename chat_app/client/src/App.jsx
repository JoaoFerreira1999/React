import './App.css';
import io  from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  function joinRoom(event){
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setShowChat(true)
    }
  };

  return (
    <div className='bg-gray-600'>
      { !showChat ?
      (<div className='flex justify-center items-center h-screen'>
        <div className='space-y-5'>
        <h3 className='flex items-center justify-center'>Join a Chat</h3>
          <input 
          type="text" 
          placeholder="John..." 
          className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          onChange={(event) => {
            setUsername(event.target.value)
          }}
          />
          <input 
            type="text" 
            placeholder="Room ID" 
            className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            onChange={(event) => {
              setRoom(event.target.value)
            }}
          />
        <button onClick={joinRoom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">Join a Room</button>
        </div> 
      </div>) :
        (<Chat socket={socket} username={username} room={room}/>)}
    </div>
  );
}

export default App;
