import React, { useState } from "react";
import FormHeading from "../FormHeading/FormHeading";
import classNames from "classnames";
import * as EmailValidator from "email-validator";
import "./SignUpForm.scss";
import ThankYouPage from "../ThankYouPage/ThankYouPage";

function SignUpForm() {
  const [buttonName, setButtonName] = useState("Sign Up Now \u25B8");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [showError, setShowError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const optionValues = [
    "Front-End Development",
    "Back-End Development",
    "Graphic Design",
    "Marketing",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EmailValidator.validate(email)) {
      setButtonDisable(true);
      setButtonName("Submitting...");
      setTimeout(() => {
        setShowThankYou(true);
        console.log("Email: " + email);
        console.log("Your Interests: " + interest);
      }, 2000);
    } else if (email === "") {
      setShowError(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="SignUpForm">
      {!showThankYou ? (
        <div className="SignUpForm__container">
          <FormHeading />
          <div className="SignUpForm__container-paragraph">
            <p>
              Prepare for your career with a Project Management,
              Web-Development, Graphic design, or Digital Marketing Internship
              at Northern.
            </p>
          </div>
          <div className="SignUpForm__container-formContainer">
            <form
              className="SignUpForm__container-form"
              onSubmit={handleSubmit}
            >
              <div className="SignUpForm__container-form-fields">
                <div className="SignUpForm__container-form-email">
                  {showError ? (
                    <div className="SignUpForm__container-form-email-error">
                      <p>Please enter a valid email address.</p>
                    </div>
                  ) : null}
                  <input
                    className={classNames(
                      "SignUpForm__container-form-email-input",
                      { active: showError }
                    )}
                    type="text"
                    placeholder="Your Email Address *"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="SignUpForm__container-form-yourInterest">
                  <select
                    name="position"
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option
                      className="SignUpForm__container-form-yourInterest-placeholderFont"
                      hidden
                    >
                      Your Interests
                    </option>

                    {optionValues.map((val) => (
                      <option
                        className="SignUpForm__container-form-yourInterest-interestFont"
                        value={val}
                        key={val}
                      >
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="SignUpForm__container-submit">
                <button
                  className="SignUpForm__container-submit-button"
                  type="submit"
                  disabled={buttonDisable}
                >
                  {buttonName}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
}

export default SignUpForm;
