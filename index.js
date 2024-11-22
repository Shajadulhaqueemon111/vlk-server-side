const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId, Admin } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.7auoehb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = "mongodb://localhost:27017";
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const MasterCollection = client.db("MasterAgent").collection("agentData");
    const MasterCollection2 = client.db("MasterAgent").collection("admineData");
    const MasterCollection3 = client.db("MasterAgent").collection("admin3");
    const MasterCollection4 = client.db("MasterAgent").collection("admin4");
    const MasterCollection5 = client.db("MasterAgent").collection("admin5");
    const MasterCollection6 = client.db("MasterAgent").collection("admin6");
    const MasterCollection7 = client.db("MasterAgent").collection("admin7");
    const MasterCollection8 = client.db("MasterAgent").collection("admin8");
    const MasterCollection9 = client.db("MasterAgent").collection("admin9");
    const MasterCollection10 = client.db("MasterAgent").collection("admin10");
    const MasterCollection11 = client.db("MasterAgent").collection("admin11");

    // get maseter aegnt data
    app.get("/master-agent", async (req, res) => {
      const cursor = MasterCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // admineData-2
    app.get("/master-agent2", async (req, res) => {
      const cursor = MasterCollection2.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // admin-3
    app.get("/master-agent3", async (req, res) => {
      const cursor = MasterCollection3.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // admin-4
    app.get("/master-agent4", async (req, res) => {
      const cursor = MasterCollection4.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Admin-5
    app.get("/master-agent5", async (req, res) => {
      const cursor = MasterCollection5.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // admin-6
    app.get("/master-agent6", async (req, res) => {
      const cursor = MasterCollection6.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // admin-7
    app.get("/master-agent7", async (req, res) => {
      const cursor = MasterCollection7.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/master-agent8", async (req, res) => {
      const cursor = MasterCollection8.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/master-agent9", async (req, res) => {
      const cursor = MasterCollection9.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/master-agent10", async (req, res) => {
      const cursor = MasterCollection10.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/master-agent11", async (req, res) => {
      const cursor = MasterCollection11.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.put("/master-agent/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    //2
    app.put("/master-agent2/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection2.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });
    //3
    app.put("/master-agent3/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection3.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });
    //4
    app.put("/master-agent4/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection4.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });
    //5
    app.put("/master-agent5/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection5.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });
    //6
    app.put("/master-agent6/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection6.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });
    //7
    app.put("/master-agent7/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection7.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    //8
    app.put("/master-agent8/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection8.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    //9
    app.put("/master-agent9/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection9.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    //10
    app.put("/master-agent10/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection10.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    //11
    app.put("/master-agent11/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateNumber = req.body;
      const updateData = {
        $set: {
          phone_number: upDateNumber.phone_number,
        },
      };
      const result = await MasterCollection11.updateOne(
        filter,
        updateData,
        options
      );
      res.send(result);
    });

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
