import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './subscription.css';
import beforeSubscribeAnimation from '../../assets/beforeSubscribeAnimation.json';
import afterSubscribeAnimation from '../../assets/afterSubscribeAnimation.json';
import sale from '../../assets/Transport.png';

const SubscriptionForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitDisabled(true);
    e.preventDefault();

    const form = e.target;
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbyDCDbPn2pqcAPZPkz9SnG5dstSIAbC1pMiGNX7eviqIK9OM5jK71KwxV5XgB7FKiWZTg/exec';

    try {
      const requestBody = new FormData(form);
      const response = await fetch(scriptURL, { method: 'POST', body: requestBody });
      if (response.ok) {
        alert('Subscribed Successfully!');
        form.reset();
        setPhoneNumber('');
        setSubscribed(true);

        // Reset subscribed state after 8 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 8000);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      alert('Error!', error.message);
    } finally {
      setSubmitDisabled(false);
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const beforeSubscribeOptions = {
    loop: true,
    autoplay: true,
    animationData: beforeSubscribeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const afterSubscribeOptions = {
    loop: true,
    autoplay: true,
    animationData: afterSubscribeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="subscription-container">
      <div className="image-container">
        <img src={sale} alt="Sale" className="sale-image" />
      </div>
      <div className="form-container">
        {subscribed ? (
          <div className="success-message">
            <Lottie options={afterSubscribeOptions} height={150} width={150} />
            <span>Thanks for your response!</span>
            <span>We will contact you soon 😇</span>
          </div>
        ) : (
          <>
            <div className="form-header">
              <Lottie options={beforeSubscribeOptions} height={150} width={150} />
              <span>Let us contact you!</span>
            </div>
            <form className="subscription-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="phone"
                  name="phone_number"
                  placeholder="Your Contact *"
                  required
                  className="input-field"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <button
                  type="submit"
                  className="submit-button"
                  disabled={submitDisabled || phoneNumber.trim() === ''}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionForm;
