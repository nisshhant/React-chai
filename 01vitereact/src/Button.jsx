import { useState } from "react"

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
            <button id = "start" onClick = {clicked}> START {counter} 
            </button>
            <button id = "subtract" onClick = {subclicked}> MINUS {counter} 
            </button>
        </div>
        </>
    )
}


export default Button