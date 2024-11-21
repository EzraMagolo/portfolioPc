import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import axios from 'axios';

const ResearchCardContainer = styled.div`
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 16px;
  transition: box-shadow 0.3s;
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
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await axios.get('/api/research');
        setResearchData(response.data);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    };
    fetchResearchData();
  }, []);

  return (
    <>
      {researchData.map((item) => (
        <ResearchCardContainer key={item._id}>
          <ResearchImage>
            <Image src={item.image} width={760} height={760} alt={`Research ${item.title}`} />
          </ResearchImage>
          <ResearchDetails>
            <Typography component="h2" variant="h5" style={{ marginBottom: '16px', fontSize: '1.2rem' }}>
              {item.title}
            </Typography>
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
