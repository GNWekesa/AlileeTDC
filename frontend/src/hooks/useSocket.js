import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');

    socketRef.current.on('welcome', (message) => {
      console.log('🟢 Server says:', message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return socketRef.current;
};

export default useSocket;
