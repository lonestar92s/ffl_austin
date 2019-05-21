import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../App.css'
const ordinal = require('ordinal-js')



export default class Member extends Component {
	state = {
		chartData:{
			labels: [2014, 2015, 2016, 2017, 2018],
			datasets:[
				{
					label: '2014',
					data:[
						this.props.location.state.finishes[0],
						this.props.location.state.finishes[1],
						this.props.location.state.finishes[2],
						this.props.location.state.finishes[3],
						this.props.location.state.finishes[4],
						this.props.location.state.finishes[5]
					],
					backgroundColor:[ 
						'rgba(255,99,132,.06)',
						'rgba(255,50,50,.75)',
						'rgba(100,25,25,.75)'
					]
				}
			]
		}
	}
    render() {
        console.log(this.props.location.state.finishes)
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
			    	
			    		<h3>Trend</h3>
			    			<Line
  								data={this.state.chartData}
  								options={{ maintainAspectRatio: false }}
							/>
			    	
			    </div>
			   </section>
			</div>
        )
    }
}