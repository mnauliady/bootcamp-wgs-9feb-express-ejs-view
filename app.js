const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// akses halaman index
app.get("/", (req, res) => {
  res.render("index");
});

// akses halaman aboaut
app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about");
});

// akses halaman contact
app.get("/contact", (req, res) => {
  const contact = [
    { name: "Sammy", telephone: "081231241242" },
    { name: "Tux", telephone: "09213124324" },
    { name: "Moby Dock", telephone: "0213123123" },
  ];
  // res.sendFile("./contact.html", { root: __dirname });
  res.render("contact", { contact });
});

// mengakses page dengan parameter dan menampilkannya
app.get("/product/:idProduct/category/:idCategory", (req, res) => {
  // res.sendFile("./product.html", { root: __dirname });
  res.send(`Produk: ${req.params.idProduct}, Category: ${req.params.idCategory}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page Not foud : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// // fungsi untuk handle request
// const request = (url, res) => {
//   fs.readFile(url, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error : page not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     // mendapat url yang diketikkan di browser
//     const url = req.url;
//     console.log(url);

//     if (url === "/about") {
//       request("./about.html", res);
//     } else if (url === "/contact") {
//       request("./contact.html", res);
//     } else {
//       request("./index.html", res);
//     }
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//   })
//   .listen(3000, () => {
//     console.log("Server is listening on port 3000");
//   });
