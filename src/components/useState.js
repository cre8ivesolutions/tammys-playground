import {useState} from "react";
import React from "react";

// useState allows Inverse Data Flow to allow data to be sent from the child to the parent.
export default function UseSetState(){
    const [state, setState] = useState("This is the starting 'useState'")
    return(
    <div className="box">
        <hr/>
        <h2> This is the useState section! </h2>
        <h3>The current state is '{state}'</h3>
        <h3> Use setState to change the 'state'</h3>
        <label type="text">Enter the new setState here: </label>
        <input type="text"
        onChange={(e) => {setState(e.target.value)}}/>
        <br/>
        <button type="submit" text="you dont really need to submit this info">NOT ACTUALLY A SUBMIT BUTTON</button>
        <br/>
        <hr/>
        </div>
    )
}