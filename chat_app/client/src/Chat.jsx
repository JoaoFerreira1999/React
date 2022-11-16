import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

function Chat({socket, username, room}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  async function sendMessage(){
    console.log("yes");
    if(currentMessage !== ""){
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };

      await socket.emit("send_message", messageData);      
      setMessageList((prevMessages) => {
        return [...prevMessages, messageData];
      });
    } 
  };

  useEffect(() =>{
    socket.on("receive_message", (data) => {
      setMessageList((prevMessages) => {
        console.log(data, prevMessages);
        return [...prevMessages, data];
      })
    })
  }, [socket]);


  return (
    <div className='bg-gray-600 h-screen'>
      <div className='flex justify-center items-center pt-64'>
        <div className='outline rounded-lg'>
          <div className='flex items-center justify-center mb-2 mt-2'>Joined Chat: {room}</div>
          <div className='bg-white p-3'>
            <ScrollToBottom className='h-96 place-content-start overflow-auto'>
            {messageList.map((messageContent) => {
              return (
                <div>
                  <div className='mt-2 ml-1'>
                    <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="4 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-2 mr-3 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                      <div className="max-w-lg rounded-r-lg rounded-tl-lg" style={username === messageContent.author ? {backgroundColor: "green"} : {backgroundColor: "blue"}}>
                        <p className='m-2 break-words'>{messageContent.message}</p>
                      </div>
                    </div>
                    <div>
                      <p className='text-xs'>{messageContent.time}-{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            </ScrollToBottom>
          </div>
          <div className='outline rounded-lg flex'>
            <input className="w-full bg-gray-600 pl-2" 
            type="text" 
            placeholder="Hey..." 
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }} 
            onKeyDown={(event) => {
              event.key === "Enter" && sendMessage();
            }}
            />
            <button className='p-2 outline rounded-md' onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat