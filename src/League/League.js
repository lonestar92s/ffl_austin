import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class League extends Component {
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
            return <li key={index}><Link to={{pathname:`/member/${members.first_name}`, state:members}}>{members.first_name} {members.last_name}</Link></li>
        })
        return (
            <div>
          <h1>Members</h1>
          <ul>{membersList}</ul>
          </div>
        );
    }
}