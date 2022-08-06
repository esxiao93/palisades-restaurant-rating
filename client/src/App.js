import React, { useState, useEffect} from 'react';

function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/restaurants')
    .then(response => response.json())
    .then((restaurants) => setRestaurants(res))
    .catch(error => console.log(error))
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
