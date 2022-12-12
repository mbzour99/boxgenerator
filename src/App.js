import './App.css';
import Colorform from './componants/Colorform';
import BoxesDisplay from './componants/BoxesDisplay';
import React ,{ useState } from 'react';
import Tabs from './componants/Tabs';

function App() {
  const [mcolor,setMcolor]= useState([]);
  // const mytexts=["Tab1 containing is showing here !!","Tab2 containing is showing here !!","Tab3 containing is showing here !!"]
  
  const [items, setItems] = useState([
    {
      title: "Tab1",
      desc: "Tab1 Components message",
    },
    {
      title: "Tab2",
      desc: "Tab2 Components message",
    },
    {
      title:"Tab3",
      desc: "Tab3 Components message",
    }
  ]);
  const myboxes=(mmcolor)=>{
    setMcolor([...mcolor,mmcolor])
  }
  return (
    <div className="App">

  <Colorform sentmycolor= {myboxes}></Colorform>
  <BoxesDisplay scolor={mcolor}></BoxesDisplay>
  <Tabs items={items}></Tabs>
    </div>
  );
}

export default App;
