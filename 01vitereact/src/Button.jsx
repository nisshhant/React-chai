
import { useState } from "react"
import '01vitereact/src/styles.css'
const Button = function(){
    function clicked(){
        console.log("yes i am clicked")
        setcounter (counter+1)
    }

    function subclicked(){
        if(counter > 0){setcounter(counter-1)}
    }

    let [counter, setcounter] = useState(0) 
    
    return(
        <>
        <div>
            <button id = "start" onClick = {clicked} className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"> START {counter} 
            </button>
            <button id = "subtract" onClick = {subclicked} className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"> MINUS {counter} 
            </button>
        </div>
        </>
    )
}


export default Button