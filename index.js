const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

//user CoffeeMaster
//pass waRtjOEt83MDSV2U


// const uri = "mongodb+srv://CoffeeMaster:waRtjOEt83MDSV2U@cluster0.waw16py.mongodb.net/?retryWrites=true&w=majority";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.waw16py.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbConnect = async () => {
  try {
      await client.connect()
      console.log('Database Connected!')
  } catch (error) {
      console.log(error.name, error.message)
  }
}
dbConnect()
    const carCollection = client.db('carsDB').collection('cars');
    const userCollection = client.db('carsDB').collection('usersData')


    app.get('/' ,(req, res) => {
      res.send('Car server is running')
  })


    app.get('/car', async(req, res)=> {
      const cursor = carCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/car/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await carCollection.findOne(query);
      res.send(result);
    })

    app.put('/car/:id', async(req,res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert:true};  
      const UpdatedCar = req.body;
      const car = {
        $set: {
          brand: UpdatedCar.brand,
          model:UpdatedCar.model,
          price:UpdatedCar.price,
          from:UpdatedCar.from,
          experience:UpdatedCar.experience,
          category:UpdatedCar.category,
          details:UpdatedCar.details,
          photo:UpdatedCar.photo
        } 
      } 
      
      const result = await carCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/car', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await carCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/car/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await carCollection.deleteOne(query);
      res.send(result)
    })
    


    //user related apis
    app.get('/users', async(req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    })
    app.post('/users', async(req, res) => {
      const users = req.body;
      console.log(users);
      const result = await userCollection.insertOne(users);
      res.send(result)
    })

    app.patch('/users', async(req, res)=> {
      const users  = req.body;
      const filter = {email : users.email}
      const updateDoc = {
        $set : {
          lastLoggedAt: users.lastLoggedAt
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc)
      res.send(result)
    })


    app.delete('/users/:id', async(req, res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })

  


app.listen(port, () => {
        console.log(`Coffee Server is running on port : ${port}`);
})




// app.put('/car/:id', async(req,res) => {
//   const id = req.params.id;
//   const filter = {_id: new ObjectId(id)};
//   const options = {upsert:true};  
//   const UpdatedCoffee = req.body;
//   const coffee = {
//     $set: {
//       name: UpdatedCoffee.name,
//       quantity:UpdatedCoffee.quantity,
//       supplier:UpdatedCoffee.supplier,
//       taste:UpdatedCoffee.taste,
//       category:UpdatedCoffee.category,
//       details:UpdatedCoffee.details,
//       photo:UpdatedCoffee.photo
//     } 
//   } 