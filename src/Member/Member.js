import React, { Component } from 'react';
const ordinal = require('ordinal-js')



export default class Member extends Component {

    render() {
        return ( 
            <div>
			 <h1>{this.props.location.state.first_name} {this.props.location.state.last_name}</h1>
			  <section>
			    <div>
			    	<ul>
			    	<li>Highest Finish: {ordinal.toOrdinal(this.props.location.state.highest_finish)} 
			    	</li>
			    	<li>Lowest Finish: {ordinal.toOrdinal(this.props.location.state.lowest_finish)}
			    		</li>
			    	</ul>
			    </div>
			   </section>
			</div>	
        )
    }
}
			   
