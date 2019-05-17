import React, { Component } from 'react'
const ordinal = require('ordinal-js')



export default class Member extends Component {

    render() {
        return (
            <div>
			 <h1>{this.props.location.state.first_name} {this.props.location.state.last_name}</h1>
			 
			   
			</div>
        )
    }
}
