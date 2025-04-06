const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Replace with your EmailJS keys
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
const PRIVATE_KEY = 'your_private_key'; // EmailJS now uses this for server-side REST API

app.post('/api/booking', async (req, res) => {
  const { name, email } = req.body;
  console.log('📩 Booking received:', name, email);

  try {
    // EmailJS REST API endpoint
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: service_yzs7yeu,
      template_id: template_952stlb,
      user_id: tXZZ5z7H-d3bdMOt6,
      template_params: {
        name: name,
        email: email
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'origin': 'http://localhost'
      }
    });

    console.log('✅ Email sent successfully:', response.data);
    res.json({ message: 'Booking received and confirmation email sent!' });
  } catch (error) {
    console.error('❌ Error sending email:', error.response?.data || error.message);
    res.status(500).json({ message: 'Booking failed: Could not send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});
