import { useState } from "react"

 function App() {
  const [color,setColor] = useState("olive")

  return (
    <div   className="w-full h-screen flex items-center justify-center bottom-12 duration-200"
     style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
      {/* <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"> */}
      
        <button 
        onClick={()=>setColor("red")}   className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"red"}}> red</button>
         <button 
         onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"green"}}> green</button>
         <button 
         onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"blue"}}> blue</button>
        <button 
         onClick={()=>setColor("grey")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"grey"}}> grey</button>
        <button 
         onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"yellow"}}>yellow</button>
        <button 
         onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"pink"}}> pink</button>
        <button 
         onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"purple"}}> purple</button>
        <button 
         onClick={()=>setColor("lavender")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"lavender"}}> lavender</button>
        <button 
          onClick={()=>setColor("white")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"	#F5F5F5"}}> white</button>
        <button 
         onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full"
        style={{backgroundColor:"#3D3D3D"}}> black</button>
      </div>
          </div>
          
  )
}

export default App