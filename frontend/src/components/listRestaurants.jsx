import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListRestaurant = (props) => (
 <tr>
   <td>{props.restaurant.name}</td>
   <td>{props.restaurant.adjective}</td>
   <td>{props.restaurant.description}</td>
   <td>{props.restaurant.location}</td>
   <td>{props.restaurant.cuisine_type}</td>
   <td>{props.restaurant.price}</td>
   <td>{props.restaurant.category}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.restaurant._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.restaurant._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);

export default function RestaurantList() {
 const [restaurant, setRestaurant] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRestaurants() {
     const response = await fetch(`http://localhost:8080/api/restaurants/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRestaurant(records);
   }

   getRestaurants();
 
   return;
 }, [restaurant.length]);
 
 // This method will delete a record
 async function deleteRestaurant(id) {
   await fetch(`http://localhost:8080/restaurants/${id}`, {
     method: "DELETE"
   });
 
   const newRestaurant = restaurant.filter((el) => el._id !== id);
   setRestaurant(newRestaurant);
 }

 // This method will map out the records on the table
 function restaurantList() {
   return restaurant.map((rest) => {
     return (
<ListRestaurant
         rest={restaurant}
         deleteRestaurant={() => deleteRestaurant(restaurant._id)}
         key={restaurant._id}
     />
     );
  });
 }

 // This following section will display the table with the restaurants.
 return (
   <div>
     <h3>Restaurant List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Adjective</th>
           <th>Description</th>
           <th>Cuisine Type</th>
           <th>Location</th>
           <th>Price</th>
           <th>Category</th>
         </tr>
       </thead>

     </table>
   </div>
 );
}