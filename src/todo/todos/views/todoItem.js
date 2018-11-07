import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

const TodoItem=({onToggle,onRemove,completed,text})=>{
  const checkedProp=completed?{checked:true}:{};
  return (
    <li className='todo-item' style={
      {
        textDecorateion:completed?'line-through':'none'
      }
    }>
    <input className="toggle" type='checkbox' {...checkedProp} readOnly onClick={onToggle}/>
    <label className="text">{text}</label>
    <button className="remove" onClick={onRemove}>X</button>
    </li>
  );
}
TodoItem.propTypes={
  onToggle:PropTypes.func.isRequired,
  onRemove:PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired
}

export default connect()(TodoItem);
