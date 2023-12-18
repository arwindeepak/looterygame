import { useState } from "react"
import "./ticket.css";
import { genTicket } from "./helper";

import Ticket from "./Ticket";


export default function Lottery({n=2,isWon}){
    let style={marginTop:"34px",
                backgroundColor:"orange"}
    let[ticket,setTicket]=useState(genTicket(n));
    let isWinnig=isWon(ticket);
 
 let buttonOnClick=()=>{
    setTicket(genTicket(n));
 }
 return <div>
<h1>Lottery Game</h1>
<div className="ticket-number">

<Ticket ticket={ticket}/>

</div>
<h3>{isWinnig&&"congratulations you won the game"}</h3>
<button onClick={buttonOnClick}style={style}>Click on ticket</button>

</div>  
  
}