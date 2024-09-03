import React, { useState } from 'react';
import './Table.css'; // You can add this file for Table-specific styling

const data = [
  { id: 1, project: 'Template 101', progress: '47%', details: 'Lorem ipsum...' },
  { id: 2, project: 'Template 174', progress: '27%', details: 'Lorem ipsum...' },
  { id: 3, project: 'Template 256', progress: '71%', details: 'Lorem ipsum...' },
  { id: 4, project: 'Template 345', progress: '50%', details: 'Lorem ipsum...' },
];

const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Project</th>
            <th>Progress</th>
            <th>Analysis</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.project}</td>
                <td>{item.progress}</td>
                <td>
                  <button onClick={() => toggleRow(item.id)}>
                    View More {expandedRow === item.id ? '▲' : '▼'}
                  </button>
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr className="details-row">
                  <td colSpan="4">{item.details}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
