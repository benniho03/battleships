import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'
import Board from './_board';

const socket = io('http://localhost:3001')

export default function Home() {

  const [serverStatus, setServerStatus] = useState("")

  useEffect(() => {
    socket.emit('hello')
  
    socket.on('hello-from-server', () => {
      setServerStatus("Server connected")
    })

  }, [])

  function sendToServer(){
    socket.emit('hello') 
    console.log("sending...")
  }

  return <div>
      <button onClick={sendToServer}>Hi</button>
      <div>Server Status: {serverStatus}</div>
      <Board />
    </div>;

}

