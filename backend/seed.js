const {faker} = require('@faker-js/faker');
const { MongoClient } = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const _ = require('lodash');

async function main() {
    const uri = 'mongodb://localhost://27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const restaurantCollection = client.db('restaurantdb').collection('restaurant');
        const categoriesCollection = client.db('restaurantdb').collection('categories')

        restaurantCollection.drop();
        let categories = ['breakfast','lunch','dinner','drinks'].map((category)=>{return {name:category}});
        await categoriesCollection.insertMany(categories)

        let imageUrls = [
            'https://www.freepik.com/free-photos-vectors/restaurant',
            'https://stock.adobe.com/images/group-of-happy-friends-having-breakfast-in-the-restaurant/227622470',
            'https://stock.adobe.com/images/professional-chef-cooking-in-the-kitchen-restaurant-at-the-hotel-preparing-dinner-a-cook-in-an-apron-makes-a-salad-of-vegetables-and-pizza/311193887',
            'https://stock.adobe.com/images/modern-restaurant/95082119'
        ]

        let restaurants = [];
        for (let i = 0; i<10; i+=1) {
            let newRestaurant = {
                name: faker.commerce.name(),
                adjective: faker.commerce.Adjective(),
                location: faker.commerce.location(),
                cuisine_type: faker.commerce.cuisine_type(),
                description: faker.commerce.description(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl:_sample(imageUrls)

            }

            restaurants.push(newRestaurant);
        }
        await restaurantCollection.insertMany(restaurants);
    } catch(e) {
        console.error(e);
    }finally {
        await client.close();
    }
}

main();
