import React from 'react';
import GameForm from './gameForm';
import Result from './result';

import './app.css'



class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            loading: false,
            loadingError: false,
            displayResult: false,
            score: 0
        }
    }

    componentDidMount(){
       this.setState({loading: true})
       FBInstant.initializeAsync()
        .then(()=>{
            FBInstant.startGameAsync()
            .then(this.onStart)
        })
        .catch(this.onError)

    }

    onError= (err)=>{
       this.setState({loadingError: true})
    }


    onStart= ()=>{
        this.setState({loading: false})
    }

    onDisplayResult= (total)=>{
        this.setState({displayResult: true,score: total})
    }

    render(){
        const {loading,displayResult,score}= this.state
        return (
            <div className="app" >
                {
                    //loading ? <p>Preparing app...</p>:
                        displayResult ? <Result score={score} />: <GameForm onDisplayResult={total=> this.onDisplayResult(total) } />
                }
            </div>
        )
    }
}

export default App 