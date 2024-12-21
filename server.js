const express = require("express");
const connectDB = require("./db");
const port = process.env.PORT || 4000;
const privateRoute = require("./middleware/authenticate");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const cartRoutes = require("./routes/cart");
const paymentRoutes = require("./routes/payment");
const reviewRoutes = require("./routes/review");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());

app.use(morgan("combined"));

app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);
app.use(paymentRoutes);
app.use(reviewRoutes);

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

connectDB(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@nexuscoffeehouse.vp2eegp.mongodb.net/?retryWrites=true&w=majority&appName=NexusCoffeeHouse`
)
  .then(() => {
    console.log("Database connected with server");
    app.listen(port, "0.0.0.0", () => {
      console.log(`This server is listening on port: ${port}`);
    });
  })
  .catch((e) => {
    console.error("Failed to connect to the database:", e);
  });
