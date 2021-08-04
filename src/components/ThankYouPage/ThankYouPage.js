import React from "react";
import FormHeading from "../FormHeading/FormHeading";
import "./ThankYouPage.scss";

function ThankYouPage() {
  return (
    <div className="ThankYouPage">
      <FormHeading className="ThankYouPage-mainHeading"/>
      <div className="ThankYouPage-heading">
        <h1>Thanks for your interest!</h1>
      </div>
      <div className="ThankYouPage-paragraph">
        <p>
          We will review your application and contact you for additional
          information should your background and experience meet the
          requirements of one of our openings.
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
