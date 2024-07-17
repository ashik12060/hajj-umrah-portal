import React, { useState } from "react";
import SmallHeader from "../../components/Shared/Header/SmallHeader";
import Header from "../../components/Shared/Header/Header";

import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../components/Shared/Footer/Footer";
import ContactLocation from "../../components/ContactPage/ContactLocation";

function Contact() {
  

  return (
    <div>
      <SmallHeader />
      <Header />
      <ContactPage />
      <ContactLocation />
      <Footer />
    </div>
  );
}

export default Contact;
