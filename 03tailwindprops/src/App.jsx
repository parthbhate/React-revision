
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
//  const myyobj ={
//     username: "hitesh",
//     age:24
//   }

  return (
    <>
    
   <h1 className='bg-fuchsia-500 text-black  p-5 rounded-xl'>Tailwind Test </h1>
   <Card username="chaiaurcode" btnText="Click me "/>
   <Card username="test"  btnText="visit me "/>

   {/* here we have created 2 cards  changed btn in that  */}

    </>
  )
}

export default App
