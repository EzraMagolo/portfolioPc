import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import axios from 'axios';

const ResearchCardContainer = styled.div`
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 16px;
  transition: box-shadow 0.3s;
  width: 100%;
  max-width: 360px; /* Adjust card width */
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ResearchImage = styled.div`
  line-height: 0;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const ResearchDetails = styled.div`
  margin-bottom: 16px;
`;

const ResearchCard = () => {
  const [researchData, setResearchData] = useState([]); // To store fetched research data

  useEffect(() => {
    // Fetch research data from backend
    const fetchResearchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/research'); // API endpoint to fetch research data
        setResearchData(response.data); // Set the data into state
      } catch (error) {
        console.error('Error fetching research data:', error); // Handle errors
      }
    };

    fetchResearchData();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <>
      {researchData.map((item) => (
        <ResearchCardContainer key={item._id}>
          <ResearchImage>
            {/* Use img tag to display the research image */}
            <img src={item.cover} width={760} height={760} alt={`Research on ${item.title}`} />
          </ResearchImage>
          <ResearchDetails>
            {/* Display title */}
            <Typography component="h2" variant="h5" style={{ marginBottom: '16px', fontSize: '1.2rem' }}>
              {item.title}
            </Typography>
            {/* Display description */}
            <Typography variant="body1" style={{ color: '#4F4F4F' }}>
              {item.description}
            </Typography>
          </ResearchDetails>
          <IconButton color="primary">
            <ArrowForward />
          </IconButton>
        </ResearchCardContainer>
      ))}
    </>
  );
};

export default ResearchCard;

