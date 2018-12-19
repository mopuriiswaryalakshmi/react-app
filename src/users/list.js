import React from 'react'
import axios from 'axios'
import UserDetail from './user-detail'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2> Listing Users - {this.state.users.length} </h2>
                <ul>
                    { this.state.users.map(user => {
                        return <UserDetail key={user.id} name={user.name} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Users;