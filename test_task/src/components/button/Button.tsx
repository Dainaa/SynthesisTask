import React from 'react';
import {ButtonProps} from './ButtonProps'

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'




  class Button extends React.Component<ButtonProps, {}> {

    render() {
      return (      
        <button onClick = {this.props.onClick} 
        css={
            this.props.type==='primary'?{
            backgroundColor :'#007bff',
            color: '#fff',
            width: this.props.block === true ? '100%': 'min-content',
            '&:hover':{
                backgroundColor: '#0069d9',
                cursor:'pointer'
            }
        }:this.props.type === 'secondary'?{
            backgroundColor: '#6c757d',
            color: '#fff',
            width: this.props.block === true ? '100%': 'min-content',
            '&:hover':{
                backgroundColor: '#343a40',
                cursor:'pointer'
            }
        }:this.props.type === 'warning'?
        {
            //assuming type = warning, then
            backgroundColor:'#ffc107',
            color: '#fff',
            width: this.props.block === true ? '100%': 'min-content',
            '&:hover':{
                backgroundColor: '#ffb507',
                cursor:'pointer'
            }
        }:{

        }}
        >
            {this.props.children}
        </button>
      );
    }
  }

export default Button