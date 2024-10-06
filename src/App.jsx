
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChatInput from './components/chatInput';
import ChatMessages from './components/chatMessages';
import socket from './socket';

const App = () => {
  useEffect(() => {
    socket.connect();
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <div style={{ padding: '20px', backgroundImage:"url('https://img2.wallspic.com/previews/1/2/2/0/6/160221/160221-whatsapp-blue-green-colorfulness-pattern-x750.jpg')" }}>
        <ChatMessages />
        <ChatInput />
      </div>
    </Provider>
  );
};

export default App;

