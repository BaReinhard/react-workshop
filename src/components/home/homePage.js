import React from 'react';
import ContactList from '../contact/contactList';
let newTitle = '';
class HomePageComponent extends React.Component{
    
    constructor(state,context){
        super(state,context);
    this.state = {
        title:''
    };
    }
    fetchTitle=()=>{
        let np = new Promise((resolve,reject)=>{
            fetch("https://api.github.com/users/bareinhard").then(function(response){
return response.json()
}).then(function(nr){
    newTitle= nr.bio
    resolve(nr.bio);
})
        });
    }
        

    getTitle=()=>{
        fetch("https://api.github.com/users/bareinhard").then(function(response){
return response.json()
}).then(function(nr){
    newTitle= nr.bio
}).then(()=>{

        this.setState({title:newTitle});
        });

        
    }
    render(){
        return(
            <div className="app-container">
                <h1>{this.state.title}{this.getTitle()}</h1>
            </div>
        );
    }   
}
export default HomePageComponent;