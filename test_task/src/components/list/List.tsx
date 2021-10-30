import React from 'react';
import { ListProps } from './ListProps'
import Button from '../button/Button';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'


class List extends React.Component<ListProps, {}> {
    constructor(props: ListProps){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>
                <h1>{this.props.header}</h1>
                <ul css={{
                    listStyleType: 'none',
                    width: '100%',
                    textAlign: 'left'
                }}>
                    {this.props.elements.map((item) => {
                        return (
                            <li key={this.props.elements.indexOf(item)} onClick={()=>{
                                this.props.elements.splice(this.props.elements.indexOf(item), 1)
                                this.setState({})
                            }} css={{
                                display:'grid',
                                gridTemplateColumns: '1fr 7fr',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>{item}
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default List