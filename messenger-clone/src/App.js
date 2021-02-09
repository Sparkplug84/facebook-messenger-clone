import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    console.log(input);
    console.log(messages);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }

  return (
    <div className="App">
        <h1>Hello People!</h1>
        
        <form>
            <FormControl>
                <InputLabel>Enter a message...</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
            </FormControl>            
        </form>

        {
            messages.map(message => (
                <p>{message}</p>
            ))
        }
    </div>
  );
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.15.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

export default App;
