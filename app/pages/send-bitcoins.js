// pages/send-bitcoins.js

import { useState } from 'react';

export default function SendBitcoins() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    setMessage('Sending...');

    const response = await fetch('/api/send-bitcoins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address, amount }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage('Bitcoin sent successfully!');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <h1>Send Bitcoins</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>Bitcoin Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount (BTC):</label>
          <input
            type="number"
            step="0.00000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Bitcoin</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
