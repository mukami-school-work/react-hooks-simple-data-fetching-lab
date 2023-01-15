import React, { useEffect, useState } from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random"

function DogImage() {
  const [message, setMessage] = useState(null)
  
  useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setMessage(data.message))
  }, [])
  
  if (!message) {
      return <h2>Loading...</h2>
  }
  
  return (
    <div>
      <p>Here's a lovely dog for you:</p>
      <img src={message} alt="A Random Dog" />
    </div>
  );
}

export default DogImage