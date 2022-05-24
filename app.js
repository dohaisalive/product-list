const express = require("express");
const data = require("./data");

const app = express();
app.use(express.json());

app.get("/api/products", (request, response) => {
  response.send(data);
});

app.get("/api/products/:productID", (request, response) => {
  const { productID } = request.params;
  const firstProduct = data.find((element) => element.id === +productID);
  response.send(firstProduct);
});

app.post("/api/products", (request, response) => {
  //body is where the user puts the datas
  //in postman, lazim input is of type json
  data.push(request.body);
  response.json(request.body);
});

app.listen(8000);
