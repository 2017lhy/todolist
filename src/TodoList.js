import React from 'react';
import TodoItem from './TodoItem';
import { gray } from 'ansi-colors';

class TodoList extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
  }

  handleBtnClick()
  {
    this.setState(
      {
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
      }
    )
  }

  handleInputChange(e)
  {
    this.setState(
      {
        inputValue:e.target.value
      }
    )
  }

  handleDelete(index)
  {
    const list = [...this.state.list];
    list.splice(index,1)
    this.setState({list})
  }

  getTodoItems()
  {
    return(
      this.state.list.map((p,i)=>
      {
        return (
          <TodoItem 
            delete={(i)=>this.handleDelete(i)} 
            text={p} 
            key={i} 
            index={i} 
          />
        ) 
      })
    )
  }

  render() 
  {
    return (
      // 类似vue的template
      <React.Fragment> 
        <div>
          <input 
            type="text" 
            value={this.state.inputValue} 
            onChange={(e)=>this.handleInputChange(e)} 
          />
          <button 
            onClick={()=>this.handleBtnClick()}
            style={{background:gray,color:'#fff'}}
          >add</button>
        </div>
        <ul
          style={{padding:0}} 
        >{this.getTodoItems()}</ul>
      </React.Fragment>
    )
  }
}

export default TodoList;
