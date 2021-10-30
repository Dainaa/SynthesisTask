import React from 'react';
import './App.css';
import Button from './components/button/Button'
import List from './components/list/List'

/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx } from '@emotion/react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: ["Make list"]
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    let val = document.getElementById('input').value
    if(val !== ""){
      //there is a value to add
      this.setState((prevState)=>{
        return{
          items: prevState.items.concat(val)
        }
      })
    }
    document.getElementById('input').value = ""
  }
  render(){
    return (
      <div className="App" css={{
        overflow:'hidden'
      }}>
      <p css={{
        display:'block'
      }}>Use the input box to add items to the list. Click on an item to remove it from the list.</p>
      <div className="inputContainer" css = {{
        width: '100%',
        display:'flex',
        justifyContent: 'center',

      }}>
      
      <input id="input" type="text" placeholder="Add a new item"></input>
      <Button type='primary' block={false} onClick={this.addItem}>Add Item</Button>
      </div>
        <List header="To Do List" elements={this.state.items}/>
      </div>
    );
  }
}

export default App;
