import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  //track length of password we need the useState
  const [length, setLength] = useState(8);

  const [numberAllowed, setnumberAllowed] = useState(false);

  const [character, setcharacter] = useState(false);

                   // we have to call password generator frequently therefore we have to use callbacke hook here  **** CONCEPT OF memoize ****

  const [password, setPassword] = useState(" ");
  
  // useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "0123456789";
    if (character) str += "!@#$%^&*()_+-={}[]~`' ";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // this is how we generate the random number

      pass += str.charAt(char);                    // here we got the index value of array So we have to pickup the character form the string
    }

    setPassword(pass);
  }, [length, numberAllowed, character, setPassword]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  }, 
[password] )

  useEffect(()=>{
    passwordGenerator() 
  } , [length , numberAllowed, character,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}

        />
        <button
              onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="curser-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}  
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
              setcharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
  );
}

export default App;
