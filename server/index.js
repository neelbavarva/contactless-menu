const startupDebugger = require('debug')('app:startup');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


// mongodb+srv://neelbavarva:Neel@9427@cluster0.irkwl.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://neelbavarva:Neel@9427@cluster0.irkwl.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => console.log('Connection established to MongoDB...'))
        .catch(err => console.log("Could not connect to MongoDB...", err));

app.use(express.json());
app.use(helmet());  //secures the page by adding various http headers

app.use(morgan('tiny'));    // loggs every request in the console
startupDebugger("Morgan enabled");

app.get('/', (req, res) => {
    res.send("Hello 11th Hour");
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}..`))
