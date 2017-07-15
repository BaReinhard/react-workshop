import React from 'react';
import ContactList from '../contact/contactList';
class HomePageComponent extends React.Component{
    constructor(state,context){
        super(state,context);
        
    }
    
    render(){
        return(
            <div className="app-container">
                <h1> Welcom to Brett's Contact App</h1>
            </div>
        );
    }   
}
export default HomePageComponent;