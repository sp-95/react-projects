import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => setTours(prev => prev.filter(tour => tour.id !== id));

  return (
    <main>
      {loading && <Loading />}
      {!loading && <Tours tours={tours} handleDelete={handleDelete} />}
    </main>
  );
}

export default App
