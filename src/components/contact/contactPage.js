import React from 'react';
import Card from './contactCard';
import CONTACTS from '../../constants/contact';

export default function ContactPage(props){
    return(
        <Card contact={CONTACTS[parseInt(props.match.params.id)-1]}/>
    )
}