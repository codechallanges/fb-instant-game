import React from 'react';
import 'nouislider';
import '@assets/css/nouislider.min.css';


export default class Slider extends React.Component {
    state={
        currentValue: 0
    }

    componentDidMount(){
        const {onValueUpdate, name,maxValue}= this.props
        
        var slider= document.getElementById(`slider-container-${name}`)
        noUiSlider.create(slider ,{
            start: [this.state.currentValue],
            connect: true,
            range: {
                'min': 0,
                'max': maxValue || 100
            } 
        })

        slider.noUiSlider.on('update',(value)=>{
            this.setState({currentValue: parseInt(value[0]) },()=> onValueUpdate(this.state.currentValue) )
        })

         
    }

    render(){
        const {name}= this.props
        return (
            <div>
               <div id={`slider-container-${name}`} ></div>
               <div className="slider-current-value">{this.state.currentValue}</div>
            </div>
        )
    }
}