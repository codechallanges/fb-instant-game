import React from 'react';
import GameForm from './gameForm';
import Result from './result';

import './app.css'



class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('hello')
       /* FBInstant.initializeAsync()
        .then(()=>{
            FBInstant.startGameAsync()
            .then(this.onStart)
        })*/

    }

    onError= (err)=>{
        console.log('error')
    }


    onStart= ()=>{
        //document.getElementsByClassName('message')[0].innerHTML('hhehehehehehehe')
    }

    render(){
        return (
            <div className="app" >
                App component
            </div>
        )
    }
}

export default App 