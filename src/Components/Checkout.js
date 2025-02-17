// import React, { useState } from "react";

// export default function Checkout({ reset }) {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     zipCode: "",
//     email: "",
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     resetForm();
//     alert(`You have adopted birds. Thank you!`);
//   }
//   function handleTextChange(event) {
//     setUser({
//       ...user,
//       [event.target.id]: event.target.value,
//     });
//   }
//   function resetForm() {
//     setUser({
//       firstName: "",
//       lastName: "",
//       email: "",
//       zip: "",
//       id: "",
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="firstName">First name:</label>
//       <input
//         type="text"
//         value={user.firstName}
//         onChange={handleTextChange}
//         required
//         id="firstName"
//       />
//       <label htmlFor="lastName">Last name: </label>
//       <input
//         type="text"
//         value={user.lastName}
//         onChange={handleTextChange}
//         required
//         id="lastName"
//       />
//       <label htmlFor="zip">Zip code:</label>
//       <input
//         type="number"
//         value={user.zip}
//         onChange={handleTextChange}
//         required
//         id="zip"
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         value={user.email}
//         onChange={handleTextChange}
//         required
//         id="email"
//       />
//       <input type="submit" />
//     </form>
//   );
// }

// import React, { useState } from "react";

// // Checkout Component
// export default function Checkout({ reset }) {
//   // 1. Keep track of the information entered
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     zip: "",
//   });
//   // 2. Handle form submit
//   function handleSubmit(event) {
//     event.preventDefault();
//     alert("You have adopted birds. Thank you!");

//     setUser({
//       firstName: "",
//       lastName: "",
//       email: "",
//       zip: "",
//     });

//     reset();
//   }
//   // 3. Handle input changes
//   function handleTextChange(event) {
//     setUser({
//       ...user,
//       [event.target.id]: event.target.value,
//     });
//   }

//   return (
//     <div className="Checkout">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           value={user.firstName}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           value={user.lastName}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={user.email}
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="zip">Zipcode</label>
//         <input
//           id="zip"
//           name="zip"
//           type="number"
//           value={user.zip}
//           onChange={handleTextChange}
//           required
//         />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";

const Checkout = ({ setCart, reset }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();

    if (fName && lName && email && zipCode) {
      alert("You have adopted birds. Thank You!");
      setCart([]);
      setFName("");
      setLName("");
      setEmail("");
      setZipCode("");

      alert("The purchase was successful and cart is emptied");
    }
  };
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={fName}
          onChange={handleFNameChange}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={handleLNameChange}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>

        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={handleZipCodeChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
