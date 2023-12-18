import Lottery from './Lottery';
import './App.css'


import { sum } from './helper';

function App(){
  let isWon=(ticket)=>{//argument of iswon is ticket array
    return sum(ticket)===18;
   }
  return (
   
  <>
<Lottery n={3}isWon={isWon}/>

{/* <Ludobox/> */}
  </>


  )
}


export default App;
