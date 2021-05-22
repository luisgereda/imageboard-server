const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.listen(port, () => "I am listening" + port);
