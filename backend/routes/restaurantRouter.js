const {ObjectId} = require('mongodb')
const express = require('express')

const router = express.Router()

const Restaurant = require('../models/restaurantModel')


//getting  restaurant
/*router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.status(200).send({data:restaurants})
    } catch (err) {
        res.status(400).send({error:err})
    }
})*/



// This section will help you get a list of all the restaurants.
router.get("/restaurants", async (req, res) => {
    let restaurants = await Restaurant();
    let results = await restaurants.find({}).toArray();
    res.send(results).status(200);
  });

  // This section will help you get a single restaurant by id
  router.get("/restaurants:id", async (req, res) => {
    let restaurants = await Restaurant();
    let query = {_id: new ObjectId(req.params.id)};
    let result = await restaurants.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

  // This section will help you create a new restaurant.
  router.post("/restaurants", async (req, res) => {
    let newDocument = {
      name: req.body.name,
      adjective: req.body.position,
      description: req.body.level,
      location: req.body.level,
      cuisine_type: req.body.level,
      price: req.body.level,
      category: req.body.level,
    };
    let restaurants = await Restaurant();
    let result = await restaurants.insertOne(newDocument);
    res.send(result).status(204);
  });

  // This section will help you update a restaurant by id.
  router.patch("/restaurants:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates =  {
      $set: {
        name: req.body.name,
        adjective: req.body.position,
        description: req.body.level,
        location: req.body.level,
        cuisine_type: req.body.level,
        price: req.body.level,
        category: req.body.level,
      }
    };

    let restaurants = await Restaurant();
    let result = await restaurants.updateOne(query, updates);

    res.send(result).status(200);
  });

  // This section will help you delete a restaurant
  router.delete("/restaurants:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const restaurants = Restaurant("records");
    let result = await restaurants.deleteOne(query);

    res.send(result).status(200);
  });

//getting a list of restaurants by category
router.get('/restaurants-by-categories', async(req, res, next) => {
    try {
        const restaurants = await Restaurant.aggregate([
            {$match: {}},
            {$group: {
                _id: '$category',
                restaurants: {$push: '$$ROOT'}
            }},
            {$project: { name: '$_id', restaurants: 1, _id: 0}}
        ])
        res.status(200).send({data:restaurants})
    }catch (err) {
        res.status(400).send({error:err})
    }
})

module.exports = router