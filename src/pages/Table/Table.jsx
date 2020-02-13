import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

function Table({table}) {
  const normalizeTable = () => {
    const normalizedTable  = [];

    const coefficient = table.length / 4;

    for (let i = 0; i < coefficient; i++) {
      normalizedTable.push([]);
      normalizedTable[normalizedTable.length - 1]
        .push({index: i, value: table[i]});
      normalizedTable[normalizedTable.length - 1]
        .push({index: i + coefficient, value: table[i + coefficient]});
      normalizedTable[normalizedTable.length - 1]
        .push({index: i + coefficient * 2, value: table[i + coefficient * 2]});
      normalizedTable[normalizedTable.length - 1]
        .push({index: i + coefficient * 3, value: table[i + coefficient * 3]});
    }

    return normalizedTable;
  };

  return (
    <> 
      <NavLink className="btn btn-danger" to="/" style={{margin: '20px 0'}}>
        Back
      </NavLink>

      <table className="table table-hover">
        <tbody>
          {normalizeTable().map( (row, index) => (
            <tr key={index}>
              {row.map( ({index, value}) => (
                <Fragment key={index}>
                  <td>{index}.</td>
                  <td dangerouslySetInnerHTML={{__html: value}}></td>
                </Fragment>
              ))}
            </tr>
          ))};
        </tbody>
      </table>
    </>
  );
}

export default Table;
