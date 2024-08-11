const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 8001;

app.use(cors()); // Use cors
app.get('/api/schools', (req, res) => {
  const schools = [
    { id: '1', name: 'JPIS' },
    { id: '2', name: 'Ryan International' },
    { id: '3', name: 'St Anselms' }
  ];
  console.log('schools list is sended')
  res.status(200).json(schools);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
