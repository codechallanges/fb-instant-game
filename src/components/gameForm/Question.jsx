import React from 'react';


function Question(props){
   return (
    <div className="column is-normal  is-three-fifths">
        <label htmlFor={props.name} >
            {props.children}
        </label>
    </div>
   )
}


export default Question