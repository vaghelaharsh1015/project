import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">No records found</td>
            </tr>
          ) : (
            data.map((user, index) => (
              <tr key={user.id || index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address?.city || user.city || 'N/A'}</td>
                <td>
                  <button className="btn-edit" onClick={() => alert(`Edit ${user.name}`)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => alert(`Delete ${user.name}`)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
