const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Eggman:grosmogol@apirest.y5arw.mongodb.net/bills?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const billsRoutes = require('./routes/bills');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080'
}))

app.get('/', (req, res) => {
  res.send('Homepage')
})

app.use('/bills', billsRoutes)



module.exports = app