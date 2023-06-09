import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
 const [form, setForm] = useState({
    name: "",
    adjective: "",
    description: "",
    location: "",
    cuisine_type: "",
    price: "",
    category: "",

 });
 const params = useParams();
 const navigate = useNavigate();

 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/restaurants/${params.id.toString()}`);

     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const record = await response.json();
     if (!record) {
       window.alert(`Restaurant with id ${id} not found`);
       navigate("/");
       return;
     }

     setForm();
   }

   fetchData();

   return;
 }, [params.id, navigate]);

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function onSubmit(e) {
   e.preventDefault();
   const editedRestaurant = {
     name: form.name,
     adjective: form.adjective,
     description: form.description,
     location: form.location,
     cuisine_type: form.cuisine_type,
     price: form.price,
     category: form.category,
   };

   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:8080/api/restaurants/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedRestaurant),
     headers: {
       'Content-Type': 'application/json'
     },
   });

   navigate("/menu");
 }

 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Adjective: </label>
         <input
           type="text"
           className="form-control"
           id="adjective"
           value={form.adjective}
           onChange={(e) => updateForm({ adjective: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Description: </label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Location: </label>
         <input
           type="text"
           className="form-control"
           id="location"
           value={form.location}
           onChange={(e) => updateForm({ location: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Cuisine Type: </label>
         <input
           type="text"
           className="form-control"
           id="cuisineType"
           value={form.cuisine_type}
           onChange={(e) => updateForm({ cuisine_type: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Price: </label>
         <input
           type="text"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Category: </label>
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
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}