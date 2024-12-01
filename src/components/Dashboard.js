import React, { useEffect, useState } from 'react';
import { getChecklistData } from '../services/api';

const Dashboard = () => {
  const [checklist, setChecklist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const data = await getChecklistData();
        setChecklist(data.rules);
      } catch (error) {
        console.error('Error fetching checklist data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChecklist();
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {checklist.map((rule, index) => (
            <li key={index} className={rule.passed ? 'passed' : 'failed'}>
              {rule.name}: {rule.passed ? 'Passed' : 'Failed'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
