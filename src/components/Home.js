import React, { Component } from 'react';
import MyForm from './MyForm';

export default class Home extends Component{
    submit = (values) =>{
        console.log(values)
    }
    render(){
        return(
            <MyForm onSubmit={this.submit}/>
        )
    }
}
