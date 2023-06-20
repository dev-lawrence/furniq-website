const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <span
            onClick={() => paginate(number)}
            href="#"
            className={`page-link ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
