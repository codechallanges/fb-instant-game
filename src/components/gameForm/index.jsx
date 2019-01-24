import React, { Component } from 'react';
import AppTemplate from '../template';
import Question from './Question';
import Boxes from './Boxes';
import Slider from './Slider';
import Calculate from '../../utils/calculate';

class index extends Component {
    state={
        answers: {
            ['1']: 'no',
            ['2']: [],
            ['3']: [],
            ['4']: 0,
            ['5']: 0,
            ['6']: 0,
            ['7']: 0,
            ['8']: [],
            ['9']: 0,
            ['10']: 'no'
        }
    }


    onBoxItemClick= (item,question)=>{
        const {answers}= this.state
        if(answers[question].includes(item)){
            this.setState({answers: {...answers, [question] : answers[question].filter(it=> it !== item)  } })
        }
        else{
            this.setState({answers: {...answers, [question]: [...answers[question], item] }})
        }
    }

    onItemSelect= (selector,question)=> {
           const {answers}= this.state
           this.setState({answers: {...answers, [question]: $(selector).val() }  })
    }

    onSliderUpdate= (newValue,question)=>{
          const {answers}= this.state
          this.setState({answers: {...answers, [question]: newValue }})
    }

    submitValues= ()=>{
        const {onDisplayResult}= this.props

        var total= Calculate(this.state.answers)

        setTimeout(()=>{
            onDisplayResult(total)
        },1500)
    }

    render() {
        return (
            <AppTemplate>
                  <div className="section">
                    <div className="container is-fluid is-10" >
                            <div className="columns is-centered is-vcentered" >
                                    <div className="column is-four-fifths">
                                        <div className="field is-horizontal" >
                                            <Question name="question1" >
                                                 Did you initilize your project using create-react-app utility ?
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field is-expanded" >
                                                    <div className="control" >
                                                        <div className="select is-fullwidth" >
                                                            <select name="question-1" id="question1" 
                                                                    onChange={(e)=> this.onItemSelect('#question1','1')   } >
                                                                <option value="no">no</option>
                                                                <option value="yes">yes</option> 
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal" >
                                            <Question name="question2" >
                                                    Which browser build tools you leverages ? 
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field" >
                                                    <div className="control is-expanded" >
                                                        <div className="is-fullwidth" >
                                                            <Boxes items={['gulp','grunt','webpack']} clickedItem={(item)=>this.onBoxItemClick(item,'2')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal" >
                                            <Question name="question3" >
                                                    What environment did you set for your projects ? 
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field" >
                                                    <div className="control is-expanded" >
                                                        <div className="is-fullwidth" >
                                                            <Boxes items={['development','producton','testing']} clickedItem={(item)=>this.onBoxItemClick(item,'3')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question4" >
                                                    How many components does your app contain ? 
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field" >
                                                        <div className="control is-expanded" >
                                                            <Slider name="question4" onValueUpdate={ (value) => this.onSliderUpdate(value,'4') } />
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question5" >
                                                    How many pure components you have ? 
                                            </Question>
                                            <div className="field-body">
                                                <div className="field">
                                                   <div className="control is-expanded">
                                                        <Slider name="question5" onValueUpdate={ (value) => this.onSliderUpdate(value,'5') } />
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question6" >
                                                    What about stateful components ? 
                                            </Question>
                                            <div className="field-body">
                                                <div className="field">
                                                   <div className="control is-expanded">
                                                        <Slider name="question6" onValueUpdate={ (value) => this.onSliderUpdate(value,'6') } />
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question7" >
                                                    How much test coverage you did for your app (percent) ? 
                                            </Question>
                                            <div className="field-body">
                                                <div className="field">
                                                   <div className="control is-expanded">
                                                        <Slider name="question7" onValueUpdate={ (value) => this.onSliderUpdate(value,'7') } />
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question8" >
                                                    React 16 fixtures you used ? 
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field" >
                                                    <div className="control is-expanded" >
                                                        <div className="is-fullwidth" >
                                                            <Boxes items={['react fragements','error boundary','context API']} clickedItem={(item)=>this.onBoxItemClick(item,'8')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question9" >
                                                    How many routes you have in your app ? 
                                            </Question>
                                            <div className="field-body">
                                                <div className="field">
                                                   <div className="control is-expanded">
                                                        <Slider name="question9" maxValue={10} onValueUpdate={ (value) => this.onSliderUpdate(value,'9') } />
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal" >
                                            <Question name="question10" >
                                                 Did you used react router ?
                                            </Question>
                                            <div className="field-body" >
                                                <div className="field is-expanded" >
                                                    <div className="control" >
                                                        <div className="select is-fullwidth" >
                                                            <select name="question-10" id="question10" 
                                                                        onChange={(e)=> this.onItemSelect('#question10','10')} >
                                                                <option value="no">no</option>
                                                                <option value="yes">yes</option> 
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>   
                                    <div className="column is-one-fifth has-text-centered">
                                            <a className="button is-large" href="#" onClick={this.submitValues} >
                                                <span>Calculate</span>
                                            </a>
                                    </div>
                            </div>
                        </div>
                  </div>
            </AppTemplate>
        );
    }
}

export default index;