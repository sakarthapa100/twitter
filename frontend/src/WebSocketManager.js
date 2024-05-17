import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from './redux/tweetSlice';
import io from 'socket.io-client';

const WebSocketManager = () => {
  const dispatch = useDispatch();
  const socket = io('http://localhost:8080');

  useEffect(() => {
    socket.on('newTweet', () => {
      dispatch(getRefresh());
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, socket]);

  return null;
};

export default WebSocketManager;