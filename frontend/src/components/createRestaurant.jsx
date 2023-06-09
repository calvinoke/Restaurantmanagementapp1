import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
 const [form, setForm] = useState({
   name: "",
   adjective: "",
   description: "",
   location: "",
   cuisine_type: "",
   price: "",
   category: "",
 });
 const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission and prevents the page from reloading.
 async function onSubmit(e) {
   e.preventDefault();

   // When a post request is sent to the create url, we'll add a new record to the database.
   const newRestaurant = { ...form };

   await fetch("http://localhost:8080/api/restaurants", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRestaurant),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

   setForm({ name: "",  adjective: "", description: "", location: "", cuisine_type: "",price: "", category: "" });
   navigate("/menu");
 }

 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Adjective</label>
         <input
           type="text"
           className="form-control"
           id="adjective"
           value={form.adjective}
           onChange={(e) => updateForm({ adjective: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Location</label>
         <input
           type="text"
           className="form-control"
           id="location"
           value={form.location}
           onChange={(e) => updateForm({ location: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Cuisine Type</label>
         <input
           type="text"
           className="form-control"
           id="cuisineType"
           value={form.cuisine_type}
           onChange={(e) => updateForm({ cuisine_type: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Price</label>
         <input
           type="text"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Category</label>
         <input
           type="text"
           className="form-control"
           id="category"
           value={form.category}
           onChange={(e) => updateForm({ category: e.target.value })}
         />
       </div>


       <div className="form-group">
         <input
           type="submit"
           value="Create Restaurant"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}