// pages/api/send-bitcoins.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { address, amount } = req.body;
  
    try {
      const response = await fetch('https://api.blockcypher.com/v1/btc/main/txs/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: [{ addresses: ['your_wallet_address'] }],
          outputs: [{ addresses: [address], value: Math.round(amount * 1e8) }],
        }),
      });
  
      const tx = await response.json();
  
      if (tx.errors) {
        return res.status(400).json({ error: tx.errors[0].error });
      }
  
      // Sign the transaction here (you'll need to manage the private key securely)
  
      const sendResponse = await fetch(`https://api.blockcypher.com/v1/btc/main/txs/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tx),
      });
  
      const sendResult = await sendResponse.json();
  
      if (sendResult.errors) {
        return res.status(400).json({ error: sendResult.errors[0].error });
      }
  
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  