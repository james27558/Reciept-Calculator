import RecieptUIBox from './RecieptUIBox.tsx';
import './App.css';
import React from 'react';


function App() {
  let names = ["Nacoya"]

  return (
    <div className="App">
      <header className="App-header">
        
        <RecieptUIBox nameArray={names} recieptNo={0}/>

      </header>
    </div>
  );
}

export default App;
