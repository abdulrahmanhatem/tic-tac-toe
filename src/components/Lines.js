import {memo} from "react";

let Lines = memo(function Lines({count}){
    return (
      <div className="dashed">
        {
          [...Array(count)].map((li, i) => <Line key={i}/>)
        }
      </div>
    )
  })
  
function Line(){
    let random = Math.ceil(60 * Math.random()) ;  
    return (
        <svg viewBox="0 0 100 100" className="line">
        <path 
            d="M 0 0 L 0 100 z"
            strokeMiterlimit="0" 
            fill="none" 
            stroke="#dcb288"
            strokeWidth=".2"
            strokeDasharray={
            `
            ${Math.ceil(10)} 
            ${Math.ceil(6 * Math.random())} 
            ${Math.ceil(5 * Math.random())}
            `
            }
            strokeDashoffset="1">
            <animate
                attributeName="stroke-dashoffset"
                values="10;0"
                dur="10s"
                calcMode="linear"
                repeatCount="indefinite" />
        </path>
    </svg>
    )
}

export default Lines;