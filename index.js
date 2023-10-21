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
      // await client.connect()
      console.log('Database Connected!')
  } catch (error) {
      console.log(error.name, error.message)
  }
}
dbConnect()
    const carCollection = client.db('carsDB').collection('cars');
    const userCollection = client.db('carsDB').collection('usersData')

    const BmwCollection = client.db('BmwDB').collection('Bmw')
    const BugattiCollection = client.db('BugattiDB').collection('Bugatti')
      const TeslaCollection = client.db('TeslaDB').collection('Tesla')
      const ToyotaCollection = client.db('ToyotaDB').collection('Toyota')
      const MbenzCollection = client.db('MbenzDB').collection('Mbenz')
      const HondaCollection = client.db('Honda').collection('Honda')


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
    
     //bmw
     app.get('/bmw', async(req, res)=> {
      const cursor = BmwCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/bmw/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BmwCollection.findOne(query);
      res.send(result);
    })

    app.put('/bmw/:id', async(req,res) => {
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
      
      const result = await BmwCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/bmw', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await BmwCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/bmw/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BmwCollection.deleteOne(query);
      res.send(result)
    })
    

     //bugatti
     app.get('/bugatti', async(req, res)=> {
      const cursor = BugattiCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/bugatti/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BugattiCollection.findOne(query);
      res.send(result);
    })

    app.put('/bugatti/:id', async(req,res) => {
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
      
      const result = await BugattiCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/bugatti', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await BugattiCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/bugatti/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BugattiCollection.deleteOne(query);
      res.send(result)
    })
    


     //3
     app.get('/tesla', async(req, res)=> {
      const cursor = TeslaCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/tesla/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await TeslaCollection.findOne(query);
      res.send(result);
    })

    app.put('/tesla/:id', async(req,res) => {
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
      
      const result = await TeslaCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/tesla', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await TeslaCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/tesla/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await TeslaCollection.deleteOne(query);
      res.send(result)
    })
    
 //4
 app.get('/toyota', async(req, res)=> {
  const cursor = ToyotaCollection.find();
  const result = await cursor.toArray();
  res.send(result);   
})
app.get('/toyota/:id', async(req, res) => {
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await ToyotaCollection.findOne(query);
  res.send(result);
})

app.put('/toyota/:id', async(req,res) => {
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
  
  const result = await ToyotaCollection.updateOne(filter, car, options);
  res.send(result)
})
 
app.post('/toyota', async(req, res) => {
  const newCar = req.body
  console.log(newCar) 
  const result = await ToyotaCollection.insertOne(newCar)
  res.send(result);
})

app.delete('/toyota/:id', async(req, res) => {
  const id = req.params.id;
  const query = {_id: new ObjectId(id)}
  const result = await ToyotaCollection.deleteOne(query);
  res.send(result)
})
        //5
     app.get('/mbenz', async(req, res)=> {
      const cursor = MbenzCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/mbenz/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await MbenzCollection.findOne(query);
      res.send(result);
    })

    app.put('/mbenz/:id', async(req,res) => {
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
      
      const result = await MbenzCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/mbenz', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await MbenzCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/mbenz/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await MbenzCollection.deleteOne(query);
      res.send(result)
    })
    



     //6
     app.get('/honda', async(req, res)=> {
      const cursor = HondaCollection.find();
      const result = await cursor.toArray();
      res.send(result);   
    })
    app.get('/honda/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HondaCollection.findOne(query);
      res.send(result);
    })

    app.put('/honda/:id', async(req,res) => {
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
      
      const result = await HondaCollection.updateOne(filter, car, options);
      res.send(result)
    })
     
    app.post('/honda', async(req, res) => {
      const newCar = req.body
      console.log(newCar) 
      const result = await HondaCollection.insertOne(newCar)
      res.send(result);
    })

    app.delete('/honda/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HondaCollection.deleteOne(query);
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
        console.log(`Car Server is running on port : ${port}`);
})


