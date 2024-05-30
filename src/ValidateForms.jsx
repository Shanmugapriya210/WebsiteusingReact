import React, { Component } from 'react';


const initialState={
    userName: "",
    userPassword: "",
    userEmail:"",
    nameError: "",
    passwordError: "",
    emailError: ""
}


export default class ValidateForms extends Component{

    state = initialState;

    validateFormFields = () => {
       let nameError = "";
       let passwordError = "";
       let emailError = "";

       if(!this.state.userName)
         nameError = "Please enter your name"; 
       if(!this.state.userEmail.includes('@'))
         emailError = "Please enter a valid email";
       if(nameError || emailError){
        this.setState({nameError, emailError});
        return false;
       }
       return true;
    }

    handleChange = (event) =>{
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
    [event.target.name] : isCheckBox 
                ? event.target.checked 
                : event.target.value
            });
        }

    handleSubmit = (event) => {
        event.preventDefault();

        const isFormValid = this.validateFormFields();

        if(isFormValid){
            console.log(this.state);
            this.setState(initialState);
        }
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input 
                    type="text" 
                    name="userName" 
                    placeholder="Your name"
                    onChange={this.handleChange}
                    value={this.state.userName}
                    />
                    </div>
                    <div style={{color: 'red', fontSize: 12}}>
                        {this.state.nameError}
                    </div>
                   <div>
                     <input 
                    type="password" 
                    name="userPassword" 
                    placeholder="Your password"
                    onChange={this.handleChange}
                    value={this.state.userPassword}
                    /></div>
                    <div>
                     <input 
                    type="email" 
                    name="userEmail" 
                    placeholder="Your email here"
                    onChange={this.handleChange}
                    value={this.state.userEmail}
                    />
                    </div>
                    <div style={{color: 'red', fontSize: 12}}>
                        {this.state.emailError}
                    </div>
                    <div>
                    <input type="submit" value="LOGIN"/>
                    </div>

                </form>
            </div>
        );
    }
}