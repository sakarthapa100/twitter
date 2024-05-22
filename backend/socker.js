// src/socket.js
import { io } from 'socket.io-client';

// Replace 'http://localhost:5000' with your server URL
const socket = io('http://localhost:8000', {
  query: { userId: 'CURRENT_USER_ID' } // Replace 'CURRENT_USER_ID' with the actual user ID
});

module.exports=socket
