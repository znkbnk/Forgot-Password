import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ForgotPasswordForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send password reset email
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
      setEmail('');
      history.push('/reset-confirmation');
    } catch (error) {
      setMessage('Error occurred while resetting password.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPasswordForm;
