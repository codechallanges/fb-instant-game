import React from 'react';
import AppTemplate from '../template';


export default class Score extends React.Component {
    state={
        score:0
    }

    componentDidMount(){
        for(let i=0; i< 50; i++){
            setTimeout(()=>{
                this.setState({score: Math.floor(Math.random() * Math.floor(100)) }) 
            },i*100)
            
            // setting final result
            if(i === 49){
                setTimeout(()=>{
                    this.setState({score: this.props.score})
                },50*100)
            }
        }
    }

    shareFacebook= ()=>{
        const {score}= this.props
        FBInstant.shareAsync({
            intent: 'REQUEST',
            image: 'image',
            text: 'Hey that\'s the rating of latest react hustle, what about you?',
            data: { myReplayData:  score },
        })
    }


    render(){
        return (
            <AppTemplate>
                <div className="section" >
                    <div className="container">
                        <div className="flex-column has-text-centered" >
                            <div className="column" >
                                <p>Your react app score</p>
                                <p>{this.state.score}</p>
                            </div>
                            <div className="column" >
                                <a className="button is-link is-outlined" href="#" 
                                    onClick={this.shareFacebook} >Share to Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </AppTemplate>
        )
    }
}