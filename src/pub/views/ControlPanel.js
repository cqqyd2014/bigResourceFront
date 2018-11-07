import React ,{Component} from 'react';
import Counter from './Counter.js';
import summary from './summary.js';

const style={
  margin:'20px'
};
class ControlPanel extends Component{
  render(){
    return(
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second"/>
        <Counter caption="Third"/>
      </div>
    );
  }
}
