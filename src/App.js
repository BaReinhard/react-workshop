import React from 'react';
import ContactList from './components/contact/contactList';
function App(){

    return(
        <div className="app-container">
            <h1>Contacts</h1>
            < ContactList favorite={true}/>
            <hr/>
            < ContactList favorite={false}/>
        </div>
    );
}
export default App;