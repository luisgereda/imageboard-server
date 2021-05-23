const express = require("express");
const app = express();
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const jsonParser = express.json();

app.use(jsonParser);

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(port, () => console.log("I am listening to port" + port));
