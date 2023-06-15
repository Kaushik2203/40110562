// Register a company with John Doe Railway Server
app.post('/train/register', async (req, res) => {
    try {
      const registrationData = {
        companyName: req.body.companyName,
        ownerName: req.body.ownerName,
        ownerEmail: req.body.ownerEmail,
        rollNo: req.body.rollNo,
        accessCode: req.body.accessCode,
      };
  
      const registrationResponse = await axios.post('http://104.211.219.98/train/register', registrationData);
      
      if (registrationResponse.status === 200) {
        const responseData = registrationResponse.data;
        res.status(200).json(responseData);
      } else {
        res.status(500).json({ error: 'Failed to register the company' });
      }
    } catch (error) {
      console.error('Error registering the company:', error);
      res.status(500).json({ error: 'Failed to register the company' });
    }
  });
  mod