import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import axios from 'axios';

// Styled Components
const CourseGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  
`;

const CourseCardContainer = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  transition: box-shadow 0.3s;
  width: 100%;
  max-width: 360px; /* Adjust card width */
  margin-top: 20px; /* Add margin at the top to create space */
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    .MuiIconButton-root {
      background-color: #003366;
      color: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const CourseImage = styled.div`
  line-height: 0;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const CourseDetails = styled.div`
  margin-bottom: 16px;
`;

const CoursePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CourseOfferings = () => {
  const [courses, setCourses] = useState([]); // State to hold course data
  const [loading, setLoading] = useState(true); // State to track loading state

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/courses') // Make the API call to fetch courses
      .then(response => {
        setCourses(response.data); // Update the state with the fetched courses
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <CourseGrid>
      {courses.map(item => (
        <CourseCardContainer key={item._id}>
          <CourseImage>
            <img src={item.cover} width={760} height={760} alt={'Course ' + item._id} />
          </CourseImage>
          <CourseDetails>
            <Typography component="h2" variant="h5" style={{ marginBottom: '16px', height: '56px', overflow: 'hidden', fontSize: '1.2rem' }}>
              {item.title}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Rating name="rating-course" value={item.rating} max={5} style={{ color: '#ffce31', marginRight: '8px' }} readOnly />
              <Typography component="span" variant="h5">
                ({item.ratingCount})
              </Typography>
            </div>
          </CourseDetails>
          <CoursePrice>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" color="primary.main">
                {'$' + item.price}
              </Typography>
              <Typography variant="h6">/ course</Typography>
            </div>
            <IconButton color="primary">
              <ArrowForward />
            </IconButton>
          </CoursePrice>
        </CourseCardContainer>
      ))}
    </CourseGrid>
  );
};

export default CourseOfferings;


