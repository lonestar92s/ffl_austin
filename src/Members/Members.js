import React, { Component } from 'react';
const ordinal = require("ordinal-js");


export default class Members extends Component {
    state = {
        members: []
    }

    getMembers = async () => {
        try {
            const members = await fetch('http://localhost:9000/members/');
            const membersJson = await members.json();
            this.setState({ members: membersJson })
            return membersJson
        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }
    }


    componentDidMount() {
        this.getMembers().then((data) => console.log(data, 'from FFL'));
    }

    render() {
        const membersList = this.state.members.map((members, index) => {
            return <li key={index}>{members.first_name} {members.last_name} ** Highest Finish: {ordinal.toOrdinal(members.highest_finish)} ** Lowest Finish: {ordinal.toOrdinal(members.lowest_finish)}</li>
        })
        return (
            <div>
          <h1>Members</h1>
          <ul>{membersList}</ul>
          </div>
        );
    }
}