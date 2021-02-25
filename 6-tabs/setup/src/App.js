import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.map(job => ({ ...job, active: false }));
      data[0].active = true;
      setJobs(data);
      setActiveJob(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(fetchData, []);

  const handleActiveJob = ({ target }) => {
    const newJobs = jobs.map(job => {
      if (job.company === target.textContent) {
        job.active = true;
        setActiveJob(job);
        return job;
      } else {
        job.active = false;
        return job;
      }
    });
    setJobs(newJobs);
  }

  return (
    <main className="section">
      {loading ?
        (
          <h1 className="loading">Loading...</h1>
        ) : (
          <section>
            <div className="title">
              <h2>Experiences</h2>
              <div className="underline"></div>
            </div>
            <div className="jobs-center">
              <nav className="btn-container">
                {jobs.map(({ company, active }, index) =>
                  <button className={`job-btn ${active && " active-btn"}`} key={index} onClick={handleActiveJob}>
                    {company}
                  </button>
                )}
              </nav>
              {activeJob && (
                <article className="job-info">
                  <h3>{activeJob.title}</h3>
                  <h4>{activeJob.company}</h4>
                  <p className="job-date">{activeJob.dates}</p>
                  {activeJob.duties.map((duty, index) => (
                    <div className="job-desc" key={index}>
                      <FaAngleDoubleRight className="job-icon" />
                      <p>{duty}</p>
                    </div>
                  ))}
                </article>
              )}
            </div>
            <button className="btn">more info</button>
          </section>
        )
      }
    </main>
  )
}

export default App
