import Chai from "./Chai";


function App() {

  const username = " im the Master of react "
 
  return (
   // <h1> Mastering React in Vite  </h1>


<>   {/* fragment  */}


<Greeting name="React!"></Greeting>



<h1>{username}</h1>{/* this is how we enter variable in the tages */}


   <Chai/>

   </>
  )
}
function Greeting(props) {
  return(
    <h1>Hello,{props.name}!</h1>
  )
}







export default App
