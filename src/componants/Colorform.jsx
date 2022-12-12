import React, { useState } from 'react';

const Colorform = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
       props.sentmycolor(color);
     
    };
    return (
        <form onSubmit={ handleSubmit }>
            <p>Enter the color <input type="text" onChange={(e)=>setColor(e.target.value)}></input> </p>   
            <input type="submit"  value="Add A Box" />
        </form>
    );
}; 
    
export default Colorform;
