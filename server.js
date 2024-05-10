const express = require("express");
const connectDB = require("./db");
const privateRoute = require("./middleware/uthenticate");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const cartRoutes = require("./routes/cart");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);

app.get("/private", privateRoute, async (_req, res) => {
  return res.send("This is private route");
});

app.get("/", (_req, res) => {
  res.send("Welcome to my Website");
});

//Server error handler
app.use((err, _req, res, _next) => {
  console.log(err);
  const message = err.message ? err.message : "Server error occurred";
  const status = err.status ? err.status : 500;
  return res.status(status).json({ message });
});

connectDB("mongodb://0.0.0.0:27017/coffee-house")
  .then(() => {
    console.log("Database connected with server");
    app.listen(4000, () => {
      console.log(`This server is listening on port: 4000`);
    });
  })
  .catch((e) => console.log(e));
