import React from 'react';


function Boxes({items,clickedItem}){

    var chosenItems= []

    const onItemClick= (item)=>{
        clickedItem(item)
        item= item.replace(' ','-')
        if($(`#box-item-${item}`).hasClass('has-background-light')){
            $(`#box-item-${item}`).removeClass('has-background-light')
            $(`#box-item-${item}`).addClass('has-background-success')
        }
        else{
            $(`#box-item-${item}`).removeClass('has-background-success')
            $(`#box-item-${item}`).addClass('has-background-light')
        }
    }

    return (
        <div className="columns is-gapless" >
           {
               items.map((item,index)=> 
                    <div key={index} id={`box-item-${item.replace(' ','-')}`} className="column box has-background-light" style={{cursor:'pointer',height: '35px'}}  
                            onClick={(e)=>onItemClick(item)} >
                        <p className="has-text-centered is-capitalized" style={{marginTop: '5px'}} >{item}</p>
                    </div> )
           }
        </div>
    )
}

export default Boxes