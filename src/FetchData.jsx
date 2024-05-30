import React, { Component } from 'react';

export default class FetchData extends Component{

    state = {
        user: null,
        loading: false
    }

    async componentDidMount(){
        const urlToHit = await fetch("https://api.github.com/users");
        const usersData = await urlToHit.json();
        this.setState({user: usersData[0], loading: true});
        //  console.log(usersData[0]);
        // console.log(this.state.user);
    }

    render(){
        return(
            <div>
                {!this.state.user || !this.state.loading?
                (<div>Loading user details</div>) : (
                    <div>
                        {this.state.user.login}
                    </div>
                )    
            }
            </div>
        );
    }
}