import { useEffect } from 'react';
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001')

export default function Home() {

  useEffect(() => {
    socket.emit('hello')
  
    socket.on('hello-from-server', () => {
      console.log("Hi from server")
    })

  }, [])

  return <div>
      <button>Hi</button>
    </div>;
}

