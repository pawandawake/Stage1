const express = require('express');
const app = express();
const port = 3000;

app.get('/api/', (req, res) => {
  // Handle the request and generate a response.
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const time= currentDate.toISOString()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = daysOfWeek[currentDay];
  
res.json({
  "slack_name": slack_name,
  "current_day": currentDayName,
  "utc_time": time,
  "track": track,
  "github_file_url": "https://github.com/pawandawake/Stage1/blob/main/server.js",
  "github_repo_url": "https://github.com/pawandawake/Stage1",
  "status_code": 200 
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
