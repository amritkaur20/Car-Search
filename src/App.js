import "bootstrap/dist/css/bootstrap.min.css";
import CarSearch from "./Components/CarSearch";

import Pagination from "./Components/Pagination";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <CarSearch />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
