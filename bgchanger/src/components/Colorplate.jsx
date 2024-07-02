import React from 'react'
import '../index.css'
function Colorplate() {
  return (<>
    <div className="flex flex-col min-h-screen">
  <div className="flex-grow">Something
  </div>
  <div className="bg-gray-800 text-white p-4">
    <div className='flex flex-row justify-center'>
    <button className = 'bg-red-600 rounded-md pl-5 pr-5 pt-1 pb-1 m-2'>RED</button>
        <button className = 'bg-blue-400 rounded-md pl-5 pr-5 pt-1 pb-1 m-2'>BLUE</button>
        <button className = ' bg-green-500 rounded-md pl-5 pr-5 pt-1 pb-1 m-2 '>GREEN</button>
        <button className = 'bg-yellow-300 rounded-md pl-5 pr-5 pt-1 pb-1 m-2'>YELLOW</button>
        <button className = 'bg-pink-400 rounded-md pl-5 pr-5 pt-1 pb-1 m-2' >PINK</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Colorplate