import React from 'react'

const BoxesDisplay = (props) => {
  return (
    <div>

    {props.scolor.map((item,index)=>
    <div key={index} style={{
        backgroundColor:item,
    border:'1px solid black',
        width:"100px",
        height:"100px",
    }}>

    </div>
)}


    </div>
  )
}

export default BoxesDisplay