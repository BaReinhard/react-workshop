import React from 'react';
import CONTACTS from '../../constants/contact';
import ContactCard from './contactCard.js';

function ContactListFavorite(props){
    return(
            <div className="favorites">
                <h3>Favorites</h3>
                {CONTACTS
                .filter((Contact)=>Contact.favorite)
                .map((Contact,index)=>{
                    console.log(Contact);
                    return (
                        <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
                )})}
            </div>
            
    )
}
function ContactList(props){
    return(
            
            <div className="not-favorites">
                <h3>Not Favorites</h3>
                {CONTACTS
            .filter((Contact)=>!Contact.favorite)
            .map((Contact,index)=>{
                console.log(Contact);
                return (
                    <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
            )})}
            </div>

    )
}

export default function CheckList(props){
    if(props.favorite){
        return ContactListFavorite(props);
    }else{
        return ContactList(props);
    }
}