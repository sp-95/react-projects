import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => setTours(prev => prev.filter(tour => tour.id !== id));

  return (
    <main>
      {loading ?
        (
          <Loading />
        ) : (
          !tours.length ?
            (
              <div className="title">
                <h2>No Tours Left</h2>
                <div className="underline"></div>
                <button className="btn" onClick={fetchTours}>refresh</button>
              </div>
            ) : (
              <Tours tours={tours} handleDelete={handleDelete} />
            )
        )
      }
    </main>
  );
}

export default App
