import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  max-width: 200px;
`;

const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PublicationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PublicationItem = styled.li`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [filter, setFilter] = useState({
    year: '',
    topic: '',
    searchTerm: '',
  });

  useEffect(() => {
    fetchPublications();
  }, [filter]);

  const fetchPublications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/publications', {
        params: { ...filter },
      });
      setPublications(response.data);
    } catch (error) {
      console.error('Failed to fetch publications', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <FiltersWrapper>
        <FilterInput
          type="text"
          name="searchTerm"
          placeholder="Search by title or keyword"
          value={filter.searchTerm}
          onChange={handleFilterChange}
        />
        <FilterSelect
          name="year"
          value={filter.year}
          onChange={handleFilterChange}
        >
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </FilterSelect>
        <FilterInput
          type="text"
          name="topic"
          placeholder="Filter by topic"
          value={filter.topic}
          onChange={handleFilterChange}
        />
      </FiltersWrapper>

      <PublicationList>
        {publications.map((pub, index) => (
          <PublicationItem key={index}>
            <h3>{pub.title}</h3>
            <p>{pub.author}</p>
            <p>{pub.year}</p>
            <p>{pub.topic}</p>
          </PublicationItem>
        ))}
      </PublicationList>
    </Container>
  );
};

export default Publications;


