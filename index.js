
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pevwwph.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const viewPhotographyCollection = client.db('viewPhotography').collection('services');
        const reviewCollection = client.db('viewPhotography').collection('reviews');
        console.log('DB Connected!');
    }
    finally {

    }
}
run().catch(err => console.log(err))














app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})