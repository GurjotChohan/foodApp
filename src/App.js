import { useState } from 'react';
import './App.css';

function App() {

  const [query, setquery] = useState("")
  
  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className='app_search'>
        <input type="text" 
        placeholder = "enter ingreident" 
        value = {query} 
        onChange={(e) => setquery(e.target.value)}/>
        <input type="sumbit" value = "Search"/>
        </form>
    </div>
  );
}

export default App;
