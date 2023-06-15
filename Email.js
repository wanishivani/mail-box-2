import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {  Button } from "react-bootstrap";
export default function Email() {
  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_n8mu76a",
        "template_0uojd89",
        e.target,
        "qyKm434O_eoItbIo1"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
          alert("message sent");
        },
        (error) => {
          const errortext=('message not set')
          alert(errortext);
        }
      );
  };
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <form
      className="contact-form"
      onSubmit={sendEmail}
      style={{ padding: "4px" }}
    >
      <input type="hidden" name="contact_number" />
      <label><b>To:</b></label>
      <input type="text"  name="from_name" /> <hr></hr> 
      <label htmlFor="email" ><b>Test Email:</b></label>
      <input type="email" name="to_name"/> <hr></hr> 
      <label><b>Subject:</b></label>
      <input type="text" name='message'/> <hr></hr> 
      <h1>Compose Email:</h1>
      <JoditEditor
        ref={editor}
        name="from_message"
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
        style={{maxWidth:'300px',height:'300px'}}
      />

      {/* style={{padding:'200px'}} /> */}
      <Button type="onClick" value="Send">
        Send
      </Button>
    </form>
  );
}
