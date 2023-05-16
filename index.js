const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://snazzy-unicorn-109857.netlify.app");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!-----');
});

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
