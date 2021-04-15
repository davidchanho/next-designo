import React from "react";
import Form from "../../components/contact/contact-form";
import Location from "../../shared/location-card";
import Template from "../../shared/template";

function Contact() {
  return (
    <Template>
      <Form />
      <Location />
    </Template>
  );
}

export default Contact;
