import React from 'react';

export default function ContactCard(props){
     
    console.log(props);
    return(

                <div className="contact-card">
                    <label>Name: </label>
                    <span>{ props.contact.name }</span>
                    <label>Email Address: </label>
                    <span>
                        { props.contact.email }
                    </span>
                    <label>Address: </label>
                    <span>
                        { props.contact.address }
                    </span>
                    <label>Phone Number: </label>
                    <span>
                        { props.contact.phoneNumber }
                    </span>
                    <label>Tags: </label>
                    <span>
                        { props.contact.tags.map(tag=>{
                            return(
                                <span>{tag} </span>
                            );
                        }) }
                    </span>
            </div>
    );
}