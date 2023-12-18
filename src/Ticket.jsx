import TicketNum from "./Ticketnum"
import "./Ticket1.css"
export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <h2>Ticket</h2>
          {ticket.map((nums,idx)=>(
       <TicketNum nums={nums} key={idx}/>
          ))}
        </div>
    )
}