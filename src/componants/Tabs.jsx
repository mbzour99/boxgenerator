import React, { useState } from 'react'

const Tabs = ({ items }) => {
    const [desc, setDesc] = useState("");
    const mainbox = {
        display: "flex",
        flexDirection: "column",
        margin: "0 20%",
    }
    const tabs = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "5px",
    }
    const description = {
        border: "1px solid black",
        padding: "1rem",
        fontSize: " 3rem",
    }
    const signleTab = {
        padding: "1rem",
         color:'white',
        backgroundColor: 'black',
    }
    return (
        <div style={mainbox}>
            <div style={tabs}>
                {items.map((item, id) => <h1 style={signleTab} key={id} onClick={(e) => setDesc(item.desc)}>{item.title}</h1>)}
            </div>
            <div style={description}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Tabs
