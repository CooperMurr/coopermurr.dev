import React from 'react';
import { db } from '../../util/firebase.js'
import {collection, addDoc} from 'firebase/firestore';
import Input from "../input";
import Alert from "@mui/material/Alert"
import Popup from 'reactjs-popup';

const Form = () => {

    const addContact = (e) => {
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        const form = document.getElementById('contact-form');
        e.preventDefault()
        const docRef = addDoc(collection(db, 'contact-form'), {
            name: name,
            email: email,
            message: message
        }).then(() => {
            form.reset();
            const alert = document.getElementById('contact-success').style["display"] = ""
            setTimeout(function() {
                document.getElementById('contact-success').style["display"] = "none";
              }, 6000);
        })

    }
    return (
        <form id="contact-form" onSubmit={addContact}>
            <Input type={'text'} id={'name'} name={'name'} placeholder={'Name'} required={true} />
            <Input type={'email'} id={'email'} name={'email'} placeholder={'Email'} required={true} />
            <Input type={'textarea'} id={'message'} name={'message'} placeholder={'Message'} required={true} />
            <button id='submit-form' type={'submit'}>Send</button>
            <Alert variant="filled" style={{display: "none"}} id='contact-success' severity="success">Message Sent!</Alert>
        </form>
    );
};


export default Form;