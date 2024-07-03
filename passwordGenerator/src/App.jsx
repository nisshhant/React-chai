import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symAllowed, setSymAllowed] = useState(false);
  const [password, setPass] = useState('');

  const passwordRef = useRef(null);

  const Passgen = useCallback(() => {  
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '1234567890';
    if (symAllowed) str += '!@#$%^&*()_+-=[]{};:,.<>?';
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [numAllowed, length, symAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, length);
      window.navigator.clipboard.writeText(password);
    }
  }, [password, length]);

  useEffect(() => {
    Passgen();
  }, [numAllowed, length, symAllowed, Passgen]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 p-3 bg-gray-700'>
        <div className='mb-3'>
          Password Generator
        </div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3' 
            placeholder='Password' 
            readOnly
            ref={passwordRef}
          />
          <button 
            className='bg-gray-500 ml-2 rounded-none text-black p-3 transition duration-300 ease-in-out transform hover:bg-gray-300 focus:bg-gray-500'
            onClick={copyPasswordToClipboard}
          > 
            Copy 
          </button>
        </div> 
        <div className='mb-4'>
          <label>Password Length: {length}</label>
          <input 
            type='range' 
            min='4' 
            max='34' 
            value={length}  
            className='w-full cursor-pointer'
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
        </div>
        <div className='mb-4'>
          <label>
            <input 
              type='checkbox' 
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed(prev => !prev);
              }}
            /> 
            Include Numbers
          </label>
        </div>
        <div className='mb-4'>
          <label>
            <input 
              type='checkbox' 
              defaultChecked={symAllowed}
              onChange={() => {
                setSymAllowed(prev => !prev);
              }}
            /> 
            Include Symbols
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
