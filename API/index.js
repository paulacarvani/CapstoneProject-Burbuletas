const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cors = require("cors")
const fs = require("fs");
const https = require("https");

dotenv.config();

const PORT = 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Succesfull!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


/* app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is Running!");
});
*/
https.createServer({
    cert: fs.readFileSync('mi_certificado.crt'),
    key: fs.readFileSync('mi_certificado.pem')
  },app).listen(PORT, function(){
     console.log('Servidor https correindo en el puerto 443');
 });