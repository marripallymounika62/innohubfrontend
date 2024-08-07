import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter, useFilters, useSortBy } from 'react-table';

const Table = ({ columns, data, heading, button, rowClassName = () => '' }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex,pageSize, globalFilter },
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }, // Set initial page size
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between m-4">
        <div className='font-semibold text-3xl md:text-lg '>
        <h3>{heading}</h3>
        </div>
        <div className="md:ml-10 mt-4 md:mt-0">
          <input
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="bg-white border border-gray-300 rounded-md px-4 py-2  w-36 md:w-96"
          />
        </div>

       {/*  <button className="bg-color hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 md:mt-0 md:ml-4 rounded">
          {button}
        </button> */}
      </div>

      {page.length === 0 ? (
        <p className="text-center">No records to display</p>
      ) : (
        <div className="table-responsive">
          <table
            {...getTableProps()}
            style={{ borderCollapse: 'collapse', border: '1px solid #000' }}
            className="table-auto w-full"
          >
            <thead className="bg-color text-white px-4 py-2 text-center">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{ border: '1px solid blue', padding: '8px' }}
                      className="px-4 py-2"
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    style={{ border: '1px solid blue' }}
                    //className="border-t border-gray-500"
                    className={`${rowClassName(row)} border-t border-gray-500`}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{ border: '1px solid blue', padding: '8px' }}
                          className="px-4 py-2 text-left"
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-end m-5">
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="mr-4">
          Previous
        </button>
        <div>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="ml-4">
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
