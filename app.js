const express = require("express");

const app = express();

const requests = require("requests")
const dotenv = require("dotenv");

const port = process.env.PORT || 5000;
dotenv.config();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Routes
app.get('/', (req, res) => {
    requests(process.env.API_CALL,)
    .on('data', function (chunk) {
        res.send(chunk).status(200);
    })
    .on('end', function (err) {
        res.send(err).status(400)
    });
})

//Listening Port
app.listen(port);