import React from 'react';
import { NavLink } from 'react-router-dom'

function Table({table}) {
  return (
    <> 
      <NavLink className="btn btn-danger" to="/" style={{margin: '20px 0'}}>
        Back
      </NavLink>

      <table className="table table-hover">
        <tbody>
          {table.map( (element, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td dangerouslySetInnerHTML={{__html: element}}></td>
            </tr>
          ))};
        </tbody>
      </table>
    </>
  );
}

export default Table;
