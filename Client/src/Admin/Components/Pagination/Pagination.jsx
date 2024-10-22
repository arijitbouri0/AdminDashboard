import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  rowsPerPage,
  totalRows,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center">
        <span className="mr-2">Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
          className="border p-1 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
      <div>
        <span className="mr-4">
          {`${indexOfFirstRow + 1}-${Math.min(indexOfLastRow, totalRows)} of ${totalRows}`}
        </span>
        <button
          onClick={() => handlePageChange("prev")}
          className="mr-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <button
          onClick={() => handlePageChange("next")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
