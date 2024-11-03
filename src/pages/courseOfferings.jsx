import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';

// Sample Course Data
const courses = [
  {
    id: 1,
    title: 'Course Title 1',
    cover: '/path/to/image1.jpg',
    rating: 4.5,
    ratingCount: 120,
    price: 99,
  },
  {
    id: 2,
    title: 'Course Title 2',
    cover: '/path/to/image2.jpg',
    rating: 4.0,
    ratingCount: 80,
    price: 79,
  },
  // Add more courses as needed
];

// Styled Components
const CourseCardContainer = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  transition: box-shadow 0.3s;
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
  return (
    <div>
      {courses.map(item => (
        <CourseCardContainer key={item.id}>
          <CourseImage>
            <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
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
    </div>
  );
};

export default CourseOfferings;

