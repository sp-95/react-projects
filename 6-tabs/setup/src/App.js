import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="section">
        <h1 className="loading">Loading...</h1>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[activeIndex];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <nav className="btn-container">
          {jobs.map((job, index) =>
            <button
              key={job.id}
              onClick={() => setActiveIndex(index)}
              className={`job-btn${index === activeIndex ? " active-btn" : ""}`}
            >
              {job.company}
            </button>
          )}
        </nav>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  )
}

export default App
