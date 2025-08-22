import React, { useState, useEffect } from "react";

function Profile({ onBack }) {
  const [name, setName] = useState("Shanthini");

  useEffect(() => {
    // Simulate fetching or updating
    console.log("Profile mounted or updated");
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {name}</p>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default Profile;
