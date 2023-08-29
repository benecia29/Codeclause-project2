import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const FirebaseOtp = () => {
  const { sendVerificationCode, confirmCode } = useAuth(); // Use the sendVerificationCode and confirmCode functions from the context
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [user, setUser] = useState(null);

  const handlePhoneSignIn = async (e) => {
    e.preventDefault();
    try {
      // Send the verification code to the user's phone number
      await sendVerificationCode(phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCodeConfirmation = async (e) => {
    e.preventDefault();
    try {
      // Confirm the verification code
      await confirmCode(verificationCode);
      // Handle successful authentication or navigate to a different page
      console.log("Authentication successful!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5 ">
          <form
            className="border border-secondary rounded p-4"
            onSubmit={handlePhoneSignIn}
          >
            <h1 className="mb-4">OTP Authentication</h1>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="phone_field">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_field"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="verification_code_field">
                Verification Code
              </label>
              <input
                type="text"
                id="verification_code_field"
                className="form-control"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Send Verification Code
            </button>

            <button
              type="button"
              className="btn btn-block w-100 btn-primary btn-block"
              onClick={handleCodeConfirmation}
            >
              Confirm Verification Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirebaseOtp;
