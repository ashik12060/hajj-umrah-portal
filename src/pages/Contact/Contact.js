import React, { useState } from "react";
import Header from "../../components/Shared/Header/Header";

import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../components/Shared/Footer/Footer";
import ContactLocation from "../../components/ContactPage/ContactLocation";
import ContactCover from "../../components/ContactPage/ContactCover";

function Contact() {
  

  return (
    <div className="overflow-hidden">
      
      <Header />
      <ContactCover />
      <ContactPage />
      <ContactLocation />
      <Footer />
    </div>
  );
}

export default Contact;
