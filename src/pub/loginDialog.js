import React,{Component} from 'react';
import Counter from './ClickCounter.js';

const style={margin:'20px'};

class ControlPanel extends Component{
  constructor(props){
    super(props);
    this.onCouterUpdate=this.onCouterUpdate.bind(this);
    this.initValues=[0,10,20];
    const initSum=this.initValues.reduce((a,b)=>a+b,0);
    this.state={
      sum:initSum
    };
  }
  onCouterUpdate(newValue,previousValue){
    const valueChange=newValue-previousValue;
    this.setState({sum:this.state.sum+valueChange});
  }
  render(){
    return (
      <div style={style}>
        <Counter onUpdate={this.onCouterUpdate} caption="first"/>
        <Counter onUpdate={this.onCouterUpdate} caption="Second" initValue={this.initValues[1]}/>
        <Counter onUpdate={this.onCouterUpdate} caption="Third" initValue={this.initValues[2]}/>
        <hr/>
        <div>Total Count:{this.state.sum}</div>
      </div>
    );

  }
}
export default ControlPanel
