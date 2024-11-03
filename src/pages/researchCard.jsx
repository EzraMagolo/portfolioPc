import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';

// Sample Research Data Interface
const ResearchCardContainer = styled.div`
    padding: 16px;
    background-color: #FFFFFF; /* Use white directly or theme */
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

const ResearchCardItem = ({ item }) => {
    return (
        <ResearchCardContainer>
            <ResearchImage>
                <Image src={item.image} width={760} height={760} alt={`Research ${item.id}`} />
            </ResearchImage>
            <ResearchDetails>
                <Typography component="h2" variant="h5" style={{ marginBottom: '16px', height: '56px', overflow: 'hidden', fontSize: '1.2rem' }}>
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
    );
};

export default ResearchCardItem;

