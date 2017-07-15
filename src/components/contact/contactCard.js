import React from 'react';
import {Link} from 'react-router-dom';
export default function ContactCard(props){
    return(

                <div className="contact-card">
                    <Link style={{display:'block'}} to={`/contact/${props.contact.id}`}>Inspect Me</Link>
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