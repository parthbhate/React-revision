import { useState } from 'react'     //using hook here 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

 // let counter = 5 

  const addValue = () =>{
    
    //counter = counter + 1;
  setCounter(counter + 1)
 // setCounter(counter)
 

  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter -1 ) ;
    }
  };


  return (
    <>
     <h1> Counter project with react </h1>
     <h2>Counter Value:{counter} </h2>
     
     {/* <button onClick={() => setCounter(counter + 1)}>Click me</button>  */} {/* by using above we can directly use setcounter in button without creating any extra variable  */}
     
    
     <button
     onClick={addValue}
     >Add value</button>
     <br/><br/>

     <button
     onClick={removeValue}>remove value</button>
<p></p>
    </>
  )
}

export default App
