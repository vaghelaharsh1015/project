import { useState, useEffect, useMemo } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCity, setSelectedCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(data.map((user) => user.address?.city).filter(Boolean))];
    return uniqueCities.sort();
  }, [data]);

  const filteredData = useMemo(() => {
    let result = data;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term)
      );
    }

    if (selectedCity) {
      result = result.filter((user) => user.address?.city === selectedCity);
    }

    return result;
  }, [data, searchTerm, selectedCity]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }, [filteredData, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, rowsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCity, rowsPerPage]);

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Data Table Management System</h1>
        <p className="subtitle">Displaying {data.length} records</p>
      </header>

      <main className="App-main">
        <div className="controls">
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <Filter
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />
          <div className="sort-control">
            <label htmlFor="sort-order">Sort by Name:</label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={() => handleSortToggle()}
              className="sort-select"
            >
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </select>
          </div>
        </div>

        <Table data={paginatedData} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </main>
    </div>
  );
}

export default App;
