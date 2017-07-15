import React from 'react';
import CONTACTS from '../../constants/contact';
import ContactCard from './contactCard.js';
function searchFilter(props,Contact){
    if(props.searchText === ''){
                    return true
                }
                else if(Contact.address.includes(props.searchText)){
                    return true
                }else if(Contact.email.includes(props.searchText)){
                    return true
                }else if(Contact.name.includes(props.searchText)){
                    return true
                }else if(Contact.phoneNumber.includes(props.searchText)){
                    return true
                }else{
                    let found = false;
                    for(let i = 0 ; i<Contact.tags.length;i++){
                        if(Contact.tags[i].includes(props.searchText)){
                            found = true;
                        }
                    }
                    if(found){
                        return true;
                    }else{
                        return false;
                    }
                }
}

function ContactListFavorite(props){
    if(props.ascending){
        return(
            <div className="favorites">
                <h3>Favorites</h3>
                {CONTACTS
                .filter((Contact)=>Contact.favorite)
                .filter((Contact)=>searchFilter(props,Contact))
                .sort()
                .map((Contact,index)=>{
                    return (
                        <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
                )})}
            </div>
            
    )
    }else{
        return(
            <div className="favorites">
                <h3>Favorites</h3>
                {CONTACTS
                .filter((Contact)=>Contact.favorite)
                .filter((Contact)=>searchFilter(props,Contact))
                .sort().reverse()
                .map((Contact,index)=>{
                    return (
                        <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
                )})}
            </div>
            
    )
    }
    
}
function ContactList(props){
    if(props.ascending){
        return(
            
            <div className="not-favorites">
                <h3>Not Favorites</h3>
                {CONTACTS
            .filter((Contact)=>!Contact.favorite)
            .filter((Contact)=>searchFilter(props,Contact))
            .sort()
            .map((Contact,index)=>{
                return (
                    <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
            )})}
            </div>

    )
    }else{
        return(
            
            <div className="not-favorites">
                <h3>Not Favorites</h3>
                {CONTACTS
            .filter((Contact)=>!Contact.favorite)
            .filter((Contact)=>searchFilter(props,Contact))
            .sort().reverse()
            .map((Contact,index)=>{
                return (
                    <ContactCard key={ `${index}ContactDetails` } contact={Contact} />
            )})}
            </div>

    )
    }
    
}

export default function CheckList(props){
    if(props.favorite){
        return ContactListFavorite(props);
    }else{
        return ContactList(props);
    }
}