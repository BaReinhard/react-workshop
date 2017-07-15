import React from 'react';
import ContactList from './contactList';
class ContactPageComponent extends React.Component{
    constructor(state,context){
        super(state,context);
        this.state={
            ascending:true,
            searchText:''
        }
    }
    sortOrder = () =>{
        this.setState({ascending: !this.state.ascending});
    }
    handleInput = (event)=>{
        this.setState({searchText:event.target.value});
    }
    render(){
        return(
            <div className="app-container">
                <input type="text" className="search-box" onInput={this.handleInput}/>
                <button className="ascending" onClick={this.sortOrder}>Alphabetize</button>
                <h1>Contacts</h1>
                < ContactList favorite={true} ascending={this.state.ascending} searchText={this.state.searchText}/>
                <hr/>
                < ContactList favorite={false} ascending={this.state.ascending} searchText={this.state.searchText}/>
            </div>
        );
    }   
}
export default ContactPageComponent;