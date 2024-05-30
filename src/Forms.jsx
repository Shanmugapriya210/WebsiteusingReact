import React, { Component } from 'react';

export default class Forms extends Component{

    state ={
        name: 'Your name here',
        rememberMe: true,
        country: 'UAE'
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({name: event.target.value});
    // }

    // handleSelect = (event) => {
    //     this.setState({country: event.target.value});
    // }

//     handleAll = (event, inputName, isChecked) =>{
// this.setState({
// [inputName] : isChecked 
//             ? event.target.checked 
//             : event.target.value
//         });
//     }

handleAll = (event) =>{
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
    [event.target.name] : isCheckBox 
                ? event.target.checked 
                : event.target.value
            });
        }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="#">
               <input 
               name="name"
               value={this.state.name}
               type="text" 
               onChange={this.handleAll}/>

               Eligible:  <input 
               name="rememberMe"
               type="checkbox" 
               checked={this.state.rememberMe} 
               value={this.state.rememberMe} 
               onChange={this.handleAll}
               />

               <select 
               name="country"
               value={this.state.country} 
               onChange={this.handleAll}
            >
                <option>Select your country</option>
                <option>Sri Lanka</option>
                <option>UAE</option>
                <option>Russia</option>
               </select><br />
               <input type='submit' value="REGISTER"/>
               </form>
            </div>
        );
    }
}