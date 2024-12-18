const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Twilio credentials
const accountSid = 'your_account_sid';  // Ganti dengan SID Twilio Anda
const authToken = 'your_auth_token';    // Ganti dengan Auth Token Twilio Anda
const fromNumber = 'whatsapp:+14155238886';  // Nomor WhatsApp dari Twilio

const client = new twilio(accountSid, authToken);

// Middleware untuk meng-handle body POST request
app.use(bodyParser.json());

// Route untuk mengirim notifikasi WhatsApp
app.post('/send-notification', (req, res) => {
  const { checkinDate, checkoutDate, daysStayed, userPhone } = req.body;

  // Kirim pesan WhatsApp menggunakan Twilio
  client.messages.create({
    from: fromNumber,  // WhatsApp number dari Twilio
    to: whatsapp:${userPhone}, // Nomor WhatsApp tujuan
    body: Booking berhasil! \nCek-in: ${checkinDate} \nCek-out: ${checkoutDate} \nLama tinggal: ${daysStayed} hari
  })
  .then(message => {
    res.status(200).json({ success: true, messageSid: message.sid });
  })
  .catch(err => {
    res.status(500).json({ success: false, error: err.message });
  });
});

app.listen(port, () => {
  console.log(Server berjalan di http://localhost:${port});
});