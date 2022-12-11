import './App.css';
import Colorform from './componants/Colorform';
import BoxesDisplay from './componants/BoxesDisplay';
import React ,{ useState } from 'react'
;
function App() {
  const [mcolor,setMcolor]= useState([]);
  
  const myboxes=(mmcolor)=>{
    setMcolor([...mcolor,mmcolor])
  }
  return (
    <div className="App">

  <Colorform sentmycolor= {myboxes}></Colorform>
  <BoxesDisplay scolor={mcolor}></BoxesDisplay>

    </div>
  );
}

export default App;
